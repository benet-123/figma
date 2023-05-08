
const hamburger = document.querySelector(".hamburger");
const cut = document.querySelector(".cut");
const menu = document.querySelector(".sidebar");
hamburger.addEventListener("click", function () {

  menu.style.left="0"
  document.body.style.overflow="hidden";
});
cut.addEventListener("click", function () {

  menu.style.left="-73vw"
  document.body.style.overflow="auto";
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 910) {
    hamburger.classList.add("hidden");
    menu.classList.add("hidden");
  }
});

$('.client-cards').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow:3,
  slideToScroll:1,
  autoplay:true,
  autospeed:1000,
  responsive: [
    {
      breakpoint: 793,
      settings: {
        arrows:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 779,
      settings: {
        arrows:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },

    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }

    }
  ]
});