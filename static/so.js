/*var pulseCache = {};
var pulse = function(namespace, call1, call2){
	pulseCache[namespace] = {
		delay: 500,
		current: '',
		delay1: 0,
		delay2: 0,
		timer1: undefined,
		timer2: undefined,
		call1: call1,
		call2: call2
	};
};

pulseUpdate = function(namespace, value){
	var key = pulseCache[namespace];
	var delay1 = Math.floor( key.delay * value );
	var delay2 = Math.floor( key.delay / ( value || 0.1 ) );

	if( ( delay1 !== key.delay1 ) || ( delay2 !== key.delay2 ) ){
		clearTimeout(key.timer1);
		clearTimeout(key.timer2);
		key.delay1 = delay1;
		key.delay2 = delay2;
		key.call2();
		var timeout1 = function(){
			key.call1();
			key.timer2 = setTimeout(timeout2, delay2);
		}
		var timeout2 = function(){
			key.call2();
			key.timer1 = setTimeout(timeout1, delay1);
		}
		timeout1();
	}
};

*/
var sockjs_url = 'http://0.0.0.0:9998/desktop';
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
	/*var timerId;
	function Buttons () {
		this.buttons = {
		  '80': false,
		  '77': false,
		  '40': false,
		  '38': false,
		  '37': false,
		  '39': false
		}
	}*/
