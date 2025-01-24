document.addEventListener("DOMContentLoaded", (event) => {
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
});
