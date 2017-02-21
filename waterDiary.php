<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="CSS/BPAndPulse.css">
		<script   src="https://code.jquery.com/jquery-3.1.1.js"   integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="   crossorigin="anonymous"></script>
		<script src="http://code.highcharts.com/highcharts.js"></script>
		
		<script src="js/BPAndPulse.js"></script>
	</head>
	<body>
		<?php			
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");			
		?>
		<div id='box'>
			<div class="subTitle">mHealth > 健康紀錄 > 喝水日記</div>
			<div class="paragram">
				<div>人每天都需要補充大量的水分，每天至少需攝入的水量為 體重(KG)*30 毫升</div>
				<div style="margin-top:5px; "></div>
				<div id="weightParam"></div>
				
			</div>
			
			<div class = "chart" id='water' style="width:100%;height:85%;"></div>

			

		</div>

		<?php include("PrototypeFooter.php"); ?>

		<!--<script type="text/javascript">
			var userid=getCookie("username");
		</script>-->

		
	</body>
	
</html>