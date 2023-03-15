gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    effects : true,
    normalizeScroll : true
});