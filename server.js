var express = require('express')
var app = express()
app.get('/',function(req, res){

	var language = req.headers["accept-language"].split(',')[0]
	var software = req.headers["user-agent"].split('(')[1].split(')')[0]
	var ipaddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	var result = {
		ipaddress : ipaddress,
		language :language,
		software : software
	}
	res.send(JSON.stringify(result))
})

var port = process.env.PORT || 8080; 
app.listen(port, function() {
    console.log("Timestamp App listening on port "+ port);
});