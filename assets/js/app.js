$(document).ready(function () {
    //nav bar
    $(".on_click").on("click", function () {
        $(".side_nav").toggleClass("on");
    });

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
