const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
let prev = 0;
return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
    prev = now;
    return func(...args);
    }
}
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
    //less repetative code
    const div = document.createElement("div")
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    const img = document.createElement("img");
    img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1752242734546-b7832ee65d3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img,{
        y:"0",
        ease: Power1,
        duration: 0.6
    });

    gsap.to(img,{
        y:"100%",
        delay: 0.6,
        ease: Power1,
        // duration: 0.2,

    })

    setTimeout(function(){
        div.remove();
    },1000)

}, 400));



 