var http = require('http');
var static = require('node-static');
var file = new static.Server('.');
var querystring = require('querystring');

function accept(req, res) {

	//res.writeHead(200, {
    //'Content-Type': 'text/xml',
    //'Cache-Control': 'no-cache'
  	//});
	
	res.writeHead(200, {
    'Content-Type': 'text/xml',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  	});

	res.end('Not found');
}

http.createServer(accept).listen(8085);

console.log('Server running on port 8085');


/*var http = require('http');
var url = require('url');
var querystring = require('querystring');

function accept(req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Cache-Control': 'no-cache'
  });

  res.end("OK");
}

http.createServer(accept).listen(8080);*/
