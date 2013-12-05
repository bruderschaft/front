
var sockjs_url = 'http://localhost:9998/desktop';
    var sockjs = new SockJS(sockjs_url);
    $('#first input').focus();

    var div = $('#first div');
    var inp = $('#first input');
    var form = $('#first form');

    var print = function(m, type) {
        div.append('<code>' + '<i class="' + ((type === "m") ? 'icon-mobile-phone" style="font-size:35px;' : 'icon-desktop" style="font-size:25px;') + '"></i>' + m + '</code>');
        div.append($("<br>"));
        div.scrollTop(div.scrollTop()+10000);
    };

    sockjs.onopen = function() {print('[*] open', sockjs.protocol);};
    sockjs.onmessage = function(e) {
        var data;
        if (e.data.indexOf("{")!= -1) {
            data = JSON.parse(e.data);
            var e = jQuery.Event("keydown", { keyCode: data.type });
            jQuery("body").trigger(e);
        } else {
            data = e.data;
            alert(e.data);
        }
        
        if (classOf(data) === 'String') {
            print(data, "m");
        } else{
            print(data.type, "m");
        } 

    };
    sockjs.onclose = function() {print('[*] close');};

    form.submit(function() {
        print(inp.val(), "d");
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
