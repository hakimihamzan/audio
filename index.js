function play(e, id) {
    let playButton = e.target;
    let audio = document.getElementById(id);

    if (!playButton.dataset.play || playButton.dataset.play == 'tidak') {
        playButton.dataset.play = 'ya';
        playButton.src = 'assets/stop.png';
        audio.play();
    } else {
        playButton.dataset.play = 'tidak';
        playButton.src = 'assets/play.png';
        audio.currentTime = 0;
        audio.pause();
    }
}