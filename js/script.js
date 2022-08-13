$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger, header nav').toggleClass('active');
        $('nav a').click(function() {
            $('.burger, header nav').removeClass('active');
        });
    });   
    
    $('.scroll').click(function() {
        let blockID = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(blockID).offset().top
        }, {
            duration: 1500,
            easing: 'swing'
        });
    });
});