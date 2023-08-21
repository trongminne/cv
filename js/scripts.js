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

// Chuyển tab bằng giọng nói
let recognition;
let isRecording = false;
let isInitialOk = false;
let recordedText = ""; // Thêm lại biến recordedText

// Khởi tạo đối tượng SpeechRecognition để nhận diện giọng nói
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = true;

  // Xử lý sự kiện kết quả từ việc nhận diện giọng nói
  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    console.log("Đã nhận dạng:", transcript);

    // Xử lý khi người dùng nói 'ok' lần đầu để bắt đầu ghi âm
    if (!isRecording && transcript.toLowerCase().includes("hello")) {
      if (!isInitialOk) {
        alert("Kết nối mic thành công");
        isInitialOk = true;
      }
      console.log("Bắt đầu ghi âm");
      isRecording = true;
      recordedText = ""; // Reset giá trị recordedText
    } // Xử lý khi người dùng nói 'kết thúc' để dừng việc ghi âm
    else if (isRecording && transcript.toLowerCase().includes("kết thúc")) {
      console.log("Kết thúc ghi âm");
      isRecording = false;
      recordedText = ""; // Reset giá trị recordedText
      recognition.stop(); // Dừng việc nhận diện giọng nói
      alert("Đã kết thúc ghi âm");

    }
    // Xử lý khi đang ghi âm và người dùng nói các từ để chuyển đến liên kết tương ứng
    else if (isRecording) {
      recordedText += transcript;
      if (transcript.toLowerCase().includes("1")) {
        window.location.href = "#about";
        animateLink("#about");
      } else if (transcript.toLowerCase().includes("2")) {
        window.location.href = "#experience";
        animateLink("#experience");
      } else if (transcript.toLowerCase().includes("3")) {
        window.location.href = "#education";
        animateLink("#education");
      } else if (transcript.toLowerCase().includes("4")) {
        window.location.href = "#skills";
        animateLink("#skills");
      } else if (transcript.toLowerCase().includes("5")) {
        window.location.href = "#interests";
        animateLink("#interests");
      } else if (transcript.toLowerCase().includes("6")) {
        window.location.href = "#awards";
        animateLink("#awards");
      } else if (transcript.toLowerCase().includes("7")) {
        window.location.href =
          "https://m.facebook.com/profile.php/?id=100023433405773";
      } else if (transcript.toLowerCase().includes("8")) {
        window.location.href =
          "https://m.youtube.com/channel/UCG2AfXQ9zIggntyjNa9_z5w";
      } else if (transcript.toLowerCase().includes("9")) {
        window.location.href = "https://www.tiktok.com/@trongmin12";
      } else if (transcript.toLowerCase().includes("ai")) {
        window.location.href = "https://www.tiktok.com/@trongmin12";
      }
      // Hàm để áp dụng animation và sau đó xóa lớp "animated" sau khi hoàn thành
      function animateLink(link) {
        const linkElement = document.querySelector(link);
        linkElement.classList.add("animated");
        linkElement.addEventListener("animationend", () => {
          linkElement.classList.remove("animated");
        });
      }
    }
  };

  // Xử lý sự kiện khi đối tượng SpeechRecognition kết thúc
  recognition.onend = () => {
    if (isRecording) {
      recognition.start(); // Bắt đầu lại nhận diện sau khi kết thúc
    }
  };

  // Tự động bắt đầu nhận diện khi trang được tải
  window.onload = () => {
    recognition.start();
  };
} else {
  alert("Trình duyệt không hỗ trợ chức năng này.");
}
