


$(document).ready(function(){
  $('.slider-offer-left').slick({
    arrows: false,
    dots: true,
    asNavFor:".slider-offer-img",
    autoplay:true,
    autoplaySpeed:10000
  });

  $('.slider-offer-img').slick({
    arrows: false,
    dots: false,
    asNavFor:".slider-offer-left"
  });

  $('.team-content__slider').slick({
    arrows: true,
    dots: true,
    ariableWidth: true
  });

  $('.product-slider').slick({
    arrows: false,
    dots: false
  });

//burger
  
$('.burger-btn').on('click', function(){
  $('.burger-menu').toggle();
})

$('.burger-cross').on('click', function(){
  $('.burger-menu').hide();
})

//check
$('.design-column__btn').on('click', function(){
  $('.design-column__btn-item').toggle();
})


  //scroll
  var nav = $('#nav'),
      headerH = $('#header').innerHeight(),
      scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function(){
      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset){
  
   if(scrollOffset >= headerH){
     nav.addClass("fixed");
   } else {
     nav.removeClass("fixed");
   }
  }

  //smooch scroll

  $('[data-scroll]').on('click', function(event) {
      event.preventDefault();

      var blockId = $(this).data('scroll'),
          blockOffset = $(blockId).offset().top;

     $("html, body").animate({
          scrollTop: blockOffset
     }, 1000);
  });

  //modal

  $('.phone-hover').on('click', function(){
    $('.modal-window').toggle();
  })

    $('.phone').on('click', function(){
    $('.modal-window').toggle();
  })

  $('.cross').on('click', function(){
    $('.modal-window').hide();
  })
});


$(".btn_generator").click(function() {
  var $price = $(".counter");
  $price.val(parseInt($price.val()) + 1);
  $price.change();
  $('.header-counter').addClass('active');
});

//shop

$('.product-pagination__btn').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});


//option

var $size = $('.shot-options__btn'),
    $color = $('.shot-color__btn');


$($size).click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});

$($color).click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});

//tab

var $tabsBtn = $('.product-btns__item'),
    $sliderBtn = $('.product-slider__item');

$($tabsBtn).click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});

$($sliderBtn).click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});


//validator

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
},"Please check your input."
);


$('#form-modal').validate({
  rules : {
    name : {
      required : true,
      regex : "[A-Za-z]{1,32}"
    },

    email : {
      required : true,
      email : true
    },

    tel : {
      required : true,
      digits : true,
      minlength: 10,
      maxlength: 11,
      regex: "[0-9]+"
    }
  },

  messages : {
    name : {
      required : "???????????????????? ?????????????? ???????? ??????",
    },

    email : {
      required : "???????????????????? ?????????????? ???????? E-mail",
    },

    tel : {
      required : "???????????????????? ?????????????? ???????? ?????????? ????????????????"
    }
  }

})

$('#form').validate({
  rules : {
    name : {
      required : true,
      regex : "[A-Za-z]{1,32}"
    },

    email : {
      required : true,
      email : true
    },

    tel : {
      required : true,
      digits : true,
      minlength: 10,
      maxlength: 11,
      regex: "[0-9]+"
    },

    country : {
      required : true,
    },

    city : {
      required : true,
    },

    street : {
      required : true,
    },

    house : {
      required : true,
    },

    flat : {
      required : true,
    },
    
    coupon : {
      required : true
    }
  },

  messages : {
    name : {
      required : "???????????????????? ?????????????? ???????? ??????",
    },

    email : {
      required : "???????????????????? ?????????????? ???????? E-mail",
    },

    tel : {
      required : "???????????????????? ?????????????? ???????? ?????????? ????????????????",
    },

    country : {
      required : "???????????????????? ?????????????? ???????? ??????????????",
    },

    city : {
      required : "???????????????????? ?????????????? ???????? ??????????",
    },

    street : {
      required : "???????????????????? ?????????????? ???????? ??????????",
    },

    house : {
      required : "???????????????????? ?????????????? ?????????? ???????????? ????????",
    },

    flat : {
      required : "???????????????????? ?????????????? ?????????? ????????????????",
    },
      
    coupon : {
      required : "?????????????? ??????????"
    }
  }

})
