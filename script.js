// 1. Variables
// 2. Light / Dark theme button toggler
// 3. Nav links
// 4. Scroll to top  button
// 5. Modal popup

// =====================================

// 1. Variables

const body = document.querySelector("body");
const lightDarkToggle = document.querySelector(".light-dark-toggle ");

// 2.Light / Dark theme button toggler

let light = false;
lightDarkToggle.addEventListener("click", (x) => {
  body.classList.toggle("light-theme");

  if (light == false) {
    lightDarkToggle.innerHTML = `<i class="fas fa-moon"></i>Too bright?`;
    light = true;
    return;
  }

  if (light == true) {
    lightDarkToggle.innerHTML = `<i class="fas fa-sun"></i>Too dark?`;
    light = false;
    return;
  }
});

// 3. Nav links

const links = document.querySelectorAll(".link");
// console.log(links);

links.forEach((link) => {
  link.addEventListener("click", (x) => {
    if (link.innerHTML == "About") {
      window.location.hash = "about";
    }
    if (link.innerHTML == "Projects") {
      window.location.hash = "projects";
    }
    if (link.innerHTML == "Contact") {
      window.location.hash = "contact";
    }
  });
});

// 5. Modal popup

// // The link location on the navbar
// const modalLink = document.getElementById("modal-link");

// // The popup itself
// const modalArea = document.querySelector(".modal");

// // Close button inside of the popup
// const modalClose = document.querySelector(".fa-times");

// modalLink.addEventListener("click", () => {
//   modalArea.classList.add("modal-show");
// });

// modalClose.addEventListener("click", () => {
//   modalArea.classList.remove("modal-show");
// });

// =================================================

// 5. Hamburger menu

// const menu = document.querySelector(".menu");
const menu = document.getElementById("menu");

let timesOrBars = "bars";
menu.addEventListener("click", (x) => {
  const linksLeft = document.querySelector(".links__left");
  linksLeft.classList.toggle("show");

  if (timesOrBars === "bars") {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-times");
    timesOrBars = "times";
    return;
  }
  if (timesOrBars === "times") {
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");
    timesOrBars = "bars";
    return;
  }
});

// =============================================

// 6. Progress Bar - Scroll indicator

function scrollProgress() {
  var currentState =
    document.body.scrollTop || document.documentElement.scrollTop;
  // console.log(currentState);
  var pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // console.log(pageHeight);
  var scrollStatePercentage = (currentState / pageHeight) * 100;
  // console.log(scrollStatePercentage);
  document.querySelector(".page-scroll-indicator > .progress").style.width =
    scrollStatePercentage + "%";
}

// window.onscroll = function () {
//   scrollProgress();
// };

// =============================================

// 4. Scroll to top  button

scrollTop = document.querySelector(".scroll-top");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = () => {
  scrollProgress();

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document

scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

///============================

var typewriterText = document.getElementById("typewriter-text");

var typewriter = new Typewriter(typewriterText, {
  loop: true,
  delay: 75,
});

typewriter
  // .pauseFor(2500)
  .typeString("Web Developer")
  .pauseFor(3000)
  // .deleteAll()
  .deleteChars(9)
  .typeString("Designer")
  .pauseFor(1000)
  // .deleteChars(13)
  .deleteAll()
  .typeString("Front-End Developer")
  .pauseFor(3000)
  // .deleteChars(20)
  .deleteAll()
  // .typeString(
  //   '<span style="font-size: 3rem;">Professional curious person</span>'
  // )
  // .pauseFor(2000)

  .start();
