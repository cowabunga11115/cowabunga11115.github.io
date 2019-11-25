// Constants ===================================================================
const album_storment = "Depression visualization";
const album_lumos = "Hospital ambiance controller";
const album_cocoon = "Noise pollution awareness for expectant mothers";
const album_braillekey = "Chorded text input device for braille";
const album_linc = "Live Interactive Numeric Control (LINC) Fabrication Tool";
const album_compphoto = "Implementation of computational photography algorithms from papers";
const album_wallsynth = "Magnetic wall synthesizer based on fiducial markers";
const album_hybridwatches = "";
const album_uberick = "Blood, sweat, tears...anything to ensure your comfort in transit!";
const album_icecannon = "A game controller that takes itself literally";
const album_innod = "Pro bono logos and visual assets from my time with InnoD@Berkeley";
const album_tokiha = "Branding and visual design for a Japanese summer camp";
const album_wise = "Branding for UC Berkeley's WiSE theme program";

const desktop_threshold = 600;

// Keeps track of the current icon type associated with title
// If null, the user is on mobile, or there is no icon associated.
var curr_icon;

// MAIN ======================================================================
adjustTitleStyle();
maybeShowPjAlbumArt();
maybeAddNumbering();
window.addEventListener('resize', adjustTitleStyle);
window.addEventListener('resize', maybeShowPjAlbumArt);
window.addEventListener('resize', maybeAddNumbering);

// FUNCTIONS ===================================================================
function setTitleIcon() {
  var icon = document.querySelector(".category .title .title_icon");
  var title = document.querySelector(".title h1").innerText;
  switch (title) {
    case "wellbeing":
      curr_icon = "heart";
      icon.classList.add(curr_icon);
      break;
    default:
      // nothing
  }
}

function maybeRemoveTitleIcon() {
  var icon = document.querySelector(".category .title .title_icon");
  if (curr_icon != null) {
    icon.classList.remove(curr_icon);
    curr_icon = null;
  }
}

function adjustTitleStyle() {
  console.log("AdjustTitleStyle");
  var title_h1 = document.querySelector(".category .title h1");
  var title = document.querySelector(".category .title");

  if (title_h1.innerText.length > 0) {
    console.log("title length > 0");
    if (window.innerWidth > desktop_threshold) {
      title.classList.add("label");
      if (title.classList.contains('fancy')) {
        title.classList.remove('fancy');
        title_h1.classList.remove('fancy');
      }
      setTitleIcon();
    } else {
      title_h1.classList.add('fancy');
      title.classList.add('fancy');
      title.classList.remove('label');
      maybeRemoveTitleIcon();
    }
  }
}

function showPjAlbumArt() {
  console.log("in showPjAlbumArt");
  var pj = document.querySelector(".pj_title:hover .pj_name h2");
  var frame = document.querySelector(".pj_album_art");
  if (pj !== null) {
    console.log("text: " + pj.innerText);
    var pj_name = pj.innerText.toLowerCase();
    pj_name = pj_name.replace(/\s+/g, '');
    var img_path = "assets/img/pj_album_art/" + pj_name + ".webp";
    frame.style.backgroundImage = "url('" + img_path + "')";

    var pj_desc = document.querySelector(".pj_album_desc");
    var desc_text;
    switch (pj_name) {
      case "storment":
        desc_text = album_storment;
        break;
      case "lumos":
        desc_text = album_lumos;
        break;
      case "cocoon":
        desc_text = album_cocoon;
        break;
      case "braillekey":
        desc_text = album_braillekey;
        break;
      case "linc":
          desc_text = album_linc;
          break;
      case "compphoto":
          desc_text = album_compphoto;
          break;
      case "wallsynth":
          desc_text = album_wallsynth;
          break;
      case "hybridwatches":
          desc_text = album_hybridwatches;
          break;
      case "uberick":
          desc_text = album_uberick;
          break;
      case "icecannon":
          desc_text = album_icecannon;
          break;
      case "innod":
          desc_text = album_innod;
          break;
      case "tokiha":
          desc_text = album_tokiha;
          break;
      case "wise":
          desc_text = album_wise;
          break;
      default:
        // nothing
    }
    if (desc_text.length != null) {
      pj_desc.innerText = desc_text;
    }
  }
}

function cleanAlbumArt() {
  var frame = document.querySelector(".pj_album_art");
  frame.style.backgroundImage = "";
  document.querySelector(".pj_album_desc").innerText = "";
}

function showMiniAlbumArt() {
  console.log("showing mini art");
  if (document.querySelectorAll(".pj_album_art_mini").length === 0) {
    var projects = document.querySelectorAll("a .row.pj_title");
    projects.forEach(function(pj) {
      var pj_page_url = pj.parentNode.href;

      var mini_art = document.createElement('div');
      mini_art.classList.add('pj_album_art_mini');
      // pj.parentNode.insertBefore(mini_art, pj);
      var pj_name = pj.querySelector("h2").innerText.toLowerCase();
      var img_path = "assets/img/pj_album_art/" + pj_name + ".jpg";
      mini_art.style.backgroundImage = "url('" + img_path + "')";

      var link = document.createElement('a');
      link.href = pj_page_url;
      link.appendChild(mini_art);
      pj.parentNode.insertBefore(link, pj);
    });
  }
}

function maybeShowPjAlbumArt() {
  if (window.outerWidth >= desktop_threshold) {
    const projects = document.querySelectorAll(".pj_title");
    projects.forEach(function(pj) {
      pj.addEventListener('mouseenter', showPjAlbumArt);
      pj.addEventListener('mouseleave', cleanAlbumArt);
      console.log("Added mouseover listener to pj " + pj.innerText);
    });
  } else {
    var pj_headers = document.querySelectorAll(".pj_title");
    pj_headers.forEach(function(pj) {
      pj.removeEventListener('mouseenter', showPjAlbumArt);
      pj.removeEventListener('mouseleave', cleanAlbumArt);
    });
    console.log("Removed mouseenter/leave listeners bc mobile view on");
    var mini_album_art = document.querySelectorAll(".pj_album_art_mini");
    if (mini_album_art.length === 0) {
      showMiniAlbumArt();
    }
  }
}

function maybeAddNumbering() {
  if (window.outerWidth >= desktop_threshold) {
    var numbers = document.querySelectorAll(".pj_name h6");
    if (numbers.length === 0) {
      var pj_titles = document.querySelectorAll(".pj_name h2");
      var count = 1;
      pj_titles.forEach(function(title) {
        var num_text = document.createElement('h6');
        num_text.innerText = "0" + count;
        title.parentNode.insertBefore(num_text, title);
        count += 1;
      });
    }
  } else {
    var numbers = document.querySelectorAll(".pj_name h6");
    if (numbers.length > 0) {
      numbers.forEach(function (num_text) {
        num_text.parentNode.removeChild(num_text);
      });
    }
  }
}
