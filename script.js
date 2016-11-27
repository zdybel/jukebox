
/*  

You will build a music player that will end up playing 
any mp3 you can find online. Think about what functionality you 
might need for this to work. Encapsulate all of this functionality 
in a JavaScript object so that starting a song is as simple as 
calling Jukebox.play() 

You need an array of song objects and the ability to play, 
stop and pause a song. 

How would you switch songs? Can you shuffle songs? Focus 
on getting the JavaScript to work and keep the HTML/CSS 
minimal, make it work before you make it look good!





Display at least one song on the page when the page loads

Give the user the ability to play that song, without using 
the "built-in" play button. This could be through 
a different button, through clicking or mousing over 
an image on the page, or any other device of your choosing.

Give the user the ability to stop that song without 
using the "built-in" stop button. Once again, this could 
be through a different button, through clicking or mousing 
over an image on the page, or any other device of your choosing.

Give the user the ability to load at least one different song 
into the Jukebox besides the one that is loaded when the 
page initially renders

The whole Jukebox should be backed by an object called Jukebox 
with methods to play, stop, and load songs.



JS throws no errors

Pause, Play, and Stop functions work (and do not use built in functionality)

JukeBox is object-oriented

Page has at least one song on load and can play a different song based on title

Allow a user to load one of their own songs

*/




function Jukebox(){
	this.songs = [];
	this.play = function(){
		document.getElementById('audio').play();
	};
	this.pause = function(){
		document.getElementById('audio').pause();
	};
	this.stop = function(){
		document.getElementById('audio').currentTime = 0;
		document.getElementById('audio').pause(); 
	}
	this.addSong = function(x){
		this.songs.push(x)
	};
	this.playNext = function(){
		document.getElementById('audio').src = "Audio-example.mp3";
		document.getElementById('audio').play();
	}
	var loadedSong = document.getElementById('loadInput').value;
	this.loadSong = function(){
		document.getElementById('audio').src = loadedSong;
		document.getElementById('audio').play();
	}
}

var BrynneJukebox = new Jukebox();

document.getElementById('play').addEventListener('click', BrynneJukebox.play);
document.getElementById('pause').addEventListener('click', BrynneJukebox.pause);
document.getElementById('stop').addEventListener('click', BrynneJukebox.stop);
document.getElementById('playNext').addEventListener('click', BrynneJukebox.playNext);
document.getElementById('loadButton').addEventListener('click', BrynneJukebox.loadSong);

function Song(name, link){
	this.name = name;
	this.link = link;
}





