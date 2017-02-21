<?php

class dbFunction{

	public function __construct(){
		require_once 'connect.inc.php';
	}

	
	public function setCookieUserData($id,$db){	
		$statement = $db->query("SELECT * FROM user WHERE id=$id ");
		if($statement){
			foreach ($statement as $value) {
				setcookie("name",$value['name']);
				setcookie("bornday",$value['bornday']);
				setcookie("sex",$value['sex']);
				setcookie("height",$value['height']);
				setcookie("weight",$value['weight']);
				//echo json_encode($value['name']);
			}
			//echo json_encode($result);
		}
		else{
			json_encode("setCookieUserData() error");
		}
	}

	public function getBPP($id,$db){
		$statement = $db->query("SELECT * FROM health  WHERE userId=$id ORDER BY recordedDate ASC");
		if($statement){
			foreach ($statement as $key=>$value) {
			$result[$key] = array(
				"systolic"=>$value['systolic'],
				"diastolic"=>$value['diastolic'],
				"pulse"=>$value['pulse'],
				"date"=>$value['recordedDate']);
			}

			echo json_encode($result);
		}
		else{
			echo json_encode("getBPP() error");
		}
	}

	public function getFoodRecord($id,$db){
		$statement = $db->query("SELECT * FROM food WHERE userId=$id ORDER BY recordedTime ASC");
		if($statement){
			foreach ($statement as $key=>$value) {
			$result[$key] = array(
				"calories"=>$value['calories'],
				"time"=>$value['recordedTime'],
				"name"=>$value['name']);
			}

			echo json_encode($result);
		}
		else{
			echo json_encode("getFoodRecord() error");
		}
	}

	public function getWaterRecord($id,$db){
		$statement = $db->query("SELECT SUM(drunkwater) as water,Date(recordedDate) as wholeDay FROM health WHERE (userId=$id) AND (drunkwater!=0) GROUP BY wholeDay");
		if($statement){
			foreach ($statement as $key=>$value) {
			$result[$key] = array(
				"drunkwater"=>$value['water'],
				"date"=>$value['wholeDay']);
			}

			echo json_encode($result);
		}
		else{
			echo json_encode("getWaterRecord() error");
		}
	}

	public function getSportRecord($id,$db){
		$statement = $db->query("SELECT Date(FROM_UNIXTIME(id/1000)) as day,SUM(expenditure) as spEx,SUM(totalTime) as spTime FROM sport WHERE userId=$id GROUP BY day");
		if($statement){
			foreach ($statement as $key=>$value) {
			$result[$key] = array(
				"day"=>$value['day'],
				"spEx"=>$value['spEx'],
				"spTime"=>$value['spTime']);
			}

			echo json_encode($result);
		}
		else{
			echo json_encode("getSportRecord() error");
		}
	}

	public function getProfileRecord($id,$db){
		$statement = $db->query("SELECT * FROM user WHERE id=$id ");
		if($statement){
			foreach ($statement as $key => $value) {
				$result[$key] = array(
					"height"=>$value['height'],
					"weight"=>$value['weight'],
					"time"=>$value['addedTime']);
			}
			echo json_encode($result);
		}
		else{
			echo json_encode("getProfileRecord() error");
		}
	}

	public function getTempuratureRecord($id,$db){
		$statement = $db->query("SELECT tempurature,recordedDate FROM health WHERE (userId=$id) AND (tempurature!=0)");
		if($statement){
			foreach ($statement as $key => $value) {
				$result[$key] = array(
					"tempurature"=>$value['tempurature'],
					"day"=>$value['recordedDate']);
			}
			echo json_encode($result);
		}
		else{
			echo json_encode("getTempRecord() error");
		}

	}

