function Gamestate() {
	this.viewStack = new Array();

	this.activeView = function() {
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

	this.pushView = function(view) {
		var activeView = this.activeView();
		if (activeView)
			activeView.pushOnTop(view);
		this.viewStack.push(view);
	};

	this.pushView(new MainView());
}