const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});
window.addEventListener("scroll", () => {
  let content = document.querySelector(".what-we-do__about");
  let threeBox = document.querySelector(
    ".what-we-do__about__three-box__left__in-div"
  );
  let contentPosition = threeBox.getBoundingClientRect().bottom;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    //   alert("hey")
    content.classList.add("active");
  }
});

const tabs = document.querySelectorAll(".footer-nav a");
const contents = document.querySelectorAll(
  ".footer__first__r-side__contacts ul"
);
// console.log(orange);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("show_me");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents[index].classList.add("show_me");
    tabs[index].classList.add("active");
  });
});

// $(document)
//   .on("mouseover", ".products_round a", function (e) {
//     var _this = $(this),
//       _this_index = _this.parent().index();
//     $(".products_round p").eq(_this_index).addClass("show_me");
//     $(".products_round a").addClass("opa_me");
//     _this.removeClass("opa_me");
//     setTimeout(function () {
//       $(".info_center").addClass("showed");
//     }, 1);
//   })
//   .on("mouseleave", ".products_round a", function (e) {
//     $(".products_round p").removeClass("show_me");
//     $(".products_round a").removeClass("opa_me");
//     setTimeout(function () {
//       $(".info_center").removeClass("showed");
//     }, 1);
//   });

// $(window).scroll(function () {
//   if ($(".products_round").length) {
//     var top_pos = document.documentElement.scrollTop || document.body.scrollTop;
//     if (top_pos > $(".index_products").offset().top - 200) {
//       $(".products_round").addClass("show_me");
//     }
//   }
// });

// var tl = new TimelineMax({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// const listItems = document.querySelectorAll(
//   ".header__container__nav__list__list-item"
// );
// const logo1 = document.querySelector("#logo-1");
// const logo2 = document.querySelector("#logo-2");
// let sticky = header.offsetTop;

// logo2.style.display = "none";
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset - 140 > sticky) {
//     header.classList.add("onscroll");
//     listItems.style.color = "black";
//     logo1.style.display = "none";
//     logo2.style.display = "block";
//   } else {
//     header.classList.remove("onscroll");
//     listItems.style.color = "#eee";
//     logo1.style.display = "block";
//     logo2.style.display = "none";
//   }
// });
