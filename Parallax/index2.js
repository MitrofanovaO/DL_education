var pic= document.querySelector(".picture");

function parallax() {
	var st = this.pageYOffset / 2;
	pic.style.transform = "translate3d(0, " + st + "px, 0)"
}
window.addEventListener('scroll', parallax);