<?php

session_start();

include 'connect.inc.php';

$acc = $_POST['acc'];
$pwd = $_POST['pwd'];
$checkIsRoot = false;

$sql = $db->query('SELECT * FROM member');
foreach($sql as $row){
	if($acc == $row['account'] && $pwd == $row['password']){

		$checkIsRoot = true;
		$_SESSION['username'] = $acc;
		
	}
}

if($checkIsRoot){
	echo "<script type='text/javascript'>alert('Hello Admin');</script>";
	echo '<meta http-equiv=REFRESH CONTENT=1;url=memberList.php>';
}
else{
	echo "<script type='text/javascript'>alert('Login failed');</script>";
	echo '<meta http-equiv=REFRESH CONTENT=0.1;url=index.php>';	
}




?>