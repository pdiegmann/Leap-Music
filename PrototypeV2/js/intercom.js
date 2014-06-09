function initInterCom() {

}

var lastPalmSphereRadiusNormalized = undefined;

function onReceiveInput(y, palmSphereRadiusNormalized) {
	var frequency = normalizedToHertz(y);
	var note = normalizedToMidi(y);
	var targetNoteFrequency = midiToHertz(note);
	var distantNoteFrequency = midiToHertz(distantNoteFromNormalized(y)); // Frequency of the more "distant" Note from our frequency-area
	var frequencyDifference = Math.abs(targetNoteFrequency - frequency); // Difference from our current Note to our desired target Note
	var maxFrequencyDifference = (Math.abs(distantNoteFrequency - targetNoteFrequency) / 2);
	var accurracy = 1 - (frequencyDifference / maxFrequencyDifference);
	if (Math.abs(distantNoteFrequency - targetNoteFrequency) == 0) // same notes mean we have a 100% hit
		accurracy = 1;

	return updateVisual(y, accurracy);

	if (palmSphereRadiusNormalized <= 0.25) {
		endNote();
	}
	else if (isStroking(palmSphereRadiusNormalized)) {
		startNote(note);
	}
}

function isStroking(palmSphereRadiusNormalized) {
	if (lastPalmSphereRadiusNormalized == undefined)
		return true;
	return lastPalmSphereRadiusNormalized <= 0.25 && palmSphereRadiusNormalized > 0.25;
}