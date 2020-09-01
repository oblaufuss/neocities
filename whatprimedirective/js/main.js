//imports all star images
var starimportsrc = ["./img/star1.png", "./img/star2.png", "./img/star3.png", "./img/star4.png", "./img/star5.png"]
var starpics = []

for (i = 0; i < starimportsrc.length ; i++){
	var a = i + 1
	starpics["star" + a] = new Image();
	starpics["star" + a].src = starimportsrc[i]
};

//imports all color bars and adds their location onscreen
var colorimportsrc = ["./img/colordefault.png", "./img/6.png", "./img/5.png", "./img/4.png", "./img/3.png", "./img/2.png", "./img/1.png"]
var colorimportloc = [0, 208, 272, 336, 400, 464, 528]
var barpics = []

for (i = 0; i < colorimportsrc.length; i++){
	barpics[i] = new Image();
	barpics[i].src = colorimportsrc[i]
	barpics[i].location = colorimportloc[i]
};

//imports numbers
var numerals = []
for (i = 0; i < 10; i++){
	numerals["num" + i] = new Image();
	numerals["num" + i].src = "./img/num" + i + ".png"
}

//imports planets
var planetimportsrc = ["./img/p6.png","./img/p5.png","./img/p4.png","./img/p3.png","./img/p2.png","./img/p1.png"]
var planetimportsrcbroken = ["./img/p6b.png","./img/p5b.png","./img/p4b.png","./img/p3b.png","./img/p2b.png","./img/p1b.png"]
var planetimportsiz = [20, 45, 50, 45, 80, 80]
var planetpics = []

for (i = 0; i < planetimportsrc.length; i++){
	var a = i + 1
	planetpics["planet" + a] = new Image();
	planetpics["planet" + a].src = planetimportsrc[i]
	planetpics["planet" + a].size = planetimportsiz[i]
	planetpics["planet" + a + "broken"] = new Image();
	planetpics["planet" + a + "broken"].src = planetimportsrcbroken[i]
	planetpics["planet" + a + "broken"].size = planetimportsiz[i]
}

//imports collision animation
var bamimportsrc = ["./img/bam0.png", "./img/bam1.png", "./img/bam2.png"]
var bampics = []

for(i = 0; i < bamimportsrc.length; i++){
	bampics["bam" + i] = new Image();
	bampics["bam" + i].src = bamimportsrc[i]
}

//imports all other random picture elements
var ship = new Image();
ship.src = "./img/ship.png"
var ship2 = new Image();
ship2.src = "./img/ship2.png"
var kship = new Image();
kship.src = "./img/kship.png"
var kship_hit = new Image();
kship_hit.src = "./img/kship_hit.png"
var bolt = new Image();
bolt.src = "./img/bolt.png"

var win = new Image();
win.src = "./img/win.png"

//importing the important stuff from the canvas
var gameCanvas = document.getElementById("gameCanvas");
var getContext = gameCanvas.getContext("2d")

//setting star and planet starting positions to random values
var scene = 0
var spaceX = [0]
for (i = 0; i < 25; i++){
	spaceX[i] = Math.random() * gameCanvas.width;
}
var spaceY = [0]
for (i = 0; i < 25; i++){
	spaceY[i] = Math.random() * -gameCanvas.height;
}

var planetX = [0]
for (i = 0; i <6; i++){
	planetX[i] = Math.random() * gameCanvas.width;
}
var planetY = [-450,-255,-780,-1234,-330,-1520]
var planetbroken = [false, false, false, false, false, false]

//variables for color scores, ship location, and bolt locations
var colors = [0,0,0,0,0,0]
var shipx = 0
var hit = [false, 0, 0, 0, 0]
var bolts = 0
var boltx = [0]
var bolty = [470]

//variables for klingon ship locations and bolt locations
var kships = [false]
var kships_destroyed = 0
var kshipx = 0
var kshipy = 0

var kbolts = 0
var kboltx1 = [0]
var kboltx2 = [0]
var kbolty = [0]

//initiation of mouse sensing and animation
function begin() {
	gameCanvas.addEventListener("mousemove", move)
	requestAnimationFrame(tick)
};

//sends ship to the mouse's x value
function move(mouseEvent){
	shipx = mouseEvent.offsetX
};

