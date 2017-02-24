var player = document.getElementById('videoPlayer');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var videoTracks;
var context;
var image;
var playVideo = function(stream){
	player.srcObject = stream;
	videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', function(){
	context = snapshot.getContext('2d');
    context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
    image = context.getImageData(0,100,100,100);
    videoTracks.forEach(function(track) {track.stop()});
});
//implementation on unsuppported browswes
if(navigator.mediaDevices === undefined){
	navigator.mediaDevices = {};
}

if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {

    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}
navigator.mediaDevices.getUserMedia( {video: { facingMode: { exact: "environment" } }}).then(playVideo);

$('#capture').click(function(e){
  e.preventDefault();
	$.ajax({
		url:"../loginController/getqr",
		type :"post",
		data :{'image':image},
		success : function(){alert("qr code read")}
	})}
);