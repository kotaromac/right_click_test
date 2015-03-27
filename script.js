// Add mousdown event to the image
// When you save the image, a stupid alert will appear.

var img = document.getElementsByTagName('img').item(0);
img.addEventListener('mousedown', function(e){
	if (e.button == 2) {
		alert("Don't save the photo, man;]");
	}
}, false);
