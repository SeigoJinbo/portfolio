const tab = () => {
  $("#myTab li:last-child a").tab("show");
};

const navbar = document.querySelector(".port-nav");
const navStyle = getComputedStyle(navbar);

const content = document.querySelector(".tab-content");
const contentStyle = getComputedStyle(content);

const portLink = document.querySelector(".port-link");
portLink.addEventListener("click", (event) => {
  event.preventDefault();
  // TweenMax.to(".portfolio", 0.5, { x: 2000, ease: Circ.easeOut });

  const navHeight = navStyle.height;
  const contentHeight = contentStyle.height;
  const sum = parseInt(contentHeight) + parseInt(navHeight) + 4;
  TweenMax.to(".port-border", 0, {
    css: { display: "block" },
    delay: 0,
    ease: Circ.easeout,
  });
  TweenMax.to(".port-border", 0.3, {
    css: { width: "100%" },
    delay: 0.1,
    ease: Power2.easeOut,
  });
  TweenMax.to(".port-border", 0.3, {
    css: { left: "0%" },
    delay: 0.1,
    ease: Power2.easeOut,
  });

  TweenMax.to(".port-border", 0.5, {
    css: { top: "25%" },
    delay: 0.3,
    ease: Power1.easeOut,
  });
  TweenMax.to(".port-border", 0.5, {
    css: { height: `${sum}px` },
    delay: 0.3,
    ease: Power1.easeOut,
  });

  TweenMax.to(".port-border", 0.1, {
    css: { background: "white" },
    delay: 0.7,
  });
  TweenMax.to(".port-border", 0.1, {
    css: { background: "black" },
    delay: 0.8,
  });

  TweenMax.to(".port-border", 0.1, {
    css: { background: "transparent" },
    delay: 1,
  });

  TweenMax.staggerTo(".port-border", 0, {
    css: { className: "+=no-signal" },
    delay: 0.9,
  });
  TweenMax.staggerTo(".port-border", 0, {
    css: { className: "-=no-signal" },
    delay: 1,
  });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=noise" },
    delay: 1.1,
  });

  TweenMax.to(".portfolio", 0.5, {
    css: { display: "block" },
    delay: 1.2,
    ease: Circ.easein,
  });

  // TweenMax.to(".portfolio", 0.5, {
  //   css: { display: "none" },
  //   delay: 1.3,
  // });

  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "-=noise" },
    delay: 2,
  });

  // TweenMax.to(".portfolio", 0, {
  //   css: { display: "block" },
  //   delay: 1.9,
  // });
  TweenMax.staggerTo(".port-border", 0.25, {
    css: { className: "+=no-signal2" },
    delay: 2.1,
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
    ease: Power1.easeOut,
  });
  TweenMax.to(".port-border", 0.4, {
    css: { top: "50%" },
    delay: 0.4,
    ease: Power1.easeOut,
  });

  TweenMax.to(".port-border", 0.2, {
    css: { width: "0%" },
    delay: 0.9,
    ease: Power1.easeOut,
  });
  TweenMax.to(".port-border", 0.2, {
    css: { left: "50%" },
    delay: 0.9,
    ease: Power1.easeOut,
  });
  TweenMax.to(".port-border", 0, {
    css: { display: "none" },
    delay: 1.3,
    ease: Circ.easeout,
  });
});
