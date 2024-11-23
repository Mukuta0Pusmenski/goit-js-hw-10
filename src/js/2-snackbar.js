const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const delayInput = form.elements['delay'];
  const stateInput = form.elements['state'];
  
  const userDelay = Number(delayInput.value); // Зберігаємо введене користувачем значення
  let delay = userDelay;
  const state = stateInput.value;

  if (delay < 1500) {
    delay = 1500;
  }

  createPromise(delay, state)
    .then(() => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${userDelay}ms`, // Використовуємо userDelay для повідомлення
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${userDelay}ms`, // Використовуємо userDelay для повідомлення
      });
    });

  delayInput.value = '';
  stateInput.forEach(input => input.checked = false);
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
}
