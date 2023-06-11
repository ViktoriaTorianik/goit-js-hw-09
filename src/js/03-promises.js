function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
const formEl = document.querySelector(".form")
console.log(formEl);
formEl.addEventListener('submit', onSubmit)
function onSubmit(){

}
console.log('vvvv');