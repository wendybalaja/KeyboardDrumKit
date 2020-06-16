
//document.querySelector("button").addEventListener("click", handleClick);

for(var i = 0; i < document.querySelectorAll("button").length; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick(){
	
	var innerHTML = this.innerHTML;

	switch (innerHTML){
		case "w": 
			var audio = new Audio("sounds/tom-1.mp3");
			audio.play();
			break;

		case "a": 
			var audio = new Audio("sounds/tom-2.mp3");
			audio.play();
			break;

		case "s": 
			var audio = new Audio("sounds/tom-3.mp3");
			audio.play();
			break;

		case "d": 
			var audio = new Audio("sounds/tom-4.mp3");
			audio.play();
			break;

		case "j": 
			var audio = new Audio("sounds/crash.mp3");
			audio.play();
			break;

		case "k": 
			var audio = new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;

		case "l": 
			var audio = new Audio("sounds/snare.mp3");
			audio.play();
			break;

		default: 
		console.log(innerHTML);
	}
}

function handleKey(keyPressed){
	switch (keyPressed){
		case "w": 
			var audio = new Audio("sounds/tom-1.mp3");
			audio.play();
			break;

		case "a": 
			var audio = new Audio("sounds/tom-2.mp3");
			audio.play();
			break;

		case "s": 
			var audio = new Audio("sounds/tom-3.mp3");
			audio.play();
			break;

		case "d": 
			var audio = new Audio("sounds/tom-4.mp3");
			audio.play();
			break;

		case "j": 
			var audio = new Audio("sounds/crash.mp3");
			audio.play();
			break;

		case "k": 
			var audio = new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;

		case "l": 
			var audio = new Audio("sounds/snare.mp3");
			audio.play();
			break;

		default: 
		console.log(keyPressed);
	}
}
document.addEventListener("keydown", function(event) {
		var keyPressed = event.key;
		handleKey(keyPressed);
		buttonAnimation(keyPressed);
	});

function buttonAnimation(currentKey){
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	}, 100);
}