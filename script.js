$(document).ready(function(){
    // $('.dropdown-toggle').dropdown();
    $('.sliderwrap').slick({
        responsive: {
            breakpoint: 1000,
            settings: {
                arrows: false
            }
        },
        autoplay: true,
        dots: true,
        dotsClass: 'dots-container',
        prevArrow: $('#prev'),
        nextArrow: $('#next')
    });
});