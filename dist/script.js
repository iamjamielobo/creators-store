function initHeroAnimation(){var i=$("body"),o=$(".js-video"),n=$(".intro-animation");setTimeout((function(){n.addClass("infinity"),setTimeout((function(){i.removeClass("no-scroll"),o.get(0).play()}),500)}),3e3)}$(document).ready((function(){(new WOW).init(),initHeroAnimation(),$(".other-brand-carousel").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,autoscroll:!0,nextArrow:"<img class='next-arrow' src=\"/img/carousel/right.png\">",prevArrow:"<img class='prev-arrow' src=\"/img/carousel/left.png\">"})}));
//# sourceMappingURL=script.js.map