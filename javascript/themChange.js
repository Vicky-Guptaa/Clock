let mainColor = document.querySelectorAll(".bg-dark-bg");
let borderColor = document.querySelectorAll(".border-dark-bd");
let centerDotBorderColor = document.querySelectorAll(".border-dark-bg");
let primarAccent = document.querySelectorAll(".bg-primary-accent")

let digitalTime = document.querySelectorAll(".digital-time");
let htmlIcon = document.querySelector(".button section");
let minuteHandColor = document.querySelectorAll(".minute span");
let hourHandColor = document.querySelectorAll(".hour span");
// console.log(minuteHand);

let isDark = true;
let switchTheme = document.querySelector(".button");

switchTheme.addEventListener("click", (e) => {
    e.preventDefault();
    let targetButton = e.target;
    if (isDark) {
        changeColor(mainColor, "bg-dark-bg", "bg-light-bg");
        changeColor(borderColor, "border-dark-bd", "border-white")
        changeColor(digitalTime, "text-light-bg", "text-grey-tick");
        changeColor(hourHandColor, "bg-light-bg", "bg-grey-tick");
        changeColor(minuteHandColor, "bg-light-bg", "bg-grey-tick");
        changeColor(centerDotBorderColor, "border-dark-bg", "border-light-bg");
        
        htmlIcon.innerHTML = "<i class='fa-solid fa-sun text-primary-accent text-2xl hover:scale-125 duration-500 ease-in-out '></i>";
        borderColor[0].classList.remove('border-sm');
        borderColor[0].classList.add('p-2');
    }
    else {
        changeColor(mainColor, "bg-light-bg", "bg-dark-bg");
        changeColor(borderColor, "border-white", "border-dark-bd")
        changeColor(digitalTime, "text-grey-tick", "text-light-bg");
        changeColor(hourHandColor, "bg-grey-tick", "bg-light-bg");
        changeColor(minuteHandColor,  "bg-grey-tick", "bg-light-bg");
        htmlIcon.innerHTML = "<i class='fa-solid fa-moon text-primary-accent text-2xl hover:scale-125 duration-500 ease-in-out '></i>";
        changeColor(centerDotBorderColor, "border-light-bg", "border-dark-bg");
        borderColor[0].classList.add('border-sm');
        borderColor[0].classList.remove('p-2');
    }
    isDark = !isDark;
});

function changeColor(elements, prevColor, newColor) {
    for (let element of elements) {
        element.classList.remove(prevColor);
        element.classList.add(newColor);
    }
}