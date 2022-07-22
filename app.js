const drk = document.querySelector("#light-dark-mode")

function darkmode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  drk.classList.toggle("bx-sun");
  const element = document.body;
  element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}

drk.addEventListener("click", darkmode);
