var http = require('http');
var request = require('request');
var sockjs = require('sockjs');
var node_static = require('node-static');
var Cookies = require('cookies');
var fest = require('fest');

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

//sockkkkkk!!!
var sockjs_opts = {sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js"};

var sockjs_desktop = sockjs.createServer(sockjs_opts);
var connToConn = {};
sockjs_desktop.on('connection', function(conn) {
    conn.on('data', function(message) {
        //connToConn.push(conn);
        //console.log(connToConn);
        conn["_session"]["session_id"] = 
        console.log(conn["_session"]["session_id"])
        //console.log(["session_id"]);
        conn.write(message); //шлет обратно
        console.log(message);
    });
});

var sockjs_mobile = sockjs.createServer(sockjs_opts);
sockjs_mobile.on('connection', function(conn) {
    conn.on('data', function(message) {
        connToConn.push(conn);
        console.log(connToConn);
        conn.write(message); //шлет обратно
        console.log(message);
    });
});

// 2. Static files server
//var static_directory = new node_static.Server("staticc");

//2.5 random
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

// 3. Usual http stuff
var server = http.createServer();
var sessionIdToToken = {};
var tokenToSessionId = {};
var counter = 0;
var page;

server.addListener('request', function(req, res) {
    console.log(req["headers"]["user-agent"]);
    if (req["headers"]["user-agent"].indexOf("mobila")!==-1) {
        if (req["method"] === "GET") {
        page = fest.render('mobile.html');
        res.write(page);
        } else{
            var qs = require('querystring');
            console.log("req");
            //console.log(request.post());
            var body = '';
            req.on('data', function (data) {
                body += data;
                body += '+++';
            });
            req.on('end', function () {

                //var POST = qs.parse(body);
                // use POST
                console.log(body);
                    res.writeHead(200);
                    res.end();

            });
            //console.log(req.getBody);
        }
    }else{
        //static_directory.serve(req, res);
        var cookies = new Cookies(req, res);
        var GET_sessionId = cookies.get("JSESSIONID");    
        
        console.log("GET_sessionId = " + GET_sessionId);
        var token, desktop;

        
        
        //если пришел без куки, или нет у нас такой куки
        if ((GET_sessionId === undefined) || (sessionIdToToken[GET_sessionId] === undefined)) {
            desktop = randomHash(11);
            token = randomHash(5);

            cookies.set("JSESSIONID", desktop);

            sessionIdToToken[desktop] = token;
            tokenToSessionId[token] = desktop;

            counter++;
            connToConn
            /**     безнадежно устарело
            *connection["token"] = token;
            *connections[desktop] = connection;
            */
        } else{
            token = sessionIdToToken[GET_sessionId];
        }
            
        page = fest.render('neew.html', {token: token});
        console.log(page);
        res.write(page);
                
        console.log("connections: ", tokenToSessionId);
        console.log("sessionId: ", desktop);
        console.log("end");
//      console.log(req);  -  не делай так больше
        //не нужно res.setHeader("Cookie", "s=44");
    }
    res.end();
});


server.addListener('upgrade', function(req,res){
    res.end();
});

//sockkkk!!!
sockjs_desktop.installHandlers(server, {prefix:'/echo'});

/*server.addListener('/aa', function  (req,res){
    res.write('hello aa');
})*/
console.log(' [*] Listening on 0.0.0.0:9998' );
/*server.listen('/aa', function  () { 
    res.write('sdkljf');
})*/
server.listen(9998, '127.0.0.1');

//static_directory.serve(req, res);  - что такое
//разобраться с роутингом !!!


/** почему 2 раза обрабатывается request
  * как сделать роутинг нормально
  * как нормально вешать обработчик события (server)
  * как отдавать станичку и вставлять строки?(мб конкатенация)
*/