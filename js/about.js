// 50% of the element is visible
gsap.from('.about-items', {opacity: 0, duration: 1, delay: 0.6, y: 30, stagger: 0.2});

let observerEngAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from('.heart', {opacity: 0, duration: 1, delay: 0.6, y: 30, stagger: 0.2});
          
        }
    });
}, { threshold: 0.1 }); 

observerEngAbout.observe(document.querySelector('.eng-about'));

let observerourTeam = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from('.our-team-details', {opacity: 0, duration: 1, delay: 0.6, y: 30, stagger: 0.2});
          
        }
    });
}, { threshold: 0.1 }); 

observerourTeam.observe(document.querySelector('.our-team'));









// gsap.from('.description', {opacity: 0, duration: 1, delay: 1.8, y:30})
// gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y:30})
// gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y:30})