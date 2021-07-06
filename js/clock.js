function updateClock() {
    const clockConteiner = document.querySelector('.clock');
    clockConteiner.innerText = new Date().toLocaleTimeString();
}

setInterval(updateClock, 1000);