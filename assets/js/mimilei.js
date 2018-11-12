$(document).ready(function () {
    $('.scroll_window').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});