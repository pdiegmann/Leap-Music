/**
 * Basic, abstract View-functionality
 * See http://stackoverflow.com/questions/4778881/how-to-use-underscore-js-as-a-template-engine
 * for Templating examples
 **/

function View() {
};

// the DOM-Template-Element id in our HTML
View.prototype.domId = undefined;

// pop's a view from the stack and animates it's slide out
View.prototype.pop = function() {
	// TODO: Animate
	// remove from View Stack
};

// pushes a view onto our current view and animates it
View.prototype.pushOnTop = function(viewOnTop) {
	
};

/**
 * Main View
 **/

function MainView() {
	View.prototype.constructor.call();
};

// inherits from View
MainView.prototype = new View();

// set the constructor!
MainView.prototype.constructor = MainView;