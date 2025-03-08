//detect inactivity and endless scrolling
let idleTime = 0;
const idleLimit = 10*60*1000;
const scrollThreshold = 5000; //pixel limit for excessive scrolling

function resetIdleTimer(){
    clearTimeout(window.idleTimeout);
    window.idleTimeout = setTimeout(showIdleWarning,idleLimit);
}

function showIdleWarning(){
    alert("tf? you still here? might as well adopt a cat instead of staring at this 😾");
}

window.addEventListener("scroll", ()=>{
    if(window.scrollY > scrollThreshold){
        alert("still scrolling? get a life breow😼");
    }
    resetIdleTimer();
});

window.addEventListener("mousemove",resetIdleTimer);
window.addEventListener("keydown",resetIdleTimer);

resetIdleTimer();