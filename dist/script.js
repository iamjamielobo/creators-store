function initHeroAnimation(){var a=$("body"),e=$(".js-video"),o=$(".intro-animation");setTimeout((function(){o.addClass("infinity"),setTimeout((function(){a.removeClass("no-scroll"),e.get(0).play()}),500)}),3e3)}function initSlick(){$(".other-brand-carousel").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,nextArrow:"<img class='next-arrow' src=\"img/carousel/right.png\">",prevArrow:"<img class='prev-arrow' src=\"img/carousel/left.png\">"}),$(".diff-artist-carousel").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,nextArrow:"<img class='next-arrow' src=\"img/carousel/right.png\">",prevArrow:"<img class='prev-arrow' src=\"img/carousel/left.png\">"})}var validateEmail=a=>a.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);function initFormValidation(){var a=$("#claimYourDomain"),e=$("#successModal");$("#successModal .close-btn").click((function(){e.modal("hide")})),a.click((function(o){o.preventDefault();var i=$("#formModal"),n=$("#nameID"),s=n.val(),r=$("#emailID"),t=r.val(),d=$("#socialAccount"),l=d.val(),c=$("#tnc"),m=c.is(":checked");if(""===s?(n.siblings(".error-text-container").removeClass("_hidden"),n.focus()):n.siblings(".error-text-container").addClass("_hidden"),""!==t&&validateEmail(t)?r.siblings(".error-text-container").addClass("_hidden"):(r.siblings(".error-text-container").removeClass("_hidden"),r.focus()),""===l?(d.siblings(".error-text-container").removeClass("_hidden"),d.focus()):d.siblings(".error-text-container").addClass("_hidden"),m?c.siblings(".error-text-container").addClass("_hidden"):(c.siblings(".error-text-container").removeClass("_hidden"),c.focus()),""!==s&&""!==t&&validateEmail(t)&&""!==l&&m){a.addClass("_loading");var u=new Date,h=u.getDate()+"/"+(u.getMonth()+1)+"/"+u.getFullYear()+" @ "+u.getHours()+":"+u.getMinutes()+":"+u.getSeconds(),f=`${$("#claimYourDomainForm").serialize()}&domainName=&datetime=${h}`;$.ajax({type:"POST",url:"addData.php",data:f,success:function(o){return a.removeClass("_loading"),i.modal("hide"),e.modal("show"),!1}})}}))}function initSearchBox(){$(".js-search").click(onSearch)}function onSearch(a){a.preventDefault();var e=$(".js-search"),o=$("#store-input"),i=$("#store-input-modal"),n=$("#not-found"),s=$("#domain-found"),r=$("#found-store-name"),t=$("#error-store-name"),d=$("#formModal"),l=o.val();if(""===l||null==l)return!1;n.addClass("hidden"),s.addClass("hidden"),e.addClass("_loading"),$.ajax({type:"POST",url:"checkDomain.php",data:{domainName:l},success:function(a){var o=$.parseJSON(a);e.removeClass("_loading"),i.val(l),"AVAILABLE"==o.domainAvailability?(d.modal("show"),$(".close-btn").click((function(){d.modal("hide")})),n.addClass("hidden"),r.text(l),s.removeClass("hidden")):(d.modal("show"),$(".close-btn").click((function(){d.modal("hide")})),n.removeClass("hidden"),s.addClass("hidden"),t.text(l))}})}function onSearchModal(a){a.preventDefault();var e=$(".js-search-modal"),o=($("#store-input"),$("#store-input-modal")),i=$("#not-found"),n=$("#domain-found"),s=$("#found-store-name"),r=$("#error-store-name"),t=$("#formModal"),d=o.val();if(""===d||null==d)return!1;i.addClass("hidden"),n.addClass("hidden"),e.addClass("_loading"),$.ajax({type:"POST",url:"checkDomain.php",data:{domainName:d},success:function(a){var l=$.parseJSON(a);e.removeClass("_loading"),o.val(d),"AVAILABLE"==l.domainAvailability?(t.modal("show"),$(".close-btn").click((function(){t.modal("hide")})),i.addClass("hidden"),s.text(d),n.removeClass("hidden")):(t.modal("show"),$(".close-btn").click((function(){t.modal("hide")})),i.removeClass("hidden"),n.addClass("hidden"),r.text(d))}})}function initModalSearchBox(){var a=$(".js-search-modal"),e=$("#store-input-modal"),o=$("#store-input"),i=$(".js-search");a.click(onSearchModal),i.click(onSearch),o.on("keyup",(function(a){"Enter"!==a.key&&13!==a.keyCode||onSearch(a)})),e.on("keyup",(function(a){"Enter"!==a.key&&13!==a.keyCode||onSearchModal(a)}))}$(document).ready((function(){(new WOW).init(),initHeroAnimation(),initSlick(),initSearchBox(),initModalSearchBox(),initFormValidation()}));
//# sourceMappingURL=script.js.map