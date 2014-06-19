function InterCom() {}

InterCom.audible = undefined;
InterCom.input = undefined;
InterCom.visual = undefined;
InterCom.gamestate = undefined;


InterCom.verticalPosition = undefined;
InterCom.frequency = undefined;
InterCom.accurracy = undefined;
InterCom.note = undefined;
InterCom.needsAudioUpdate = false;
InterCom.needsVisualUpdate = false;

InterCom.audioLoopTime = 100;
InterCom.visualLoopTime = 200;

InterCom.init = function() {
	//_.templateSettings.variable = "obj";
	InterCom.audible = new Audible();
	InterCom.input = new Input();
	InterCom.gamestate = new Gamestate();
	InterCom.visual = new Visual(InterCom.gamestate.getGameView());

	window.setInterval(InterCom.doAudioLoop, InterCom.audioLoopTime);
	window.setInterval(InterCom.doVisualLoop, InterCom.visualLoopTime);
}

InterCom.activeView = function() {
	return InterCom.gamestate.getActiveView();
}


InterCom.onReceiveInput = function(y, palmSphereRadiusNormalized) {
	var frequency = InterCom.audible.normalizedToHertz(y);
	
	InterCom.gamestate.palmSphereRadiusNormalized = palmSphereRadiusNormalized;
	if (InterCom.gamestate.lastPalmSphereRadiusNormalized > 0.25 && palmSphereRadiusNormalized <= 0.25) {
		InterCom.needsAudioUpdate = true;
		return;
	}

	if (Math.abs(InterCom.frequency - frequency) < 0.5)
		return;

	var note = InterCom.audible.normalizedToMidi(y);
	var targetNoteFrequency = InterCom.audible.midiToHertz(note);
	var distantNoteFrequency = InterCom.audible.midiToHertz(InterCom.audible.distantNoteFromNormalized(y)); // Frequency of the more "distant" Note from our frequency-area
	var frequencyDifference = Math.abs(targetNoteFrequency - frequency); // Difference from our current Note to our desired target Note
	var maxFrequencyDifference = (Math.abs(distantNoteFrequency - targetNoteFrequency) / 2);
	var accurracy = 1 - (Math.min(frequencyDifference, maxFrequencyDifference) / Math.max(frequencyDifference, maxFrequencyDifference));
	if (Math.abs(distantNoteFrequency - targetNoteFrequency) == 0) // same notes mean we have a 100% hit
		accurracy = 1;

	InterCom.accurracy = accurracy;
	InterCom.verticalPosition = y;
	InterCom.note = note;
	InterCom.frequency = frequency;
	InterCom.needsAudioUpdate = true;
	InterCom.needsVisualUpdate = true;
}

InterCom.doAudioLoop = function() {
	if (!InterCom.needsAudioUpdate)
		return;

	InterCom.needsAudioUpdate = false;

	if (InterCom.gamestate.palmSphereRadiusNormalized <= 0.25) {
		InterCom.audible.endNote();
		console.log("ended");
	}
	else if (InterCom.gamestate.dynamicNote || (!InterCom.gamestate.dynamicNote && InterCom.isStroking(InterCom.gamestate.palmSphereRadiusNormalized))) {
		InterCom.audible.endNote();
		InterCom.audible.startNote(InterCom.note);
	}

	InterCom.gamestate.updateScore(InterCom.frequency, InterCom.audible.midiToHertz(InterCom.gamestate.getCurrentNote()), InterCom.audible.normalizedToMidi(0), InterCom.audible.normalizedToMidi(1), InterCom.audioLoopTime);

	InterCom.lastPalmSphereRadiusNormalized = InterCom.palmSphereRadiusNormalized;
}

InterCom.doVisualLoop = function() {
	if (!InterCom.needsVisualUpdate)
		return;

	InterCom.needsVisualUpdate = false;

	if (output != undefined) {
		output.innerHTML = "accurracy: " + InterCom.accurracy + "<br/>";
		output.innerHTML += "frequency: " + InterCom.frequency + "<br/>";
		output.innerHTML += "note: " + InterCom.note + "<br/>";
		output.innerHTML += "psrn: " + InterCom.gamestate.palmSphereRadiusNormalized + "<br/>";
		output.innerHTML += "score: " + InterCom.gamestate.currentScore + "<br/>";
	}

	InterCom.visual.updateVisual(InterCom.verticalPosition, InterCom.accurracy);
}

InterCom.isStroking = function(palmSphereRadiusNormalized) {
	if (InterCom.gamestate.lastPalmSphereRadiusNormalized == undefined)
		return true;
	return InterCom.gamestate.lastPalmSphereRadiusNormalized <= 0.25 && palmSphereRadiusNormalized > 0.25;
}