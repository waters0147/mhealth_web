<?php

	
	include 'db_functions.php';
	$id = $_COOKIE['username'];
	$dbFunction = new dbFunction;
	$action = $_GET['action'];


	
	
	
	switch ($action) {
		case 'BPAndPulse.php':
			$dbFunction->getBPP($id,$db);
			break;
		
		case 'foodRecord.php':
			$dbFunction->getFoodRecord($id,$db);
			break;

		case 'waterDiary.php':
			$dbFunction->setCookieUserData($id,$db);
			$dbFunction->getWaterRecord($id,$db);
			break;

		case 'sportDiary.php':
			$dbFunction->getSportRecord($id,$db);
			break;

		case 'weightWeeklyDiary.php':
			$dbFunction->getProfileRecord($id,$db);
			break;
		case 'bodyTemperature.php':
			$dbFunction->getTempuratureRecord($id,$db);
			break;
		case 'loseWeight.php':
			$dbFunction->getLoseWeightList($id,$db);
			break;
		case 'updateLoseWeight.php':
			$listID = $_COOKIE['listid'];
			$dbFunction->getLostWeightRecord($id,$db,$listID);
			break;
	}



?>