//creates new bolt object at the Enterprise
function shoot(){
	boltx[bolts] = shipx - 15
	bolty[bolts] = 470
	if (scene !==6) bolts ++;
}

//creates two new klingon bolt objects
function kshoot(){
	var a = 
	kbolty[kbolts] = kshipy + 25
	kboltx1[kbolts] = kshipx - 15
	kboltx2[kbolts] = kshipx + 65
	kbolts ++
}


//This is the juicy bit. Everything visible in a frame goes here.
function tick(){

	//width change to refresh screen
	gameCanvas.width = 800

	//decide: will there be klingons???
	if (Math.random() > 0.999 && !kships[0] && scene !== 6){
		kships = [true, Math.random() * gameCanvas.height/2 + 40, Math.random() * gameCanvas.width, true, Math.random() * 100, false, true, "nohit", 0]
		kshipx = Math.random() * gameCanvas.width
		kshipy = -60
	};

	//places stars
	for (i = 0; i < 5; i++){
		getContext.drawImage(starpics.star1, spaceX[i], spaceY[i]);
		getContext.drawImage(starpics.star2, spaceX[i+5], spaceY[i+5]);
		getContext.drawImage(starpics.star3, spaceX[i+10], spaceY[i+10]);
		getContext.drawImage(starpics.star4, spaceX[i+15], spaceY[i+15]);
		getContext.drawImage(starpics.star5, spaceX[i+20], spaceY[i+20]);
	};

	//determines if planets are broken; places planets
	for (i = 0; i < 6; i++){
		a = i + 1
		if (planetbroken[i]){
			getContext.drawImage(planetpics["planet"+a+"broken"], planetX[i], planetY[i])
		}else{
			getContext.drawImage(planetpics["planet"+a], planetX[i], planetY[i])
		}
	};

	//makes stars move; resets stars that have gone off canvas
	for (i = 0; i < spaceY.length; i++){
		spaceY[i] = spaceY[i]+ 2
		if (spaceY[i] > 600){
			spaceY[i] = 0
			spaceX[i] = Math.random() * gameCanvas.width
		}
	};

		//draws grey bar across top
	getContext.drawImage(barpics[0], 208, 0)

	//these put in the completed color bars
	for (i = 0; i < 6; i++){
		if (scene !==6){
			getContext.drawImage(barpics[i + 1], barpics[i + 1].location, -12+colors[i]*2)
			if (colors[i] > 5){scene = scene + 1}
		}else{getContext.drawImage(barpics[i + 1], barpics[i + 1].location, 0)}
	}

	//makes planets move; resets off-canvas planets; resets shot planets; checks if klingon ship has been hit
		for (i = 0; i < 6; i++){
		planetY[i] = planetY[i]+ 2
		if (planetY[i] > 600 && scene !== 6){
			planetY[i] = Math.random() * -gameCanvas.height - 600
			planetX[i] = Math.random() * gameCanvas.width
			planetbroken[i] = false
		}else if (scene !== 6){
			for (a = 0; a < bolts; a++){
				if (Math.abs(planetX[i]+ 25 - boltx[a]) < 30 && Math.abs(planetY[i] + 15 -bolty[a])< 8 && !planetbroken[i]){
					planetbroken[i] = true
					if (colors[i] !== 6)colors[i] ++;
					bolty[a] = "x"
				}else if (Math.abs(kshipx + 25 - boltx[a]) < 30 && Math.abs(kshipy + 15 -bolty[a]) < 30 && kships[7] !== "hit"){
					kships[7] = "hit"
					kships[8] = 3
					kships_destroyed ++
					bolty[a] = "x"
				}
			};
			//planet-ship collisions
			if (Math.abs(planetX[i] + 25 - shipx) < 35 && planetY[i] < 550 && planetY[i] > 480 - planetpics["planet" + String(i + 1)].size && !hit[0] && !planetbroken[i]){
				hit = [true, 3, 0, ship, 0]
				colors[i] --
			}
		}
	};

	//discredits "deleted" bolts and draws other bolts; checks for klingons shooting you
	for (i = 0; i < bolts; i++){
		if (bolty[i] !== "x"){
			getContext.drawImage(bolt, boltx[i] , bolty[i])
		}
	};

	for (i = 0; i < kbolts; i++){
		if (kboltx1[i] !== "x"){
			if (!hit[0] && Math.abs(shipx + 15 - kboltx1[i]) < 30 && kbolty[i] > 500){
				kboltx1[i] = "x"
				hit = [true, 3, 0, ship, 0]
				for (a = 0; a < 6; a++){
					if (colors[a] !== 0)colors[a] --;
				};
			}else{
				getContext.drawImage(bolt, kboltx1[i] , kbolty[i])
			}
		};
		if(kboltx2[i] !== "x"){
			if (!hit[0] && Math.abs(shipx + 15 - kboltx2[i]) < 35 && kbolty[i] > 500){
				kboltx2[i] = "x"
				hit = [true, 3, 0, ship, 0]
				for (a = 0; a < 6; a++){
					if (colors[a] !== 0)colors[a] --;
				};
			}else{
				getContext.drawImage(bolt, kboltx2[i] , kbolty[i])
			}
		}
	};

	//"deletes" bolts that have gone offscreen
	for (i = 0; i < bolts; i++){
		bolty[i] = bolty[i] - 5
		if (bolty[i] < 0){
			bolty[i] = "x"
		}
	};

	for (i = 0; i < kbolts; i++){
		kbolty[i] = kbolty[i] + 5
		if (kbolty[i] > 600){
			kboltx1[i] = "x"
			kboltx2[i] = "x"
		}
	};

	// checks if game has been completed
	if (scene == 6){
		getContext.drawImage(win, 260, 200)
		var boltsfinal = bolts.toString().split("")
		var kships_destroyedfinal = kships_destroyed.toString().split("")
		for (i = 0; i < boltsfinal.length; i++){
			getContext.drawImage(numerals["num" + [boltsfinal[i]]], 410 + i*14, 280)
		}
		for (i = 0; i < kships_destroyedfinal.length; i++){
			getContext.drawImage(numerals["num" + [kships_destroyedfinal[i]]], 460 + i*14, 304)
		}
	}else{
		scene = 0
	};

	//makes Klingons move
	if (kships[0]){
		if (kships[7] == "hit"){
			kshipy = kshipy - 2.5
			if (kshipy <= -60){
				kships[0] = false
				kships[7] = "nohit"
			}
		}else{
			if (kships[1] > kshipy && kships[3] && !kships[5]){
				kshipy = kshipy + 4
			} else if (kships[1] < kshipy && kships[3]){
				if (kships[4] > 0){
					if (kships[6]){
						kshoot()
						kships[6] = false
					}
					kships[4] --
				} else {
					kships[3] = false
				}
			};
			if (Math.abs(kshipx - kships[2]) < 4) {
				kships[5] = true
			} else if (kshipx > kships[2] && !kships[3]){
				kshipx = kshipx - 4
			} else if(!kships[3]){
				kshipx = kshipx + 4
			};
			if(kships[5] && kshipy > -60){
				kshipy = kshipy - 2
			} else if (kships[5] && kshipy <= -60){
				kships[0] = false
			}
		}

		
		if(kships[7] == "hit"){
			if (kships[8] !== 0){
				getContext.drawImage(bampics["bam" + String(3 - kships[8])], kshipx -15, kshipy + 50)
				kships[8] --
			}
			getContext.drawImage(kship_hit, kshipx, kshipy)
		}else{
			getContext.drawImage(kship, kshipx, kshipy)
		}
	};

	//draw ship; show damage if hit by flickering dark/light every 2 frames for 60 frames
	if (hit[0]){
		if(hit[1] !== 0){
			getContext.drawImage(bampics["bam" + String(3 - hit[1])], shipx - 55 , 470)
			getContext.drawImage(ship, shipx - 55 , 470)
			hit[1] --;
		}else{
			if(hit[2] < 2){
				getContext.drawImage(hit[3], shipx - 55, 470)
				hit[2] ++
			}else{
				getContext.drawImage(hit[3], shipx - 55, 470)
				hit[2] = 0
				if (hit[3] == ship){hit[3] = ship2} else {hit[3] = ship}
			}
		}
		hit[4] ++
		if(hit[4] > 80){hit[0] = false}
	}else{
		getContext.drawImage(ship, shipx - 55 , 470)
	};

	//begins animation frame again
	requestAnimationFrame(tick)
};

//let it begin!
window.onload = function(){
	begin()
};