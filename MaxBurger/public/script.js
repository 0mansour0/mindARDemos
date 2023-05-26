let touchstartX = 0;
let touchendX = 0;
let selector = 0;
let burgers = ["#burger1", "#burger2"];

document.addEventListener("DOMContentLoaded", function () {
    const model = document.getElementById("burger-model");
    const container = document.getElementById("container");
    const text = document.getElementById("text");
    //IF it will run on touch screen

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    });
    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        container.style.visibility = "hidden";
        text.style.visibility = "hidden";
        // swipe left
        if (touchendX < touchstartX) {
            selector = (selector - 1) % burgers.length;
        }
        // swipe right
        if (touchendX > touchstartX) {
            selector = (selector + 1) % burgers.length;
        }
        model.setAttribute("src", burgers[Math.abs(selector)]);
    });



});