$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 0,
  nav: true,
  navText: [
    `<svg><use xlink:href="img/icons.svg#icon-chevron-thin-left"></use></svg>`,
    `<svg><use xlink:href="img/icons.svg#icon-chevron-thin-right"></use></svg>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});

const owlDots = document.querySelector(".owl-dots");
const bars = document.querySelector(".nav__bars");
// const logo =

function navigationText(parentEl) {
  const arr = ["home", "about us", "interest", "projects", "contact us"];
  const markup = arr
    .map((el) => {
      // if (el === "about us") {
      //   // logo.src =
      //   //   "https://github.com/maruf1137/mellborn/blob/main/src/img/LOGO%202.png?raw=true";
      //   // console.log("true");
      //   logo.classList.add("aboutActie");
      // } else {
      //   // logo.src =
      //   //   "https://github.com/maruf1137/mellborn/blob/main/src/img/LOGO%201.png?raw=true";
      //   // console.log("false");
      //   logo.classList.remove("aboutActie");
      // }
      return `<button role="button" class='${
        el === "home" ? "owl-dot active" : "owl-dot"
      }'>${el}</button>`;
    })
    .join("");

  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
}
navigationText(owlDots);

const openNav = () => {
  owlDots.classList.add("nav-active");
};
const closeNav = () => {
  owlDots.classList.remove("nav-active");
};

const toggleActive = () => {
  // bars.classList.toggle("active");
  if (bars.classList.contains("active")) {
    bars.classList.remove("active");
  } else {
    bars.classList.add("active");
  }
};

function mblNav() {
  if (bars.classList.contains("active")) {
    openNav();
  } else {
    closeNav();
  }
}

const owlDot = document.querySelectorAll(".owl-dot");
owlDot.forEach((el) => {
  el.addEventListener("click", () => {
    closeNav();
    toggleActive();
  });
});

bars.addEventListener("click", () => {
  toggleActive();
  mblNav();
});

// const body = document.querySelector(".about").closest("logo");
let owl = $(".owl-carousel");
owl.owlCarousel();
owl.on("changed.owl.carousel", function (event) {
  // console.log(event.page.index);
  const logo1 = document.getElementById("logo-1");
  const logo2 = document.getElementById("logo-2");

  if (event.page.index === 1) {
    console.log(logo1);
    console.log(logo2);
    logo1.style.display = "none";
    logo2.style.display = "block";
  } else {
    console.log("false");
    logo1.style.display = "block";
    logo2.style.display = "none";
  }
});
