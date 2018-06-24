$(document).ready(function(){
    $('.sliderwrap').slick({
        autoplay: true,
        dots: true,
        dotsClass: 'dots-container',
        prevArrow: $('#prev'),
        nextArrow: $('#next')
    });
});