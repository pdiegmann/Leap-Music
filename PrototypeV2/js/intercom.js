function InterCom() {}

InterCom.audible = undefined;
InterCom.input = undefined;
InterCom.visual = undefined;
InterCom.gamestate = undefined;
InterCom.lastPalmSphereRadiusNormalized = undefined;

InterCom.init = function() {
	_.templateSettings.variable = "obj";
	InterCom.audible = new Audible();
	InterCom.input = new Input();
	InterCom.gamestate = new Gamestate();
	InterCom.visual = new Visual(InterCom.gamestate.getActiveView());
}

InterCom.activeView = function() {
	return InterCom.gamestate.activeView;
}

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

	return InterCom.visual.updateVisual(y, accurracy);

	if (palmSphereRadiusNormalized <= 0.25) {
		InterCom.audible.endNote();
	}
	else if (isStroking(palmSphereRadiusNormalized)) {
		InterCom.audible.startNote(note);
	}

	Intercom.lastPalmSphereRadiusNormalized = palmSphereRadiusNormalized;
}

InterCom.isStroking = function(palmSphereRadiusNormalized) {
	if (Intercom.lastPalmSphereRadiusNormalized == undefined)
		return true;
	return Intercom.lastPalmSphereRadiusNormalized <= 0.25 && palmSphereRadiusNormalized > 0.25;
}