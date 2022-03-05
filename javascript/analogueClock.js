let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");

function setAnalogueClock() {
    const today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let rotateSecond = 6 * seconds;
    secondHand.style.transform = `rotate(${rotateSecond}deg)`;

    let rotateMinute = minutes * 6 + Math.floor(seconds / 10);
    minuteHand.style.transform = `rotate(${rotateMinute}deg)`;
    
    let rotateHour = (hour * 30 + Math.floor(minutes / 2)) % 360;
    hourHand.style.transform = `rotate(${rotateHour}deg)`;
    
    setTimeout(setAnalogueClock, 1000);
}
setAnalogueClock();