	public function getLoseWeightList($id,$db){
		$statement = $db->query("SELECT recordedDay,id FROM loseWeight WHERE userId=$id");
		if($statement){
			foreach ($statement as $key => $value) {
				$result[$key] = array(
					"recordedDay"=>$value['recordedDay'],
					"listID"=>$value['id']);
			}
			echo json_encode($result);
		}
		else{
			echo json_encode("getLoseWeightList() error");
		}
	}

	public function getLostWeightRecord($id,$db,$listID){
		$statement = $db->query("SELECT * FROM loseWeight WHERE (userId=$id) AND (id=$listID)");
		if($statement){
			foreach ($statement as $key => $value) {
				$result[$key] = array(
					"recordedDay"=>$value['recordedDay'],
					"weekGoal"=>$value['weekGoal'],
					"poopoo"=>$value['poopoo'],
					"waterRecord"=>$value['waterRecord'],
					"sleepTime"=>$value['sleepTime'],
					"wakeUpTime"=>$value['wakeUpTime'],
					"deepSleepHours"=>$value['deepSleepHours'],
					"deepSleepMins"=>$value['deepSleepMins'],
					"shallowSleepHours"=>$value['shallowSleepHours'],
					"shallowSleepMins"=>$value['shallowSleepMins'],
					"totalSleepHours"=>$value['totalSleepHours'],
					"totalSleepMins"=>$value['totalSleepMins'],
					"eatContent"=>$value['eatContent'],
					"steps"=>$value['steps'],
					"distance"=>$value['distance'],
					"expenditure"=>$value['expenditure'],
					"sportType1"=>$value['sportType1'],
					"sportHour1"=>$value['sportHour1'],
					"sportMins1"=>$value['sportMins1'],
					"sportType2"=>$value['sportType2'],
					"sportHour2"=>$value['sportHour2'],
					"sportMins2"=>$value['sportMins2'],
					"sportType3"=>$value['sportType3'],
					"sportHour3"=>$value['sportHour3'],
					"sportMins3"=>$value['sportMins3']);
			}
			echo json_encode($result);
		}
		else{
			echo json_encode("getLoseWeightRecord() error");
		}
	}


	public function getCalendarRecord($id,$db,$data){		
		$offset = date('Y/m/d', strtotime($data. ' + 30 days'));
		$pre = "'".$data."'";
		$post = "'".$offset."'";
		$statement = $db->query("SELECT image,recordedTime FROM food 
			WHERE (userId=$id) AND (recordedTime BETWEEN $pre and $post)");
		
		if($statement){
			foreach ($statement as $key => $value) {
				$result[$key] = array(
					"image"=>$value['image'],
					"recordedTime"=>$value['recordedTime']);
			}
			if(isset($result)){			
				echo json_encode($result);
			}
		}
		else{
			echo json_encode("getCalendarRecord() error");
		}
	}


	public function getFoodDetail($id,$db,$data){		
		$pre = "'".$data."'";
		$statement = $db->query("SELECT * FROM food 
			WHERE (userId=$id) AND (Date(recordedTime) = $pre )");
		
		if($statement){
			foreach ($statement as $key => $value) {
				$result[$key] = array(
					"name"=>$value['name'],
					"calories"=>$value['calories'],
					"recordedTime"=>$value['recordedTime']);
			}
			if(isset($result)){			
				echo json_encode($result);
			}
		}
		else{
			echo json_encode("getCalendarRecord() error");
		}
	}

	public function getWaterPoint($id,$db,$pointDate){
		$PD = "'".$pointDate."'";
		$statement = $db->query("SELECT drunkwater,recordedDate FROM health 
			WHERE (userId = $id) AND (Date(recordedDate) = $PD) AND(drunkwater!=0)");
		if($statement){
			foreach ($statement as $key=>$value) {
			$result[$key] = array(
				"drunkwater"=>$value['drunkwater'],
				"recordedDate"=>$value['recordedDate']);
			}

			echo json_encode($result);
		}
		else{
			echo json_encode("getWaterPoint() error");
		}
	}



}


?>