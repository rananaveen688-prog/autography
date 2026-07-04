$(document).ready(function () {
    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.nav_bar, .header_sign').slideToggle("slow");
    });
});