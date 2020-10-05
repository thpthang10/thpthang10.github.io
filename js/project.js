$(document).ready(function () {
  // Sliders
  $("#project-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 3,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Buttons
  $("button").click(function () {
    $(this).css("outline", "none");
  });
  $("#prev-btn").click(function () {
    $(".owl-nav button:first()").click();
  });
  $("#next-btn").click(function () {
    $(".owl-nav button:last()").click();
  });

  // View All
  // $(".view-all").hide();
  // $(".project-view-all a:nth-child(2)").hide();
  // $(".project-view-all").click(function () {
  //   $(".slider-contain").toggle();
  //   $(".view-all").toggle();
  //   $(".project-view-all a, .project-buttons button").toggle();
  // });
});
