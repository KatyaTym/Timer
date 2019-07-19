function timer(time) {
    const startTime = time;
    const line = document.getElementById('timer_line');
    let interval = setInterval(function() {
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