<?php 
/**
* 
*/
class MainController extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		#require base_url('../vendor/autoload.php');
		# code...
	}
	function index(){
		$this->load->view('mainView');
	}
	function read(){
		$this->load->view('readView');

	}

}

 ?>