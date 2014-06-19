function InterCom() {}

InterCom.audible = undefined;
InterCom.input = undefined;
InterCom.visual = undefined;
InterCom.gamestate = undefined;
InterCom.lastPalmSphereRadiusNormalized = undefined;

InterCom.init = function() {
	//_.templateSettings.variable = "obj";
	InterCom.audible = new Audible();
	InterCom.input = new Input();
	InterCom.gamestate = new Gamestate();
	InterCom.visual = new Visual(InterCom.gamestate.getGameView());
}

InterCom.activeView = function() {
	return InterCom.gamestate.getActiveView();
}

var counter = 0;
InterCom.onReceiveInput = function(y, palmSphereRadiusNormalized) {
	var frequency = InterCom.audible.normalizedToHertz(y);
	var note = InterCom.audible.normalizedToMidi(y);
	var targetNoteFrequency = InterCom.audible.midiToHertz(note);
	var distantNoteFrequency = InterCom.audible.midiToHertz(InterCom.audible.distantNoteFromNormalized(y)); // Frequency of the more "distant" Note from our frequency-area
	var frequencyDifference = Math.abs(targetNoteFrequency - frequency); // Difference from our current Note to our desired target Note
	var maxFrequencyDifference = (Math.abs(distantNoteFrequency - targetNoteFrequency) / 2);
	var accurracy = 1 - (frequencyDifference / maxFrequencyDifference);
	if (Math.abs(distantNoteFrequency - targetNoteFrequency) == 0) // same notes mean we have a 100% hit
		accurracy = 1;

	console.log(note, accurracy);

	if (counter % 10 == 0) {
		counter = 1;
		InterCom.visual.updateVisual(y, accurracy);
	}

	if (palmSphereRadiusNormalized <= 0.25) {
		InterCom.audible.endNote();
	}
	else if (InterCom.isStroking(palmSphereRadiusNormalized)) {
		InterCom.audible.startNote(note);
	}

	InterCom.lastPalmSphereRadiusNormalized = palmSphereRadiusNormalized;
	counter++;
}

InterCom.isStroking = function(palmSphereRadiusNormalized) {
	if (InterCom.lastPalmSphereRadiusNormalized == undefined)
		return true;
	return InterCom.lastPalmSphereRadiusNormalized <= 0.25 && palmSphereRadiusNormalized > 0.25;
}