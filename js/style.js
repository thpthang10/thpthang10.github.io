//------------------------------------------------------------------------
// PRELOADING
//------------------------------------------------------------------------
$(window).on("load", function (event) {
  $(".wrapper")
    // .delay(4000)
    .fadeOut("slow", function () {
      $("body").removeClass("preload");
      $("#container").fadeIn("slow");
    });
});

//------------------------------------------------------------------------
// NAVIGATION - CLICK ACTIVE
//------------------------------------------------------------------------
$(function () {
  // Desktop
  $("nav li").on("click", function () {
    $("nav li").removeClass("active");
    $(this).addClass("active");
  });
  // Mobile
  $(".nav__mobile-content")
    .children()
    .on("click", function () {
      $(".nav__mobile-content").children().removeClass("active");
      $(this).addClass("active");
    });
});

//------------------------------------------------------------------------
// SCROLL TO TOP
//------------------------------------------------------------------------
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });

  $(".scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

//------------------------------------------------------------------------
// MOBILE MENU
//------------------------------------------------------------------------
$(function () {
  $(".nav__mobile").click(function () {
    $(".nav__mobile-content").toggleClass("nav__mobile-move");
    $("section").toggleClass("opacity");
    // $("nav").toggleClass("opacity")
    $("nav").animate("opacity", "0");
    $("nav .nav__mobile div:nth-child(1)").toggleClass("rotate-45");
    $("nav .nav__mobile div:nth-child(2)").toggleClass("hide");
    $("nav .nav__mobile .box").toggleClass("hide");
    $("nav .nav__mobile div:nth-child(3)").toggleClass("rotate-45-r");
  });
});

//------------------------------------------------------------------------
// HOME - CHANGE TEXT
//------------------------------------------------------------------------
const changingKeywords = document.querySelectorAll("span.home__key");
const keywordsToggle = setKeywordsToggle(changingKeywords);

function setKeywordsToggle(keywords) {
  let index = 0;
  return setInterval(() => {
    keywords[index].classList.remove("shown");
    if (++index >= keywords.length) index = 0;
    keywords[index].classList.add("shown");
  }, 2000);
}
// HOME - CLICK CONTACT BUTTON
$(".btn-learn")
  .first()
  .click(function () {
    $("html, body").animate({ scrollTop: $("#contact").offset().top }, 2000);
  });

//------------------------------------------------------------------------
// WHAT - SLIDES MOBILE
//------------------------------------------------------------------------
$(function () {
  $(".what button:nth-child(1)").click(function () {
    $(".what a.left.carousel-control").click();
  });
  $(".what button:nth-child(2)").click(function () {
    $(".what a.right.carousel-control").click();
  });
});

//------------------------------------------------------------------------
// PROJECT PAGE
// NUMBERS
//------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var numberBox = document.querySelectorAll("p.numberBox");
  var numberBox_1 = numberBox[0];
  var numberBox_2 = numberBox[1];
  var numberBox_3 = numberBox[2];
  var numberBox_4 = numberBox[3];

  var k1 = 0,
    k2 = 0,
    k3 = 0,
    k4 = 0;
  function numberAnimate(m, n, p, q) {
    setInterval(function () {
      if (k1 <= m) {
        numberBox_1.innerHTML = k1;
        k1++;
      }
    }, 19);

    setInterval(function () {
      if (k2 <= n) {
        numberBox_2.innerHTML = k2;
        k2++;
      }
    }, 19);

    setInterval(function () {
      if (k3 <= p) {
        numberBox_3.innerHTML = k3;
        k3++;
      }
    }, 19);

    setInterval(function () {
      if (k4 <= q) {
        numberBox_4.innerHTML = k4;
        k4++;
      }
    }, 19);
  }

  var status = "less-than-1750";
  window.addEventListener("scroll", function () {
    // Get height scrolled
    var x = pageYOffset;
    if (x > 1750) {
      if (status == "less-than-1750") {
        status = "more-than-1750";
        numberAnimate(50, 70, 10, 2);
      }
    } else {
      if (status == "more-than-1750") {
        numberBox_1.innerHTML = "50";
        numberBox_2.innerHTML = "70";
        numberBox_3.innerHTML = "10";
        numberBox_4.innerHTML = "2";
        status = "less-than-1750";
      }
    }
  });
});

//------------------------------------------------------------------------
// TESTIMONIAL SLIDERS
//------------------------------------------------------------------------
var auto;
function autoRun() {
  auto = setInterval(function () {
    $(".testimonials .testimonials__slides #next").click();
  }, 5000);
}
autoRun();

