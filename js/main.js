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
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//  Scroll on top
$(".btn-ontop").click(() => {
  $("html, body").animate({ scrollTop: "0" }, 1000);
    return false;
})
if(window.pageYOffset > 300){
  // alert("test");
}