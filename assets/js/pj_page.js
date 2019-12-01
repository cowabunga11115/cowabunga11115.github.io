window.addEventListener('wheel', scrollFromEverywhere);

function scrollFromEverywhere(event) {
if (event.deltaY != 0) {
    var content = document.querySelector(".content");
    var new_pos = content.scrollTop + event.deltaY;
    content.scrollTop = new_pos;
}
return;
}