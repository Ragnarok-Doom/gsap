const homePageAnimation = () => {
    gsap.set(".slidesm", {scale: 5})
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            // pin: true,
            scrub: 3
        }
    })

    tl
    .to('.videoDiv',{
        '--clip': "0%",
        ease: Power2
    }, 'flag')
    .to('.slidesm', {
        scale: 1,
        ease: Power2
    }, 'flag')
    .to(".lft", {
        xPercent: -10,
        stagger: .05,
        ease: Power4
    }, 'move')
    .to(".rgt", {
        xPercent: -5,
        stagger: .05,
        ease: Power4
    }, 'move')
}

function realTalkAnimation(){
    
    gsap.to('.slide', {
        scrollTrigger: {
            trigger: '.realTalk',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })

}

function ourTeamAnimation(){

    document.querySelectorAll('.listItem').forEach(function(ele){
        ele.addEventListener('mousemove', function(det){
            gsap.to(this.querySelector('.picture'), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, det.clientX),
                // ease: Power4,
                duration: 0,
            })
        })

        ele.addEventListener('mouseleave', function(det){
            gsap.to(this.querySelector('.picture'), {
                opacity: 0,
                ease: Power4,
                duration: 0,
            })
        })
    })

}

function paraAnimation(){

    let clutter = ""
    document.querySelector('.textPara')
    .textContent.split("")
    .forEach(function(e){
        if (e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })
    document.querySelector('.textPara').innerHTML = clutter

    gsap.set('.textPara span', {opacity: .1})
    gsap.to('.textPara span', {
        scrollTrigger: {
            trigger: '.para',
            start: 'top 60%',
            end: 'bottom 90%',
            scrub: 1
        },
        opacity: 1,
        ease: Power4,
        stagger: .03
    })

}

function capsuleAnimation(){
    gsap.to(".capsule", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function bodyColor(){
    document.querySelectorAll('.section')
    .forEach(function(ele){
        ScrollTrigger.create({
            trigger: ele,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
            onEnter: function(){
                document.body.setAttribute('theme', ele.dataset.color)
            },
            onEnterBack: function(){
                document.body.setAttribute('theme', ele.dataset.color)
            }
        })
    })
}

function smoothScroller() {
    var scroll = new LocomotiveScroll();
}

homePageAnimation()
realTalkAnimation()
ourTeamAnimation()
paraAnimation()
capsuleAnimation()
bodyColor()
smoothScroller()
