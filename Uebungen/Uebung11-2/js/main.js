var smallVideo = document.getElementById("smallVideo");

function playVideo() {
    smallVideo.play();
}

function pauseVideo() {
    smallVideo.pause();
}

function setVolumeToHalf(){
    smallVideo.volume = 0.2;
}

function setMaxVolume(){
    smallVideo.volume = 1.0;
}

function playSpeed(){
    smallVideo.playbackRate = 0.5;
}

function loopVideo(){
    if (smallVideo.loop == true){
        smallVideo.loop = false;
    }else{
        smallVideo.loop = true;
    }
}

/* If user clicks the play button */
if (e.keyCode == 32) {
    alert("Blocked. Please use the interface to control the video!");
}