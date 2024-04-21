function play() {
	const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/640");
	audio.play();
}

document.addEventListener("keydown", play);
