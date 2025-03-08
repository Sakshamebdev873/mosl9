 Shery.mouseFollower({
   //Parameters are optional.
   skew: true,
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
 });
//  gsap.fromTo('#nav',{
//   y:100,opacity:0
//  },{
//   y:0,
//   stagger: 0.15,
//   opacity : 1,
//   duration: 0.4,
//   ease: 'power2.in'
//  })
gsap.registerPlugin(ScrollTrigger);
 const tl = gsap.timeline();

tl.fromTo('.nav', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.in',stagger : 0.15 })
  .fromTo('.nav-1', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, ease: 'power2.in',stagger:0.15 }, "+=0.15"); 
const tl1 = gsap.timeline()
tl1.fromTo('.anim',{y:25,opacity:0},{y:0,opacity:1,duration:0.6,ease:'power2.in',stagger:0.15})
.fromTo('.anim-1',{x:25,opacity:0},{x:0,opacity:1,duration:0.2,ease:'power2.in',stagger:0.15})

// gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered

gsap.fromTo('#serv', 
  { y: 50, opacity: 0 }, 
  { 
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    scrollTrigger: {
      trigger: '.Work',
      // markers: true, // Remove after testing
      scrub: true, 
      start: "top-=600 10%",  // Start when '.Work' is 80% in view
      end: "bottom-=1000 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);
gsap.fromTo('.serv-1', 
  { y: 50, opacity: 0 }, 
  { 
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    scrollTrigger: {
      trigger: '.Work',
      // markers: true, // Remove after testing
      scrub: true, 
      start: "top-=450 10%",  // Start when '.Work' is 80% in view
      end: "bottom-=970 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);
gsap.fromTo('.serv-2', 
  { y: 150, opacity: 0 }, 
  { 
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    scrollTrigger: {
      trigger: '.Work',
      // markers: true, // Remove after testing
      scrub: true, 
      start: "top-=450 10%",  // Start when '.Work' is 80% in view
      end: "bottom-=970 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);
gsap.fromTo('.aboutt', 
  { y: 50, opacity: 0 }, 
  { 
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    stagger:0.15,
    scrollTrigger: {
      trigger: '.about',
      markers: true, // Remove after testing
      scrub: true, 
      start: "top-=300 10%",  // Start when '.Work' is 80% in view
      end: "bottom-=150 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);
gsap.fromTo('.aboutt', 
  { y: 50, opacity: 0 }, 
  { 
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    stagger:0.15,
    scrollTrigger: {
      trigger: '.about',
      // markers: true, // Remove after testing
      scrub: true, 
      start: "top-=300 10%",  // Start when '.Work' is 80% in view
      end: "bottom-=150 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);
gsap.fromTo('.about-img', 
  { x: -100, opacity: 0 }, 
  { 
    x: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    stagger:0.15,
    scrollTrigger: {
      trigger: '.about',
      // markers: true, // Remove after testing
      scrub: true, 
      start: "top-=200 10%",  // Start when '.Work' is 80% in view
      end: "bottom+=50 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);
gsap.fromTo('.one', 
  { x: 100, opacity: 0 }, 
  { 
    x: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    stagger:0.15,
    scrollTrigger: {
      trigger: '.about',
      // markers: true, // Remove after testing
      scrub: true, 
      start: "top-=200 10%",  // Start when '.Work' is 80% in view
      end: "bottom+=50 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);
gsap.fromTo('.two', 
  { x: 100, opacity: 0 }, 
  { 
    x: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.in',
    stagger:0.15,
    scrollTrigger: {
      trigger: '.about',
      // markers: true, // Remove after testing
      scrub: true, 
      start: "top-=200 10%",  // Start when '.Work' is 80% in view
      end: "bottom+=50 10%" // End when '.Work' reaches 110% of the viewport
    }
  }
);