//* hamburger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

//* comingSoon countdown clock
const countdown = () => {
  const countDate = new Date("January 1, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const finalDay = Math.floor(gap / day);
  const finalHour = Math.floor((gap % day) / hour);
  const finalMinute = Math.floor((gap % hour) / minute);
  const finalSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = finalDay;
  document.querySelector(".hour").innerText = finalHour;
  document.querySelector(".minute").innerText = finalMinute;
  document.querySelector(".second").innerText = finalSecond;
};

setInterval(countdown, 1000);
