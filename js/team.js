$(document).ready(function () {
    // Sliders
    $('#team-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    // Buttons
    $("#prev-btn").click(function () {
        $(".owl-nav button:first()").click()
    })
    $("#next-btn").click(function () {
        $(".owl-nav button:last()").click()
    })

    // View All
    // Fix load img

    // -----------------------------------------------------
    // $(".view-all").hide();
    // $(".team-view-all a:nth-child(2)").hide();
    // $(".team-view-all").click(function () {
    //     $(".slider-contain, .team-buttons").fadeToggle();
    //     $(".view-all").toggle();
    //     $(".team-view-all a").toggle();
    // })
});