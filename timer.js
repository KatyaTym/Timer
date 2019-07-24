class Timer {
    constructor(time, span, auto) {
        this.time = time;
        this.start_time = time;
        this.span = span;
        this.started = false;

        this.timer = document.createElement("div");

        this.countdown = document.createElement("div");
        this.countdown.classList.add("countdown");
        this.setCountdownValue();
        this.timer.appendChild(this.countdown);

        this.button = document.createElement("input");
        this.button.type = "button";
        this.button.classList.add("timer_button");
        this.button.onclick = this.onClick.bind(this);
        this.button.value = "Start";
        this.timer.appendChild(this.button);

        this.line = document.createElement("div");
        this.line.classList.add("timer_line");
        this.timer.appendChild(this.line);

        document.body.appendChild(this.timer);

        if (auto) {
            this.start();
        }
    }

    setCountdownValue() {
        let m = Math.floor(this.time / 60);
        let s = this.time - m * 60;
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        this.countdown.textContent = m + ":" + s;
    }

    timerTick() {
        const width = this.time / this.start_time * 100;
        this.line.setAttribute("style", 'width:' + width + '%');
        this.setCountdownValue();
        if (this.time <= 0) {
            this.stop();
        } else {
            this.time = this.time - this.span / 1000;
        }
    }

    start() {
        this.started = true;
        this.button.value = "Stop";

        this.timerTick();
        this.interval = setInterval(this.timerTick.bind(this), this.span);
    }

    onClick() {
        if (this.started) {
            this.stop();
        } else {
            this.start();
        }
    }

    stop() {
        this.started = false;
        this.button.value = "Start";

        clearInterval(this.interval);
    }
}

const t1 = new Timer(1 * 60, 1000, false);
const t2 = new Timer(99 * 60, 2000, true);