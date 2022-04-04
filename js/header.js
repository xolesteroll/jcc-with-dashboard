$(document).ready(function () {
    $(".header-nav__toggle-btn").on("click", function () {
        $(this).toggleClass("active")
        $(".header-nav__list").toggleClass("active")
    })
})