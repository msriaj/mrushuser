$(document).ready(function () {
    //nav bar
    // $(".toggol").on("click", function () {
    //     $(".nav-bar ").toggleClass("active");
    // });
    // $(".toggol").on("click", function () {
    //     $(".toggol").toggleClass("activeted");
    // });

    $(".add_modal").on("click", function () {
        $(".modal").addClass("activet");
    });
    $(".delete").on("click", function () {
        $(".modal").removeClass("activet");
    });

    $(".add_modal_2").on("click", function () {
        $(".modal_two").addClass("activet");
    });
    $(".delete").on("click", function () {
        $(".modal_two").removeClass("activet");
    });

    $(".show_modal").on("click", function () {
        $(".total_modal").addClass("show");
    });
    $(".delete").on("click", function () {
        $(".total_modal").removeClass("show");
    });
});
