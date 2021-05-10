const refs = {
    timer: document.getElementById('timer-1'),
    daysSpan: document.querySelector('[data-value="days"]'),
    hoursSpan: document.querySelector('[data-value="hours"]'),
    minsSpan: document.querySelector('[data-value="mins"]'),
    secsSpan: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer{
    constructor({ targetDate }) {
        this.targetDate = targetDate;
     }
};

const timer = new CountdownTimer({
    targetDate: new Date('2021-05-12').getTime('2021-05-12')
});

let intervalForTimer = null;

updateTimer();

function updateTimer() {
    
    const currentTime = Date.now();
    time = timer.targetDate - currentTime;
    if (timer.targetDate === currentTime) {
        return 'Время вышло'
    }
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    const resalt = { days, hours, mins, secs };
    console.log(resalt);
    updateClockFace(resalt)
    
    intervalForTimer = setTimeout(updateTimer, 1000);
}
function updateClockFace({days, hours, mins, secs}) {
    refs.daysSpan.textContent = days;
    refs.hoursSpan.textContent = hours;
    refs.minsSpan.textContent = mins;
    refs.secsSpan.textContent = secs
}
function pad(value) {
    return String(value).padStart(2, '0');
};

// function getTimeComponents(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     const resalt = {days, hours, mins, secs}
// };


// if(time<=1000) {
    // clearInterval(intervalForTimer);
    //     return console.log('00:00:00:00');
    // }
