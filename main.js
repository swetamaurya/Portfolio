var typed = new Typed(".text", {
    strings:["Sweta Maurya",  " and I am a Backend Developer !"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})

document.addEventListener("DOMContentLoaded", function() {
    const backendItems = document.querySelectorAll('.backend-item');
    backendItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('slide-in');
        }, index * 200); // Staggered animation
    });
});