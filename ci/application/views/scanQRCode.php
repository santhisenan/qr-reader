<html>
	<head>
		<title>
		</title>
	</head>
	<form action="../loginController/readqr">
		<div id="cameraContainer">
		<video id="videoPlayer"  autoplay ></video>
		<button id="capture">Capture</button>
		<canvas id="snapshot"></canvas>
		</div>
		<img src="" id="scannedImage"/>

		<button type="submit">Login</button>
	</form>
	<script src = "../../../js/qrScan.js"></script>
</html>