<?php

	require 'connect.inc.php';
	$prePage = $_SERVER['HTTP_REFERER'];
	$result = array();
	$id = $_COOKIE['username'];


	if(strpos($prePage,"BPAndPulse") !==false){
		
		$statement = $db->query("SELECT * FROM bpandpulse  WHERE id=$id ORDER BY date ASC");
		if($statement){
			foreach ($statement as $key=>$value) {
			$result[$key] = array(
				"systolic"=>$value['systolic'],
				"diastolic"=>$value['diastolic'],
				"pulse"=>$value['pulse'],
				"date"=>$value['date']);
			}

			echo json_encode($result);
		}
		else{
			alert("something error");
		}
	}
	else if(strpos($prePage,"foodRecord") !==false){
		$statement = $db->query("SELECT * FROM food WHERE id=$id ORDER BY time ASC");
		if($statement){
			foreach ($statement as $key=>$value) {
			$result[$key] = array(
				"calories"=>$value['calories'],
				"time"=>$value['time'],
				"name"=>$value['name']);
			}

			echo json_encode($result);
		}
		else{
			alert("something error");
		}
	}
	
	
	
?>