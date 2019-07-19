function timer(time) {
    const startTime = time;
    const line = document.getElementById('line');
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

// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   return {
//     total: t,
//     minutes: minutes,
//     seconds: seconds
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var minutesSpan = clock.querySelector(".minutes");
//   var secondsSpan = clock.querySelector(".seconds");

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//       var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
//       initializeClock('countdown', deadline);
//     }

//     minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Date()) + 60 * 1000);
// initializeClock("countdown", deadline);


// for (var i = 0; i <= 1; i += 2) {
//       document.write('green_line' + i + 'green_line');
//     }

//     // var startButton = document.getElementById('start');
//     // var stopButton = document.getElementById('stop');

//     var timers = [];

//     // stopButton.onclick = function() {
//     //   startButton.disabled = false;
//     //   stopButton.disabled = true;

//     //   for (var i = 0; i < timers.length; i++) clearInterval(timers[i]);
//     //   timers = [];
//     // }

//     // startButton.onclick = function() {
//     //   startButton.disabled = true;
//     //   stopButton.disabled = false;

//     //   var divs = document.getElementsByTagName('div');
//     //   for (var i = 0; i < divs.length; i++) {
//     //     animateDiv(divs, i);
//     //   }
//     // }

//     function animateDiv(divs, i) {
//       var green_line = green_lines[i],
//         speed = green_line.innerHTML;
//       timers[i] = setInterval(function() {
//         green_line.style.width = (parseInt(green_line.style.width || 0) + 2) % 400 + 'px'
//       }, speed);
//     }






// function getTimeRemaining02(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   return {
//     total: t,
//     minutes: minutes,
//     seconds: seconds
//   };
// }

// function initializeClock02(id, endtime) {
//   var clock = document.getElementById(id);
//   var minutesSpan = clock.querySelector(".minutes");
//   var secondsSpan = clock.querySelector(".seconds");

//   function updateClock02() {
//     var t = getTimeRemaining02(endtime);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//       var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
//       initializeClock02('countdown02', deadline);
//     }

//     minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
//   }

//   updateClock02();
//   var timeinterval = setInterval(updateClock02, 2000);
// }

// var deadline = new Date(Date.parse(new Date()) + 10000 * 2000);
// initializeClock02("countdown02", deadline);