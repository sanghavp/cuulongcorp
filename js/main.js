// Slider
$('.most-product-items').slick({
   dots: false,
   infinite: true,
   prevArrow: `<i class="fas fa-angle-left"></i>`,
   nextArrow: `<i class="fas fa-angle-right"></i>`,
  //  speed: 300,
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   arrows: true,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
});
// sticky menu
$(window).scroll((e) => {
  const heightMenu = $(".menu").offset();
  const heightScroll = $("html, body").scrollTop();
  if(heightScroll >= heightMenu.top){
    $(".menu").addClass(".sticky");
  }
})

//  Scroll on top
$(".btn-ontop").click(() => {
  $("html, body").animate({ scrollTop: "0" }, 1000);
    return false;
})
//  Show/hide button on the top
$(window).scroll(function(e) {
  const heightScroll = $("html, body").scrollTop();
  if(heightScroll > 500){
    $(".btn-ontop").show();
  }else{
    $(".btn-ontop").hide();
  }
})