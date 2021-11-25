const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget;

  // -----значения полей в формате числа--------
  let promiseDelay = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);

  // -------цикл, собирает значения из формы---------------
  // ---------------вызывает функцию для создания промисов-----

  for (let position = 1; position <= amountValue; position += 1) {
    console.log(`это промис номер ${position} с задержкой ${promiseDelay} `);

    createPromise(position, promiseDelay);
    promiseDelay += stepValue;
  }
}

// ------функция создает промис--------------------------------------
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  });
  promise.catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
