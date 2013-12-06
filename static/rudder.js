document.addEventListener("keydown", move, false);
function move (event) {
		var message = {};
	if (event.which == 80) {
		message.type = "gas";
		message.type = event.which;
		message = JSON.stringify(message);
		sockjs.send(message);
	} else if (event.which == 77) {
		message.type = "stop";
		message.type = event.which;
		message = JSON.stringify(message);
		sockjs.send(message);
	} else if (event.which == 40) {
		message.type = "pull";
		message.type = event.which;
		message = JSON.stringify(message);
		sockjs.send(message);
	} else if (event.which == 38) {
		message.type = "push";
		message.type = event.which;
		message = JSON.stringify(message);
		sockjs.send(message);
	} else if (event.which == 37) {
		message.type = "left";
		message.type = event.which;
		message = JSON.stringify(message);
		sockjs.send(message);
	} else if (event.which == 39) {
		message.type = "right";
		message.type = event.which;
		message = JSON.stringify(message);
		sockjs.send(message);
	}
}