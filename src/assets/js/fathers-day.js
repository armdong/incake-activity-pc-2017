(function(window, document) {
	var oFlyBee = document.getElementById('hero'),
	    movieclip1 = new JSMovieclip(oFlyBee, {
	        height: 341,
	        direction: 'v',
	        frames_number: 2,
	        framerate: 4
	    }).play(true);
})(window, document);
