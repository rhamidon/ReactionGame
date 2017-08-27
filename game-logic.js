var start = new Date().getTime();
var count = 1;
var average = 0;
var totalTime = 0;

function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for(var i=0;i<6;i++){
		color += letters[Math.floor(Math.random() * 16)]
	} 
	return color;
}

function makeShapesAppear(){
	count++;
	var top = Math.random() * 400;
	var left = Math.random() * 400;
	var width = (Math.random() * 200) + 50;
	var height = (Math.random() * 200) + 50;
	var object = document.getElementById('shapes');

	object.style.backgroundColor = getRandomColor();
	object.style.display = "block";
	object.style.top =top + "px";
	object.style.left = left + "px";
	object.style.width = width + "px";
	object.style.height = height + "px";

	if(Math.random() > 0.5){
		object.style.borderRadius = "50%";
	} else {
		object.style.borderRadius = "0";
	}
		start = new Date().getTime();
	}

function appearAfterDelay(){
	setTimeout(makeShapesAppear, Math.random() * 2000);
}

// appearAfterDelay();

document.getElementById('shapes').onclick = function(){
	var end = new Date().getTime();
	var time = (end-start)/1000;
	totalTime += time;
	average = totalTime / count;
	/*console.log("Average is:"+ average + " Time is: "+ totalTime + " count is: " + count);*/
	document.getElementById('timeTaken').innerHTML = time + "'s";
	document.getElementById('averageTimeTaken').innerHTML = average + "'s";
	document.getElementById('shapes').style.display = "none";
	appearAfterDelay();
}


