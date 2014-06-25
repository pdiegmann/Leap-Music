function Gamestate() {
	this.viewStack = new Array();
	this.lastPalmSphereRadiusNormalized = undefined;
	this.palmSphereRadiusNormalized = undefined;
	this.dynamicNote = true; // true == movement with hand results in change in frequency, even after stroke
	this.currentScore = 0;
	this.gameMode = -1; // -1 no game mode specified, 0 free game, 1 score game

	this.getCurrentNote = function() {
		// TODO get current note from song at current time
		return undefined;
	}

	this.getActiveView = function() {
		if (!this.viewStack)
			return undefined;
		if (this.viewStack.length <= 0)
			return undefined;
		return this.viewStack[this.viewStack.length - 1];
	}

	this.popActiveView = function() {
		if (!this.viewStack)
			return;
		if (this.viewStack.length <= 1)
			return;
		this.activeView.pop();
		this.viewStack.pop;
	};

	this.gameActive = false;

	var viewContainer = document.getElementById('content');
	var gameView = new GameView();
	this.getGameView = function() {
		return gameView;
	}

	this.calculateScore = function(currentFreq, targetFreq, minFreq, maxFreq, elapsedTime){
		var score = 0;
		var freqDiff = Math.abs((maxFreq - targetFreq)-(maxFreq - currentFreq));
		var freqDiffMax = maxFreq - minFreq;
		var accurracy = 1 - (freqDiff / freqDiffMax);
		var timeSequence = 100;
		var defaultScore = 10;

		score = accurracy * defaultScore * (elapsedTime / timeSequence);

		return score;
	};

	this.updateScore = function(currentFreq, targetFreq, minFreq, maxFreq, elapsedTime){
		this.currentScore += this.calculateScore(currentFreq, targetFreq, minFreq, maxFreq, elapsedTime);
	}

	this.pushView = function(view) {
		if (view == undefined || view.getDomElement == undefined || view.getDomElement() == undefined)
			return;
		var activeView = this.getActiveView();
		
		//viewContainer.appendChild(view.getDomElement());
		$('#' + view.domId).removeClass('hidden');

		if (activeView)
			activeView.pushOnTop(view);
		this.viewStack.push(view);
	};

	this.pushView(new MainView());
}