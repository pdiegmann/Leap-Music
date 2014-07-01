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
	this.getDomElement().hide('fast');
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
	document.getElementById("input_firstNote").value = Audible.firstNote;
	document.getElementById("select_numberNotes").value = Audible.numNotes;

	$('#mainView_startFreeGame').click(function() {
		$('.menuGameView').show('fast');
		$('.menuMainView').hide('fast');
		InterCom.gamestate.gameMode = 0;
		InterCom.activeView().pushOnTop(InterCom.gamestate.getGameView());
		InterCom.gamestate.gameActive = true;
		InterCom.gamestate.getActiveView().getNotesSlider().hide();
	});
	$('#mainView_startScoreGame').click(function() {
		$('#mainView_startScoreGame').hide();
		$('.menuGameView').show('fast');
		$('.menuMainView').hide('fast');
		InterCom.gamestate.gameMode = 1;
		InterCom.activeView().pushOnTop(InterCom.gamestate.getGameView());
		InterCom.gamestate.gameActive = true;
		var container = $('#notes .bxslider');
		container.empty();
		container.append("<li class='page'></li>");
		container.append("<li class='page'></li>");
		var notes = InterCom.music.notes;
		for (var i = 0; i < notes.length; i++) {
			var lage = notes[i].Height;
            var ton = notes[i].Note;
            var position = Audible.lastNote - InterCom.music.getNote(ton, lage, false);
			if (position < 0)
				position = 0;
			else if (position > (Audible.lastNote - Audible.firstNote - 1))
				position = (Audible.lastNote - Audible.firstNote - 1);
			var margin = position * 5 + position * 25;
			var obj = $("<li class='page'><div class='note' style='margin-top:" + margin + "'></div></li>");
			console.log(position, margin);
			container.append(obj);
		}
		container.append("<li class='page'></li>");
		container.append("<li class='page'></li>");
		InterCom.gamestate.getActiveView().getNotesSlider().show();
		document.getElementById('songfileform').reset();
	});
	$('#mainView_showSettings').click(function() {
		$('#mainView').hide('fast');
		$('#settingsView').show('fast');
	});
	$('#mainView_showSettings_back').click(function() {
		$('#mainView').show('fast');
		$('#settingsView').hide('fast');
	});
	$('#settings_save').click(function() {
		alert(document.getElementById("select_numberNotes").value);
		alert(document.getElementById("input_firstNote").value);
	});

	return new View("mainView");
}

var GameView = function GameView() {
	View.apply(this, arguments);
	this.domId = "gameView";
	$('#gameView_back').click(function() {
		InterCom.gamestate.gameMode = -1;
		InterCom.gamestate.gameActive = false;
		Audible.pause();
		InterCom.backgroundTrack.pause();
		InterCom.gamestate.popActiveView();
		$('#mainView').show('fast');
		$('#gameView').hide('fast');
		$('.menuMainView').show('fast');
		$('.menuGameView').hide('fast');
	});
	if (InterCom.gamestate != undefined && InterCom.gamestate.gameMode == 1) {
		this.getNotesSlider().show();
	}
	return this;
}
GameView.prototype = View.prototype;
GameView.prototype.constructor = GameView;
GameView.prototype.notesSlider = undefined;
GameView.prototype.getNotesSlider = function() { 
	if (this.notesSlider == undefined) {
		this.notesSlider = $('#notes .bxslider').bxSlider({
		  infiniteLoop: false,
		  hideControlOnEnd: true,
		  speed: 100,
		  slideMargin: 50,
		  pager: false,
		  controls: false
		});
	}
	return this.notesSlider; 
};