function InterCom() {}

InterCom.playerTrack = undefined;
InterCom.backgroundTrack = undefined;
InterCom.input = undefined;
InterCom.music = undefined;
InterCom.visual = undefined;
InterCom.gamestate = undefined;
InterCom.emulateLeapMotion = false;

InterCom.verticalPosition = undefined;
InterCom.frequency = undefined;
InterCom.accurracy = undefined;
InterCom.targetNoteFrequency = undefined;
InterCom.note = undefined;
InterCom.targetNote = undefined;
InterCom.needsAudioUpdate = false;
InterCom.needsVisualUpdate = false;

InterCom.audioLoopTime = 100;
InterCom.visualLoopTime = 200;

InterCom.lastVisualLoopTime = 0;
InterCom.currentNoteNr = 0;

InterCom.useLoops = false;

InterCom.init = function() {
	//_.templateSettings.variable = "obj";
	InterCom.playerTrack = new Audible();
	InterCom.backgroundTrack = new Audible();
	InterCom.input = new Input();
	InterCom.music = new Music();
	InterCom.gamestate = new Gamestate();
	InterCom.visual = new Visual(InterCom.gamestate.getGameView());

	if (InterCom.useLoops) {
		window.setInterval(InterCom.doAudioLoop, InterCom.audioLoopTime);
		window.setInterval(InterCom.doVisualLoop, InterCom.visualLoopTime);
	}
}

InterCom.activeView = function() {
	return InterCom.gamestate.getActiveView();
}


InterCom.onReceiveInput = function(y, palmSphereRadiusNormalized) {
	var frequency = InterCom.playerTrack.normalizedToHertz(y);

	InterCom.gamestate.palmSphereRadiusNormalized = palmSphereRadiusNormalized;
	
	if (InterCom.gamestate.lastPalmSphereRadiusNormalized > 0.25 && palmSphereRadiusNormalized <= 0.25) {
		InterCom.needsAudioUpdate = true;
		InterCom.doAudioLoop();
		return;
	}

	//if (Math.abs(InterCom.frequency - frequency) < 0.1 && Math.abs(InterCom.frequency - frequency) > 0.0)
	//	return;

	var note = InterCom.playerTrack.normalizedToMidi(y);
	var targetNoteFrequency = undefined;
	var distantNoteFrequency = undefined;

	if (InterCom.gamestate.gameMode == 1) {
		targetNoteFrequency = InterCom.playerTrack.midiToHertz(InterCom.music.note);
		distantNoteFrequency = InterCom.playerTrack.midiToHertz(Math.max(Math.abs(Audible.lastNote - InterCom.music.note), Math.abs(InterCom.music.note - Audible.firstNote)));
	} else {
		targetNoteFrequency = InterCom.playerTrack.midiToHertz(note);
		distantNoteFrequency = InterCom.playerTrack.midiToHertz(InterCom.playerTrack.distantNoteFromNormalized(y)); // Frequency of the more "distant" Note from our frequency-area
	}
	var frequencyDifference = Math.abs(targetNoteFrequency - frequency); // Difference from our current Note to our desired target Note
	var maxFrequencyDifference = (Math.abs(distantNoteFrequency - targetNoteFrequency) / 2);
	var accurracy = 1 - (Math.min(frequencyDifference, maxFrequencyDifference) / Math.max(frequencyDifference, maxFrequencyDifference));
	if (Math.abs(distantNoteFrequency - targetNoteFrequency) == 0) // same notes mean we have a 100% hit
		accurracy = 1;

	InterCom.targetNoteFrequency = targetNoteFrequency;
	InterCom.targetNote = InterCom.playerTrack.hertzToMidi(targetNoteFrequency);
	InterCom.accurracy = accurracy;
	InterCom.verticalPosition = y;
	InterCom.note = note;

	InterCom.needsVisualUpdate = true;
	if ((InterCom.gamestate.dynamicNote && InterCom.frequency != frequency) || InterCom.isStroking(InterCom.gamestate.palmSphereRadiusNormalized)) {
		InterCom.needsAudioUpdate = true;
	}
	InterCom.frequency = frequency;

	if (!InterCom.useLoops) {
		InterCom.doAudioLoop();
		InterCom.doVisualLoop();
	}
}

