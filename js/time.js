var time = null;
var date = null;

setTime();
setInterval(setTime, 1000);
setDate();
setInterval(setDate, 86400000);

function setTime() {
    time = new Date().toLocaleTimeString();
    document.getElementById("time").textContent = new Date().toLocaleTimeString();
}

function setDate() {
    date = new Date().toDateString();
    document.getElementById("date").textContent = date.slice(4) + "";
}