$('.most-product-items').slick({
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   prevArrow: `<i class="fas fa-angle-left"></i>`,
   nextArrow: `<i class="fas fa-angle-right"></i>`,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 1,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
     
   ]
 });