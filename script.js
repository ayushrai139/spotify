console.log("Welcome To spotify.");

let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Kaam-25", filePath:"1.mp3", coverPath:"1.jpg"},
    {songName: "Wallah", filePath:"2.mp3", coverPath:"2.jpg"},
    {songName: "3:59", filePath:"3.mp3", coverPath:"3.jpg"},
    {songName: "Mera bhai", filePath:"4.mp3", coverPath:"4.jpg"},
    {songName: "Rider", filePath:"5.mp3", coverPath:"5.jpg"},
    {songName: "Still here", filePath:"6.mp3", coverPath:"6.jpg"},
    {songName: " OG", filePath:"7.mp3", coverPath:"7.jpg"},
    {songName: "Kohinoor", filePath:"8.mp3", coverPath:"8.jpg"},
    {songName: "No cap", filePath:"9.mp3", coverPath:"9.jpg"},
    {songName: "Blowing up", filePath:"10.mp3", coverPath:"10.jpg"},
];

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
});
//Handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeallPlays = () =>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            makeallPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[songIndex].filePath;
            audioElement.currentTime=0;
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})