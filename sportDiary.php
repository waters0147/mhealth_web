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
			<div class="subTitle">mHealth > 健康紀錄 > 運動日記</div>
			<div class="paragram">
				<div>運動的好處大家都知道，但要能真正體會! 唯有您開始運動!</div>
				<div style="margin-top:5px; ">研究發現，只要每天運動15分鐘（每週約90分鐘的運動量）與不運動的人相比，可減少14%總死亡與10%癌症死亡、延長三年壽命。 之後，每增加15分的運動，又可減4%的死亡與1%癌症死亡 (國家家衛生研究院 溫啟邦教授)。</div>
				<div style="margin-top:5px; ">提醒您~少量而持續的運動對健康大有益處! 更讓人擁有好心情~~</div>
				<div>趕快開始您的運動計畫，就從每日15分鐘開始，跟我們一起快樂運動趣!</div>
			</div>
			<div id="chartBox" style="margin-top:35px; ">
					<!--畫運動圖-->
					<div class="chart" id='sportTime'></div>
					<div class="chart" id='sportExpenditure'></div>
			</div>
			

		</div>

		<?php include("PrototypeFooter.php"); ?>

		<!--<script type="text/javascript">
			var userid=getCookie("username");
		</script>-->

		
	</body>
	
</html>