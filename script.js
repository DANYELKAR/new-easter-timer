const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


const newEaster = '02 May 2021';

function countdown(){

    const  newEasterDate = new Date(newEaster);
    const currentDate = new Date();

    const totalSeconds = (newEasterDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds =Math.floor(totalSeconds)%60;

   console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML =formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds); 
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);