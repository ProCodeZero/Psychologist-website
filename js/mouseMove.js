
// Mouse move
ns4 = (document.layers) ? true : false
ie4 = (document.all) ? true : false

function init() {
	if (ns4) { document.captureEvents(Event.MOUSEMOVE); }
	document.onmousemove = mousemove;
}
function mousemove(event) {
	var mouse_x = y = 0;
	if (document.attachEvent != null) {
		mouse_x = window.event.clientX;
		mouse_y = window.event.clientY;
	} else if (!document.attachEvent && document.addEventListener) {
		mouse_x = event.clientX - 0;
		mouse_y = event.clientY - 0;
	}
	document.getElementById('greeting').style.backgroundPosition = 'calc(' + mouse_x / 20 + 'px - 100vw) calc(' + mouse_y / 20 + 'px - 100vw)';

}
init()

// 