// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector("#datetime-picker")
const btn = document.querySelector("button")
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')
const divTimer = document.querySelector("div")
console.log(divTimer);

divTimer.style.display = "flex"

 flatpickr(inputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log('123')
        if(selectedDates[0]<new Date()){
            window.alert("Please choose a date in the future")
        } else {
            btn.disabled = false
            btn.addEventListener('click', onStartTime)
  function onStartTime(){
  setInterval(()=>{
    const currentTime = new Date
    const deltaTime = selectedDates[0] - currentTime 
    const finishTime = convertMs(deltaTime)
    
    days.textContent = addLeadingZero(finishTime.days);
    hours.textContent = addLeadingZero(finishTime.hours);
    minutes.textContent = addLeadingZero(finishTime.minutes);
    seconds.textContent = addLeadingZero(finishTime.seconds);
    
  },1000)
  }
        }
      console.log(selectedDates[0]);
    },
  })
  btn.setAttribute('disabled',"")
  
 
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value) {
    return `${value}`.padStart(2, '0');
  }
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
 