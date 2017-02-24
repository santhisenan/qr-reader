Webcam.set({
	image_format: 'png',
	force_flash: false
});
//Webcam.configure();
Webcam.attach('#my_camera');
function take_snapshot() {
    Webcam.snap( function(data_uri) {
	Webcam.upload( data_uri, '../loginController/uploadImage', function(code, text) {
			//window.location.href = "getqr";

    			});

 ajax.open('post','getqr');
});
}
