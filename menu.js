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
    backgroundColor: "#000",
    position: "fixed",
    // backdropFilter: "blur(5px)",
    // webkitBackdropFilter: "blur(5px)",
  });

  header.to(
    ".container",
    {
      duration: 0.3,
      ease: "power2.out",
      // padding: "16px 32px",
    },
    "<0.1"
  );

  const cursor = document.querySelector(".cursor");
  const cursorPoint = document.querySelector(".cursor-point");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      left: e.clientX,
      top: e.clientY,
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(cursorPoint, {
      left: e.clientX,
      top: e.clientY,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  // Quando o mouse passar sobre um link ou botão
  document
    .querySelectorAll("a, button, li, .navbar-toggler-custom")
    .forEach((e) => {
      e.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          backgroundColor: '#b3d822',
          opacity: "0.5",
          width: "30px",
          height: "30px",
          duration: 0.3,
        });

        gsap.to(cursorPoint, {
          opacity: "0.5",
          width: "20px",
          height: "20px",
          duration: 0.3,
        });


      });

      e.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          backgroundColor: 'transparent',
          opacity: "1",
          width: "50px",
          height: "50px",
          duration: 0.3,
        });

        gsap.to(cursorPoint, {
          opacity: "1",
          width: "8px",
          height: "8px",
          duration: 0.3,
        });
      });
    });
});
