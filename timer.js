let interval;
const timer_button = document.getElementById("timer_button");

let timer_button_state = true; // Start == true, Stop == false
function timer_button_tumbler() {
    timer_button_state = !timer_button_state;
    if (timer_button_state) {
        timer_button.textContent = "Start";
        clearInterval(interval);
    } else {
        timer_button.textContent = "Stop";
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
        --time;
        if (time < 0) {
            timer_button_tumbler();
        }
    };
    timer_tick();
    interval = setInterval(timer_tick, 1000);
}