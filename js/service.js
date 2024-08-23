
function openServiceDetails(){
  setTimeout(() => {
    window.location = "serviceDetails.html";
  }, 500);
}
  var swiper = new Swiper(".arrivals-slider", {
    
    loop:true,
    ccentersdSlides: true,
    autoplay: {
     delay: 9500,
     disableOnInteraction: false,
    },
     breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      170: {
        slidesPerView: 2,
        
      },
      340: {
        slidesPerView: 3,
        
      },
      510: {
        slidesPerView: 4,
        
      },
      680: {
        slidesPerView: 5,
      },
        
      850: {
        slidesPerView: 6,
        
      },
      1024: {
        slidesPerView: 7,
       
      },
    },
   });