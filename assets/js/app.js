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
    $(".submited").on("click", function () {
        $(".modal_two").addClass("activet");
    });
    $(".delete").on("click", function () {
        $(".modal_two").removeClass("activet");
    });
});
