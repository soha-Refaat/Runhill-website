let contItem = document.querySelector(".cont-item");
let slidBtn = document.querySelectorAll('.slid-btn')
let contactBtn = document.querySelectorAll(".home-btn");

gsap.from('.img-section', {opacity: 0, duration: 1, delay: 1, y:10})
gsap.from('.cont-section', {opacity: 0, duration: 1, delay: 1.2, y:30})

function RefreshCont(){
    gsap.from('.h', {opacity: 0, duration: 1, delay: 1, y:30,stagger: 0.2})
    gsap.from('.p', {opacity: 0, duration: 1, delay: 1.1, y:30})
    gsap.from('.btn', {opacity: 0, duration: 1, delay: 1.2, y:30})
}

function allProjects(){
    setTimeout(()=> {
      window.Location = "project.html";
    }, 500);
}
function openServiceDetails(){
    setTimeout(() => {
      window.location = "serviceDetails.html";
    }, 500);
  }

  function openConract(){
    setTimeout(()=> {
        window.Location = "contact.html";
      }, 500);
  }

// contactBtn.forEach(contactBtn => {
//     contactBtn.addEventListener("click", function (e) {
//       setTimeout(() => {
//         window.location = "contact.html";
//       }, 1000); // Optional delay time in milliseconds
//     });
//   });

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from('.projects .cont-item .h', {opacity: 0, duration: 1, delay: 0.5, y: 30, stagger: 0.2});
            gsap.from('.projects .cont-item .p', {opacity: 0, duration: 1, delay: 0.6, y: 30});
            gsap.from('.projects .cont-item .btn', {opacity: 0, duration: 1, delay: 0.7, y: 30});
        }
    });
}, { threshold: 0.1 }); // 50% of the element is visible

observer.observe(document.querySelector('.projects'));

let observerTop = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           gsap.from('.itemm', {opacity: 0, duration: 1, delay: 0.6, y:30,stagger: 0.2});
           gsap.from('.top-news .h', {opacity: 0, duration: 1, delay: 0.7, y:30});
           gsap.from('.con1', {opacity: 0, duration: 1, delay: 0.7, y:30})
           gsap.from('.cont2', {opacity: 0, duration: 1, delay: 0.8, y:30})
           gsap.from('.cont3', {opacity: 0, duration: 1, delay: 0.8, y:30})
        }
    });
}, { threshold: 0.1 }); // 50% of the element is visible

observerTop.observe(document.querySelector('.top-news'));

let observerAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from('.about-items', {opacity: 0, duration: 1, delay: 0.6, y: 30, stagger: 0.2});
          
        }
    });
}, { threshold: 0.1 }); 

observerAbout.observe(document.querySelector('.about'));

let observerEngAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from('.heart', {opacity: 0, duration: 1, delay: 0.6, y: 30, stagger: 0.2});
          
        }
    });
}, { threshold: 0.1 }); 

observerEngAbout.observe(document.querySelector('.eng-about'));

let testimonials = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from('.prof', {opacity: 0, duration: 1, delay: 0.6, y: 30, stagger: 0.2});
          
        }
    });
}, { threshold: 0.1 }); 

testimonials.observe(document.querySelector('.testimonials'));

let latestNews = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from('.cartt', {opacity: 0, duration: 1, delay: 0.6, y: 30, stagger: 0.2});
          
        }
    });
}, { threshold: 0.1 }); 

latestNews.observe(document.querySelector('.latest-news'));





// gsap.from('.description', {opacity: 0, duration: 1, delay: 1.8, y:30})
// gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y:30})
// gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y:30})