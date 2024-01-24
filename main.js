const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

function updateTime() {
  let date = new Date();
  let secToDec = (date.getSeconds() / 60) * 360;
  let minToDec = (date.getMinutes() / 60) * 360;
  let hourToDec = (date.getHours() / 12) * 360;
  secondHand.style.transform = `rotate(${secToDec}deg)`;
  minuteHand.style.transform = `rotate(${minToDec}deg)`;
  hourHand.style.transform = `rotate(${hourToDec}deg)`;
}

setInterval(updateTime, 1000);

modeSwitch.addEventListener("click", function () {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
//   modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
if(isDarkMode){
    modeSwitch.textContent="Light Mode"
}else{
    modeSwitch.textContent="Dark Mode"
}

localStorage.setItem('mode',isDarkMode ? "Dark Mode" : "Light Mode")
});

if(localStorage.getItem('mode')==="Dark Mode"){
    body.classList.add('dark')
}else{
    body.classList.remove('dark')
}