document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let items = gsap.utils.toArray(".items-cards"),
    pageWrapper = document.querySelector(".page-wrapper");

  items.forEach((container, i) => {
    let localItems = container.querySelectorAll(".item"),
      distance = () => {
        let lastItemBounds =
            localItems[localItems.length - 1].getBoundingClientRect(),
          containerBounds = container.getBoundingClientRect();
        return Math.max(0, lastItemBounds.right - containerBounds.right);
      };
    gsap.to(container, {
      x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        pinnedContainer: pageWrapper,
        end: () => "+=" + distance(),
        pin: pageWrapper,
        scrub: true,
        invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
      },
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#container-box",
      start: "top top",
      // end: "+=3000px",
      scrub: 2,
      pin: true,
      markers: true,
    },
  });

  tl.from("#box-1", { x: "100vw", stagger: 0.1 });
  tl.from("#box-1", { height: "5px", top: "50%" });
  tl.from(".title-box", { opacity: 0});
  
  // .from("#container-box", {})
  // .from("#box-1", { x: "100vw", stagger: 0.1, duration: 0.5 })
  // .from("#box-1", { height: "5px", top: "50%", duration: 0.5, delay: 0.5 });

  // gsap.to(".box-opening", {
  //   scrollTrigger: {
  //     trigger: "#container-box",
  //     start: "top",
  //     end: "+=3000px",
  //     scrub: 2,
  //     pin: true,
  //     markers: true,
  //   },
  //   xPercent: 100,
  //   // ease: "back",
  //   // height: "100vh",
  //   // duration: 3,
  //   // ease: "power2.out",
  // });

  // gsap.to(".box-2", {
  //   scrollTrigger: {
  //     trigger: ".box2",
  //     start: "top center",
  //     end: "bottom",
  //     scrub: 3,
  //     pin: true,
  //     markers: true,
  //   },
  //   xPercent: -50,
  //   height: "2000px",
  //   duration: 3,
  //   ease: "power2.out",
  // });
});
