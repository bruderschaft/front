
var sockjs_url = 'http://10.42.0.1:9998/desktop';
    var sockjs = new SockJS(sockjs_url);
    $('#first input').focus();

    var div = $('#first div');
    var inp = $('#first input');
    var form = $('#first form');

    var print = function(m, type) {
        div.append('<code>' + '<i class="' + ((type === "m") ? 'icon-mobile-phone" style="font-size:35px;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' : 'icon-desktop" style="font-size:25px;"></i>&nbsp;&nbsp;') + '' + m + '</code>');
        div.append($("<br>"));
        div.scrollTop(div.scrollTop()+10000);
    };
    var timerId;

    sockjs.onopen = function() {print('[*] socket has been opened', sockjs.protocol);};
    sockjs.onmessage = function(e) {
        var data;
        if (e.data.indexOf("{")!= -1) {
            //try catch
            data = JSON.parse(e.data);
            /*var e = jQuery.Event("keydown", { keyCode: data.type });
            jQuery("body").trigger(e);
            e = jQuery.Event("keyup", { keyCode: data.type });
            jQuery("body").trigger(e);*/
            /*var canvass = document.getElementById('canvas');
            var event1 = document.createEvent("UIEvents");
event1.initUIEvent("keypress", true, true, window, 1);
event1.keyCode = data.type; */
            //var event1 = new Event('keydown', { 'keyCode': data.type });
            //canvass.dispatchEvent(event1);

Ovoid.Input._eventKeyDn({keyCode:data.type});
timerId = setTimeout(function() { Ovoid.Input._eventKeyUp({keyCode:data.type}) }, 50);

//Ovoid._mainloop();
 //Ovoid.onloop();
            // //alert("1");
//Ovoid.Input._eventKeyUp({keyCode:data.type});
            //alert("2");
            
//Ovoid._mainloop();
//Ovoid.Input.update();
//window.requestAnimFrame(Ovoid._mainloop);
/*var event1 = new Event("KeyboardEvent");

event1.initKeyEvent(                                                                                      
                 "keydown",        //  in DOMString typeArg,                                                           
                  true,             //  in boolean canBubbleArg,                                                        
                  true,             //  in boolean cancelableArg,                                                       
                  null,             //  in nsIDOMAbstractView viewArg,  Specifies UIEvent.view. This value may be null.     
                  false,            //  in boolean ctrlKeyArg,                                                               
                  false,            //  in boolean altKeyArg,                                                        
                  false,            //  in boolean shiftKeyArg,                                                      
                  false,            //  in boolean metaKeyArg,                                                       
                   data.type,               //  in unsigned long keyCodeArg,                                                      
                   0);              //  in unsigned long charCodeArg); 
document.dispatchEvent(event1);

var event2 = new Event("KeyboardEvent");            
event2.initKeyEvent(                                                                                      
                 "keyup",        //  in DOMString typeArg,                                                           
                  true,             //  in boolean canBubbleArg,                                                        
                  true,             //  in boolean cancelableArg,                                                       
                  null,             //  in nsIDOMAbstractView viewArg,  Specifies UIEvent.view. This value may be null.     
                  false,            //  in boolean ctrlKeyArg,                                                               
                  false,            //  in boolean altKeyArg,                                                        
                  false,            //  in boolean shiftKeyArg,                                                      
                  false,            //  in boolean metaKeyArg,                                                       
                   data.type,               //  in unsigned long keyCodeArg,                                                      
                   0);              //  in unsigned long charCodeArg); 
document.dispatchEvent(event2);*/
         /*if (data.type == 39) {
            RmoveR();
            RmoveCt();
         } */  
            //console.log("keydown");
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
    sockjs.onclose = function() {print('[*] socket has been closed');};

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
