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

function initSlick () {
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
}

var validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function initFormValidation () {
    var $submit = $('#claimYourDomain');
    var $successModal = $('#successModal');

    $('#successModal .close-btn').click(function() {
        $successModal.modal('hide');
    })

    $submit.click(function(e) {
        e.preventDefault();

        var $formModal = $('#formModal');
        var $name = $('#nameID');
        var nameVal = $name.val();
        var $email = $('#emailID');
        var emailVal = $email.val();
        var $social = $('#socialAccount');
        var socialAccount = $social.val();
        var $tnc = $('#tnc');
        var tnc = $tnc.is(":checked") ;

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

        if (socialAccount === '') {
            $social.siblings('.error-text-container').removeClass('_hidden');
            $social.focus();
        }
        else {
            $social.siblings('.error-text-container').addClass('_hidden');
        }

        if (!tnc ) {
            $tnc.siblings('.error-text-container').removeClass('_hidden');
            $tnc.focus();
        }
        else {
            $tnc.siblings('.error-text-container').addClass('_hidden');
        }

        if (nameVal !== "" && emailVal !== "" && validateEmail(emailVal) && socialAccount !== "" && tnc) {

            $submit.addClass('_loading');

            var currentdate = new Date();
			var datetime = currentdate.getDate() + "/"
                            + (currentdate.getMonth()+1)  + "/"
                            + currentdate.getFullYear() + " @ "
                            + currentdate.getHours() + ":"
                            + currentdate.getMinutes() + ":"
                            + currentdate.getSeconds();
            var domainName = '';
            var data = `${$('#claimYourDomainForm').serialize()}&domainName=${ domainName }&datetime=${ datetime }`

            $.ajax({
                type: 'POST',
                url: "addData.php",
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

function initSearchBox () {

    var $search = $('.js-search');

    $search.click( onSearch)
}

function onSearch (e) {
    e.preventDefault();
    var $search = $('.js-search');
    var $input = $('#store-input');
    var $modalInput = $('#store-input-modal');
    var $notFound = $('#not-found');
    var $domainFound = $('#domain-found');
    var $foundStoreName = $('#found-store-name');
    var $notFoundStoreName = $('#error-store-name');
    var $formModal = $('#formModal');
    var domainName = $input.val();

    if ( domainName === '' || domainName === null || domainName === undefined ) {
        return false;
    }

    $notFound.addClass('hidden');
    $domainFound.addClass('hidden');
    $search.addClass('_loading');

    $.ajax({
        type: 'POST',
        url: "checkDomain.php",
        data: { 'domainName': domainName },
        success: function (data) {

            var dataRes = $.parseJSON(data);

            $search.removeClass('_loading');
            $modalInput.val(domainName);

            if (dataRes.domainAvailability == 'AVAILABLE') {
                $formModal.modal('show');
                $('.close-btn').click(function() {
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
                $('.close-btn').click(function() {
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

function onSearchModal (e) {
    e.preventDefault();
    var $search = $('.js-search-modal');
    var $input = $('#store-input');
    var $modalInput = $('#store-input-modal');
    var $notFound = $('#not-found');
    var $domainFound = $('#domain-found');
    var $foundStoreName = $('#found-store-name');
    var $notFoundStoreName = $('#error-store-name');
    var $formModal = $('#formModal');
    var domainName = $modalInput.val();

    if ( domainName === '' || domainName === null || domainName === undefined ) {
        return false;
    }

    $notFound.addClass('hidden');
    $domainFound.addClass('hidden');
    $search.addClass('_loading');

    $.ajax({
        type: 'POST',
        url: "checkDomain.php",
        data: { 'domainName': domainName },
        success: function (data) {

            var dataRes = $.parseJSON(data);

            $search.removeClass('_loading');
            $modalInput.val(domainName);

            if (dataRes.domainAvailability == 'AVAILABLE') {
                $formModal.modal('show');
                $('.close-btn').click(function() {
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
                $('.close-btn').click(function() {
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

function initModalSearchBox () {

    var $searchModal = $('.js-search-modal');
    var $modalInput = $('#store-input-modal');
    var $input = $('#store-input');
    var $search = $('.js-search');

    $searchModal.click(onSearchModal);
    $search.click(onSearch);

    $input.on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            onSearch(e);
        }
    });
    $modalInput.on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            onSearchModal(e);
        }
    });
}

$(document).ready(function () {
    new WOW().init();

    initHeroAnimation();
    initSlick();
    initSearchBox();
    initModalSearchBox();
    initFormValidation();
})