var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementsByClassName("topnav")[0].style.top = "0";
	} else {
		document.getElementsByClassName("topnav")[0].style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
}