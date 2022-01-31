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

function navigationText(parentEl) {
  const arr = ["home", "about us", "portfolio", "partner", "contact us"];
  const markup = arr
    .map((el) => {
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
  if(bars.classList.contains('active')){
    bars.classList.remove("active");
  }else{
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
