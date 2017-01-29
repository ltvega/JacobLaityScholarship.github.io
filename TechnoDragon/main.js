var myImage=document.getElementById("myPhoto");

var imageArray=["gp.jpg", "p3.jpg", "pc.jpg", "inspire1.jpg", "gp1.jpg", "bebop.jpg"];
var imageIndex=0; 

function changeImage () {
	myPhoto.setAttribute("src", imageArray [ imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;
	}
}



var intervalHandle = setInterval(changeImage,2000);

myPhoto.onclick=function() {
	clearInterval(intervalHandle);
}