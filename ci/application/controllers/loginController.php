<?php 
class LoginController extends CI_Controller {
	private $uploadedImage;
	public function __construct(){
		parent::__construct();
		require "../vendor/autoload.php";
	}
	public function index(){
		$this->load->view('mainView');

	}
	public function readqr(){

		$this->load->view('webcamjs');
	}

	public function uploadImage(){
		move_uploaded_file($_FILES['webcam']['tmp_name'], 'uploads/webcam'.md5(time()).rand(383,1000).'.jpg'); 

	}
	
	public function getqr(){
		$qrcode = new QrReader("../uploads/" . $this->uploadedImage);
		$regNumber = $qrcode->text();
		$data['regNumber'] = $regNumber; 
		$this->load->view('qrtext',$data);
	}

}

 ?>