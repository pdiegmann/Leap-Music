/**
 * Basic, abstract View-functionality
 * See http://stackoverflow.com/questions/4778881/how-to-use-underscore-js-as-a-template-engine
 * for Templating examples
 **/

function View() {
	this.template = _.template(
    	$('#' + this.domId).html()
    );
};

// the DOM-Template-Element id in our HTML
View.prototype.domId = undefined;

View.prototype.template = undefined;

// pop's a view from the stack and animates it's slide out
View.prototype.pop = function() {
	// TODO: Animate
	// remove from View Stack
};

// pushes a view onto our current view and animates it
View.prototype.pushOnTop = function(viewOnTop) {
	
};

View.prototype.getDomElement = function() {
	return document.getElementById(this.domId);
}

/**
 * Main View
 **/

function MainView() {
	this.domId = "tmpl_main_view";
	View.prototype.constructor.call();
};

// inherits from View
MainView.prototype = new View();

// set the constructor!
MainView.prototype.constructor = MainView;