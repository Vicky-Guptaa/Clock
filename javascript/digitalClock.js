/* Logic For Digital Clock */

// Selecting different div for changes 
let time = document.querySelector(".time");
let ampm = document.querySelector(".ampm");
let dmy = document.querySelector(".date");


function setDigitalClock() {
    // Date Will Give The Required Data
    const today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let date = today.getDate()
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    setAmpm(hour);

    // for 12 hour format
    hour %= 12;

    // to avoid showing 00 we show 12 
    if (hour == 0) hour = 12;

    hour = appendZeroIfLengthOne(hour);
    minutes = appendZeroIfLengthOne(minutes);

    time.textContent = `${hour}:${minutes}`;

    month = getMonthName(month);

    dmy.textContent = `${date} ${month}, ${year}`;
    
    setTimeout(setDigitalClock, 1000)
}

// Changing Months With Month Prefix
function getMonthName(month) {
    switch (month) {
        case 1: return "Jan";
        case 2: return "Feb";
        case 3: return "Mar";
        case 4: return "Apr";
        case 5: return "May";
        case 6: return "Jun";
        case 7: return "Jul";
        case 8: return "Aug";
        case 9: return "Sep";
        case 10: return "Oct";
        case 11: return "Nov";
        case 12: return "Dec";
        default: return "Due To Invalid Input In Month Switch Case";
    }
}

// Used To Append Zero If The Hour Or Minutes Are Single Digit Ex 1-9
function appendZeroIfLengthOne(num) {
    if (num > 9) {
        num = num.toString();
        return num;
    }
    num = "0" + num.toString();
    return num;
}

// Setting Am Pm Of The Clock
function setAmpm(hour) {
    if (hour > 12)
        ampm.textContent = 'PM';
    else
        ampm.textContent = 'AM';
}
setDigitalClock();