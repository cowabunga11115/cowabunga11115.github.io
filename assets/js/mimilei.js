// Constants ===================================================================
const album_storment = "Depression visualization";
const album_lumos = "Hospital ambiance controller";
const album_cocoon = "Noise pollution awareness for expectant mothers";

// Keeps track of the current icon type associated with title
// If null, the user is on mobile, or there is no icon associated.
var curr_icon;

// MAIN ======================================================================
adjustTitleStyle();
maybeShowPjAlbumArt();
window.addEventListener('resize', adjustTitleStyle);
window.addEventListener('resize', maybeShowPjAlbumArt);

// JQUERY ======================================================================
// $(".subtitle.work").on("click", function(e){
//     console.log("Clicked a creative category");
//     $(".scroll").load("creative/" + this.id + ".html");
//     console.log("after loading call");
//     e.preventDefault(); // cancel the click
//     var allSubtitles = $(".subtitle.work");
//     var i;
//     for (i = 0; i < allSubtitles.length; i++) {
//         allSubtitles[i].style.fontWeight = 300;
//     }
//     console.log(this.id);
//     this.style.fontWeight = 600;
//     window.setTimeout(function() {
//         $(".scroll_window").mCustomScrollbar("destroy");
//         $(".scroll_window").mCustomScrollbar({
//             axis:"x", // horizontal scrollbar
//             scrollInertia: 5,
//             advanced:{ updateOnContentResize: true },
//             advanced:{ updateOnSelectorChange: "img.u-max-full-width" },
//             advanced:{ updateOnImageLoad: true },
//             callbacks:{
//                 onUpdate:function(){
//                     console.log("Scrollbars updated");
//                 }
//             },
//         });
//     }, 2000);
//   });

// $(window).on("wheel", function(e){
//     var $div = $('.content');
//     // set div scroll top offset to current + extra from this scroll
//     $div.scrollTop($div.scrollTop()
//                     - e.originalEvent.wheelDelta);

//     return false; // prevent body scrolling
// });

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
    if (window.innerWidth > 600) {
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
  var pj = document.querySelector(".pj_name h2:hover");
  var frame = document.querySelector(".pj_album_art");
  if (pj !== null) {
    console.log("text: " + pj.innerText);
    var pj_name = pj.innerText.toLowerCase();
    var img_path = "assets/img/pj_album_art/" + pj_name + ".png";
    frame.style.backgroundImage = "url('" + img_path + "')";
    console.log(frame.style.backgroundImage);
    console.log(frame.style.visibility);

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
  var projects = document.querySelectorAll(".row.pj_title");
  projects.forEach(function(pj) {
    var mini_art = document.createElement('div');
    mini_art.classList.add('pj_album_art_mini');
    pj.parentNode.insertBefore(mini_art, pj);
    var pj_name = pj.innerText.toLowerCase();
    var img_path = "assets/img/pj_album_art/" + pj_name + ".png";
    mini_art.style.backgroundImage = "url('" + img_path + "')";
  });
}

function maybeShowPjAlbumArt() {
  if (window.outerWidth >= 600) {
    const projects = document.querySelectorAll(".pj_name h2");
    projects.forEach(function(pj) {
      pj.addEventListener('mouseenter', showPjAlbumArt);
      pj.addEventListener('mouseleave', cleanAlbumArt);
      console.log("Added mouseover listener to pj " + pj.innerText);
    });
  } else {
    var pj_headers = document.querySelectorAll(".pj_name h2");
    pj_headers.forEach(function(pj) {
      pj.removeEventListener('mouseenter', showPjAlbumArt);
      pj.removeEventListener('mouseleave', cleanAlbumArt);
    });
    var mini_album_art = document.querySelectorAll(".pj_album_art_mini");
    if (mini_album_art.length === 0) {
      showMiniAlbumArt();
    }
  }
}
