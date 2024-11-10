// Menu-bar Toggle...
$('.fa-bars').click(function() {
    // $('.menu-items ul').animate({width:"toggle"},500)
    $('.menu-items ul').addClass('active');
});
$('.fa-xmark').click(function() {
    // $('.menu-items ul').animate({width:"toggle"},500)
    $('.menu-items ul').removeClass('active');
})
AOS.init();