var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var playVideo = function(stream){
	player.srcObject = stream;
};

captureButton.addEventListener('click', function(){
	var context = snapshot.getContext('2d');
    context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
});

navigator.mediaDevices.getUserMedia({video: true}).then(playVideo);