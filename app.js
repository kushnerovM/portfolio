gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    effects : true,
    normalizeScroll : true
});

const AID = ['about','projects','contact'];
//selectors
let links = document.querySelector(".menu__list").querySelectorAll("a");

links.forEach((li,index)=>li.addEventListener("click",(event)=>{
    event.preventDefault();
    gsap.to(window, {duration: 2, scrollTo: '#'+AID[index]});
}));