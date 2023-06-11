const startButton = document.querySelector("[data-start]")
const stopButton = document.querySelector("[data-stop]")
const colorBody = document.querySelector("body")

stopButton.setAttribute("disabled", "")
let timerId = null
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

startButton.addEventListener('click', onStart)

function onStart(){
    
    
        startButton.setAttribute("disabled", "")
        stopButton.removeAttribute("disabled")
        timerId = setInterval(()=>{
            colorBody.style.backgroundColor = getRandomHexColor()
        }, 1000)
        
}
stopButton.addEventListener('click', onStop)
function onStop(){
    
    clearInterval(timerId)
    startButton.removeAttribute("disabled")
    stopButton.setAttribute("disabled", "")
}


    