var AutoButton = function(down, up){
		//зачем все таки присваивание this?
		//чтобы обращаться например при установке таймаута
		// иначе надо юзать анонимную функцию, она будет кучу раз создаваться.
		var self = this;
		self.time = 150;
		self.down = down;
		self.up = up;
		self.state = 0; // 0 - up, 1 - down
		self.value = 0;

		self.downTimeout = undefined;
		self.upTimeout = undefined;
		self.toUp = function(){
			if( self.delayToDown == 0 ){
				self.toDown();
			}else{
				if( self.state == 1 ){
					self.state = 0;
					self.up();
				}
				self.downTimeout = setTimeout(self.toDown, self.delayToDown );
				console.log('timeout self.delayToDown', self.delayToDown);
			}
		}
		self.toDown = function(){
			if( self.delayToUp == 0 ){
				self.toUp();
			}else{
				if( self.state == 0 ){
					self.state = 1;
					self.down();
				}
				self.upTimeout = setTimeout(self.toUp, self.delayToUp );
				console.log('timeout self.delayToUp', self.delayToUp)
			}
		}
		self.update(0);
		self.toUp();
	};
	AutoButton.prototype.update = function(value){
		var self = this;
		//clearTimeout( self.downTimeout );
		//clearTimeout( self.upTimeout );
		self.delayToDown = self.time * ( 1 - self.value );
		self.delayToUp = self.time * self.value;
	}
	AutoButton.prototype.set = function(value){
		var self = this;
		if( self.value != value ){
			self.value = value;
			self.update();
		}
	};

	var leftButton = new AutoButton( function(){
		Ovoid.Input._eventKeyDn({keyCode:37});
	}, function (){
		Ovoid.Input._eventKeyUp({keyCode:37});
	});

	var rightButton = new AutoButton( function(){
		Ovoid.Input._eventKeyDn({keyCode:39});
	}, function (){
		Ovoid.Input._eventKeyUp({keyCode:39});
	});

	var pushButton = new AutoButton( function(){
		Ovoid.Input._eventKeyDn({keyCode:38});
	}, function (){
		Ovoid.Input._eventKeyUp({keyCode:38});
	});

	var pullButton = new AutoButton( function(){
		Ovoid.Input._eventKeyDn({keyCode:40});
	}, function (){
		Ovoid.Input._eventKeyUp({keyCode:40});
	});



	var currentState = {
		buttons : {
			'80': false,
			'77': false,
			'40': false,
			'38': false,
			'37': false,
			'39': false,
		},
		gas: 0,
		left: 0,
		pull: 0,
		buttonDn : function (keyKode) {
			Ovoid.Input._eventKeyDn({keyCode:keyKode});
			this.buttons[keyKode] = true;
		},
		buttonUp : function (keyKode) {
			Ovoid.Input._eventKeyUp({keyCode:keyKode});
			this.buttons[keyKode] = false;
		},
		notEquals : function (data) {
			if (this.gas != data.gas || this.left != data.left || this.pull != data.pull) {
				return true
			} else {
				return false
			}
		},
		_leftKeyTimeout: undefined,
		_rightKeyTimeout: undefined,
	  	setState : function (data) {
	  		if (this.gas != data.gas) {
	  			if (this.gas == -1) {
	  				this.buttonUp(77)
	  				if (data.gas == 1) {
	  					this.buttonDn(80);
	  				}
	  			} else if (this.gas == 0) {
	  				console.log(this.gas, data.gas);
	  				if (data.gas == 1) {
						this.buttonDn(80);
	  				} else{
	  					this.buttonDn(77);
	  				}
	  			} else {
	  				this.buttonUp(80);
	  				if (data.gas == -1) {
	  					this.buttonDn(77);
	  				};
	  			}
	  			this.gas = data.gas;
	  		}

	  		var left = 0;
	  		var right = 0;
	  		if( data.left > 0 ){
	  			left = Math.abs( data.left );
	  		}else if( data.left < 0 ){
	  			right = Math.abs( data.left );
	  		}
	  		//pulseUpdate('left', left);
	  		//pulseUpdate('right', right);

	  		leftButton.set(left);
	  		rightButton.set(right);

	  		// if (this.left != data.left) {
	  		// 	if (this.left == -1) {
	  		// 		this.buttonUp(39)
	  		// 		if (data.left == 1) {
	  		// 			this.buttonDn(37);
	  		// 		}
	  		// 	} else if (this.left == 0) {
	  		// 		if (data.left == 1) {
					// 	this.buttonDn(37);
	  		// 		} else{
	  		// 			this.buttonDn(39);
	  		// 		}
	  		// 	} else {
	  		// 		this.buttonUp(37);
	  		// 		if (data.left == -1) {
	  		// 			this.buttonDn(39);
	  		// 		}
	  		// 	}
	  		// 	this.left = data.left;
	  		// }
	  		

	  		var push = 0;
	  		var pull = 0;
	  		if (data.pull > 0) {
	  			push = Math.abs(data.pull);
	  		} else{
	  			pull = Math.abs(data.pull);
	  		}
	  		pushButton.set(push);
	  		pullButton.set(pull);

	  		// if (this.pull != data.pull) {
	  		// 	if (this.pull == -1) {
	  		// 		this.buttonUp(40)
	  		// 		if (data.pull == 1) {
	  		// 			this.buttonDn(38);
	  		// 		}
	  		// 	} else if (this.pull == 0) {
	  		// 		if (data.pull == 1) {
					// 	this.buttonDn(38);
	  		// 		} else{
	  		// 			this.buttonDn(40);
	  		// 		}
	  		// 	} else {
	  		// 		this.buttonUp(38);
	  		// 		if (data.pull == -1) {
	  		// 			this.buttonDn(40);
	  		// 		}
	  		// 	}
	  		// 	this.pull = data.pull;
	  		// }
	  	}
	}
	/*pulse('left', function(){
		currentState.buttonDn.apply(currentState, [39]);
	}, function(){
		currentState.buttonUp.apply(currentState, [39]);
	});
	pulse('right', function(){
		currentState.buttonDn.apply(currentState, [37]);
	}, function(){
		currentState.buttonUp.apply(currentState, [37]);
	});*/


	





	

	sockjs.onopen = function() {print('[*] socket has been opened', sockjs.protocol);};
	sockjs.onmessage = function(e) {
		var data;
		if (e.data.indexOf("{")!= -1) {
			//try catch
			data = JSON.parse(e.data);

			if (currentState.notEquals(data)) {
				console.log('message');
				console.log(currentState);
				console.log(data);
				currentState.setState(data)
			}

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


//timerId = setTimeout(function() { Ovoid.Input._eventKeyUp({keyCode:data.type}) }, 50);

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
			document.getElementById('token').innerHTML = e.data;
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
