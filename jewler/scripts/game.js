jewel.game = (function() {
	var dom = jewel.dom,
	    $ = dom.$;

	// hide the active screen (if any) and show the screen with the specified id

	function showScreen(screenID) {
	    var activeScreen(screenID) = $("#game .screen.active")[0]
	        screen = $("#" + screenId)[0];
	    if (activeScreen) {
	        dom.removeClass(screen, "active");
	    }
	    dom.addClass(screen, "active");
	}

	// expose public methods
	return {
	    showScreen : showScreen
	};
})();