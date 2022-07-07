const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let current_time = document.getElementById("current_time");
let current_duration = document.getElementById("duration");


let isplaying = false;

const playmusic= function(){
    isplaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
}

const pausemusic= function(){
    isplaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}

play.addEventListener("click" ,function(){
    if(isplaying){
        pausemusic();
    }
    else{
        playmusic();
    }
});

// changing the music data.


const songs = [
    {
        name: "cheap",
        title: "Cheap Thrills",
        artist: "Sia",
    },
    {
    
        name: "lean on",
        title: "Lean On",
        artist: "Major Lazer ft.Dj-Snake",
    },
    {

        name: "see you again",
        title: "See you again",
        artist: "Wiz Khalifa, Charli Puth",

    },
    {
        name: "something",
        title: " Something just like this",
        artist: "The Chainsmokers",
    },

];

const loadsong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+ songs.name + ".mp3";
    img.src = "image/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = function(){
    songIndex = (songIndex + 1) % songs.length;
    loadsong(songs[songIndex]);
    playmusic(); 
};

const previousSong= function(){
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadsong(songs[songIndex]);
    playmusic();

};

music.addEventListener("timeupdate", (e) =>{
    const { currentTime, duration }=e.srcElement;
    //console.log(e);

    let progress_timer=(currentTime/duration) * 100;
    progress.style.width=`${progress_timer}%`;

     //Duration Update

    let minute_duration = Math.floor(duration / 60);
    let secound_duration = Math.floor(duration % 60);

   let total_duration = `${minute_duration}:${secound_duration}`;

    if(duration){
        current_duration.textContent=`${total_duration}`;
    }
   

    // Current Duration Update

    let minute_currentTime = Math.floor(currentTime / 60);
    let secound_currentTime = Math.floor(currentTime % 60);

   let total_currentTime = `${minute_currentTime}:${secound_currentTime}`;
    current_time.textContent = `${total_currentTime}`;

   
});

next.addEventListener("click",nextSong);
previous.addEventListener("click", previousSong);