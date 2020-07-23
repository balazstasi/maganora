const navBar = document.querySelector("nav");

// throttle fuggveny szukseges az animaciok szamanak kordaban tartasahoz
function throttle(fn, time) {
  // nézegethető otthon, nem annyira fontos most érteni
  // lodash függvénykönyvtár
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      return;
    }
    fn(...args);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, time);
  };
}

document.addEventListener(
  "scroll",
  throttle(() => {
    const scrolledPxs = window.scrollY;
    if (scrolledPxs > 200) {
      navBar.classList.add("navbar-scrolled");
    } else {
      navBar.classList.remove("navbar-scrolled");
    }
  }, 30)
);

const animationObserver = new IntersectionObserver((entries) => {
  // entries: azok az elemek, amiknek a viewportban való láthatósága változott
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      const element = entry.target.value;
      element.classList.add("animated");
      element.classList.add(element.getAttribute("data-scroll-animation"));
    });
});
document.querySelectorAll("[data-scroll]").forEach((elem) => {
  animationObserver.observe(elem);
});
