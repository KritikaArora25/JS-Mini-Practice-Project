var rect = document.querySelector("#rect");

window.addEventListener("mousemove",function(dets){
    var rectWidth = rect.getBoundingClientRect().width;

    var xval = gsap.utils.mapRange(0, window.innerWidth, 200 + rectWidth / 2, window.innerWidth - (rectWidth /2) - 200, dets.clientX);
    gsap.to('#rect',{
        left: xval + "px",
        ease: Power3.out
    });
});