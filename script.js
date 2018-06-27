$(document).ready(function(){
    // $('.dropdown-toggle').dropdown();
    $('.sliderwrap').slick({
		autoplay: true,
        dots: true,
        dotsClass: 'dots-container',
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
		swipe: true,
        responsive: [
		{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
            }
        },
		{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
            }
        }
		]
    });
});