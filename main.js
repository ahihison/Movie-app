const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 360);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 350
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.sidebar,.navbar-container,.left-menu-icon,.toggle,.menu-mobile-item,.menu-option,.logo"
);
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

const bar = document.querySelector(".menu-bars");
const menu = document.querySelector(".menu-option");
const close = document.querySelector(".btn-close");
const body = document.querySelector(".container");
if (bar) {
  bar.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
  });
}
if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("active-menu");
  });
}
if (body) {
  body.addEventListener("click", () => {
    menu.classList.remove("active-menu");
  });
}
