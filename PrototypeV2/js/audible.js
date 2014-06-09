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
var centerFrequency = 261.63;

function initAudible() {
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