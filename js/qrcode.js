$('#reader').html5_qrcode(function(data){
		alert(data);
		$('#reader').html5_qrcode_stop();
         // do something when code is read
    },
    function(error){
    	alert(error);
        //show read errors 
    }, function(videoError){
    	console.log(videoError);
        //the video stream could be opened
    }
);

