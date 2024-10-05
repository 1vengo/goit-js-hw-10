import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startButton = document.querySelector('button[data-start]');
const datePicker = document.getElementById('datetime-picker');
const timerFields = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]')
};

let selectedDate = null;
let countdownInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    selectedDate = selectedDates[0];

    if (selectedDate <= currentDate) {
      startButton.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % hour) / minute));
  const seconds = Math.floor(((ms % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  timerFields.days.textContent = addLeadingZero(days);
  timerFields.hours.textContent = addLeadingZero(hours);
  timerFields.minutes.textContent = addLeadingZero(minutes);
  timerFields.seconds.textContent = addLeadingZero(seconds);
}

function startCountdown() {
  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = selectedDate - now;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      startButton.disabled = true;
      datePicker.disabled = false;
      datePicker.style.color = '';
      startButton.style.color = '';
      startButton.style.background = '';
    } else {
      const timeRemaining = convertMs(timeLeft);
      updateTimerDisplay(timeRemaining);
    }
  }, 1000);
}


startButton.addEventListener('click', () => {
  startButton.disabled = true;
  datePicker.disabled = true;
  datePicker.style.color = '#989898';
  startButton.style.background = '#cfcfcf';
  startButton.style.color = '#989898';
  startCountdown();
});
