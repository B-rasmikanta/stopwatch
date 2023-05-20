// getting the element from the DOM 

let display = document.getElementById('display');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

// local variable defining

let [seconds, minutes , hours] = [0,0,0];
let timer = null;

// stop watch main function 

function stopWatch() {
    // counding the seconds
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;//increasing the minute in 60 seconds
        if(minutes == 60){
            minutes =0;
            hours++;//increasing the hours in 60 minutes
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = h + ' hr: ' + m + ' min: ' + s + ' sec';
}
// start start button event 

function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}
// stop button event function 

function watchStop(){
    clearInterval(timer);
}
// reset button event function  

function watchRest(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    display.innerHTML = "00 hr: 00 min: 00 sec";
}



function eventCalls() {  
    start.addEventListener('click',watchStart);
    stop.addEventListener('click',watchStop);
    reset.addEventListener('click',watchRest);
}

eventCalls();
