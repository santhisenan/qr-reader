<html>
	<head>
		<title>
		</title>
	</head>
	<form action="../loginController/readqr" method="post">
		<div id="cameraContainer">
		<video id="videoPlayer" width:"100" height:"100"  autoplay ></video>
		<button id="capture">Capture</button>
		<canvas id="snapshot" name="snapshot"></canvas>
		</div>
		<img src="" id="scannedImage"/>

		<button type="submit">Login</button>
	</form>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src = "../../../js/qrScan.js"></script>
</html>