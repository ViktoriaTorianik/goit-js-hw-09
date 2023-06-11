
const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);
  for (let i = 0; i < amount; i +=1) {
    createPromise(i, delay)
    .then(({i,delay})=> {
    setTimeout(()=> {
    console.log("`✅ Fulfilled promise ${position} in ${delay}ms`");},delay);})
    .catch(({i,delay})=> {
    setTimeout(()=>{
      console.log("`❌ Rejected promise ${position} in ${delay}ms`");},delay);});
      delay += step
    
  }}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromise = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(objectPromise);
    }
    reject(objectPromise);
  });
}