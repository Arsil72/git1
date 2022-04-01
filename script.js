
// audioElement.play();
/*var play = document.getElementById("p_btn");
play.onclick = function(){
    document.getElementById("bar").style.opacity = "1";
    document.getElementById("bar").style.transition = "0.5s";
   
}*/
let index = 0;
let audioElement = new Audio("music.mp3");
var play = document.getElementById("p_btn");
let progressbar = document.getElementById("myProgresBar");

play.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-pause");
        document.getElementById("bar").style.opacity = "1";
        document.getElementById("bar").style.transition = "0.5s";
    }
    else{
        audioElement.pause();
        play.classList.remove("fa-circle-pause");
        play.classList.add("fa-circle-play");
        document.getElementById("bar").style.opacity = "0";
    }
})
let songs = [
    {songName : "kkr", filePath : "mp3/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "kkr", filePath : "mp3/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "kkr", filePath : "mp3/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "kkr", filePath : "mp3/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "kkr", filePath : "mp3/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "kkr", filePath : "mp3/1.mp3", coverPath : "covers/1.jpg"},
]
audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    progressbar.value = progress;
});

progressbar.addEventListener('change', ()=> {
    audioElement.currentTime = progressbar.value * audioElement.duration * 100;
})