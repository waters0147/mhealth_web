<?php

	
	include 'db_functions.php';
	$id = $_COOKIE['username'];
	$dbFunction = new dbFunction;
	$action = $_GET['action'];
	$pointDate = $_GET['pointDate'];
	
	
	switch ($action) {
		case 'BPAndPulse.php':			
			break;	
		case 'foodRecord.php':	
			$dbFunction->getFoodDetail($id,$db,$pointDate);		
			break;
		case 'waterDiary.php':
			$dbFunction->getWaterPoint($id,$db,$pointDate);
			break;
		case 'sportDiary.php':
			break;
		case 'weightWeeklyDiary.php':
			break;
		case 'bodyTemperature.php':
			break;
		case 'loseWeight.php':
			break;
		case 'updateLoseWeight.php':
			break;
		case 'weightPredict.php':	
			$dbFunction->getNonAccPoint($id,$db,$pointDate);
			break;
	}



?>