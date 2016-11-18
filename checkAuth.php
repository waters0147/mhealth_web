<?php

if(isset($_POST['username'])){
	echo $_POST['username'];
	if($_POST['username'] ==null ){
		echo '<script> alert("沒有權限拜訪");</script>';
		header("Location:index.php");
	}
}
else if(isset($_GET['username'])){
	echo $_GET['username'];
	if($_GET['username'] ==null){
		echo '<script> alert("沒有權限拜訪");</script>';
		header("Location:index.php");
	}
}



?>