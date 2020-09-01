if (navigator.requestMIDIAccess) {
    console.log('This browser supports WebMIDI!');
} else {
    console.log('WebMIDI is not supported in this browser.');
}

function rgb2hex(orig) {//thanks to kaido on stackoverflow for helping out
  var rgb;
   hex =
    (orig[0] | 1 << 8).toString(16).slice(1) +
    (orig[1] | 1 << 8).toString(16).slice(1) +
    (orig[2] | 1 << 8).toString(16).slice(1);
  return hex;
}
var music = '';

var aNote = new Audio('a-a.mp3');

var canvas = document.createElement("canvas");
myImg = document.getElementById("target");
canvas.width = myImg.width;
canvas.height = myImg.height;
canvas.getContext('2d').drawImage(myImg, 0, 0);

//extract hex val of each pixel
for (h = 0; h < myImg.height; h++){
	for (w = 0; w < myImg.width; w++){
		music += rgb2hex(canvas.getContext('2d').getImageData(w, h, 1, 1).data);
	}
}

pixColor = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;

document.getElementById('test1').style.color = pixColor;
pixColorHex = rgb2hex(pixColor);
document.getElementById('test2').style.color = '#'+pixColorHex;
//returns rgba

//
for (i=0; i <music.length; i++){
	if (music.charAt(i) == 'a'){
		//aNote.play();
	}
}