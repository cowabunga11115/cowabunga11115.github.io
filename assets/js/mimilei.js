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