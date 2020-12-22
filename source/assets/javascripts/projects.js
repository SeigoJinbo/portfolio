const tab = () => {
  $("#myTab li:last-child a").tab("show");
};

const navbar = document.querySelector(".port-nav");
const navStyle = getComputedStyle(navbar);
const navHeight = navStyle.height;
console.log(navHeight);

const content = document.querySelector(".tab-content");
const contentStyle = getComputedStyle(content);
const contentHeight = contentStyle.height;
const sum = parseInt(contentHeight) + parseInt(navHeight) + 4;
console.log(sum);

const portLink = document.querySelector(".port-link");
portLink.addEventListener("click", (event) => {
  event.preventDefault();
  // TweenMax.to(".portfolio", 0.5, { x: 2000, ease: Circ.easeOut });

  TweenMax.to(".port-border", 0, {
    css: { display: "block" },
    delay: 0,
    ease: Circ.easeout,
  });
  TweenMax.to(".port-border", 0.3, {
    css: { width: "100%" },
    delay: 0.1,
    ease: Circ.easeout,
  });
  TweenMax.to(".port-border", 0.3, {
    css: { left: "0%" },
    delay: 0.1,
    ease: Circ.easeout,
  });

  TweenMax.to(".port-border", 0.5, {
    css: { top: "25%" },
    delay: 0.3,
    ease: Circ.easeout,
  });
  TweenMax.to(".port-border", 0.5, {
    css: { height: `${sum}px` },
    delay: 0.3,
    ease: Circ.easeout,
  });

  TweenMax.to(".port-border", 0.1, {
    css: { background: "black" },
    delay: 0,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=noise" },
    delay: 0.1,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=no-signal" },
    delay: 0.2,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=noise" },
    delay: 0.3,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=no-signal" },
    delay: 0.4,
  });
  // TweenMax.to(".port-border", 0.1, {
  //   css: { background: "white" },
  //   delay: 0.9,
  // });

  TweenMax.to(".port-border", 0.1, {
    css: { background: "transparent" },
    delay: 0.9,
  });

  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=noise" },
    delay: 1,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=noise" },
    delay: 1.1,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=no-signal" },
    delay: 1.2,
  });

  TweenMax.to(".portfolio", 0.5, {
    css: { display: "block" },
    delay: 1.3,
    ease: Circ.easein,
  });
  // TweenMax.to(".portfolio", 0.5, {
  //   css: { display: "none" },
  //   delay: 1.4,
  //   ease: Circ.easein,
  // });
  // TweenMax.to(".portfolio", 0.5, {
  //   css: { display: "block" },
  //   delay: 1.5,
  //   ease: Circ.easein,
  // });

  TweenMax.to(".portfolio", 0.5, {
    css: { display: "none" },
    delay: 1.5,
  });

  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=no-signal" },
    delay: 1.5,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=noise" },
    delay: 1.6,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=noise" },
    delay: 2.1,
  });

  TweenMax.to(".portfolio", 0.5, {
    css: { display: "block" },
    delay: 2.1,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=no-signal2" },
    delay: 2.3,
  });
});

const portLink2 = document.querySelector(".port-link2");
portLink2.addEventListener("click", (event) => {
  event.preventDefault();
  TweenMax.to(".portfolio", 0, {
    css: { display: "none" },
    delay: 0,
    ease: Circ.easein,
  });

  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=no-signal2" },
    delay: 0.15,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=noise" },
    delay: 0.2,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=noise" },
    delay: 0.3,
  });
  TweenMax.to(".port-border", 0.1, {
    css: { background: "white" },
    delay: 0.3,
  });
  TweenMax.to(".port-border", 0.1, {
    css: { background: "transparent" },
    delay: 0.4,
  });

  TweenMax.to(".port-border", 0.4, {
    css: { height: "0%" },
    delay: 0.4,
    ease: Circ.easeout,
  });
  TweenMax.to(".port-border", 0.4, {
    css: { top: "50%" },
    delay: 0.4,
    ease: Circ.easeout,
  });

  TweenMax.to(".port-border", 0.3, {
    css: { width: "0%" },
    delay: 0.8,
    ease: Circ.easeout,
  });
  TweenMax.to(".port-border", 0.3, {
    css: { left: "50%" },
    delay: 0.8,
    ease: Circ.easeout,
  });
  TweenMax.to(".port-border", 0, {
    css: { display: "none" },
    delay: 1.2,
    ease: Circ.easeout,
  });
});
// TweenMax.to(".port-border", 1, {
//   css: { scaleX: "1" },
//   delay: 0,
//   ease: Circ.easein,
// });
// TweenMax.to(".port-border", 0.7, {
//   css: { scaleY: "1" },
//   delay: 1,
//   ease: Circ.easein,
// });

// event.preventDefault();
//   TweenMax.to(".tab-content", 0.5, { scaleY: 0, ease: Circ.easein });
//   TweenMax.to(".portfolio", 0.3, { x: -2000, delay: 0.5, ease: Circ.easein });
