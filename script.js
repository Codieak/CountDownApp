const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear="1 Jan 2021";
function countdown()
{
    const newYearDate=new Date(newYear);
    const currentDate =new Date();
    
    const TotalSeconds = (newYearDate-currentDate)/1000;
    const days = Math.floor(TotalSeconds/3600/24);
    const hours = Math.floor(TotalSeconds/3600)%24;
    const minutes = Math.floor(TotalSeconds/60)%60;
    const seconds = Math.floor(TotalSeconds)%60;
    console.log(days,hours,minutes,seconds);
    daysEl.innerHTML = format(days);
    hoursEl.innerHTML = format(hours);
    minutesEl.innerHTML = format(minutes);
    secondsEl.innerHTML = format(seconds);
}
function format(time)
{
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);