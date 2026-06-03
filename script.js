const revealElements = document.querySelectorAll(
".section,.card,.hero-content"
);

window.addEventListener("scroll", reveal);

function reveal(){

const trigger =
window.innerHeight * 0.85;

revealElements.forEach((el)=>{

const top =
el.getBoundingClientRect().top;

if(top < trigger){
el.classList.add("active");
}

});

}

revealElements.forEach((el)=>{
el.classList.add("reveal");
});

reveal();
