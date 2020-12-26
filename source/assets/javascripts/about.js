const aboutLink = document.querySelector(".more-link");
const aboutClose = document.querySelector(".about-close");

let aboutAnim = () => {
  TweenMax.to(".brush", 0, {
    css: { display: `block` },
    delay: 0,
    ease: Circ.easeout,
  });
  TweenMax.to(".brush", 0.3, {
    css: { transform: `scaleX(1)` },
    delay: 0.1,
    ease: Power2.easeOut,
  });
  TweenMax.to(".brush-text", 0.25, {
    css: { opacity: `1` },
    delay: 0.3,
    ease: Circ.easeout,
  });

  TweenMax.from(".paragraph-1", 0.25, {
    css: { opacity: `0` },
    delay: 0.75,
    ease: Circ.easeout,
  });
  TweenMax.from(".paragraph-1", 2, {
    css: { left: `200px` },
    delay: 0.75,
    ease: Power2.easeOut,
  });
  TweenMax.from(".paragraph-2", 0.25, {
    css: { opacity: `0` },
    delay: 1.4,
    ease: Circ.easeout,
  });
  TweenMax.from(".paragraph-2", 2, {
    css: { left: `560px` },
    delay: 1.4,
    ease: Power2.easeOut,
  });
  TweenMax.from(".paragraph-3", 0.25, {
    css: { opacity: `0` },
    delay: 2,
    ease: Circ.easeout,
  });
  TweenMax.from(".paragraph-3", 2, {
    css: { left: `600px` },
    delay: 2,
    ease: Power2.easeOut,
  });

  TweenMax.from(".create", 1, {
    css: { right: `300px` },
    delay: 0.5,
    ease: Circ.easeOut,
  });
  TweenMax.from(".blck", 3, {
    css: { height: `400px` },
    delay: 0.3,
    ease: Power2.easeOut,
  });
  TweenMax.from(".blck", 1, {
    css: { boxShadow: `0px 0px 1px cyan` },
    delay: 2.4,
    ease: Power2.easeOut,
  });

  TweenMax.from(".random", 4, {
    css: { letterSpacing: `1px` },
    delay: 0.3,
    ease: Power4.easeOut,
  });
  TweenMax.from(".monkey", 1, {
    css: { opacity: `0` },
    delay: 0.8,
  });

  TweenMax.from(".za", 1.5, {
    css: { top: `0px` },
    delay: 0.4,
    ease: Power2.easeOut,
  });
  TweenMax.from(".i", 1.5, {
    css: { top: `0px` },
    delay: 0.4,
    ease: Power2.easeOut,
  });
  TweenMax.from(".n", 1.5, {
    css: { top: `0px` },
    delay: 0.4,
    ease: Power2.easeOut,
  });
  TweenMax.from(".sekai", 4, {
    css: { fontSize: `70px` },
    delay: 0.2,
    ease: Power1.easeOut,
  });
};

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  aboutAnim();
});
aboutClose.addEventListener("click", (event) => {
  TweenMax.to(".brush-text", 0, {
    css: { opacity: `0` },
    delay: 0,
    ease: Circ.easeout,
  });
  TweenMax.to(".brush", 0.25, {
    css: { transform: `scaleX(.001)` },
    delay: 0.35,
    ease: Power3.easeOut,
  });
  TweenMax.to(".brush", 0, {
    css: { display: `none` },
    delay: 0.75,
    ease: Circ.easeout,
  });
});
