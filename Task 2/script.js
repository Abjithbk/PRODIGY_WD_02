const durationContainer = document.getElementById('display')

start = document.getElementById('start'),
stop = document.getElementById('stop'),
lap = document.getElementById('lap'),
reset = document.getElementById('reset'),
laps = document.getElementById('laps');

let hrs=0,mins=0,sec=0,milisec=0,timeInterval;
let count = 0;
start.onclick = () => {
    timeInterval = setInterval(() => {
        milisec++;
        if(milisec === 100) {
            sec++;
            milisec = 0;
        }
        if(sec === 60) {
            mins++;
            sec = 0;
        }
        if(mins === 60) {
            hrs++;
            mins = 0;
        }
        durationContainer.innerHTML = `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(milisec)}`;
    },10)
}

const zeroPad = (num) => {
    return String(num).padStart(2,'0');
}

lap.onclick = () => {
    count++;
    let li = document.createElement('li');
    li.innerHTML = `${'#' + count} - ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(milisec)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight,behaviour:'smooth'})
}

stop.onclick = () => {
    clearInterval(timeInterval)
}

reset.onclick = () => {
    laps.innerHTML = '';
    hrs = mins = sec = milisec = 0;
    clearInterval(timeInterval)
    durationContainer.innerHTML = '00:00:00:00'
}