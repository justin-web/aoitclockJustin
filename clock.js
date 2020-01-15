function clock() {
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	var ampm = " PM ";
	if (h < 12) {
		ampm = " AM "
	}
	if (h > 12) {
		h -= 12
	}
	if (h < 10) {
		h = "0" + h
	}
	if (m < 10) {
		m = "0" + m
	}
	if (s < 10) {
		s = "0" + s
	}
	document.getElementById('mom').innerHTML =
  	h + ":" + m + ":" + s + ampm;
  	var t = setTimeout(clock, 500);
}

openNewWindow = function()
{
 window.open(url, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
};