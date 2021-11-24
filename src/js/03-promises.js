const form = document.querySelector('form');
const delayField = document.querySelector('input[name=delay]');
const stepField = document.querySelector('input[name=step]');
const amountField = document.querySelector('input[name=amount]');
const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', onSubmitBtn);

let promissesArray = [];

let formFilter = {
  position: 0,
  delay: '',
};

// console.log(promissesArray);

function onSubmitBtn(evt) {
  evt.preventDefault();
  for (let i = 1; i <= amountField.value; i += 1) {
    formFilter.delay = delayField.value;
    formFilter.position = i;
  }
  promissesArray.push(formFilter);
  console.log(promissesArray);
}

// -------------не мой код для объекта-------------
// вешаем слушателя на форму
// form.addEventListener('input', inputForm);
// function inputForm(evt) {
//   formFilter[evt.target.name] = evt.target.value;
//   // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formFilter));
//   console.log(formFilter);
// }

// --------------------------------------------
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
