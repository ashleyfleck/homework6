var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= 0.2;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += 0.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if (video.ended){
		video.playbackRate = 1;
		video.currentTime = 0;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  		if (video.muted){
  			video.muted = false;
  				document.querySelector("#mute").innerHTML="Unmuted";
      	console.log("Unuted");
  		}
  		else {video.muted = true;
  				document.querySelector("#mute").innerHTML="Muted";
  		console.log("Muted");
  		}
}

function changeVolume() {

		video.volume = document.querySelector("#volumeSlider").value / 100; 
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		console.log("Volume is " + video.volume * 100);

}
       

function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}
