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
	$('#mainView_startFreeGame').click(function() {
		InterCom.gamestate.gameMode = 0;
		InterCom.activeView().pushOnTop(InterCom.gamestate.getGameView());
		InterCom.gamestate.gameActive = true;
	});
	$('#mainView_startScoreGame').click(function() {
		$('#mainView_startScoreGame').hide();
		InterCom.gamestate.gameMode = 1;
		InterCom.activeView().pushOnTop(InterCom.gamestate.getGameView());
		InterCom.gamestate.gameActive = true;
	});
	$('#mainView_showSettings').click(function() {
		$('#mainView').hide();
		$('#settingsView').show();
	});
	$('#mainView_showSettings_back').click(function() {
		$('#mainView').show();
		$('#settingsView').hide();
	});
	$('#submit').click(function() {
		alert(document.getElementById("select_notes").value);
		alert(document.getElementById("select_firstNote").value);
	});

	


	return new View("mainView");
}

function GameView() {
	return new View("gameView");
}