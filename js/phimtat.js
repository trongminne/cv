/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#sideNav",
    });
  })(jQuery); // End of use strict
  
  $(document).ready(function () {
    $(document).keydown(function (event) {
      // Kiểm tra xem phím Ctrl đã được nhấn cùng lúc
  
      var targetId = "";
      // Kiểm tra phím A - Hồ sơ
      if (event.key === "1") {
        targetId = "about";
      }
      // Kiểm tra phím 2 - Kinh nghiệm
      else if (event.key === "2") {
        targetId = "experience";
      }
      // Kiểm tra phím 3 - Giáo dục
      else if (event.key === "3") {
        targetId = "education";
      }
      // Kiểm tra phím 4 - Kỹ năng
      else if (event.key === "4") {
        targetId = "skills";
      }
      // Kiểm tra phím 5 - Sở thích
      else if (event.key === "5") {
        targetId = "interests";
      }
      // Kiểm tra phím 6 - Giải thưởng
      else if (event.key === "6") {
        targetId = "awards";
      }
  
      if (targetId !== "") {
        // Cuộn đến phần tương ứng
        var target = $("#" + targetId);
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            "easeInOutExpo"
          );
        }
      }
    });
  });
  