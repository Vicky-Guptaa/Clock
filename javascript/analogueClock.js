/* Logic For Analogue Hand Movement */

// selecting the div of each hands in clock 
let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");

function setAnalogueClock() {
    const today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // 6 degree rotation for second hand for every second
    let rotateSecond = 6 * seconds;
    secondHand.style.transform = `rotate(${rotateSecond}deg)`;

    // 1 degree rotaion of minute hand for every 10 seconds
    let rotateMinute = minutes * 6 + Math.floor(seconds / 10);
    minuteHand.style.transform = `rotate(${rotateMinute}deg)`;

    // 1 degree rotation of hour hand for every 2 minutes
    let rotateHour = (hour * 30 + Math.floor(minutes / 2)) % 360;
    hourHand.style.transform = `rotate(${rotateHour}deg)`;

    // Function Called after every 1000ms -> 1s
    setTimeout(setAnalogueClock, 1000);
}
setAnalogueClock();
