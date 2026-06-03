/* =========================
   TYPING EFFECT
========================= */

const roles = [
"Frontend Developer",
"Web Designer",
"Video Editor",
"AI Creator",
"Digital Entrepreneur"
];

const typingElement =
document.getElementById("typing-text");

let roleIndex = 0;

setInterval(()=>{

typingElement.style.opacity = "0";

setTimeout(()=>{

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

typingElement.textContent =
roles[roleIndex];

typingElement.style.opacity = "1";

},400);

},2500);

/* =========================
   REVEAL ANIMATION
========================= */

const reveals =
document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach((element)=>{

const top =
element.getBoundingClientRect().top;

const trigger =
window.innerHeight - 100;

if(top < trigger){

element.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();

/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener(
"mousemove",
(e)=>{

cursorGlow.style.left =
e.clientX - 150 + "px";

cursorGlow.style.top =
e.clientY - 150 + "px";

}
);

/* =========================
   NAVBAR EFFECT
========================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.65)";

navbar.style.backdropFilter =
"blur(30px)";

navbar.style.borderBottom =
"1px solid rgba(255,255,255,.08)";

}else{

navbar.style.background =
"rgba(0,0,0,.35)";

navbar.style.backdropFilter =
"blur(20px)";

navbar.style.borderBottom =
"1px solid rgba(255,255,255,.05)";

}

}
);

/* =========================
   PARALLAX FLOAT
========================= */

window.addEventListener(
"mousemove",
(e)=>{

const x =
(e.clientX / window.innerWidth) - 0.5;

const y =
(e.clientY / window.innerHeight) - 0.5;

const heroVisual =
document.querySelector(".hero-visual");

if(heroVisual){

heroVisual.style.transform =
`translate(${x * 20}px, ${y * 20}px)`;

}

}
);

/* =========================
   PROJECT HOVER GLOW
========================= */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card)=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =
`
radial-gradient(
circle at ${x}px ${y}px,
rgba(255,255,255,.08),
rgba(255,255,255,.03)
)
`;

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.background =
"rgba(255,255,255,.03)";

}
);

});

/* =========================
   ORBIT DOT ANIMATION
========================= */

const orbitDots =
document.querySelectorAll(
".orb"
);

let angle = 0;

function animateOrbit(){

angle += 0.01;

orbitDots.forEach(
(dot,index)=>{

const radius =
index % 2 === 0
? 180
: 130;

const offset =
index * Math.PI / 2;

const x =
Math.cos(angle + offset)
* radius;

const y =
Math.sin(angle + offset)
* radius;

dot.style.transform =
`translate(${x}px, ${y}px)`;

}
);

requestAnimationFrame(
animateOrbit
);

}

animateOrbit();

/* =========================
   SCROLL PROGRESS BAR
========================= */

const progress =
document.createElement("div");

progress.style.position =
"fixed";

progress.style.top =
"0";

progress.style.left =
"0";

progress.style.height =
"3px";

progress.style.width =
"0%";

progress.style.zIndex =
"9999";

progress.style.background =
"white";

document.body.appendChild(
progress
);

window.addEventListener(
"scroll",
()=>{

const scrollTop =
window.scrollY;

const docHeight =
document.documentElement
.scrollHeight -
window.innerHeight;

const percent =
(scrollTop / docHeight)
* 100;

progress.style.width =
percent + "%";

}
);

/* =========================
   HERO FADE LOAD
========================= */

window.addEventListener(
"load",
()=>{

document.body.style.opacity =
"0";

setTimeout(()=>{

document.body.style.transition =
"opacity 1s ease";

document.body.style.opacity =
"1";

},100);

}
);
