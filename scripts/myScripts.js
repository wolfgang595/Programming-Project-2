document.getElementById('startButton').addEventListener('click', function() {
    let time = parseInt(document.getElementById('timeInput').value);
    if (isNaN(time) || time > 60 || time <= 0) {
        alert('Please enter a valid number between 1 and 60.');
        return;
    }

    let timerDisplay = document.getElementById('timerDisplay');
    let interval = setInterval(function() {
        if (time <= 0) {
            clearInterval(interval);
            alert('Time is up!');
        } else {
            time--;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
});
