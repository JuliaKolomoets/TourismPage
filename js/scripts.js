$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
    $( "#datepicker1" ).datepicker();
    $( "#datepicker2" ).datepicker();
});

$(document).ready(function(){

    /* Hamburger menu animation */
    $('.open-button').click(function(){
        $(this).toggleClass('open');
    });

    /* Menu fade/in out on mobile */
    $(".open-button").click(function(e){
        e.preventDefault();
        $(".mobile-menu").toggleClass('open');
    });

});

/* Close menu using the escape key */
$(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        if ($(".mobile-menu").hasClass("open")) {
            $(".mobile-menu").removeClass("open")
        }

        if ($(".open-button").hasClass("open")) {
            $(".open-button").removeClass("open")
        }
    }
});

// When mobile hamburger menu button is clicked, add lock-scroll class to body. This stops the user being able to scroll the page behind the menu.

$('.open-button').click(function () {
    // If the menu is already open, we need to remove the scroll lock
    if ($(this).hasClass('open')) {
        lockScroll(false);
    } else {
        lockScroll(true);
    }
});

function lockScroll(shouldLock) {

    if (shouldLock === undefined) {
        shouldLock = true;
    }

    if (shouldLock) {
        if (!$('body').hasClass('lock-scroll')) {
            $('body').addClass('lock-scroll');
        }
    } else {
        if ($('body').hasClass('lock-scroll')) {
            $('body').removeClass('lock-scroll');
        }
    }

}
$( function() {
    $( "#progressbar" ).progressbar({
        value: 37
    });
} );


