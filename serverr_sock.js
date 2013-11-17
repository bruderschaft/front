var http = require('http');
var sockjs = require('sockjs');
var node_static = require('node-static');

// 1. Echo sockjs server
//sockjs_url :
/**
Transports, which don't support cross-domain
 communication natively ('eventsource' to name one),
  use an iframe trick.

A simple page is served from the SockJS server 
(using its foreign domain) and is placed in an 
invisible iframe. 

Code run from this iframe doesn't need to worry 
about cross-domain issues, as it's being run from 
domain local to the SockJS server.

This iframe also does need to load SockJS 
javascript client library, and this option lets you
 specify its url (if you're unsure, point it to the 
 latest minified SockJS client release, this is the 
 default). 

You must explicitly specify this url on the server 
side for security reasons - we don't want the 
possibility of running any foreign javascript 
within the SockJS domain (aka cross site scripting 
attack). 

Also, sockjs javascript library is probably 
already cached by the browser - it makes sense to 
reuse the sockjs url you're using in normally.
*/

var sockjs_opts = {sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js"};

var sockjs_echo = sockjs.createServer(sockjs_opts);
sockjs_echo.on('connection', function(conn) {
    conn.on('data', function(message) {

        conn.write(message); //шлет обратно
        console.log(message);
    });
});

// 2. Static files server
var static_directory = new node_static.Server("staticc");

// 3. Usual http stuff
var server = http.createServer();
var connections = [];
var randomHash = (function () {

    var letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';

    return function (len) {

        var result = '';

        for (var i=0; i <  len; i++) {

            result += letters[Math.floor(Math.random() * letters.length)];

        };

        return result;

    };

})();
server.addListener('request', function(req, res) {
    //static_directory.serve(req, res);
    connections.push({
    	token: randomHash(5),
    })
    console.log(connections);
    s = "";
    for (var i = 0; i < connections.length; i++) {
    	s+=connections[i].token;
    };
    console.log(s);
    res.write(connections.toString());
});

server.addListener('upgrade', function(req,res){
    res.end();
});

sockjs_echo.installHandlers(server, {prefix:'/echo'});

console.log(' [*] Listening on 0.0.0.0:9998' );
server.listen(9998, '127.0.0.1');