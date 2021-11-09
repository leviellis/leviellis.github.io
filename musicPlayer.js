//audio player control variables
var audio = new Audio()
var i = 0;
var playing = false;

//track, title, and thumbnail playlist arrays
const playlist = new Array('music/01eyedolContact.mp3', 'music/02detective.mp3', 'music/03fightFate.mp3', 'music/04blinkbot.wav', 'music/05championTale.wav', 'music/06emanuel.mp3',  'music/07cyberCross.mp3',  'music/08atomicFusion.mp3',  'music/09belleUnderworld.wav', 'music/10blinkbot.wav', 'music/11slime.mp3', 'music/12retrograde.mp3', 'music/13filtered.wav', 'music/14clap.wav', 'music/15blinkbot.wav');
const titles = new Array("Eyedol Contact", "*To Be Announced*", "Can't Fight Fate", "Blinkbot", "A Champion's Tale", "*To Be Announced*", "Cyber Cross", "Atomic Fusion", "Belle of the Underworld", "Blinkbot", "Slime O' Wisp", "Retrograde", "Filtered", "Clap", "Blinkbot", "break test");
const thumbnails = new Array("images/thumbnails/01.png", "images/thumbnails/02.png", "images/thumbnails/03.png", "images/thumbnails/04.png", "images/thumbnails/05.png", "images/thumbnails/06.png", "images/thumbnails/07.png", "images/thumbnails/08.png", "images/thumbnails/09.png", "images/thumbnails/10.png", "images/thumbnails/11.png", "images/thumbnails/12.png", "images/thumbnails/13.png", "images/thumbnails/14.png", "images/thumbnails/15.png", "break test");
//play button, track title, and thumbnail references
var x = document.getElementById("playAudio");
var y = document.getElementById("trackTitle").innerHTML = titles[i];
var z = document.getElementById("thumbnail");

//start audio settings
audio.volume = 0.9;
audio.loop = false;
audio.src = playlist[i];

//play next song in playlist on somng end
audio.addEventListener("ended", function() {
  if (i < playlist.length - 1) {
    i++;
    audio.src = playlist[i];
    z.src = thumbnails[i];
    document.getElementById("trackTitle").innerHTML = titles[i];
    audio.play();
  }
  else {
    playing = false;
    x.src="images/buttons/play.png";
  }
});

//play/pause function
playAudio.onclick = function() {
  playing = !playing;
  if (playing && i < playlist.length) {
    x.src="images/buttons/pause.png";
    document.getElementById("trackTitle").innerHTML = titles[i];
    audio.play();
  }
  else {
    x.src="images/buttons/play.png";
    audio.pause();
  }
};

//rewind function
rewindAudio.onclick = function() {
  playing = true;
  x.src="images/buttons/pause.png";
  if (i > 0 && audio.currentTime < 1) {
    i--;
    audio.src = playlist[i];
    z.src = thumbnails[i];
    document.getElementById("trackTitle").innerHTML = titles[i];
    audio.play();
  }
  else {
    audio.currentTime = 0;
    audio.play();
  }
};

//skip function
skipAudio.onclick = function() {
  if (i < playlist.length - 1) {
    i++;
    audio.src = playlist[i];
    z.src = thumbnails[i];
    document.getElementById("trackTitle").innerHTML = titles[i];
    if (playing) {
      audio.play();
    }
  }
};
