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

const isMobile = window.innerWidth < 768;

const radius =
index % 2 === 0
? 180
: 130;

const offset =
index * (Math.PI * 2 / orbitDots.length);

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

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop - 200;

if (window.scrollY >= sectionTop) {

    current = section.id;

}

});

navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

    }

});

});

/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinksMenu =
document.querySelector(".nav-links");

if(menuToggle && navLinksMenu){

menuToggle.addEventListener("click",()=>{

navLinksMenu.classList.toggle("active");

});

}



document
.querySelectorAll(".nav-link")
.forEach(link=>{

link.addEventListener(
"click",
()=>{

navLinksMenu.classList.remove(
"active"
);

menuToggle.textContent = "☰";

}
);

});

/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
document.querySelectorAll(".filter-btn");

const projectItems =
document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>
btn.classList.remove("active")
);

button.classList.add("active");

const filter =
button.dataset.filter;

projectItems.forEach(card=>{

if(card.dataset.category === filter){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

});
   
/* =========================
   YOGIEZ MODAL
========================= */

function openYogiezModal(){

document
.getElementById("yogiezModal")
.classList.add("active");

document.body.style.overflow = "hidden";

}

function closeYogiezModal(){

document
.getElementById("yogiezModal")
.classList.remove("active");

document.body.style.overflow = "auto";

}

/* =========================
   HIREFLOW MODAL
========================= */

function openHireflowModal(){

document
.getElementById("hireflowModal")
.classList.add("active");

document.body.style.overflow = "hidden";

}

function closeHireflowModal(){

document
.getElementById("hireflowModal")
.classList.remove("active");

document.body.style.overflow = "auto";

}

window.addEventListener("click",(e)=>{

const yogiezModal =
document.getElementById("yogiezModal");

const hireflowModal =
document.getElementById("hireflowModal");

if(e.target === yogiezModal){

closeYogiezModal();

}

if(e.target === hireflowModal){

closeHireflowModal();

}

});

