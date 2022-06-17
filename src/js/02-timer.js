import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const buttonStartEl = document.querySelector('button[data-start]');
const inputEl = document.querySelector('input[type=text]');
const spanDaysEl = document.querySelector('[data-days]');
const spanHoursEl = document.querySelector('[data-hours]');
const spanMinutesEl = document.querySelector('[data-minutes]');
const spanSecondsEl = document.querySelector('[data-seconds]');
buttonStartEl.addEventListener('click', onClickBtnStartTimer);

let dataTime = {};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - Date.now() > 0) {
      buttonStartEl.removeAttribute('disabled');
    } else {
      setAtributeDisabled();
      Notiflix.Report.warning('Incorrect date!', 'Select a future date.', 'OK');
    }
  },
};
const fp = flatpickr(inputEl, options);

setAtributeDisabled();

function onClickBtnStartTimer() {
  setAtributeDisabled();
  const selectedTime = fp.selectedDates[0].getTime();

  const timerId = setInterval(() => {
    const lastTime = selectedTime - Date.now();
    if (lastTime < 1000) {
      clearInterval(timerId);
    }
    dataTime = convertMs(lastTime);
    visuallyWorkersTimer(dataTime);
  }, 1000);
}

function visuallyWorkersTimer({ days, hours, minutes, seconds }) {
  spanDaysEl.textContent = addLeadingZero(String(days));
  spanHoursEl.textContent = addLeadingZero(String(hours));
  spanMinutesEl.textContent = addLeadingZero(String(minutes));
  spanSecondsEl.textContent = addLeadingZero(String(seconds));
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

function setAtributeDisabled() {
  buttonStartEl.setAttribute('disabled', '');
}
