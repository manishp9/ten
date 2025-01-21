$(document).ready(function () {
  new WOW().init();
});

$(".toggle-btn").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("slip");
  $(".navbar-list-main-box").slideToggle();
});
$("#currentYear").text(new Date().getFullYear());

// $(document).ready(function () {
//   function toggleDropdownAnimation($dropdownMenu, action) {
//     if ($(window).width() <= 1023) {
//       action === "show"
//         ? $dropdownMenu.stop(true, true).slideDown()
//         : $dropdownMenu.stop(true, true).slideUp();
//     } else {
//       action === "show"
//         ? $dropdownMenu.stop(true, true).fadeIn()
//         : $dropdownMenu.stop(true, true).fadeOut();
//     }
//   }

//   $(".dropdown-toggle").on("click", function (e) {
//     e.preventDefault();
//     var $parentLi = $(this).closest(".dropdown-box");
//     var $dropdownMenu = $parentLi.find(".dropdown-menu");
//     var $arrow = $parentLi.find(".dropdown-arrow");

//     // Close other dropdowns
//     $(".dropdown-box")
//       .not($parentLi)
//       .removeClass("active")
//       .find(".dropdown-menu")
//       .each(function () {
//         toggleDropdownAnimation($(this), "hide");
//       });
//     $(".dropdown-box")
//       .not($parentLi)
//       .find(".dropdown-arrow")
//       .removeClass("rotated");

//     // Toggle current dropdown
//     $parentLi.toggleClass("active");
//     if ($parentLi.hasClass("active")) {
//       toggleDropdownAnimation($dropdownMenu, "show");
//       $arrow.addClass("rotated");
//     } else {
//       toggleDropdownAnimation($dropdownMenu, "hide");
//       $arrow.removeClass("rotated");
//     }
//   });

//   // Close dropdown if clicking outside
//   $(document).on("click", function (e) {
//     if (!$(e.target).closest(".dropdown-box").length) {
//       $(".dropdown-box")
//         .removeClass("active")
//         .find(".dropdown-menu")
//         .each(function () {
//           toggleDropdownAnimation($(this), "hide");
//         });
//       $(".dropdown-arrow").removeClass("rotated");
//     }
//   });
// });
