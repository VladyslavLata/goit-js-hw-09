const formEl = document.querySelector('.form');
const btnCreatePromiseEl = document.querySelector('button[type=submit]');
btnCreatePromiseEl.addEventListener('click', onClickBtnCreatePromise);
formEl.addEventListener('input', onInputValue);
let formData = {};

function onInputValue(e) {
  formData[e.target.name] = e.target.value;
}

function onClickBtnCreatePromise() {
  event.preventDefault();
  let delay = Number(formData.delay);

  for (let i = 1; i <= formData.amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(formData.step);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
