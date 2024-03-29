function Audible() {
	var isPlaying = true;
	var tone = undefined;
	var reverb = undefined;
	var master = undefined;
	var env = undefined;
	var mod = undefined;
	var phaser = undefined;
	var synth = undefined;
	var midi = new Array(Audible.numNotes);
	var a = 440; // a is 440 hz...

	Audible.block = false;
	Audible.minVolume = -53;
	Audible.maxVolume = 12;
	Audible.paddingPercentage = 0.15; // padding which surrounds the 'sensitive area'

	for (var x = Audible.firstNote; x < Audible.lastNote; ++x)
	{
		midi[x - Audible.firstNote] = (a / 32) * Math.pow(2, ((x - 9) / 12));
	}
	/*for (var x = 0; x < 126; ++x)
	{
		midi[x] = (a / 32) * Math.pow(2, ((x - 9) / 12));
	}*/

	var defaultFrequency = 0; //tone.freq.value; // the default tone's frequency
	tone=T("sin");
	/*synth = T("SynthDef", {poly: 1}).play();
	//env = T("sin", {d:3000, s:0, r:600});
	master = synth;
	//mod = T("sin", {freq:2, add:3200, mul:800, kr:1});
	master = T("eq", {params:{lf:[800, 0.5, -2], mf:[6400, 0.5, 4]}}, master);
	//master = T("phaser", {freq:mod, Q:2, steps:4}, master);

	synth.def = function(opts) {
		var VCO = T("saw", {freq:opts.freq});

		var cutoff = T("env", {table:[8000, [opts.freq, 500]]}).bang();
		var VCF    = T("lpf", {cutoff:cutoff, Q:5}, VCO);

		var EG  = T("adsr", {a:150, d:500, s:0.45, r:1500, lv:0.6});
		var VCA = EG.append(VCF).bang();

		return VCA;
	};*/

	this.startNote = function(noteNumber) {
		//tone.pause();
		tone.freq=this.midiToHertz(noteNumber);
		tone.play();
		//if (synth != undefined)
			//synth.noteOn(noteNumber);
	}

	this.endNote = function() {
		tone.pause();
		if (synth != undefined)
			synth.allSoundOff();
	}

	this.pause = function() {
		if (tone != undefined)
			tone.pause();
		if (synth != undefined)
			synth.allSoundOff();

		isPlaying = false;
	}

	this.play = function() {
		if (tone != undefined)
			tone.play();

		isPlaying = true;
	}

	this.toggle = function() {
		isPlaying ? pause() : play();
	}

	this.normalizeFrequency = function(freq) {
		var upperBound = midiNote[Audible.numNotes - 1];
		var lowerBound = midiNote[0];
		freq = freq - lowerBound;
		freq = freq / (upperBound - lowerBound);
		return freq;
	}

	this.midiToHertz = function(midiNote) {
		midiNote = Math.round(midiNote);
		//console.log("note: " + midiNote);
		if (midiNote <= Audible.firstNote)
			return midi[0];
		if (midiNote >= Audible.firstNote + Audible.numNotes - 1)
			return midi[Audible.numNotes - 1];
		return midi[midiNote - Audible.firstNote]
	}

	this.hertzToMidi = function(hertz) {
		var a = 440; // a is 440 hz...
		var midiNote = Math.round(69 + 12*Math.log(hertz/a)/Math.log(2));
		if (midiNote <= Audible.firstNote)
			return Audible.firstNote;
		else if (midiNote >= Audible.lastNote)
			return Audible.lastNote;
		return midiNote;
	}

	this.normalizedToMidi = function(normalized) {
		/*if (normalized <= 0)
			return Math.round(Audible.firstNote, 0);
		if (normalized >= 1)
			return Math.round(Audible.firstNote + (Audible.numNotes - 1), 0);
		
		return Math.round(normalized * Math.round((Audible.numNotes - 1), 0), 0); //Math.round(midi[Math.round(normalized * (Audible.numNotes - 1), 0)]);
		*/
		if (normalized <= 0)
			return Math.round(Audible.firstNote, 0);
		if (normalized >= 1)
			return Math.round(Audible.firstNote + (Audible.numNotes - 1), 0);

		var current = normalized * (Audible.numNotes - 1) + Audible.firstNote;
		var ceil = Math.ceil(normalized * (Audible.numNotes - 1) + Audible.firstNote, 0)
		var floor = Math.floor(normalized * (Audible.numNotes - 1) + Audible.firstNote, 0)
		
		if (Math.abs(ceil - current) > Math.abs(floor - current)) {
			return floor;
		}
		else {
			return ceil;
		}
	}

	this.distantNoteFromNormalized = function(normalized) {
		if (normalized <= 0)
			return Math.round(Audible.firstNote, 0);
		if (normalized >= 1)
			return Math.round(Audible.firstNote + (Audible.numNotes - 1), 0);

		var current = normalized * (Audible.numNotes - 1) + Audible.firstNote;
		var ceil = Math.ceil(normalized * (Audible.numNotes - 1) + Audible.firstNote, 0);
		var floor = Math.floor(normalized * (Audible.numNotes - 1) + Audible.firstNote, 0);
		
		if (Math.abs(ceil - current) > Math.abs(floor - current)) {
			return ceil;
		}
		else {
			return floor;
		}
	}

	this.normalizedToHertz = function(normalized) {
		var floatingMidi = normalized * (Audible.numNotes - 1) + Audible.firstNote;
		return (a / 32) * Math.pow(2, ((floatingMidi - 9) / 12));
		//var maxHertz = midi[Audible.numNotes - 1];
		//var minHertz = midi[0];
		//return (maxHertz * normalized) + (minHertz * (1 - normalized));
	}
}

Audible.numNotes = 12;
Audible.firstNote = 60;
Audible.lastNote = Audible.numNotes + Audible.firstNote;