$(document).ready(function(){

    $("#bars").click(function(){
        $('#nav').toggleClass('show')
        $('#mobile__nav').toggleClass('show')
    })

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
            $('.gallery').removeClass('otherCat');
            $('.gallery__row').removeClass('otherCat');
            $('.gallery__product').removeClass('otherCatWidth')
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

            // Add class otherCat when it's not all cateogry
            $('.gallery').addClass('otherCat');
            $('.gallery__row').addClass('otherCat');
            $('.gallery__product').addClass('otherCatWidth')
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");

    $('.count').counterUp({
        delay: 10,
        time: 1500
    });

});

const swiper = new Swiper('.swiper-container', {
    // How many slides to show
    slidesPerView: 2,
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Make slides responsive
    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 3,
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 4,
        }
    }
});