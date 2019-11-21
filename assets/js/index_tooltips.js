if( !window.localStorage) {
  // no localStorage (old browser) - either fall back to cookie method,
  // or just do nothing and skip the whole tour thing - if the user
  // can't be bothered to upgrade, why should you bother to accomodate them?
}
else {
  if( !window.localStorage.isReturningVisitor) {
      // do all the tour stuff here
      var nav_items = document.querySelectorAll(".nav_item");
      nav_items[1].classList.add("tooltip");
      nav_items[1].onmouseenter = function(event) {
        event.target.classList.remove("tooltip");
      };
      document.querySelector("#nav_buttons").onmouseenter = function(event) {
        nav_items[1].classList.remove("tooltip");
      }
      window.localStorage.isReturningVisitor = true;
  }
}

// var all_categories;
// var i = 1;
// var framesPerSecond = .2;
// var timer;
// function animate() {
//     all_categories = document.querySelectorAll(".nav_item .nav_label");
//     timer = setTimeout(function() {
//         window.requestAnimationFrame(animate);

//         // animating/drawing code goes here
//         const showLabels = () => {
//           // all_categories[i].style.opacity = 1;
//           all_categories[i].focus();
//           // if (i > 0) {
//           //   all_categories[i - 1].style.opacity = 0;
//           // }
//           i += 1;
//           if (i < all_categories.length) {
//             window.requestAnimationFrame(showLabels);
//           } else {
//             // all_categories[i-1].style.opacity = 0;
//             clearTimeout(timer);
//           }
//         };
//         showLabels();
//         // window.requestAnimationFrame(function() {
//         //   all_categories[i-1].style.opacity = 0;
//         // });
//     }, 1000 / framesPerSecond);
// }

// animate();
