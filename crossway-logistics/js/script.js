let header = document.querySelector(".header"),
  burger = document.querySelector(".header__burger"),
  wrapper = document.querySelector(".wrapper"),
  navItem = document.querySelectorAll(".menu-items > li"),
  page = document.querySelector("main.page");

if (burger) {
  let delay = 500;
  let headerNav = document.querySelector(".header__nav");
  let bodyHide = document.querySelector("body");
  burger.addEventListener("click", function (e) {
    burger.classList.toggle("_active");
    headerNav.classList.toggle("_active");
    bodyHide.classList.toggle("_lock");
    header.classList.toggle("_active");
  });
}

if (navItem) {
  navItem.forEach((el) => {
    el.addEventListener("click", menu_close);
  });
}

function menu_close() {
  let burger = document.querySelector(".header__burger");
  let headerNav = document.querySelector(".header__nav");
  let bodyHide = document.querySelector("body");
  burger.classList.remove("_active");
  headerNav.classList.remove("_active");
  bodyHide.classList.remove("_lock");
  header.classList.remove("_active");
}

wrapper.addEventListener("scroll", () => {
  let pageTop = page.getBoundingClientRect().top;
  if (pageTop < 0) {
    header.style.backgroundColor = "#fff";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

$(document).ready(function () {
  if ($(".slider__slick").length) {
    $(".slider__slick").slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: "ease",
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      appendDots: $(".slider__dots"),
    });
  }
});

const initAnimatedCounts = () => {
  const ease = (n) => {
    return --n * n * n + 1;
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        const countToString = entry.target.getAttribute("data-countTo");
        const countTo = parseFloat(countToString);
        const duration = parseFloat(
          entry.target.getAttribute("data-animateDuration")
        );
        const countToParts = countToString.split(".");
        const precision =
          countToParts.length === 2 ? countToParts[1].length : 0;
        const startTime = performance.now();
        const step = (currentTime) => {
          const progress = Math.min(
            ease((currentTime - startTime) / duration),
            1
          );
          entry.target.textContent = (progress * countTo).toFixed(precision);
          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(animationFrame);
          }
        };
        let animationFrame = window.requestAnimationFrame(step);
      }
    });
  });
  document.querySelectorAll("[data-animateDuration]").forEach((target) => {
    target.setAttribute("data-countTo", target.textContent);
    target.textContent = "0";
    observer.observe(target);
  });
};
initAnimatedCounts();

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

$(document).ready(function () {
  $(".youtube").magnificPopup({
    type: "iframe",
    midClick: true,
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
