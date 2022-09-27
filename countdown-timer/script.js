const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function countdown() {
    let today = new Date();
    let nextYear = new Date().getFullYear() + 1;
    let remTime = new Date(`01 Jan ${nextYear}`);

    let diff = Math.floor(remTime - today) / 1000;

    let remDays = Math.floor(diff / 60 / 60 / 24);
    let remHours = Math.floor(diff / 60 / 60) % 24;
    let remMins = Math.floor(diff / 60) % 60;
    let remSecs = Math.floor(diff) % 60;

    days.innerHTML = formatTime(remDays);
    hours.innerHTML = formatTime(remHours);
    minutes.innerHTML = formatTime(remMins);
    seconds.innerHTML = formatTime(remSecs);
}

const formatTime = time => time < 10 ? `0${time}` : time;

countdown(); // init call
setInterval(countdown, 1000);