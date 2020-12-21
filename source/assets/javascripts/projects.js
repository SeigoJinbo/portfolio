const tab = () => {
  $("#myTab li:last-child a").tab("show");
};
const portLink = document.querySelector(".port-link");
portLink.addEventListener("click", (event) => {
  event.preventDefault();
  TweenMax.to(".portfolio", 0.5, { x: 2000, ease: Circ.easeOut });
  TweenMax.to(".tab-content", 0.3, {
    css: { scaleY: "1" },
    delay: 0.5,
    ease: Circ.easein,
  });
});
const portLink2 = document.querySelector(".port-link2");
portLink2.addEventListener("click", (event) => {
  event.preventDefault();
  TweenMax.to(".tab-content", 0.5, { scaleY: 0, ease: Circ.easein });
  TweenMax.to(".portfolio", 0.3, { x: -2000, delay: 0.5, ease: Circ.easein });
});
