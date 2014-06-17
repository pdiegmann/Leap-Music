function Gamestate() {
	this.viewStack = new Array();

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