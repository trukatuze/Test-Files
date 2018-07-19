

$(document).ready(function(){
    $('.banner').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    $('.burger').click(function() {
        $('.navigation-mobile').addClass('active');
    });
    $('.navigation-close').click(function() {
        $('.navigation-mobile').removeClass('active');
    });

    // $('.nav-link').on('click', (function (e) {
    //     e.preventDefault();
    //     var target = $(this.hash);
    //     $('html,body').animate({
    //         scrollTop: target.offset().top
    //     }, 1000, 'easeOutBounce');
    //     return false
    // }));
    // var winHeight = $(document).height();
    // var step = 4;
    // var timeToScroll = winHeight/step;

    $('.nav-link').on('click', function(){

        $('html, body').animate({
            scrollTop: 0
        }, timeToScroll);
    });

});