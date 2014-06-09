var emulateLeapMotion = true;

function initInput() {
	if (emulateLeapMotion == true) {
		function handleMouseClick(event) {
			block=true;
			startNote(frequency);
		}

		function handleMouseUp(event) {
			endNote();
			block=false;
		}

	    function handleMouseMove(event) {
	        event = event || window.event; // IE-ism
	        processPositionChange([event.clientX, window.innerHeight-event.clientY, 0], window.innerHeight, window.innerWidth);
	    }

		window.onmousemove = handleMouseMove;
		document.body.onmousedown = handleMouseClick;
		document.body. onmouseup = handleMouseUp;
	}
	else {
		Leap.loop(function (frame) {
			if (frame != undefined) {
				var hands = frame.hands;
				var interactionBox = frame.interactionBox;
				
				if (interactionBox != undefined && hands != undefined && hands.length > 0) {
					var lefthand = hands[0];
					
					if (hands.length > 1) {
						var righthand = hands[1];

						if (lefthand.palmPosition[0] > righthand.palmPosition[0]) {
							var dummy = lefthand;
							lefthand = righthand;
							righthand = dummy;
						}
					}

					if (righthand != undefined) {
						var position = righthand.palmPosition;
						var height = interactionBox.height;
						var width = interactionBox.width;
						var frequency = processPositionChange(position, height, width);
						
						var schwelle = 50
						if (lefthand != undefined && lefthand.palmVelocity[1] > schwelle) {
							startNote(frequency);
						}
						else if(lefthand != undefined && lefthand.palmVelocity[1] < (schwelle*-1))
						{
							endNote();
						}		
					}
				}
			}
		});
	}
};

function processPositionChange(position, roomHeight, roomWidth) {
	var y = position[1]; // 0: x, 1: y, 2: z
	var x = position[0];

	y = Math.max(y, roomHeight * paddingPercentage); // => 10% of height means the 10 lowest % of room are 'ignored'
	y = Math.min(y, roomHeight * (1 - paddingPercentage)); // => 10% of height means the 10 heighest % of room are 'ignored'

	y = y - (roomHeight * paddingPercentage); // move everything 10% down
	y = y / (1 - (paddingPercentage * 2)); // stretch the room to reach 1 by dividing by 0.8
	y = y / roomHeight; // normalize to [0..1] by dividing by max value (room's height)

	y = y + 0.5; // add 0.5 to have y in [0.5, 1.5] to multiply with the 'default' tone and have a range between the 'half' and 'oneandahalf' tone

	roomWidth = roomWidth / 2; // highest volume is in the room's center
	if (x > roomWidth) {
		x = roomWidth - (x - roomWidth); // calculate the offset from the center and 'mirror' it into the opposite direction
	}

	x = Math.max(x, roomWidth * paddingPercentage);
	x = Math.min(x, roomWidth * (1 - paddingPercentage));

	x = x - (roomWidth * paddingPercentage);
	x = x / (1 - (paddingPercentage * 2));
	x = x / roomWidth;

	x = x * (maxVolume + (minVolume * -1));
	x = x - (minVolume * -1);

	if (output != undefined) {
		output.innerHTML = "x: " + position[0] + "<br/>y: " + position[1] + "<br/>z: " + position[2] + "<br/>normalized y: " + y + "<br/>height: " + roomHeight + "<br/>old frequency:  + tone.freq.value + <br/>new frequency: " + defaultFrequency * y + "<br/>normalized x: " + x;
	}

	if (block==false) { 
		return 64 * y;
	}
}