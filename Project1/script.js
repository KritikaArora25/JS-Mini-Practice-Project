var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(dets){
    var rectLoc = rect.getBoundingClientRect();
    var insideRectVal = dets.clientX - rectLoc.left;

    if(insideRectVal < rectLoc.width / 2){
        var redColor = gsap.utils.mapRange(0, rectLoc.width/2 , 255 , 0 , insideRectVal);
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: "power4.out"
        });
    }else{
        var blueColor = gsap.utils.mapRange(rectLoc.width/2, rectLoc.width , 0 , 255 , insideRectVal);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: "power4.out"
        });
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white",
        ease: "power4.out"
    });
});