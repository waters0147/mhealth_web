<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="CSS/BPAndPulse.css">
		<link rel="stylesheet" type="text/css" href="CSS/index.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>	
		<script src="http://code.highcharts.com/highcharts.js"></script>
		<script src="js/regularModel.js"></script>		
	</head>
	<body>

		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");
		?>	
		<div id = 'box' style="display: inline-block;">
			<div class="subTitle">mHealth > 健康紀錄 > 體重預測</div>
			<div>
				<select onchange="reDraw(this);">
					<option value="acc">累積圖</option>
					<option value="nonacc">非累積圖</option>
				</select>
			</div>
			<div style="width: 100%;height:90%;" id='weightPredict'></div>	
		</div>
		<div style="display: inline-block;position: absolute;top:19.5%;margin-left: 70px;" id="predictDiv">
			<label for="targetWeight">目標體重:</label>
			<div><input type="text" class="form-control" name="targetWeight" id="targetWeight"></div>
			<label >完成目標天數:</label>
			<div id="completeDay"></div>
			<div style="margin-top: 10px;">
				<button class="btn btn-primary" id="drawLine">Draw Linear regression line</button>
			</div>
		</div>



		<?php
			include("MODAL.php");
			include("PrototypeFooter.php");
		?>	
	</body>
	
</html>