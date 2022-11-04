function initHeroAnimation () {
    var $body = $('body');
    var $heroVideo = $('.js-video');
    var $animationDiv = $('.intro-animation');

    setTimeout(function () {
        $animationDiv.addClass('infinity');
        setTimeout(function () {
            $body.removeClass('no-scroll');
            $heroVideo.get(0).play();
        }, 500);
    }, 3000);
}

$(document).ready(function () {
    new WOW().init();

    // initHeroAnimation();

    $(".other-brand-carousel").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: `<img class='next-arrow' src="img/carousel/right.png">`,
        prevArrow: `<img class='prev-arrow' src="img/carousel/left.png">`
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //         slidesToShow: 3,
        //         infinite: true
        //         }

        //     }, {

        //         breakpoint: 600,
        //         settings: {
        //         slidesToShow: 2,
        //         dots: true
        //         }

        //     }, {

        //         breakpoint: 300,
        //         settings: "unslick" // destroys slick

        //     }
        // ]
    });

    $(".diff-artist-carousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: `<img class='next-arrow' src="img/carousel/right.png">`,
        prevArrow: `<img class='prev-arrow' src="img/carousel/left.png">`
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //         slidesToShow: 3,
        //         infinite: true
        //         }

        //     }, {

        //         breakpoint: 600,
        //         settings: {
        //         slidesToShow: 2,
        //         dots: true
        //         }

        //     }, {

        //         breakpoint: 300,
        //         settings: "unslick" // destroys slick

        //     }
        // ]
    });
})