$(function () {
  // NEXT
  $(".testimonials .testimonials__slides .box .box-1:nth-child(2) .box-2").css({
    width: "95%",
    height: "95%",
    opacity: 1,
    transition: "0.06s",
    fontSize: "20px",
    zindex: 100,
  });
  $(".box-1:nth-child(3) .box-2").addClass("next-slide");
  $("#next").click(function () {
    $(".box-1 .box-2").css({
      width: "70%",
      height: "70%",
      opacity: 0.6,
      transition: "0.06s",
      fontSize: "1rem",
      zIndex: 1,
    });
    $(".box-1 .box-2 img").css({
      width: "70px",
      height: "70px",
    });
    $(".box-1 .box-2").removeClass("next-slide");
    $(".box-1:nth-child(2) .box-2").css({
      width: "95%",
      height: "95%",
      opacity: 1,
      transition: "0.06s",
      fontSize: "1.5rem",
      zIndex: 100,
    });
    $(".box-1:nth-child(2) .box-2 img").css({
      width: "100px",
      height: "100px",
    });
    $(".testimonials .testimonials__slides .box-1:nth-child(3) .box-2").css({
      width: "95%",
      height: "95%",
      opacity: 1,
      transition: "0.06s",
      fontSize: "1.5rem",
      zIndex: 100,
    });
    $(".box-1:nth-child(3) .box-2 img").css({
      width: "100px",
      height: "100px",
    });
    $(".box-1:nth-child(4) .box-2").addClass("next-slide");
    $(".box-0").animate({ left: "-=50%" }, 120, function () {
      $(".box-1").last().after($(".box-1").first());
      $(".box-0").css("left", "-50%");
    });
    clearTimeout(auto);
    autoRun();
  });

  // PREVIOUS
  $("#previous").click(function () {
    $(".box-1 .box-2").css({
      width: "70%",
      height: "70%",
      opacity: 0.6,
      transition: "0.15s",
      fontSize: "1rem",
      zIndex: 1,
    });
    $(".box-1 .box-2 img").css({
      width: "70px",
      height: "70px",
    });
    $(".box-1:nth-child(1) .box-2").css({
      width: "95%",
      height: "95%",
      opacity: 1,
      transition: "0.06s",
      fontSize: "1.5rem",
      zIndex: 100,
    });
    $(".box-1:nth-child(1) .box-2 img").css({
      width: "100px",
      height: "100px",
    });
    $(".box-1:nth-child(3) .box-2").css({
      opacity: 0,
    });
    $(".box-1 .box-2").removeClass("next-slide");
    $(".box-1:nth-child(2) .box-2").addClass("next-slide");
    $(".box-0").animate({ left: "+=50%" }, 120, function () {
      $(".box-1").first().before($(".box-1").last());
      $(".box-0").css("left", "-50%");
    });
    clearTimeout(auto);
    autoRun();
  });

  // Hover => stop animation
  $(".testimonials .testimonials__slides").mouseover(function () {
    clearTimeout(auto);
    autoRun();
  });
  // Hover out => start animation
  $(".testimonials .testimonials__slides").mouseout(function () {
    clearTimeout(auto);
    autoRun();
  });
  // Auto click next
  clearTimeout(auto);
  autoRun();
});

//------------------------------------------------------------------------
// TESTIMONIALS - SLIDERS MOBILE
//------------------------------------------------------------------------
$(function () {
  $(".testimonials .testimonials__slides-m button:nth-child(1)").click(
    function () {
      $("a.left.carousel-control").click();
    }
  );
  $(".testimonials .testimonials__slides-m button:nth-child(2)").click(
    function () {
      $("a.right.carousel-control").click();
    }
  );
});

//------------------------------------------------------------------------
// CONTACT - CLICK => MOVE TO GOOGLE MAP
//------------------------------------------------------------------------
$(function () {
  $(".box-animate").click(function () {
    window.open(
      "https://www.google.com/maps/place/189+%C4%90%E1%BA%B7ng+V%C4%83n+Bi,+B%C3%ACnh+Th%E1%BB%8D,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000/@10.8469257,106.7583429,17z/data=!3m1!4b1!4m5!3m4!1s0x3175272456ab7855:0x99f190d61fd219c5!8m2!3d10.8469257!4d106.7605316",
      "_bank"
    );
  });
});

//------------------------------------------------------------------------
// LINKS
//------------------------------------------------------------------------
$(function () {
  $("#team button").click(function () {
    window.location.href = "./html/team.html";
  });
  $("#project button").click(function () {
    window.location.href = "./html/project.html";
  });
});

//------------------------------------------------------------------------
// SOLVE PROBLEM - SLOW & LAG SCROLL
//------------------------------------------------------------------------
var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: "[data-scroll-ignore]",
  header: null,
  topOnEmptyHash: true,

  // Speed & Duration
  speed: 1000,
  speedAsDuration: false,
  durationMax: null,
  durationMin: null,
  clip: true,
  offset: 0,

  // Easing
  easing: "easeInOutCubic",
  customEasing: null,

  // History
  updateURL: true,
  popstate: true,

  // Custom Events
  emitEvents: true,
});
