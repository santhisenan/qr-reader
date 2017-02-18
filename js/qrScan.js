var player = document.getElementById('videoPlayer');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var playVideo = function(stream){
	player.srcObject = stream;
};

captureButton.addEventListener('click', function(){
	var context = snapshot.getContext('2d');
	console.log(context);
    context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
});

navigator.mediaDevices.getUserMedia({video: true}).then(playVideo);