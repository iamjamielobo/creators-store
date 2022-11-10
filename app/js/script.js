function initHeroAnimation() {
    var $body = $('body');
    var $heroVideo = $('.js-video');
    var $animationDiv = $('.intro-animation');
    var isMobile = $('.intro-animation').css('display') === 'none';

    if (isMobile) {
        $heroVideo.get(0).play();
        setTimeout(function () {
            $('.title-uno, .title-dos').removeClass('_hidden').addClass('title-fadeIn');
        }, 500);
        // initHeroTextAnimation();
        // initMobileWow();
        return false;
    }

    setTimeout(function () {
        $animationDiv.addClass('infinity');
        setTimeout(function () {
            $body.removeClass('no-scroll');
            $heroVideo.get(0).play();
            $('.title-uno, .title-dos').removeClass('_hidden').addClass('title-fadeIn');
            // initHeroTextAnimation();
        }, 500);
    }, 3000);
}

function initSlick() {

    $(".diff-artist-carousel").slick({
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: 'linear',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        focusOnSelect: false,
        // nextArrow: `<img class='next-arrow' src="img/carousel/right.png">`,
        // prevArrow: `<img class='prev-arrow' src="img/carousel/left.png">`
        nextArrow: null,
        prevArrow: null,
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 2,
                    speed: 7000,
                    swipe: false,
                    pauseOnHover: false,
                    focusOnSelect: false
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    speed: 7000,
                    swipe: false,
                    pauseOnHover: false,
                    focusOnSelect: false,
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    speed: 7000,
                    swipe: false,
                    pauseOnHover: false,
                    focusOnSelect: false,
                }

            }
        ]
    });

    $(".other-brand-carousel").slick({
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: 'linear',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        focusOnSelect: false,
        // nextArrow: `<img class='next-arrow' src="img/carousel/right.png">`,
        // prevArrow: `<img class='prev-arrow' src="img/carousel/left.png">`
        nextArrow: null,
        prevArrow: null,
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 2,
                    speed: 7000,
                    swipe: false,
                    pauseOnHover: false,
                    focusOnSelect: false
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    speed: 7000,
                    swipe: false,
                    pauseOnHover: false,
                    focusOnSelect: false
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    speed: 7000,
                    swipe: false,
                    pauseOnHover: false,
                    focusOnSelect: false,
                }

            }
        ]
    });
}

var validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

