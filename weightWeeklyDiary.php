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
				<div class="subTitle">mHealth > 健康紀錄 > 體重週記</div>
				<div class="paragram">
					<div>您知道嗎?當攝取過多熱量，累積7700大卡就增加1公斤體重，而體重就在這無形之中直線上升…</div>
					<div style="margin-top:5px;">建議您，想要維持體態，最好的方式莫過於買個電子體重計，每天『跳』上去量一量，今天重了，明天就要少吃一點，斤斤要計較!邀請您加入『天天量體重』的行列!和我們一起掌控體重，掌握健康!</div>
					
				</div>
				<select style="visibility: hidden;" onchange="reDraw(this)">
					<option value="defaultTotal">預設全部</option>
					<option value="monthly">月平均</option>
					<option value="weekly">週平均</option>
				</select>
				<div id="chartBox" style="margin-top: 10px;height:80%;">
						<div class="chart" id='weight'></div>
						<div class="chart" id='bmi'></div>
				</div>
			</div>
		</div>
		<?php include("PrototypeFooter.php"); ?>

		<!--<script type="text/javascript">
			var userid=getCookie("username");
		</script>-->

		
	</body>
	
</html>