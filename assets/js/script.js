var slideItem = 0;

window.onload = function () {
	
	setInterval(passarSlide, 2000);
	
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for (var i in objs){
		if (i>-1)
		objs[i].style.width = slidewidth;
	}
}

function passarSlide(){
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor = "#000";
}

function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	
}