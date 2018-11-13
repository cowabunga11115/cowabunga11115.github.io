$(document).ready(function () {
    $('.scroll_window').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});

$(".subtitle.work").on("click", function(e){ 
    console.log("Clicked a creative category");
    e.preventDefault(); // cancel the click
    var allSubtitles = $(".subtitle.work");
    var i;
    for (i = 0; i < allSubtitles.length; i++) {
        allSubtitles[i].style.fontWeight = 300;
    }
    console.log(this.id);
    this.style.fontWeight = 600;
    $(".scroll").load("creative/" + this.id + ".html"); 
  });