import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

window.onscroll = function () {
  scrollFunction();
};

document.addEventListener("mousemove", (e) => {
  const pre = document.querySelectorAll(".lang-logos");

  pre.forEach((element) => {
    movelangs(e, element);
  });
});

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#000";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgb(20, 23, 28)";
  }
}

function movelangs(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 15;
  const offsetY = ((y - middleY) / middleY) * 15;

  element.style.setProperty("--Leftmovement", offsetX + "px");
  element.style.setProperty("--topmovement", offsetY + "px");
}

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

// document.getElementById("information").animate(
//   {
//     height: ["100%", "0%"],
//   },
//   {
//     duration: 1,
//     timeline: scrollTrackingTimeline,
//   }
// );

// document.querySelectorAll(".lang-logos").forEach((logo) => {
//   logo.animate(
//     {
//       opacity: ["1", "0"],
//     },
//     {
//       duration: 1,
//       timeline: scrollTrackingTimeline,
//     }
//   );
// });

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("fa-bars");
  document.getElementById("hamburger").classList.toggle("fa-xmark");
  document.querySelectorAll(".nav-list")[0].classList.toggle("nav-closed");
});
