let interval;

function timer(time) {
    const startTime = time;
    const line = document.getElementById('timer_line');
    interval = setInterval(function() {
        const a = (time / startTime) * 100;
        if (line) {
            line.setAttribute("style", 'width:' + a + '%');
        }
        --time;
        if (time < 0) {
            clearInterval(interval);
        }
    }, 1000);
}


function onTimerbtnClick(click) {
    let elem = document.getElementById("Button");
    if (elem.value == "Start") {
        elem.value = "Stop";
        timer(5);
    } else {
        elem.value = "Start";
        clearInterval(interval);
    }
}