const startButton = document.querySelector("[data-start]")
const stopButton = document.querySelector("[data-stop]")
const colorBody = document.querySelector("body")

stopButton.setAttribute('disabled',"")

startButton.addEventListener('click', onStart)

function onStart(){
    
    timerId = setInterval(()=> {
        colorBody.style.backgroundColor = getRandomHexColor()
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      } },1000)
      startButton.setAttribute('disabled', '')
      stopButton.removeAttribute('disabled')
    }

stopButton.addEventListener('click', onStop)
function onStop(){
    
    clearInterval(timerId)
    startButton.removeAttribute('disabled')
    stopButton.setAttribute('disabled', '')
}


    


