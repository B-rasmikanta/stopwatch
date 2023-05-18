let display = document.getElementById('display');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let [seconds, minutes , hours] = [0,0,0];
let timer = null;

function stopWatch() {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes =0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = h + ' hr : ' + m + ' min : ' + s + ' sec';
}

function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,100);
}
function watchStop(){
    clearInterval(timer);
}
function watchRest(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    display.innerHTML = "00 min : 00 min : 00 sec";
}

start.addEventListener('click',watchStart);
stop.addEventListener('click',watchStop);
reset.addEventListener('click',watchRest);