InterCom.doAudioLoop = function() {
	if (!InterCom.needsAudioUpdate)
		return;

	InterCom.needsAudioUpdate = false;
	if (InterCom.gamestate.palmSphereRadiusNormalized <= 0.25) {
		InterCom.playerTrack.endNote();
	} else if (InterCom.gamestate.dynamicNote || (!InterCom.gamestate.dynamicNote && InterCom.isStroking(InterCom.gamestate.palmSphereRadiusNormalized))) {
		InterCom.playerTrack.startNote(InterCom.note);
		if (InterCom.gamestate.gameMode == 1) {
			InterCom.music.playNote(InterCom.backgroundTrack);
			if (InterCom.isStroking(InterCom.gamestate.palmSphereRadiusNormalized)) {
				InterCom.gamestate.getActiveView().getNotesSlider().goToNextSlide();
			                                                                
				InterCom.currentNoteNr++;
				if(InterCom.currentNoteNr > MainView.maxNoteNr) {
				    GameView.prototype.EndGame();
                } else {                                                      
				    var noteElement = document.getElementById("NoteNr"+InterCom.currentNoteNr);
				    if (noteElement)
			    	    noteElement.style.background = "#12a0d2";   
                }
			}
		}
	}

	if (InterCom.gamestate.gameMode == 1) {
		InterCom.gamestate.updateScore(InterCom.frequency, InterCom.targetNoteFrequency, InterCom.playerTrack.normalizedToHertz(0), InterCom.playerTrack.normalizedToHertz(1), InterCom.audioLoopTime);
	}

	InterCom.gamestate.lastPalmSphereRadiusNormalized = InterCom.gamestate.palmSphereRadiusNormalized;
}

InterCom.doVisualLoop = function() {
	if (!InterCom.needsVisualUpdate)
		return;

	var end = new Date().getTime();
	var time = end - InterCom.lastVisualLoopTime;

	if (time < InterCom.visualLoopTime)
		return;

	InterCom.needsVisualUpdate = false;

	if (output != undefined) {
		output.innerHTML = "target freq: " + InterCom.targetNoteFrequency + "<br/>";
		output.innerHTML += "frequency: " + InterCom.frequency + "<br/>";
		output.innerHTML += "accurracy: " + InterCom.accurracy + "<br/>";
		output.innerHTML += "target note: " + InterCom.targetNote + "<br/>";
		output.innerHTML += "note: " + InterCom.note + "<br/>";
		output.innerHTML += "psrn: " + InterCom.gamestate.palmSphereRadiusNormalized + "<br/>";
		output.innerHTML += "score: " + InterCom.gamestate.currentScore + "<br/>";
	}

	var score = $('#score span');
	if (score && InterCom.gamestate.currentScore)
		score.text(Math.round(InterCom.gamestate.currentScore).format(0, 3, '.', ','));

	var note_current = $('#note_current span');
	if (note_current && InterCom.note)
		note_current.text(Math.round(InterCom.note));

	var note_target = $('#note_target span');
	if (note_target && InterCom.targetNote)
		note_target.text(Math.round(InterCom.targetNote));

	var currentNoteIndicator = $('#currentNote');
	if (currentNoteIndicator) {
		var position = Audible.lastNote - InterCom.note;
		if (position < 0)
			position = 0;
		else if (position > (Audible.lastNote - Audible.firstNote - 1))
			position = (Audible.lastNote - Audible.firstNote - 1);
		var margin = position * 5 + position * 25;
		currentNoteIndicator.css('margin-top', margin);
	}

	InterCom.visual.updateVisual(InterCom.verticalPosition, InterCom.accurracy);    
	InterCom.lastVisualLoopTime = new Date().getTime();
}

InterCom.isStroking = function(palmSphereRadiusNormalized) {
	if (InterCom.gamestate.lastPalmSphereRadiusNormalized == undefined)
		return true;
	return InterCom.gamestate.lastPalmSphereRadiusNormalized <= 0.25 && palmSphereRadiusNormalized > 0.25;
}