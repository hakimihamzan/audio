function play(e, id) {
    let playButton = e.target;
    let audio = document.getElementById(id);

    if (!playButton.dataset.play || playButton.dataset.play == 'tidak') {
        playButton.dataset.play = 'ya'; // this data attribute is used to detect whether the player is playing or not
        playButton.src = 'assets/stop.png'; // change image to stop icon
        audio.play();
    } else {
        playButton.dataset.play = 'tidak'; // this data attribute is used to detect whether the player is playing or not
        playButton.src = 'assets/play.png'; // change image to play icon
        audio.currentTime = 0;
        audio.pause();
    }
}