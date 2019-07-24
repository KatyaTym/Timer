let interval;

let timer_button_state = true; // Start == true, Stop == false
function timer_button_tumbler() {
    timer_button_state = !timer_button_state;
    if (timer_button_state) {
        getTimerButton("timer1").value = "Start";
        clearInterval(interval);
    } else {
        getTimerButton("timer1").value = "Stop";
        timer(5, 1000);
    }
}

function createTimer(timer_id) {
    const timer = document.createElement("div");
    timer.id = timer_id;

    const countdown = document.createElement("div");
    countdown.classList.add("countdown");
    countdown.textContent = "00:00";
    timer.appendChild(countdown);

    const button = document.createElement("input");
    button.type = "button";
    button.classList.add("timer_button");
    button.onclick = timer_button_tumbler;
    button.value = "Start";
    timer.appendChild(button);

    const line = document.createElement("div");
    line.classList.add("timer_line");
    timer.appendChild(line);

    document.getElementById("timers").appendChild(timer);
}

function getCountdown(timer_id) {
    const timer = document.getElementById(timer_id);
    const countdown = timer.getElementsByClassName("countdown")[0];
    return countdown;
}

function getTimerButton(timer_id) {
    const timer = document.getElementById(timer_id);
    const timer_button = timer.getElementsByClassName("timer_button")[0];
    return timer_button;
}

function getTimerLine(timer_id) {
    const timer = document.getElementById(timer_id);
    const timer_line = timer.getElementsByClassName("timer_line")[0];
    return timer_line;
}

createTimer("timer1");

function timer(time, span) {
    const startTime = time;
    const timer_tick = function() {
        setTimerLineWidth(time / startTime * 100);
        setCountdownValue(time);
        --time;
        if (time < 0) {
            timer_button_tumbler();
        }
    };
    timer_tick();
    interval = setInterval(timer_tick, span);
};

function setTimerLineWidth(width) {
    const line = getTimerLine("timer1");
    line.setAttribute("style", 'width:' + width + '%');
};

function setCountdownValue(time) {
    const countdown = getCountdown("timer1");
    let m = Math.floor(time / 60);
    let s = time - m * 60;
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    countdown.textContent = m + ":" + s;
};