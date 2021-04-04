const body = document.querySelector("body");
const lightDarkToggle = document.querySelector(".light-dark-toggle ");

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

const links = document.querySelectorAll(".links");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", (x) => {
    // const contact = document.querySelector("contact");

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

//=== >Scroll to top  button ========

//Get the button:
scrollTop = document.querySelector(".scroll-top");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = () => {
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

// check this out to toggle animations
// https://www.youtube.com/watch?v=C_JKlr4WKKs

// better tutorial
// https://www.youtube.com/watch?v=uzRsENVD3W8
