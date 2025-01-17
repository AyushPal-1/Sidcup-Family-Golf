let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})

gsap.to('#navb',{
    backgroundColor :"#000",
    hight: "60px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#navb",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})


gsap.from("#about-us img,#about-us-in", {
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:1
    }

})

gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:1
    }

})

gsap.from("#colon1",{
    y:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub:4

    }
})
gsap.from("#colon2",{
    y:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub:4

    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start: "top 75%",
        end: "top 65%",
        scrub:4

    }
})