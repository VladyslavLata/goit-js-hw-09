const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.body;
let timerChangeBgColor = null;
btnStartEl.addEventListener('click', onBtnClickChangeBgColor);
btnStopEl.addEventListener('click', onBtnClickStopChangeBgColor);

btnStopEl.setAttribute('disabled', '');

function onBtnClickChangeBgColor() {
  timerChangeBgColor = setInterval(changeBgColor, 1000);
  btnStartEl.setAttribute('disabled', '');
  btnStopEl.removeAttribute('disabled');
}

function onBtnClickStopChangeBgColor() {
  clearInterval(timerChangeBgColor);
  btnStopEl.setAttribute('disabled', '');
  btnStartEl.removeAttribute('disabled');
}

function changeBgColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}