function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("html").classList.add("_webp");
  } else {
    document.querySelector("html").classList.add("_no-webp");
  }
});

const burger = document.querySelector(".header__burger");
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

function menu_close() {
  let iconMenu = document.querySelector(".header__burger");
  let menuBody = document.querySelector(".header__nav");
  let bodyHide = document.querySelector("body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  bodyHide.classList.remove("_lock");
  header.classList.remove("_active");
}

const header = document.querySelector(".header");

let lastScrollTop = 0;

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 0) {
    header.style.top = "-138px";
  } else {
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

$(document).ready(function () {
  if ($(".slider").length) {
    $(".slider").slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1000,
      easing: "ease",
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      touchThreshold: 10,
      waitForAnimate: false,
      centerMode: false,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".slider-reviews").length) {
    $(".slider-reviews").slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      easing: "ease",
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      touchThreshold: 10,
      waitForAnimate: false,
      centerMode: false,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(function () {
  $("a").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("active");
      $(this).parents("li").addClass("active");
    }
  });
});

//modals

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
  $(".wiki-main__accordion-title").click(function (event) {
    if ($(".wiki-main__accordion").hasClass("one")) {
      $(".wiki-main__accordion-title").not($(this)).removeClass("active");
      $("wiki-main__accordion-description").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(".flowing-scroll").on("click", function () {
  let el = $(this);
  let dest = el.attr("href");
  if (dest !== undefined && dest !== "") {
    $("html").animate(
      {
        scrollTop: $(dest).offset().top,
      },
      1000
    );
  }
  return false;
});

$(document).ready(function () {
  $(".video").magnificPopup({
    type: "iframe",
    midClick: true,
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

let preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  preloader.style.display = "none";
});
