// Constants ===================================================================
const album_storment = "Depression visualization";
const album_lumos = "Hospital ambiance controller";
const album_cocoon = "Noise pollution awareness for expecting mothers";

// MAIN ======================================================================
$( document ).ready(function() {
  console.log( "ready!" );
  adjustTitleStyle();
  maybeShowPjAlbumArt();
});
window.addEventListener('resize', adjustTitleStyle);
window.addEventListener('resize', maybeShowPjAlbumArt);

document.addEventListener('touchstart', function(){}, {passive: false})

// JQUERY ======================================================================
$(".subtitle.work").on("click", function(e){
    console.log("Clicked a creative category");
    $(".scroll").load("creative/" + this.id + ".html");
    console.log("after loading call");
    e.preventDefault(); // cancel the click
    var allSubtitles = $(".subtitle.work");
    var i;
    for (i = 0; i < allSubtitles.length; i++) {
        allSubtitles[i].style.fontWeight = 300;
    }
    console.log(this.id);
    this.style.fontWeight = 600;
    window.setTimeout(function() {
        $(".scroll_window").mCustomScrollbar("destroy");
        $(".scroll_window").mCustomScrollbar({
            axis:"x", // horizontal scrollbar
            scrollInertia: 5,
            advanced:{ updateOnContentResize: true },
            advanced:{ updateOnSelectorChange: "img.u-max-full-width" },
            advanced:{ updateOnImageLoad: true },
            callbacks:{
                onUpdate:function(){
                    console.log("Scrollbars updated");
                }
            },
        });
    }, 2000);
  });

$(window).on("wheel", function(e){
    var $div = $('.content');
    // set div scroll top offset to current + extra from this scroll
    $div.scrollTop($div.scrollTop()
                    - e.originalEvent.wheelDelta);

    return false; // prevent body scrolling
});

// FUNCTIONS ===================================================================
function adjustTitleStyle() {
  var title = $(".title h1");
  if (title.length) {
    if ($(document).width() > 600) {
      title.addClass('label');
      title.removeClass('fancy');
    } else {
      title.removeClass('label');
      title.addClass('fancy');
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

function maybeShowPjAlbumArt() {
  if (window.outerWidth >= 600) {
    const projects = document.querySelectorAll(".pj_name h2");
    projects.forEach(function(pj) {
      pj.addEventListener('mouseenter', showPjAlbumArt);
      pj.addEventListener('mouseleave', cleanAlbumArt);
      console.log("Added mouseover listener to pj " + pj.innerText);
    });
  }
}
