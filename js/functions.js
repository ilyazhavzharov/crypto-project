$(".header__burger").click(function () {
  $(".menu__list").toggleClass("active");
  $(".header__button").toggleClass("active-button");
  $(".header__burger").toggleClass("header__burger-active");
  $(".burger__line-1").toggleClass("burger__line-1-active");
  $(".burger__line-2").toggleClass("burger__line-2-active");
  $(".burger__line-3").toggleClass("burger__line-3-active");
  $("body").toggleClass("menu-open");
});

$(".menu__link").click(function () {
  $(".header__button").toggleClass("active-button");
  $(".menu__list").toggleClass("active");
  $("body").toggleClass("menu-open");
  $(".header__burger").toggleClass("header__burger-active");
  $(".burger__line-1").toggleClass("burger__line-1-active");
  $(".burger__line-2").toggleClass("burger__line-2-active");
  $(".burger__line-3").toggleClass("burger__line-3-active");
});

$(".header__button").click(function () {
  $(".header__button").toggleClass("active-button");
  $(".menu__list").toggleClass("active");
  $("body").toggleClass("menu-open");
  $(".header__burger").toggleClass("header__burger-active");
  $(".burger__line-1").toggleClass("burger__line-1-active");
  $(".burger__line-2").toggleClass("burger__line-2-active");
  $(".burger__line-3").toggleClass("burger__line-3-active");
});

function copyText() {
  var text = document.getElementById("textToCopy");
  var range = document.createRange();
  range.selectNode(text);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Text copied: " + text.textContent);
}
