document.querySelectorAll("#links a").forEach(function(dets){
    dets.addEventListener("mouseover", function(elem){
        gsap.to("#sj-footer #images img",{
            x: elem.target.dataset.index * -100 + "%",
            duration: 1.2
        })
    })
})


document.querySelector("#sj-main #nav i").addEventListener("click", function(){
    var menu = gsap.timeline();
    menu.to("#menu", {
        top : "0%",
        right : "0%",
        height : "100vh",
        width : "100%",
        duration : 1,
        ease : "Circ.easeOut"
    })
    .from("#menu #links a", {
        duration : 1,
        y : 20,
        opacity : 0,
        stagger : 0.5
    })
    .to("#menu #cut", {
        duration : 1,
        opacity : 1
    })
    
})
document.querySelector("#menu #cut").addEventListener("click", function(){
    gsap.to("#menu", {
        top : "-100%",
        duration : 1,
        ease : "Circ.easeIn"
    })
})




ScrollTrigger.create({
    onUpdate : function(dets){
        gsap.to("#progressBar",{
            width : Math.floor(dets.progress*100)+"%",
            ease : "easeInOut"
        })
    }
})


var train = gsap.timeline({
    scrollTrigger : {
        trigger : "#main2",
        start : "center center",
        scrub : 3,
        pin : true
    }
});
train.to("#main2 #leadingPic", {
    top : "50%",
    rotation:720
})
.to("#main2 #restPics", {
    left : "63%"
})
.to(".train", {
    x : "-515"
})
.to("#main2 #leadingPic", {
    // top : "10%",
    rotation : 765
})
.to("#main2 #restPics #pic", {
    // y : "-50%",
    stagger : 0.5,
    rotation : 45
})


var thanks = gsap.timeline({
    scrollTrigger : {
        trigger : "#main3",
        start : "center center",
        scrub : 3,
        // markers : true,
        pin : true
    }
});

thanks.to("#main3 #strip .box", {
    rotation : 20,
    opacity : 1,
    stagger : 0.5
}, "a")
.to("#main3 h1 span", {
    y : -30,
    stagger : 0.5
}, "a")
.to("#main3 h1 span", {
    delay : 0.5,
    y : 30,
    stagger : 0.5
}, "a")
.to("#main3 #strip .box",{
    opacity : 0,
    delay : 0.5,
    stagger : 0.5
}, "a")

gsap.to("#section1 #card",{
    scrollTrigger : {
        trigger : "#main1",
        start : "top 100%",
        end : "0% 80%",
        scrub : 2,
        // markers : true
    },
    y : "-120vh",
    rotation : 180
})

var tl1 = gsap.timeline({
    scrollTrigger : {
        trigger : "#main1",
        start : "top 50%",
        end : "80% 20%",
        scrub : 1
        // markers : true
    }
});
var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : "#main1",
        start : "top 50%",
        end : "80% 20%",
        scrub : 1
        // markers : true
    }
});
var tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : "#main1",
        start : "top 50%",
        end : "80% 20%",
        scrub : 1
        // markers : true
    }
});
tl1.to("#main1 #box #disc img:nth-child(1)", {
    rotation : -80
})
tl2.to("#main1 #box #disc img:nth-child(2)", {
    rotation : 20
})
tl3.to("#main1 #box #disc img:nth-child(3)", {
    rotation : -80
})