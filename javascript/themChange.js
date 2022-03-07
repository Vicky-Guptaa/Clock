/* Logic For Changing The Theme */


// Selecting all the elements which have the classes as mentioned
let mainColor = document.querySelectorAll(".bg-dark-bg");
let borderColor = document.querySelectorAll(".border-dark-bd");
let centerDotBorderColor = document.querySelectorAll(".border-dark-bg");
let primarAccent = document.querySelectorAll(".bg-primary-accent")

let digitalTime = document.querySelectorAll(".digital-time");
let htmlIcon = document.querySelector(".button section");
let minuteHandColor = document.querySelectorAll(".minute span");
let hourHandColor = document.querySelectorAll(".hour span");

// Initially We Have Dark Theme 
let isDark = true;

// Selecting The button so that when Clicked we Can Switch
let switchTheme = document.querySelector(".button");

switchTheme.addEventListener("click", (e) => {

    // Avoid Refereshing Of The Pafes
    e.preventDefault();

    if (isDark) {
        // changing to light mode 

        // changing the color
        changeColor(mainColor, "bg-dark-bg", "bg-light-bg");
        changeColor(borderColor, "border-dark-bd", "border-white")
        changeColor(digitalTime, "text-light-bg", "text-grey-tick");
        changeColor(hourHandColor, "bg-light-bg", "bg-grey-tick");
        changeColor(minuteHandColor, "bg-light-bg", "bg-grey-tick");
        changeColor(centerDotBorderColor, "border-dark-bg", "border-light-bg");

        // changing the html of button so that we can switch the icons
        htmlIcon.innerHTML = "<i class='fa-solid fa-sun text-primary-accent text-2xl hover:scale-125 duration-500 ease-in-out '></i>";

        // Removing Border And Adding Padding To Light Mode For best neumorphism effect 
        borderColor[0].classList.remove('border-sm');
        borderColor[0].classList.add('p-2');
    }
    else {
        // changing to dark theme

        // changing the color
        changeColor(mainColor, "bg-light-bg", "bg-dark-bg");
        changeColor(borderColor, "border-white", "border-dark-bd")
        changeColor(digitalTime, "text-grey-tick", "text-light-bg");
        changeColor(hourHandColor, "bg-grey-tick", "bg-light-bg");
        changeColor(minuteHandColor, "bg-grey-tick", "bg-light-bg");
        changeColor(centerDotBorderColor, "border-light-bg", "border-dark-bg");

        // changing the html of button so that we can switch the icons
        htmlIcon.innerHTML = "<i class='fa-solid fa-moon text-primary-accent text-2xl hover:scale-125 duration-500 ease-in-out '></i>";

        // Adding Back The Border And Removing The Padding looks best in dark mode
        borderColor[0].classList.add('border-sm');
        borderColor[0].classList.remove('p-2');
    }

    // Changing isDark For Future Reference
    isDark = !isDark;
});


// Used To Change The Color Of The Selected Nodelist In One Go with given color and remove prev color
function changeColor(elements, prevColor, newColor) {
    for (let element of elements) {
        element.classList.remove(prevColor);
        element.classList.add(newColor);
    }
}