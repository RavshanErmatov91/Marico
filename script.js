const header = document.querySelector("header");
const topBtn = document.querySelector(".top");

function scrollFunc() {
  if (window.scrollY >= 50) {
    header.classList.add("set");
    topBtn.classList.add("topset");
  } else {
    header.classList.remove("set");
    topBtn.classList.remove("topset");
  }
}

window.addEventListener("scroll", () => {
  scrollFunc();
});
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
