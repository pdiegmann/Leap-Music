var isPlaying = true;
var block = false;
var tone = undefined;
var reverb = undefined;
var master = undefined;
var env = undefined;
var mod = undefined;
var phaser = undefined;
var synth = undefined;
var paddingPercentage = 0.15; // padding which surrounds the 'sensitive area'
var minVolume = -53;
var maxVolume = 12;
var midi = new Array(127);

function initAudible() {
	var a = 440; // a is 440 hz...
	for (var x = 0; x < 127; ++x)
	{
		midi[x] = (a / 32) * Math.pow(2, ((x - 9) / 12));
	}

	var defaultFrequency = 0; //tone.freq.value; // the default tone's frequency
	synth = T("SynthDef", {poly: 1}).play();
	env = T("sin", {d:3000, s:0, r:600});
	master = synth;
	mod = T("sin", {freq:2, add:3200, mul:800, kr:1});
	master = T("eq", {params:{lf:[800, 0.5, -2], mf:[6400, 0.5, 4]}}, master);
	master = T("phaser", {freq:mod, Q:2, steps:4}, master);

	synth.def = function(opts) {
		var VCO = T("saw", {freq:opts.freq});

		var cutoff = T("env", {table:[8000, [opts.freq, 500]]}).bang();
		var VCF    = T("lpf", {cutoff:cutoff, Q:5}, VCO);

		var EG  = T("adsr", {a:150, d:500, s:0.45, r:1500, lv:0.6});
		var VCA = EG.append(VCF).bang();

		return VCA;
	};
}

function startNote(noteNumber) {
	if (synth != undefined)
		synth.noteOn(noteNumber);
}

function endNote() {
	if (synth != undefined)
		synth.allSoundOff();
}

function pause() {
	if (tone != undefined)
		tone.pause();
	if (synth != undefined)
		synth.allSoundOff();

	isPlaying = false;
}

function play() {
	if (tone != undefined)
		tone.play();

	isPlaying = true;
}

function toggle() {
	isPlaying ? pause() : play();
}

function normalizeFrequency(freq) {
	var upperBound = midiNote[126];
	var lowerBound = midiNote[0];
	freq = freq - lowerBound;
	freq = freq / (upperBound - lowerBound);
	return freq;
}

function midiToHertz(midiNote) {
	midiNote = Math.round(midiNote);
	console.log("note: " + midiNote);
	if (midiNote <= 0)
		return midi[0];
	if (midiNote >= 126)
		return midi[126];
	return midi[midiNote]
}

function hertzToMidi(hertz) {
	var a = 440; // a is 440 hz...
	var midiNote = (a / 32) * Math.pow(2, ((hertz - 9) / 12));
	if (midiNote <= 0)
		return 0;
	if (midiNote >= 126)
		return 126;
	return midiNote;
}

function normalizedToMidi(normalized) {
	if (normalized <= 0)
		return midi[0];
	if (normalized >= 1)
		return midi[126];

	return midi[Math.round(normalized * 126, 0)]
}

function distantNoteFromNormalized(normalized) {
	if (normalized <= 0)
		return midi[0];
	if (normalized >= 1)
		return midi[126];

	var ceil = Math.ceil(normalized * 126, 0)
	var floor = Math.floor(normalized * 126, 0)

	if (Math.abs(ceil - normalized * 126) > Math.abs(floor - normalized * 126)) {
		return ceil;
	}
	else {
		return floor;
	}
}

function normalizedToHertz(normalized) {
	var maxHertz = midiToHertz(126);
	var minHertz = midiToHertz(0);
	return (maxHertz * normalized) + (minHertz * (1 - normalized));
}