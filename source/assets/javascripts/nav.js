// const sections = document.querySelectorAll("#group");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const sections = [about, projects, contact];
const navbar = document.querySelector("header");
const wave = document.querySelector("svg");
const colors = document.querySelectorAll(".shape-fill");
const wave1 = document.getElementById("wave1");
const wave2 = document.getElementById("wave2");
const wave3 = document.getElementById("wave3");
const path3 = [
  { value: "M 0 14 C 552 114 794 -73 920 56 V 0 H 0 V 67 Z" },
  { value: "M 0 37 C 425 -40 621 69 920 36 V 0 H 0 V 67 Z" },
  { value: "M 0 57 C 510 -78 535 106 920 60 V 0 H 0 V 67 Z" },
];
const path2 = [
  {
    value:
      "M 0 67 C 161 7 295 56 361 52 C 545 52 774 -44 920 93 V 0 H 0 V 67 Z",
  },
  {
    value:
      "M 0 67 C 276 85 331 24 524 34 C 670 43 684 85 920 73 V 0 H 0 V 67 Z",
  },
  {
    value:
      "M 0 87 C 312 -56 514 72 731 60 C 827 54 886 10 920 60 V 0 H 0 V 67 Z",
  },
];

const hilite = document.querySelector(".hilite");

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    console.log(className);
    // console.log(wave);
    if (className === "about") {
      // wave1.style.setProperty("d", value1);
      // wave2.style.setProperty("d", value2);
      // wave3.style.setProperty("d", value3);
      // console.log(wave1);
      // const timeline = anime.timeline({
      //   duration: 750,
      //   easing: "easeOutExpo",
      // });
      // anime({
      //   targets: "#wave1",
      //   d: [{ value: value2 }],
      //   easing: "easeInOutExpo",
      //   duration: 1300,
      // });
      anime({
        targets: "#wave2",
        d: [path2[0]],
        easing: "easeOutQuint",
        duration: 2400,
      });
      let rec = anime({
        targets: "#wave3",
        d: [path3[0]],
        easing: "easeOutQuint",
        duration: 2400,
      });
      navbar.style.setProperty("background-color", "#F0711B");
      colors.forEach((color) => color.style.setProperty("fill", "#F0711B"));
    }

    if (className === "projects") {
      // anime({
      //   targets: "#wave1",
      //   d: [{ value: value3 }],
      //   easing: "easeInOutQuint",
      //   duration: 1300,
      //   loop: false,
      // });
      anime({
        targets: "#wave2",
        d: [path2[1]],
        easing: "easeOutQuint",
        duration: 2400,
      });
      anime({
        targets: "#wave3",
        d: [path3[1]],
        easing: "easeOutQuint",
        duration: 2400,
      });
      // currentPath1 = path1[1];
      navbar.style.setProperty("background-color", "rgb(139, 121, 246)");
      colors.forEach((color) =>
        color.style.setProperty("fill", "rgb(139, 121, 246)")
      );
    }
    if (className === "contact") {
      // anime({
      //   targets: "#wave1",
      //   d: [{ value: value1 }],
      //   easing: "easeInOutQuint",
      //   duration: 1300,
      //   loop: false,
      // });
      anime({
        targets: "#wave2",
        d: [path2[2]],
        easing: "easeOutQuint",
        duration: 2400,
        loop: false,
      });
      anime({
        targets: "#wave3",
        d: [path3[2]],
        easing: "easeOutQuint",
        duration: 2400,
      });
      // currentPath1 = path1[2];

      // wave3.style.setProperty(
      //   "d",
      //   "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
      // );
      // wave1.style.setProperty(
      //   "d",
      //   "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
      // );
      // wave2.style.setProperty(
      //   "d",
      //   "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
      // );
      colors.forEach((color) =>
        color.style.setProperty("fill", "rgb(221, 21, 21)")
      );
      navbar.style.setProperty("background-color", "rgb(221, 21, 21)");
    }

    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      hilite.style.setProperty("left", `${directions.left}px`);
      hilite.style.setProperty("top", `${directions.top}px`);
      hilite.style.setProperty("width", `${directions.width}px`);
      hilite.style.setProperty("height", `${directions.height}px`);
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

// console.log(sections);
