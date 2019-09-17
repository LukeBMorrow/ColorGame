 var difficulty = 6;
 var colors = generateRandomColors(difficulty);
 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
 var msgDisplay = document.querySelector("#msg");
 var h1 = document.querySelector("h1");
 var reset = document.querySelector("#reset");
 var stripe = document.querySelector("#stripe");
 var easybtn = document.querySelector("#easy");
 var hardbtn = document.querySelector("#hard");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	difficulty = 3;
	for (var i = 0; i< squares.length; i++){
 	squares[i].style.backgroundColor = "#232323";
 	}
	colors = generateRandomColors(difficulty);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i< squares.length; i++){
 	squares[i].style.backgroundColor = colors[i];
 	}
});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	difficulty = 6;
	for (var i = 0; i< squares.length; i++){
 	squares[i].style.backgroundColor = "#232323";
 	}
	colors = generateRandomColors(difficulty);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i< squares.length; i++){
 	squares[i].style.backgroundColor = colors[i];
 	}
});

reset.addEventListener("click", function(){
	colors = generateRandomColors(difficulty);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i< squares.length; i++){
 		squares[i].style.backgroundColor = colors[i];
 	}
 	reset.textContent= "New Colors";
 	h1.style.backgroundColor = "steelBlue";
 	msgDisplay.textContent = "";
});

 colorDisplay.textContent = pickedColor; 

 for (var i = 0; i< squares.length; i++){
 	squares[i].style.backgroundColor = colors[i];

 	squares[i].addEventListener("click", function(){
 		var clickedColor = this.style.backgroundColor;

 		if(clickedColor === pickedColor){
 			msgDisplay.textContent = "Correct";
 			reset.textContent= "Play Again?";
 			h1.style.backgroundColor = clickedColor;
 			changeColors(clickedColor);

 		}else{
 			msgDisplay.textContent = "Try Again";
 			this.style.backgroundColor = "#232323";
 		}
 	});
 }
 
 function changeColors(color){
 	for(var i=0; i<colors.length; i++){
 		squares[i].style.backgroundColor=color;
 	}
 }

 function pickColor(){
 	var random = Math.floor(Math.random()*colors.length);
 	return colors[random];
 }

 function generateRandomColors(num){
 	var arr = [];

 	for( var i = 0; i<num; i++){
 		arr.push(randomColor());
 	}
 	return arr;
 }

 function randomColor(){
 	var r = Math.floor(Math.random()*256);
 	var g = Math.floor(Math.random()*256);
 	var b = Math.floor(Math.random()*256);

 	return "rgb(" + r + ", "+ g + ", "+ b + ")";
 }
