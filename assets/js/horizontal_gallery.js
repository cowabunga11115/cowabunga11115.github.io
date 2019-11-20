console.log("Horizontal gallery");
var old_category = document.querySelector("#personal_works"); // Tracks which category title to bold
var creative_menu = document.querySelectorAll(".subtitle.work");
creative_menu.forEach(function(item) {
  item.addEventListener("click", onCategoryClicked);
});

// Default
document.querySelector("#personal_works").style.fontWeight = 600;
loadContent('creative/personal_works.html');

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

function loadContent(str_url) {
  console.log("Loading content from " + str_url);
  var html = new XMLHttpRequest();
  html.open('GET', str_url, true);
  html.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.querySelector(".scroll_window .scroll").innerHTML= this.responseText;
      var scroll_window = document.querySelector(".scroll_window");
      scroll_window.scrollInertia = 5;
      var scroll_amt = 10;
      const scrollToStart = () => {
        const left_pos = scroll_window.scrollLeft;
        if (left_pos > 0) {
          scroll_window.scrollLeft = left_pos - scroll_amt;
          scroll_amt *= 2;
          window.requestAnimationFrame(scrollToStart);
        }
      };
      scrollToStart();
  };
  html.send();
}

function onCategoryClicked(event) {
  console.log("Clicked a creative category: " + event.target.id);
  event.target.style.fontWeight = 600;
  if (old_category != null && old_category != event.target) {
    old_category.style.fontWeight = 300;
  }
  old_category = event.target;
  var url = "creative/" + event.target.id + ".html";
  loadContent(url);
}