function initFormValidation() {
    var $submit = $('#claimYourDomain');
    var $successModal = $('#successModal');

    $('#successModal .close-btn').click(function () {
        $successModal.modal('hide');
    })

    $submit.click(function (e) {
        e.preventDefault();

        var $formModal = $('#formModal');
        var $name = $('#nameID');
        var nameVal = $name.val();
        var $email = $('#emailID');
        var emailVal = $email.val();
        var $social = $('#socialAccount');
        var socialAccount = $social.val();
        var $tnc = $('#tnc');
        var tnc = $tnc.is(":checked");

        if (nameVal === "") {
            $name.siblings('.error-text-container').removeClass('_hidden');
            $name.focus();
        }
        else {
            $name.siblings('.error-text-container').addClass('_hidden');
        }

        if (emailVal === "" || !validateEmail(emailVal)) {
            $email.siblings('.error-text-container').removeClass('_hidden');
            $email.focus();
        }
        else {
            $email.siblings('.error-text-container').addClass('_hidden');
        }

        if (socialAccount === '' || !isValidHttpUrl(socialAccount)) {
            $social.siblings('.error-text-container').removeClass('_hidden');
            $social.focus();
        }
        else {
            $social.siblings('.error-text-container').addClass('_hidden');
        }

        if (!tnc) {
            $tnc.siblings('.error-text-container').removeClass('_hidden');
            $tnc.focus();
        }
        else {
            $tnc.siblings('.error-text-container').addClass('_hidden');
        }

        if (nameVal !== "" && emailVal !== "" && validateEmail(emailVal) && socialAccount !== "" && isValidHttpUrl(socialAccount) && tnc) {

            $submit.addClass('_loading');

            var isMobile = $('.intro-animation').css('display') === 'none';
            var $input = isMobile ? $('#store-input-mobile') : $('#store-input');
            var currentdate = new Date();
            var d = new Date
            var dformat = [d.getMonth() + 1,
            d.getDate(),
            d.getFullYear()].join('/') + ' ' +
                [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
            var domainName = $input.val();

            var data = `${$('#claimYourDomainForm').serialize()}&domainName=${domainName}&datetime=${dformat}`;

            $.ajax({
                type: 'POST',
                url: "addData.php?1006",
                data: data,
                success: function (data) {

                    $submit.removeClass('_loading');
                    $formModal.modal('hide');
                    $successModal.modal('show');
                    return false;
                }
            });
        }
    })
}

function onSearch(e) {
    e.preventDefault();
    var isMobile = $('.intro-animation').css('display') === 'none';
    var $search = $('.js-search');
    var $input = isMobile ? $('#store-input-mobile') : $('#store-input');
    var $modalInput = $('#store-input-modal');
    var $notFound = $('#not-found');
    var $domainFound = $('#domain-found');
    var $foundStoreName = $('#found-store-name');
    var $notFoundStoreName = $('#error-store-name');
    var $formModal = $('#formModal');
    var domainName = $input.val();

    if (domainName === '' || domainName === null || domainName === undefined) {
        return false;
    }

    $notFound.addClass('hidden');
    $domainFound.addClass('hidden');
    $search.addClass('_loading');

    $.ajax({
        type: 'POST',
        url: "checkDomain.php?1006",
        data: { 'domainName': domainName },
        success: function (data) {

            var dataRes = $.parseJSON(data);

            $search.removeClass('_loading');
            $modalInput.val(domainName);

            if (dataRes.domainAvailability == 'AVAILABLE') {
                $formModal.modal('show');
                $('.close-btn').click(function () {
                    $formModal.modal('hide');
                })
                $notFound.addClass('hidden');
                $foundStoreName.text(domainName);
                $domainFound.removeClass('hidden');
                // $('#Modalnotavailable').modal('hide');

                // $('.domainNameModalID').val(domainName);
                // $('.domain-available').find('h5').html(domainName + '.store is available!');
                // $('.domainclamied').find('h5').html('Great! Thank you for registering your details');
                // $('#claimmodel').modal('show');
            }
            else {
                $formModal.modal('show');
                $('.close-btn').click(function () {
                    $formModal.modal('hide');
                })
                $notFound.removeClass('hidden');
                $domainFound.addClass('hidden');
                $notFoundStoreName.text(domainName);
                // $('.domainNameModalID').val('');
                // $('.domain-available').find('h5').html(domainName + '.store is not available!');

                // $('.domain-available').find('h5').html('monalisa.store is available!');
            }
        }
    });
}

function onSearchModal(e) {
    e.preventDefault();
    var $search = $('.js-search-modal');
    var isMobile = $('.intro-animation').css('display') === 'none';
    var $input = isMobile ? $('#store-input-mobile') : $('#store-input');
    var $modalInput = $('#store-input-modal');
    var $notFound = $('#not-found');
    var $domainFound = $('#domain-found');
    var $foundStoreName = $('#found-store-name');
    var $notFoundStoreName = $('#error-store-name');
    var $formModal = $('#formModal');
    var domainName = $modalInput.val();

    if (domainName === '' || domainName === null || domainName === undefined) {
        return false;
    }

    $notFound.addClass('hidden');
    $domainFound.addClass('hidden');
    $search.addClass('_loading');

    $.ajax({
        type: 'POST',
        url: "checkDomain.php?1006",
        data: { 'domainName': domainName },
        success: function (data) {

            var dataRes = $.parseJSON(data);

            $search.removeClass('_loading');
            $input.val(domainName);

            if (dataRes.domainAvailability == 'AVAILABLE') {
                $formModal.modal('show');
                $('.close-btn').click(function () {
                    $formModal.modal('hide');
                })
                $notFound.addClass('hidden');
                $foundStoreName.text(domainName);
                $domainFound.removeClass('hidden');
            }
            else {
                $formModal.modal('show');
                $('.close-btn').click(function () {
                    $formModal.modal('hide');
                })
                $notFound.removeClass('hidden');
                $domainFound.addClass('hidden');
                $notFoundStoreName.text(domainName);
            }
        }
    });
}

function initSearchBox() {

    var isMobile = $('.intro-animation').css('display') === 'none';
    var $input = isMobile ? $('#store-input-mobile') : $('#store-input');
    var $search = $('.js-search');

    $search.click(onSearch);

    $input.on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            onSearch(e);
        }
    });
}

function initModalSearchBox() {

    var $searchModal = $('.js-search-modal');
    var $modalInput = $('#store-input-modal');

    $searchModal.click(onSearchModal);

    $modalInput.on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            onSearchModal(e);
        }
    });
}

function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + jQuery(window).height();
    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + jQuery(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function initMobileWow() {
    var isMobile = $('.intro-animation').css('display') === 'none';
    if (isMobile) {
        // $(".page-title").attr('data-wow-delay', 0);
        // $(".page-sub-title").attr('data-wow-delay', 0);
        var list = $('[data-wow-delay]');
        list.data('wow-delay', 0);
        // list.data('animation-delay', 0);
        list.css('animation-delay', 0);

        wow = new WOW(
            {
                offset: 0,          // default
                mobile: true,       // default
                live: true,        // default
                delay: 0
            }
        )

        wow.init();

    }
}

function iOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

$(document).ready(function () {
    new WOW().init();

    initHeroAnimation();
    initSlick();
    initSearchBox();
    initModalSearchBox();
    initFormValidation();

    if ( iOS() ) {
        $('body').addClass('_ios');
    }

})