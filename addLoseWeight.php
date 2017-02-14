<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="CSS/BPAndPulse.css">
		<script   src="https://code.jquery.com/jquery-3.1.1.js"   integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="   crossorigin="anonymous"></script>
		<script src="http://code.highcharts.com/highcharts.js"></script>

	</head>
	<body>
		<?php			
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");			
		?>
		<div id='box'>
			<div class="subTitle">mHealth > 健康紀錄 > 減重紀錄</div>
			<div style="margin:20px;padding: 10px;outline: 1px solid black;">
				<form id="reg-form" method="post" action="http://140.114.88.136:80/mhealth/submitLoseWeight.php">
					<table border="0" style="width: 100%;">
						<thead></thead>
						<tbody>
							<tr>
								<td class="tableContent" style="color: red;">日期*</td>
								<td ><input type="date" name="recordedDay"></td>
							</tr>
							<tr>
								<td class="tableContent">本周目標</td>
								<td ><textarea name="weekGoal" style="width: 100%;height: 100px;"></textarea></td>
							</tr>
							<tr>
								<td class="tableContent">排便紀錄</td>
								<td ><input type="text" name="poopoo"> &nbsp;次</td>
							</tr>
							<tr>
								<td class="tableContent">飲水量</td>
								<td ><input type="text" name="waterRecord"> &nbsp;CC</td>
							</tr>
							<tr>
								<td class="tableContent" rowspan="5">睡眠紀錄</td>
								<td >入睡時間<input type="datetime-local" name="sleepTime"></td>												
							</tr>
							<tr>
								<td >起床時間<input type="datetime-local" name="wakeUpTime"></td>
							</tr>
							<tr>
								<td >沉睡時數
									<input type="text" name="deepSleepHours">小時
									<input type="text" name="deepSleepMins">分
								</td>
							</tr>
							<tr>
								<td >淺睡時數
									<input type="text" name="shallowSleepHours">小時
									<input type="text" name="shallowSleepMins">分
								</td>
							</tr>
							<tr>
								<td >睡眠總時數
									<input type="text" name="totalSleepHours">小時
									<input type="text" name="totalSleepMins">分
								</td>
							</tr>
							<tr>
								<td class="tableContent" rowspan="2">飲食紀錄</td>
								<td>飲食內容</td>
							</tr>
							<tr>
								<td ><textarea name="eatContent" style="width: 100%;height:200px;"></textarea></td>							
							</tr>
							<tr>
								<td class="tableContent" rowspan="7">運動手環紀錄</td>
								<td>今日總步數
									<input type="text" name="steps">步
								</td>
							</tr>
							<tr>
								<td >今日總公里
									<input type="text" name="distance">公里
								</td>
							</tr>
							<tr>
								<td >消耗熱量
									<input type="text" name="expenditure">大卡
								</td>
							</tr>
							<tr>
								<td >今日運動種類(如：游泳、跑步...等)</td>
							</tr>
							<tr>
								<td >1.
									<input type="text" name="sportType1">運動
									<input type="text" name="sportHour1">小時
									<input type="text" name="sportMins1">分
								</td>
							</tr>
							<tr>
								<td >2.
									<input type="text" name="sportType2">運動
									<input type="text" name="sportHour2">小時
									<input type="text" name="sportMins2">分
								</td>
							</tr>
							<tr>
								<td >3.
									<input type="text" name="sportType3">運動
									<input type="text" name="sportHour3">小時
									<input type="text" name="sportMins3">分
								</td>
							</tr>
							
						</tbody>
					</table>
					<div>
						<div style="margin:30px 50% 0px 50%;">
							<input type="hidden" name="userId" value="">
							<input  type="submit" class="btn btn-primary" value="送出"></button>
						</div>
					</div>
				</form>
			</div>
			
			
			

		</div>

		<?php include("PrototypeFooter.php"); ?>

		<script type="text/javascript">
			$(document).ready(function (){
				var userId = getCookie("username");
				$('input[name="userId"]').val(userId);
			});
		</script>

		
	</body>
	
</html>