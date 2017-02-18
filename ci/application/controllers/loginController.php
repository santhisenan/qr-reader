<?php 
class LoginController extends CI_Controller {
	public function __construct(){
		parent::__construct();

		require "../vendor/autoload.php";
	}
	public function index(){
		$this->load->view('mainView');

	}
	public function readqr(){
		$this->load->view('scanQRCode');
		$qrcode = new QrReader('../assets/1.jpg');
		$regNumber = $qrcode->text();
		$data['regNumber'] = $regNumber; 
		$this->load->view('qrtext',$data);

	}
	public function getqr(){
		$image = $this->input->post('image');
		$this->load->view('success');
	}

}

 ?>