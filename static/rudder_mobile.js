
var sockjs_url = 'http://10.42.0.1:9998/mobile';
    sockjs = new SockJS(sockjs_url);
    sockjs.onopen = function() {
        //print('[*] socket has been opened', sockjs.protocol);
    };
    sockjs.onmessage = function(e) {//print(e.data, "d");
};
    sockjs.onclose = function() {
       // print('[*] socket has been closed');
    };

var gas = document.getElementById('gas');
var stop = document.getElementById('stop');

gas.addEventListener('touchstart', function(event){
    sender.setGas(1);
});
gas.addEventListener('touchend', function(event){
    sender.setGas(0);
});

stop.addEventListener('touchstart', function(event){
    sender.setGas(-1);
});
stop.addEventListener('touchend', function(event){
    sender.setGas(0);
});        

var form = document.getElementById("form");
var startGamma;
var init;
var isOverlay = 1;
/*form.submit(function() {
    sockjs.send(inp.val());
    return false;
});*/

document.getElementById('calibre').addEventListener('click', calibre);
function calibre () {
    alert('держите "штурвал" так, чтобы потом было удобно изменять положение и нажмите OK');
    init = 0;
    //document.getElementById("alpha").innerHTML +="init = 0;";
    if (isOverlay) {
        document.getElementById('calibre').style.display = "none";
        document.getElementById('form').style.display = "inline-block";
        document.getElementById('form').addEventListener('submit', sendToken);
    };
}

function sendToken (event) {
    event.preventDefault();
    sockjs.send(document.getElementById('inp').value);

    document.getElementById('form').style.display='none';
    closeOverlay(document.getElementById('calibre-container'));
    
    document.getElementById('calibre_next').style.display = "inline-block";
    document.getElementById('calibre_next').addEventListener('click', calibre);    
}   

function closeOverlay (overlay) {
    overlay.style.display = "none";    
    isOverlay=0; 
} 

/*var sendingObject = {
    gas: 0,
    left: 0,
    pull: 0,
    needToSend: false,
    setGas : function (arg) {
        if (gas != arg) {
            this.gas = arg;
            this.needToSend = true;
        }
    },
    toJSON : function (arg) {
        
    }
}*/

function Sender (socket) {
    this.sendingObject = {
        gas: 0,
        left: 0,
        pull: 0
    }

    this.socket = socket;

    this.setGas = function (arg) {
        if (this.sendingObject.gas != arg) {
            this.sendingObject.gas = arg;
            this.sendDiff();
        }
    };
    this.setLeft = function (arg) {
        if (Math.abs( Math.abs(this.sendingObject.left) - Math.abs(arg) ) > 0.02 ) {
            this.sendingObject.left = arg;
            this.sendDiff();
        }
    };
    this.setPull = function (arg) {
        if (Math.abs( Math.abs(this.sendingObject.pull) - Math.abs(arg) ) > 0.02 ) {
            this.sendingObject.pull = arg;
            this.sendDiff();
        }
    };

    this.sendDiff = function () {
        console.log(sender.sendingObject);
        var s = JSON.stringify(sender.sendingObject);
        socket.send(s);
    }

    //this.timer = setInterval(this.sendDiff, 500);

    this.getGas = function () {return this.sendingObject.gas}
    this.getLeft = function () {return this.sendingObject.left}
    this.getPull = function () {return this.sendingObject.pull}

    
}

var sender = new Sender(sockjs);

/*function sendDiff () {
    console.log("shlem", JSON.toString(this.sendingObject))
    sockjs.send(JSON.toString(this.sendingObject));
}*/

window.addEventListener('deviceorientation', function(event) {
    //document.getElementById("abs").innerHTML = event.absolute;

    if (init == 0) {
        startGamma = event.gamma;
        //document.getElementById("alpha").innerHTML +="startGamma = " + startGamma;
        init = 1;
        //document.getElementById("alpha").innerHTML +="init = 1;";
    } 

    //if ((sender.getLeft() <= 0 && Math.round(event.beta) > 0) || (sender.getLeft() >= 0 && Math.round(event.beta) < 0)){
        var press = Math.abs( event.beta / 45 ) > 1 ? ((event.beta > 0) ? -1 :1 ): ( -event.beta / 45 );
        sender.setLeft(press);
    //} else {
    //    document.getElementById('alpha').innerHTML = Math.round(event.beta);
    //    document.getElementById('alpha').innerHTML += "a2";

    //    sender.setLeft(0);
    //}


    
//    document.getElementById('alpha').innerHTML = event.gamma;
    var press1 = (Math.abs(event.gamma - startGamma) / 40 > 1) ? ((event.gamma < startGamma) ? -1 : 1) : ((event.gamma - startGamma )/ 40)
      document.getElementById('alpha').innerHTML = press1;
    sender.setPull(press1);

    /*if (Math.abs(Math.abs(event.gamma) - Math.abs(startGamma)) > 9){
        if (event.gamma > startGamma) {
            sender.setPull(1);
        } else {
            sender.setPull(-1);
        } 
    } else {
        sender.setPull(0);
    }*/

/* 
    if (Math.round(event.beta)<(-9)) {
        sockjs.send('{"type":37}')
    } else if (Math.round(event.beta)>9) {
        sockjs.send('{"type":39}')
    } else if (Math.abs(Math.abs(event.gamma) - Math.abs(startGamma)) > 9) {
        if (event.gamma > startGamma) {
            sockjs.send('{"type":38}')
        } else{
            sockjs.send('{"type":40}')
        }
    }
*/
    /*document.getElementById("alpha").innerHTML = event.alpha;
    document.getElementById("betha").innerHTML = event.beta;
    document.getElementById("gamma").innerHTML = event.gamma;*/
});
