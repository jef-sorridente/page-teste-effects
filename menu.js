document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const header = gsap.timeline({
    scrollTrigger: {
      trigger: ".header",
      start: "top",
      end: "bottom",
      toggleActions: "play none none reverse",
      markers: true,
    },
  });

  header.to(".header", {
    duration: 0.3,
    ease: "power2.out",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    // backdropFilter: "blur(5px)",
    // webkitBackdropFilter: "blur(5px)",
  });

  header.to(".container", {
    duration: 0.3,
    ease: "power2.out",
    padding: "16px 32px",
  }, '<0.1');

});
