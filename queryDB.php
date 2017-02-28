<?php

	
	include 'db_functions.php';
	$id = $_COOKIE['username'];
	$dbFunction = new dbFunction;
	if(isset($_GET['action'])){
		$action = $_GET['action'];
	}
	
	if(isset($_GET['selectType'])){
		$selectType = $_GET['selectType'];	
	}
	
	switch ($action) {
		case 'BPAndPulse.php':
			$dbFunction->getBPP($id,$db,$selectType);
			break;
		
		case 'foodRecord.php':
			$dbFunction->getFoodRecord($id,$db,$selectType);
			break;

		case 'waterDiary.php':
			$dbFunction->setCookieUserData($id,$db);
			$dbFunction->getWaterRecord($id,$db,$selectType);
			break;

		case 'sportDiary.php':
			$dbFunction->getSportRecord($id,$db,$selectType);
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
		case 'weightPredict.php':
			$dbFunction->getUserNetRecord($id,$db);
			$dbFunction->setCookieUserData($id,$db);
			break;
	}



?>