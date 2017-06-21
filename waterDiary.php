<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="CSS/BPAndPulse.css">
		<script   src="https://code.jquery.com/jquery-3.1.1.js"   integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="   crossorigin="anonymous"></script>
		<script src="http://code.highcharts.com/highcharts.js"></script>	
		<script src="js/BPAndPulse.js"></script>

		<style>
			html,body{
				height: 100%;
				min-height: 100%;
				width:100%;
			}
		</style>
	</head>
	<body>
		<?php			
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");			
		?>

		<div style="height:100%;width:100%;" class="content">
			<div id='box'>
				<div class="subTitle">mHealth > 健康紀錄 > 喝水日記</div>
				<div class="paragram">
					<div>人每天都需要補充大量的水分，每天至少需攝入的水量為 體重(KG)*30 毫升</div>
					<div style="margin-top:5px; "></div>
					<div id="weightParam"></div>				
				</div>
				<div>
					<select onchange="reDraw(this);">
						<option value="defaultTotal">預設全部</option>
						<option value="monthly">月平均</option>
						<option value="weekly">週平均</option>
					</select>
				</div>				
				<div class = "chart" id='water' style="width:100%;height:85%;"></div>
			</div>
		</div>

		<?php include("PrototypeFooter.php"); ?>

		<!--<script type="text/javascript">
			var userid=getCookie("username");
		</script>-->

		
	</body>
	
</html>