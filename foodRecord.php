<!DOCTYPE html>
<html>
	<head>
	<link rel="stylesheet" type="text/css" href="CSS/BPAndPulse.css">
		<script   src="https://code.jquery.com/jquery-3.1.1.js"   integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="   crossorigin="anonymous"></script>		
		<script src="js/FBFunctions.js"></script>
		<script src="http://code.highcharts.com/highcharts.js"></script>
		<script src="js/BPAndPulse.js"></script>
	
	</head>
	<body>
		
		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");
		?>	


		<div id = 'box'>
			<div class="subTitle">mHealth > 健康紀錄 > 飲食紀錄</div>
			<div style="width: 100%;height:95%;" id='food'></div>

		</div>


		<?php
			include("PrototypeFooter.php");
		?>	
	</body>
	
</html>