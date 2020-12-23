const logo = document.querySelectorAll("#logo path");
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
const neon = document.querySelector(".neon");
// Get the position on the page of the SVG
var svgLocation = document
  .getElementById("proj-silver")
  .getBoundingClientRect();

// Scroll offset that triggers animation start.
// In this case it is the bottom of the SVG.
// var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;

// Function to handle the scroll event.
// Add an event handler to the document for the "onscroll" event
const projLetters = document.querySelectorAll(".project-letter");
const projFill = document.querySelectorAll(".project-fill");

const contactLetters = document.querySelectorAll(".contact-letter");
const contactFill = document.querySelectorAll(".contact-fill");

const aboutLetters = document.querySelectorAll(".about-letter");
const aboutFill = document.querySelectorAll(".about-fill");

const mail = document.querySelector(".fa-envelope");
const linked = document.querySelector(".fa-linkedin");
const git = document.querySelector(".fa-github");

const label = document.querySelector(".type");
// function scrollAnimTriggerCheck(evt) {
//   var viewBottom = window.scrollY + window.innerHeight + 1000;
//   if (viewBottom > offsetToTriggerAnimation) {
//     // Start the SMIL animation
//     for (let i = 0; i < projLetters.length; i++) {
//       projLetters[i].beginElementAt(parseFloat(`${i}` * 0.2));
//       setTimeout(() => {
//         projFill.forEach(function (letter) {
//           letter.beginElement();
//         });
//       }, 3000);
//     }
//     for (let i = 0; i < contactLetters.length; i++) {
//       contactLetters[i].beginElementAt(parseFloat(`${i}` * 0.3));
//       setTimeout(() => {
//         contactFill.forEach(function (letter) {
//           letter.beginElement();
//         });
//       }, 3300);
//     }
//     for (let i = 0; i < aboutLetters.length; i++) {
//       aboutLetters[i].beginElementAt(parseFloat(`${i}` * 0.15));
//       setTimeout(() => {
//         aboutFill.forEach(function (letter) {
//           letter.beginElement();
//         });
//       }, 2500);
//     }

//     setInterval(() => {
//       neon.classList.add("on");
//     }, 3500);
//     // Remove the event handler so it doesn't trigger again
//     document.removeEventListener("scroll", scrollAnimTriggerCheck);
//   }
// }

window.onload = (event) => {
  for (let i = 0; i < projLetters.length; i++) {
    label.classList.add("type-anim");

    projLetters[i].beginElementAt(parseFloat(`${i}` * 0.2));
    setTimeout(() => {
      projFill.forEach(function (letter) {
        letter.beginElement();
      });
    }, 3000);
  }
  for (let i = 0; i < contactLetters.length; i++) {
    contactLetters[i].beginElementAt(parseFloat(`${i}` * 0.3));
    setTimeout(() => {
      contactFill.forEach(function (letter) {
        letter.beginElement();
      });
    }, 3300);
  }
  for (let i = 0; i < aboutLetters.length; i++) {
    aboutLetters[i].beginElementAt(parseFloat(`${i}` * 0.15));
    setTimeout(() => {
      aboutFill.forEach(function (letter) {
        letter.beginElement();
      });
    }, 2500);
  }

  setInterval(() => {
    neon.classList.add("on");
  }, 3500);

  setInterval(() => {
    mail.classList.add("mail-light");
  }, 3500);
  setInterval(() => {
    linked.classList.add("linked-light");
  }, 3500);
  setInterval(() => {
    git.classList.add("git-light");
  }, 4500);
};

// Add an event handler to the document for the "onscroll" event
// document.addEventListener("scroll", scrollAnimTriggerCheck);
// export { scrollAnimTriggerCheck };
