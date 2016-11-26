function Jukebox(){
	this.songs = [];
	this.play = function (){
		//play MP3
	};
	this.pause = function(){
		//pause song
	};
	this.addSong = function(x){
		this.songs.push(x)
	};
	this.playNextSong = function(){
		//play next song in array
	}
}

function Song(name, link){
	this.name = name;
	this.link = 
}

document.getElementById("play"").addEventListener('click', Jukebox.play());