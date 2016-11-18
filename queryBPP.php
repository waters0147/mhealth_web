<?php

	require 'connect.inc.php';

	$result = array();
	$statement = $db->query('SELECT * FROM bpandpulse ORDER BY date ASC');
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

	
	
	
?>