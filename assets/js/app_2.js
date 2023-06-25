$(document).ready(function () {
    //nav bar
    $(".toggol").on("click", function () {
        $(".nav-bar ").toggleClass("active");
    });
    $(".toggol").on("click", function () {
        $(".toggol").toggleClass("activeted");
    });

    // news js
    $(".read-more-btn").on("click", function () {
        $(".m1").addClass("active");
    });

    $(".deactiveted").on("click", function () {
        $(".news-modal").removeClass("active");
    });

    $(".read-more-btn-1").on("click", function () {
        $(".m2").addClass("active");
    });
    $(".read-more-btn-2").on("click", function () {
        $(".m3").addClass("active");
    });
    $(".read-more-btn-3").on("click", function () {
        $(".m4").addClass("active");
    });

    // Terms & Conditions
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    // $(".partners").slick();
    $(".partners").slick({
        infinite: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
    $(".packages").slick({
        infinite: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1285,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    dotsClass: "slider_dots",
                },
            },
            {
                breakpoint: 828,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: "slider_dots",
                },
            },
        ],
    });
});
