var http = require('http');
var request = require('request');
var sockjs = require('sockjs');
var node_static = require('node-static');
var Cookies = require('cookies');
var fest = require('fest');
var querystring = require('querystring');
var utils = require('util');
var fs = require('fs');

// ОБРАТНАЯ СВЯЗЬ О ДОСТАВКЕ СООБЩЕНИЙ
// ЛОКАЛ СТОРАДЖ - ВОССТАНОВЛЕНИЕ СВЯЗИ КЛИЕНТА С СЕРВЕРОМ
// работа с GUID

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

/** вынесу когда-нибудь в отдельную функцию
  *function connectMobile (mobileSession, desktopSession, token) {
  *    mobileToDesktop[mobileSession] = desktopSession;
  *    tokenToSessionId[token] = "";
  *    sessionIdToToken[desktopSession] = "";
  *}
  */
var toketToConn = {};
var sockjs_opts = {sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js"};
var sockjs_desktop = sockjs.createServer(sockjs_opts);
sockjs_desktop.on('connection', function(conn) {
    
    if (conn["_session"]["session_id"] === undefined) {
        //console.log("new connection");
        var token = randomHash(5);
        var desktop = randomHash(12);
        conn["_session"]["session_id"] = desktop;
        toketToConn[token] = conn;
        //console.log(conn);
        //console.log("desk " + toketToConn[token]);
        conn.write("token: " + token);
    } 

    conn.on('data', function(message) {               
        /*conn.write(message); //шлет обратно*/
        
        //console.log("djdjdjd")
        var desk = conn["_session"]["session_id"];
        //console.log(desk);
        var connect = DeskConnToMobile[desk]["mobile"];
        //console.log(DeskConnToMobile[desk]);
        
        console.log("connect: " + connect);
        connect.write(message);
        console.log(message);
        console.log("message.data: " + message.data);
    });
    conn.on('close', function (message) {
        var desk = conn["_session"]["session_id"];
        //console.log(desk);
        var connect = DeskConnToMobile[desk]["mobile"];
        connect.write("desktop disconnected.");
    });
});

var sockjs_opts_mobile = {sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js"/*,cookie: true*/};
var MobileConnToDesk = {};
var DeskConnToMobile = {};
var sockjs_mobile = sockjs.createServer(sockjs_opts_mobile);
sockjs_mobile.on('connection', function(conn) {
    conn.on('data', function(message) {
        //console.log("session_id" + conn["_session"]["session_id"]);
        if (conn["_session"]["session_id"] === undefined) {
            var mobile = randomHash(12);
            
            //console.log("new mobile");
            var deskConn = toketToConn[message];
            if (deskConn === undefined) {
                conn.write("bad token");
            } else{
                var desktop = deskConn["_session"]["session_id"];
                toketToConn[message] = "";
                conn["_session"]["session_id"] = mobile;
                MobileConnToDesk[mobile] = {
                    mobile: conn,
                    desktop: deskConn
                }
                DeskConnToMobile[desktop] = {
                    mobile: conn,
                    desktop: deskConn
                }
            }
        } else{
            var mobile = conn["_session"]["session_id"];
            var connect = MobileConnToDesk[mobile]["desktop"];
            connect.write(message);
            console.log(message);
            //console.log(connect);
            //console.log(MobileConnToDesk);
        }
        
        /*conn.write(message); //шлет обратно*/
    });
    conn.on('close', function (message) {
        var mobile = conn["_session"]["session_id"];
        var connect = MobileConnToDesk[mobile]["desktop"];
        connect.write("mobilka disconnected.");
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

/** тут я пытался работать с куками
  *var sessionIdToToken = {};
  *var tokenToSessionId = {};
  */

var mobileToDesktop = {};   

server.addListener('request', function(req, res) {
    //console.log(req["headers"]["user-agent"]);
    if (req["headers"]["user-agent"].indexOf("mobila")!==-1) {
        if (req["method"] === "GET") {
            /*var cookies = new Cookies(req, res);
            var GET_sessionId = cookies.get("JSESSIONID");
            if ((GET_sessionId === undefined) || (mobileToDesktop[GET_sessionId] === undefined)) {
                var mobileCookie = randomHash(11);
                cookies.set("JSESSIONID", mobileCookie);
            }
            page = fest.render('mobile.html');
            res.write(page);*/
            
            /** ну его в опу
             *res.write(fest.render("mobile1.html"));
             *res.end();
             */

             fs.readFile('mobile1.html', function (err, data) {
                 if (err) throw err;
                 res.write(data.toString());
                 res.end();
             });
        
        } /* сессии и все такое

            else{
            var fullBody = '';
            req.on('data', function(chunk) {
                fullBody += chunk.toString();
            });
            req.on('end', function() {
                var decodedBody = querystring.parse(fullBody);
                console.log(decodedBody['token']);
                var token = decodedBody['token'];
                //TODO: тут отдаем страничку с js, 
                //который коннектит по сокету
                res.write(fest.render("mobile1.html"));
                
                var cookies = new Cookies(req, res);
                var GET_sessionId = cookies.get("JSESSIONID");
                var tmp = {};
                tmp["desktopSession"] = tokenToSessionId[token];
                mobileToDesktop[GET_sessionId] = tmp;
                tokenToSessionId[token] = "";
                sessionIdToToken[tmp["desktopSession"]] = "";
                
                res.end();
                });
            }
          */
    }else{
        //static_directory.serve(req, res);
        var cookies = new Cookies(req, res);
        var GET_sessionId = cookies.get("JSESSIONID");    
        //console.log("GET_sessionId = " + GET_sessionId);

          /** тут я пытался работать с куками
            *   //если пришел без куки, или нет у нас такой куки
            *if ((GET_sessionId === undefined) || (sessionIdToToken[GET_sessionId] === undefined)) {
            *   desktop = randomHash(11);
            *   token = randomHash(5);
            *   cookies.set("JSESSIONID", desktop);
            *   sessionIdToToken[desktop] = token;
            *   tokenToSessionId[token] = desktop;
            *   counter++;
            *} else{
            *   token = sessionIdToToken[GET_sessionId];
            *}
            *
            */
        
        var token, desktop;    
        //res.write(fest.render('neew.html', {token: token}));
        
        //res.write(fest.render('pittsdemo.html'));
        //res.end();

        fs.readFile('neew.html', {encoding: 'utf-8'}, function (err, data) {
             if (err) throw err;
             res.write(data);
             res.end();
        });
    }
    
});

server.addListener('upgrade', function(req,res){
    /*var cookies = new Cookies(req, sock);
    var GET_sessionId = cookies.get("JSESSIONID");
    console.log(GET_sessionId);
    sock["_session"]["session_id"] = GET_sessionId;
    console.log(ock["_session"]["session_id"]);*/
    //console.log(req);
    //console.log(res);
    sock.end(); 
});

sockjs_desktop.installHandlers(server, {prefix:'/desktop'});
sockjs_mobile.installHandlers(server, {prefix:'/mobile'});

console.log(' [*] Listening on 127.0.0.1:9998, nginx-proxy on 127.0.0.1:9999' );
server.listen(9998, '10.42.0.52');

//static_directory.serve(req, res);  - что такое
//разобраться с роутингом !!!
