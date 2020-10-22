function generateHex(x, y){
			var generateHex = '';
			for(var i = 0; i < x; i++){
				generateHex +='<div class = "hexcol">\n'; //why does it need a newline to space correctly? IDK
				for(var j = 0; j < y; j++){
					if (j%2 === 0){
						generateHex +='<div class="hexrow"><div class="hexagon"></div></div>\n';
					}else{
						generateHex +='<div class="hexrow2"><div class="hexagon"></div></div>\n';
					}
				}
			generateHex +='</div>';
			}
		 document.getElementById("hexHeader").innerHTML = generateHex;
		}

		var radius = parseInt(getComputedStyle(document.getElementsByTagName('content')[0]).getPropertyValue('--radius'), 10);

		var hexsWide = window.innerWidth/((radius)* (97/56) + 6) - 1;
		var hexsTall = window.innerHeight/((radius) *(3/2) + 4) - 1;

		generateHex(hexsWide,hexsTall);//initial generation

		window.addEventListener('resize', () => {//regenerate on window resize
			var hexsWide = window.innerWidth/((radius)* (97/56) + 6) - 1;
			var hexsTall = window.innerHeight/((radius) *(3/2) + 4) - 1;
			generateHex(hexsWide,hexsTall);
		});