<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="CSS/BPAndPulse.css">
		<script   src="https://code.jquery.com/jquery-3.1.1.js"   integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="   crossorigin="anonymous"></script>
		<script src="http://code.highcharts.com/highcharts.js"></script>
		<script type="text/javascript" src="js/addLoseWeight.js"></script>

	</head>
	<body>
		<?php			
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");			
		?>
		<div id='box'>
			<div class="subTitle">mHealth > 健康紀錄 > 減重紀錄</div>
			<div class="paragram">
				<div>使用說明：</div>
				<div>1.每天一筆紀錄，內容包括排便次數、喝水量、本週目標、睡眠時數、飲食內容(請紀錄時間及內容)以及小米運動記錄等七項。</div>
				<div>2.請點選「新增記錄」即可開始填寫。</div>
				<div>3.若要查詢瀏覽或修改記錄，選擇歷史記錄日期後，點選「瀏覽」即可進入頁面修改，修改完成，在點選「送出」按鈕。因此，同一天可以進去填寫修改多次。</div>
				<div>4.衛保組護理師將上線查看您送出的新紀錄，並給您回饋，回饋的內容將自動寄到您的e-mail信箱當中。</div>
				<div style="margin-top:25px;margin-bottom: 5px;">注意事項：</div>		
				<div>1.請記得維護您校務資訊系統的e-mail信箱為正確可收信的信箱。</div>
				<div>2.飲食內容：建議若早餐食用完，可先上來填寫。若每餐結束可依照瀏覽日期重新進入該日進行修改內容後送出，以免忘記。</div>	
			</div>
			<div class="loseWeight">
				<div><button type="button" class="btn btn-info" style="margin-left:100px;" onclick="javascript:location.href='addLoseWeight.php'">新增紀錄</button></div>
				<div>
					<table class="table" id="loseWeightList">
						<thead>
							<tr>
								<th>服務項目</th>
								<th>紀錄時間</th>
								<th>記錄查詢</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
				</div>
			</div>
			
			
			

		</div>

		<?php include("PrototypeFooter.php"); ?>

		<!--<script type="text/javascript">
			var userid=getCookie("username");
		</script>-->

		
	</body>
	
</html>