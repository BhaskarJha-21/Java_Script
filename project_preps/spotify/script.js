const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('playButton');
const trackName = document.getElementById('track-name');
const artistName = document.getElementById('artist-name');
const albumCover = document.getElementById('album-cover');
const volumeControl = document.getElementById('volume-control');

let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    playButton.textContent = 'Play';
  } else {
    audioPlayer.play();
    playButton.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
}

function playSong(song, albumImage) {
  audioPlayer.src = `audio/${song}`;
  albumCover.src = `images/${albumImage}`;
  trackName.textContent = song.split('.')[0]; // Simulated track name
  artistName.textContent = "Artist"; // Simulated artist name
  audioPlayer.play();
  playButton.textContent = 'Pause';
  isPlaying = true;
}

volumeControl.addEventListener('input', (e) => {
  audioPlayer.volume = e.target.value / 100;
});

function prevSong() {
  // Logic for previous song
}

function nextSong() {
  // Logic for next song
}
