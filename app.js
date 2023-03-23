gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const AID = ['about','projects','contact'];
//selectors
let links = document.querySelector(".menu__list").querySelectorAll("a");
let projectsList = document.querySelectorAll(".project");
const menuBtn = document.querySelector(".menu__button");
const menuList = document.querySelector(".menu");

//desctop animations
if(!ScrollTrigger.isTouch){

    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        effects : true,
        normalizeScroll : true
    });

    links.forEach((li,index)=>li.addEventListener("click",(event)=>{
        event.preventDefault();
        gsap.to(window, {duration: 1.2, scrollTo: '#'+AID[index]});
    }));

    gsap.fromTo('.start__image-container', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.start__image-container',
			start: '30%',
			end: '80%',
			scrub: true
		}
	});

  gsap.fromTo('#about>.section__header', {color: getComputedStyle(document.documentElement).getPropertyValue('--dark-strong-color'), clipPath: "polygon(0% 50%, 100% 0%, 100% 0%, 0% 50%)" }, {
    color: getComputedStyle(document.documentElement).getPropertyValue('--header-color'),
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		scrollTrigger: {
			trigger: '#about',
			 start: '-40%',
			 end: '-10%',
			scrub: true
		}
	});

  gsap.fromTo('#projects>.section__header', {color: getComputedStyle(document.documentElement).getPropertyValue('--dark-strong-color'), clipPath: "polygon(0% 100%, 100% 50%,100% 50%, 0% 100%)" }, {
    color: getComputedStyle(document.documentElement).getPropertyValue('--header-color'),
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		scrollTrigger: {
			trigger: '#projects',
			 start: '-30%',
			 end: '-0%',
			scrub: true
		}
	});

    projectsList.forEach((project,index)=>{
        gsap.fromTo(project,{
            opacity: .2,
            x: index%2?100:-100
        },{
            opacity:1,
            x: 0,
            scrollTrigger: {
				trigger: project,
                start: '-250%',
				end: 'top',
				scrub: true
			}
        })
    });
}

//mobile animations
menuBtn.addEventListener("click",()=>{
  if(!menuList.classList.contains("menu__list__active")){
    menuList.classList.add("menu__list__active");
    menuBtn.innerHTML="<i class=\"fa-solid fa-xmark\"></i>";
  } else{
    menuList.classList.remove("menu__list__active");
    menuBtn.innerHTML="<i class=\"fa-solid fa-bars\"></i>";
  }
})

links.forEach((li)=>li.addEventListener("click",()=>{
    if(menuList.classList.contains("menu__list__active")){
        menuList.classList.remove("menu__list__active");
        menuBtn.innerHTML="<i class=\"fa-solid fa-bars\"></i>";
      }
}));