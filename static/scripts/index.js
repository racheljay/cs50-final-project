const action = document.querySelector("#action")
const readout = document.querySelector("#clickCount")
const stop = document.querySelector("#stop")
const timer = document.querySelector("#timer")
const time = document.querySelector("#time")

let nIntervId

let count = 0

timeRecordings = []

function click() {
    count++
    clickCount.textContent = count
    timeRecordings.push(timeStart)
    console.log(timeRecordings)
}

let timeStart = 5

function addTime() {
    timeStart--
    time.textContent = timeStart
}

function startTimer() {
    nIntervId = setInterval(addTime, 1000)
}

function stopTime() {
    clearInterval(nIntervId)
    time.textContent = 5
    timeStart = 5
    count = 0
}



action.addEventListener("click", click)
timer.addEventListener("click", startTimer)
stop.addEventListener("click", stopTime)
