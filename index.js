const eventDay = "Jan 22 2024";
let d = document.getElementById("d");
let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
function countD() {
  let eventD = new Date(eventDay);
  let currentD = new Date();

  let totalSec = (eventD - currentD) / 1000;
  let days = Math.floor(totalSec / 3600 / 24);
  let hrs = Math.floor((totalSec / 3600) % 24);
  let mins = Math.floor((totalSec / 60) % 60);
  let secs = Math.floor(totalSec)% 60;

  d.innerHTML = days;
  h.innerHTML = hrs;
  m.innerHTML = mins;
  s.innerHTML = secs;
}
// countD()

setInterval(countD, 1000);

