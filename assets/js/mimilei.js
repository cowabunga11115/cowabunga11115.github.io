// $(document).ready(function () {
//     $('.scroll_window').mousewheel(function(e, delta) {
//         this.scrollLeft -= (delta * 40);
//         e.preventDefault();
//     });
// });

$(".subtitle.work").on("click", function(e){ 
    console.log("Clicked a creative category");
    $(".scroll").load("creative/" + this.id + ".html"); 
    e.preventDefault(); // cancel the click
    var allSubtitles = $(".subtitle.work");
    var i;
    for (i = 0; i < allSubtitles.length; i++) {
        allSubtitles[i].style.fontWeight = 300;
    }
    console.log(this.id);
    this.style.fontWeight = 600;
  });

$(window).on("wheel", function(e){
    var $div = $('.content');
    // set div scroll top offset to current + extra from this scroll
    $div.scrollTop($div.scrollTop() 
                    - e.originalEvent.wheelDelta);

    return false; // prevent body scrolling
});