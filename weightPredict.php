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
	<style>
		html,body{
			height: 100%;
			min-height: 100%;
			width:100%;
		}
	</style>
	<body>

		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");
		?>	
		<div style="height:100%;width:100%;">
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
			<div style="display: inline-block;position: absolute;top:19.5%;margin-left: 20px;" id="predictDiv">
				<label for="targetWeight">目標體重:</label>
				<div><input type="text" class="form-control" name="targetWeight" id="targetWeight"></div>
				<label >預計完成天數:</label>
				<div><input type="text" class="form-control" name="targetFinishedDay" id="targetFinishedDay"></div>
				<!--<div id="completeDay"></div>-->
				<div style="margin-top: 10px;">
					<button class="btn btn-primary" id="analysis">Analysis</button>
				</div>
			</div>
		</div>


		<?php
			include("MODAL.php");
			include("analysis_MODAL.php");
			include("suggest_MODAL.php");
			include("PrototypeFooter.php");
		?>	
	</body>
	
</html>