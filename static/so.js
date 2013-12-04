
var sockjs_url = 'http://localhost:9998/desktop';
    var sockjs = new SockJS(sockjs_url);
    $('#first input').focus();

    var div = $('#first div');
    var inp = $('#first input');
    var form = $('#first form');

    var print = function(m, p) {
        p = (p === undefined) ? '' : JSON.stringify(p);
        div.append($("<code>").text(m + ' ' + p));
        div.append($("<br>"));
        div.scrollTop(div.scrollTop()+10000);
    };

    sockjs.onopen = function() {print('[*] open', sockjs.protocol);};
    sockjs.onmessage = function(e) {
        print('[.] message')
        var data;
        if (e.data.indexOf("{")!= -1) {
            data = JSON.parse(e.data);
        } else {
            data = e.data;
        }
        
        if (classOf(data) === 'String') {
            print(data);
        } else{
            print(data.type);
        } 

    };
    sockjs.onclose = function() {print('[*] close');};

    form.submit(function() {
        print('[ ] sending', inp.val());
        sockjs.send(inp.val());
        inp.val('');
        return false;
    });
function classOf(obj) {

if (obj === null) return 'null';

if (obj === undefined) return 'undefined';

if (typeof obj === 'function') return 'function';

return Object.prototype.toString.call(obj).slice(8, -1);

}
