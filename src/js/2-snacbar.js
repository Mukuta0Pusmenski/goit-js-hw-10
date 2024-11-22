const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const delayInput = form.elements['delay'];
  const stateInput = form.elements['state'];
  
  let delay = Number(delayInput.value);
  const state = stateInput.value;

  if (delay < 1500) {
    delay = 1500;
  }

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  delayInput.value = '';
  stateInput.forEach(input => input.checked = false);
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
