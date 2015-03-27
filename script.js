var img = document.getElementsByTagName('img').item(0);
img.addEventListener('mousedown', function(e){
	if (e.button == 2) {
		alert("Don't save the photo, man;]");
	}
}, false);
