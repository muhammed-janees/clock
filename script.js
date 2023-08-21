document.addEventListener('DOMContentLoaded', function (event) {

    document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };

});


let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);




let thrs = document.getElementById("thrs");
let tmin = document.getElementById("tmin");
let tsec = document.getElementById("tsec");

setInterval(() => {
    let currentTime = new Date();

    thrs.innerHTML = (currentTime.getHours()<10? "0" : "") + currentTime.getHours();
    tmin.innerHTML = (currentTime.getMinutes()<10? "0" : "") + currentTime.getMinutes();
    tsec.innerHTML = (currentTime.getSeconds()<10? "0" : "") + currentTime.getSeconds();
}, 1000);

let currentTime = new Date()

thrs.innerHTML = currentTime.getHours();
tmin.innerHTML = currentTime.getMinutes();
tsec.innerHTML = currentTime.getSeconds();