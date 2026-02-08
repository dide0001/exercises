const showNumber = document.querySelector("#showNumber")
function updateInQueue(){
fetch("https://kea-alt-del.dk/kata-distortion/")
.then(response => response.json())
.then(data => {
    showNumber.textContent=data.inQueue;
})
}

updateInQueue();
setInterval(updateInQueue, 10000)
