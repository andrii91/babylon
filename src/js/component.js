$( document ).ready(function() {
  
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.testimonials-nav-item').click(function(){
    $('.testimonials-nav-item').removeClass('active');
    $(this).addClass('active');

    $('.testimonials-item').removeClass('active');
    $($(this).data('tab')).addClass('active');
  })

  $('.open-menu').click(function(){
    $('#menu').slideToggle(200)
  })


  // $('.stories-slider').slick({
  //   centerMode: true,
  //   arrows: true,
  //   slidesToShow: 1,
  //   infinite: true,
  //   lazyLoad: 'ondemand',
  //   variableWidth: true,
  //   margin: '50',
  //   prevArrow: '<button class="arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/></svg></button>',
  //   nextArrow: '<button class="arrow-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg></button>',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         centerMode: true,
  //         slidesToShow: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });
}) 


