// Select the clock hands
const secondHand = document.querySelector(".long-red");
const minuteHand = document.querySelector(".long-black");
const hourHand = document.querySelector(".short-black");

function setClock() {
  const now = new Date();

  // Get the current time values
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate rotation degrees for each hand
  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6; // minute hand moves slightly every second
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30; // hour hand moves gradually

  // Apply rotations
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Run once immediately, then update every second
setClock();
setInterval(setClock, 1000);
