<?php
	include 'db_functions.php';
	$id = $_COOKIE['username'];
	$data = $_GET['firstDay'];
	$flag = $_GET['flag'];
	$dbFunction = new dbFunction;

	switch ($flag){
		case '0':
			$dbFunction->getCalendarRecord($id,$db,$data);
			break;

		case '1':
			$dbFunction->getFoodDetail($id,$db,$data);
			break;
	}

	
	
?>