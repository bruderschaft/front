var http = require('http');
var sockjs = require('sockjs');

var sockjs_server = sockjs.createServer();
sockjs_server.on('connection', function(conn) {
    cosole.log('connection' + conn);

    conn.on('data', function(message) {
        cosole.log('on data: ' + message);
        conn.write(message);
    });
    conn.on('close', function() {
    	cosole.log('connection is closed');
    });
});

var server = http.createServer();
sockjs_server.installHandlers(server, {prefix:'/echo'});
server.listen(9999);