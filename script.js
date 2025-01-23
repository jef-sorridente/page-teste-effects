document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.to(".box", {
//     scrollTrigger: {
//       trigger: ".box",
//       toggleActions: "restart pause reverse pause",
//     },
//     x: 500,
//     duration: 1,
//   });

  const targetSection = document.getElementById("target-section");
  const containerCards = document.getElementById("container-cards");

  window.addEventListener("scroll", () => {
    // const sectionTop = targetSection.getBoundingClientRect().top;
    const sectionBottom = targetSection.getBoundingClientRect().bottom;
    const sectionHeight = targetSection.offsetHeight;
    const windowHeight = window.innerHeight;

    let progress = Math.min(
      Math.max((windowHeight - sectionBottom) / sectionHeight, 0),
      1
    );

    const translateX = 33.3 + progress * -33.3;
    containerCards.style.transform = `translateX(${translateX}%)`;

    const trasformValue = containerCards.style.transform;

    if (trasformValue.includes("translateX")) {
      const numericValue = parseInt(
        trasformValue.match(/translateX\((-?\d+(\.\d+)?)%\)/)[1]
      );

      if (numericValue > 0 && sectionBottom < sectionHeight + 107) {
        containerCards.classList.add("fixed");
      } else {
        containerCards.classList.remove("fixed");
      }

    }
  });

  //   window.addEventListener("scroll", () => {
  //     const containerCards = document.getElementById("container-cards");
  //     const triggerPoint = window.innerHeight / 2;

  //     const scrollY = window.scrollY;

  //     console.log(scrollY);

  //     const containerTop = containerCards.getBoundingClientRect().top;

  //     if (containerTop < triggerPoint) {
  //         containerCards.style.transform = "translateX(0)";
  //       containerCards.style.background = "red";
  //     } else {
  //       containerCards.style.background = "blue";
  //       containerCards.style.transform = "translateX(33%)";
  //     }

  //     // if (containerTop < triggerPoint) {
  //     //   containerCards.classList.add('fixed')
  //     //   containerCards.style.transform = "translateX(0)";
  //     //   containerCards.style.position = "fixed";
  //     // } else {
  //     //   // containerCards.classList.remove('fixed')
  //     //   containerCards.style.transform = "translateX(33.3%)";
  //     //   containerCards.style.position = "relative";
  //     // }
  //   });
});
