//Model

const secondHand = document.querySelector(`.second-hand`);
const minuteHand = document.querySelector(`.minute-hand`);
const hourHand = document.querySelector(`.hour-hand`);
const currentTime = document.querySelector(`.second-clock`);

//View 

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (((seconds*360) / 60) + 90);
  if (secondsDegrees >= 449 || secondsDegrees <= 90) {
    secondHand.style.transition = "0.01s ease";
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  } else {
    secondHand.style.transition = "0.05s cubic-bezier(0, 2.35, 0.72, 1.44)";
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }
  
  const minutes = now.getMinutes();
  const minutesDegrees = (((minutes*360) / 60) + 90);
  minuteHand.style.transform =`rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (((hour * 360) / 12) + 90);
  hourHand.style.transform =`rotate(${hourDegrees}deg)`;

  currentTime.innerHTML = now;
}

//Controller
setInterval(setDate, 1000);