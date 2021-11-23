const timerMarkup = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const values = document.querySelectorAll('.value');
const labels = document.querySelectorAll('.label');
const cndwnDays = document.querySelector('.value[data-days]');
const cndwnHours = document.querySelector('.value[data-hours]');
const cndwnMinutes = document.querySelector('.value[data-minutes]');
const cndwnSeconds = document.querySelector('.value[data-seconds]');
// console.log(cndwnSeconds);
const startBtn = document.querySelector('button[data-start]');

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
// -----------------

// берем дату в будущем
// вычисляем разницу между будущей и текущей датой
//делаем эти вычисления раз в секунду
// разницу приводим к дням / часам / минутам / секундам
// записываем приведенную дату в поля таймера
// обновляем поля
//---------------------------делаем класс-----------------------------
class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
  }
  start() {
    const futureDate = new Date('Novenber 24, 2021 14:25:00');
    setInterval(() => {
      const currentDate = Date.now();
      const countdown = futureDate - currentDate;
      const time = this.convertMs(countdown);
      this.onTick(time);
    }, 1000);
  }

  // -------------перевод мс в дни/часы и тд--------------------------
  pad(value) {
    return String(value).padStart(2, '0');
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.pad(Math.floor(ms / day));
    const hours = this.pad(Math.floor((ms % day) / hour));
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }
}

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
