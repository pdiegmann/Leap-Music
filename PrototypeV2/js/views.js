/**
 * Basic, abstract View-functionality
 * See http://stackoverflow.com/questions/4778881/how-to-use-underscore-js-as-a-template-engine
 * for Templating examples
 **/

function View(id) {
	this.domId = id;
	/*this.template = _.template(
    	$('#' + this.domId).html()
    );*/
};

// the DOM-Template-Element id in our HTML
View.prototype.domId = undefined;
View.prototype.getDomElement = function() {
	return document.getElementById(this.domId);
}

//View.prototype.template = undefined;

// pop's a view from the stack and animates it's slide out
View.prototype.pop = function() {
	// TODO: Animate
	// remove from View Stack
};

// pushes a view onto our current view and animates it
View.prototype.pushOnTop = function(viewOnTop) {
	$('#' + this.domId).hide('fast');
	$('#' + viewOnTop.domId).show('fast');
};

View.prototype.getDomElement = function() {
	return document.getElementById(this.domId);
}

/***
 * View Instances
 ***/

function MainView() {
	$('#mainView_startGame').click(function() {
		InterCom.activeView().pushOnTop(InterCom.gamestate.getGameView());
		InterCom.gamestate.gameActive = true;
	});

	return new View("mainView");
}

function GameView() {
	return new View("gameView");
}