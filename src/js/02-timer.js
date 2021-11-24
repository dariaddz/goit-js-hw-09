import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// ----------------------------------------------
const timerMarkup = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const labels = document.querySelectorAll('.label');
const cndwnDays = document.querySelector('.value[data-days]');
const cndwnHours = document.querySelector('.value[data-hours]');
const cndwnMinutes = document.querySelector('.value[data-minutes]');
const cndwnSeconds = document.querySelector('.value[data-seconds]');
const startBtn = document.querySelector('button[data-start]');

// ---создаем календарь с опцией проверки прошлой даты и notify------
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (calendar.selectedDates[0] <= Date.now()) {
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

const calendar = flatpickr(document.querySelector('input#datetime-picker'), options);

//---------------------делаем класс Timer -------------------------
// ----------------с остановкой если время пришло------------------
class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
  }
  start() {
    const futureDate = new Date(calendar.selectedDates[0]);
    setInterval(() => {
      const currentDate = Date.now();
      const countdown = futureDate - currentDate;
      if (futureDate - currentDate < 1000) {
        console.log('время вышло');
        cndwnSeconds.textContent = '00';
        for (let field of fields) {
          field.style.color = '#9e2611';
        }
        return;
      }
      const time = this.convertMs(countdown);
      this.onTick(time);
      startBtn.disabled = true;
    }, 1000);
  }

  // -------------перевод мс в дни/часы и тд, с добавлением нулей--------------------------
  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }
}

// ---------создаем таймер из класса с функцией обновления -----------
const timer = new Timer({ onTick: updateCountdown });

// ------------------------слушатель на кнопку Старт------
startBtn.addEventListener('click', () => {
  timer.start();
});

// ---------------обновляем цифры на странице--------------
function updateCountdown({ days, hours, minutes, seconds }) {
  cndwnDays.textContent = `${days}`;
  cndwnHours.textContent = `${hours}`;
  cndwnMinutes.textContent = `${minutes}`;
  cndwnSeconds.textContent = `${seconds}`;
}

// -----------------------красота-----------------
timerMarkup.style.display = 'flex';

for (let field of fields) {
  field.style.marginRight = '15px';
  field.style.textAlign = 'center';
  field.style.fontSize = '50px';
  field.style.fontWeight = '500';
}

for (let label of labels) {
  label.style.display = 'block';
  label.style.fontSize = '36px';
  label.style.fontWeight = '400';
}
