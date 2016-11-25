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
			<div class="subTitle">mHealth > 健康紀錄 > 血壓量測</div>
			<div class="paragram">
				<div>血壓（Blood Pressure，BP）是血液在血管內流動作用於血管壁的壓力。包含:</div>
				<div style="margin-left: 20px;">收縮壓：心臟收縮時，所測得血管壁所承受壓力。</div>
				<div style="margin-left: 20px;">舒張壓：心臟舒張時，所測得血管壁所承受的壓力。</div>
				<div style="margin-top:5px; ">血壓會隨著身體狀況而變化 (如：情緒改變，飲酒、咖啡及濃茶，環境溫度的改變等)，偶而一次血壓偏高，不能斷言就是高血壓，需多量幾次(並記錄)，若多次量得收縮壓均 >140或舒張壓 >90，建議至醫院進一步評估或治療。</div>
				<div style="margin-top:5px; ">註：台灣高血壓學會提出「722」（諧音「請量量」）居家血壓量測口訣</div>
				<div style="margin-left: 20px;">「7」連續七天量測 「2」早上起床後、晚上睡覺前各量一次 。中風、心肌梗塞發病的高峰是清晨5點～早上10點，因此清晨量血壓較有意義，可反映夜間的血壓；另一個中風的危險時段是晚上，因此建議睡前也量一次血壓。
				</div>
			</div>
			<div id="chartBox">
					<div class="chart" id='BP'></div>
					<div class="chart" id='Pulse'></div>
			</div>
			

		</div>

		<?php include("PrototypeFooter.php"); ?>

		<!--<script type="text/javascript">
			var userid=getCookie("username");
		</script>-->

		
	</body>
	
</html>