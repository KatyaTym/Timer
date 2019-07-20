let interval;
const timer_button = document.getElementById("timer_button");

let timer_button_state = true; // Start == true, Stop == false
function timer_button_tumbler() {
    timer_button_state = !timer_button_state;
    if (timer_button_state) {
        timer_button.value = "Start";
        clearInterval(interval);
    } else {
        timer_button.value = "Stop";
        timer(5);
    }
};

function timer(time) {
    const startTime = time;
    const line = document.getElementById('timer_line');
    const timer_tick = function() {
        const a = (time / startTime) * 100;
        if (line) {
            line.setAttribute("style", 'width:' + a + '%');
        }
        setCountdownValue(time);
        --time;
        if (time < 0) {
            timer_button_tumbler();
        }
    };
    timer_tick();
    interval = setInterval(timer_tick, 1000);
}

function setCountdownValue (time) {
    const countdown = document.getElementById('countdown');
    const minutes = countdown.getElementsByClassName('minutes') [0];
    const seconds = countdown.getElementsByClassName('seconds') [0];
    let m = Math.floor (time / 60);
    let s = time - m * 60;
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    minutes.textContent = m;
    seconds.textContent = s;
}