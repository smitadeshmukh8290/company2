$(window).on('scroll', function () {
    if ($(window).scroll) {
        $('navbar').addClass('white');
    } else {
        $('navbar').removeClass('white');
    }
});

// owl
$('.owl-carousel.my_caro_one').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
   
    navText: [
        '<i class="fas fa-angle-left" aria-hidden="true"></i>',
        '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    ],
    lazyLoad: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
// img carousel
$('.owl-carousel.img_caro_id').owlCarousel({
    center: true,
    items:2,
    loop:true,
    dots:false,
    autoplay:true,
    margin:10,
    stagePadding:300,
    responsive:{
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
    
});
// profile carousel profile
$('.owl-carousel.profile').owlCarousel({

    dots:true,
    autoplay:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
});
