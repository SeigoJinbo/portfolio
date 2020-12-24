const aboutLink = document.querySelector(".more-link");
const blueBox = document.querySelector(".blue-box");
const redBox = document.querySelector(".red-box");

const about = document.querySelector(".more-box");
const aboutStyle = getComputedStyle(about);
const aboutHeight = parseInt(aboutStyle.height);
const aboutWidth = parseInt(aboutStyle.width);

const width = aboutWidth + 26;
const height = aboutHeight + 26;

// console.log(aboutHeight);
console.log(aboutHeight);
console.log(aboutWidth);

// aboutLink.addEventListener("click", (event) => {
//   event.preventDefault();

//   TweenMax.to(".more-box", 0, {
//     css: { display: `block` },
//     delay: 0,
//     ease: Circ.easeout,
//   });
//   TweenMax.to(".red-box", 0.5, {
//     css: { height: `${height}px` },
//     delay: 0,
//     ease: Circ.easeout,
//   });
//   TweenMax.to(".blue-box", 0.5, {
//     css: { height: `${height}px` },
//     delay: 0,
//     ease: Circ.easeout,
//   });
//   TweenMax.to(".red-box", 0.5, {
//     css: { width: `${width}px` },
//     delay: 0.5,
//     ease: Circ.easeout,
//   });
//   TweenMax.to(".blue-box", 0.5, {
//     css: { width: `${width}px` },
//     delay: 0.5,
//     ease: Circ.easeout,
//   });
//   TweenMax.to(".more-text", 0.5, {
//     css: { display: `block` },
//     delay: 1,
//     ease: Circ.easeout,
//   });
//   TweenMax.to(".more-text", 0.5, {
//     css: { background: `black` },
//     delay: 1,
//     ease: Circ.easeout,
//   });
// });
