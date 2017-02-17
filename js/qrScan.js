var camera = document.getElementById("camera");
var file;
var imageSrc;
camera.addEventListener("change" , function(e){
	file = e.target.files[0];
	imageSrc = URL.createObjectURL(file);
});