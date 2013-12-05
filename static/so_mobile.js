
var sockjs_url = 'http://localhost:9998/mobile';
    sockjs = new SockJS(sockjs_url);
    $('#first input').focus();

    var div = $('#first div');
    var inp = $('#first input');
    var form = $('#first form');

    var print = function(m, type) {
        div.append('<code>' + '<i class="' + ((type === "m") ? 'icon-mobile-phone" style="font-size:35px;' : 'icon-desktop" style="font-size:25px;') + '"></i>' + m + '</code>');
        div.append($("<br>"));
        div.scrollTop(div.scrollTop()+10000);
    };

    sockjs.onopen = function() {
        print('[*] open', sockjs.protocol);
    };
    sockjs.onmessage = function(e) {print(e.data, "d");};
    sockjs.onclose = function() {print('[*] close');};

    form.submit(function() {
        print(inp.val(), "m");
        sockjs.send(inp.val());
        inp.val('');
        return false;
    });
// 4 сообщений - gas, 