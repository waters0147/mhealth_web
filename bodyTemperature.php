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
			<div id='box' style="height:auto;">
				<div class="subTitle">mHealth > 健康紀錄 > 體溫紀錄</div>
				<div class="paragram">
					<div>人體體溫會受到許多因素短暫的變化，剛運動完，體溫可能達37.5~38度、量體溫前如果水分補充不足、過度疲累，也都會有體溫升高情形，一般而言，清晨時體溫較低，傍晚時體溫會稍高。因此，要測量正確的體溫，從戶外活動後進入戶內，應該要休息5分鐘以上，再量體溫比較準確。</div>
					<div style="margin-top:5px;margin-bottom: 5px;">不同的量測部位，發燒標準也不同，參考如下：</div>
					<div style="text-align: center;">
						<table class="table table-bordered" style="width:50%;margin: 0 auto;">
							<thead>
								<tr>
									<td>部位</td>
									<td>發燒標準</td>
									<td>測量時間</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>耳溫</td>
									<td>攝氏38.0度</td>
									<td>數秒鐘</td>
								</tr>
								<tr>
									<td>顳溫</td>
									<td>攝氏37.5度</td>
									<td>數秒鐘</td>
								</tr>
							</tbody>
						</table>
					</div>
					
				</div>
				<select style="visibility: hidden;" onchange="reDraw(this)">
					<option value="defaultTotal">預設全部</option>
					<option value="monthly">月平均</option>
					<option value="weekly">週平均</option>
				</select>
				<div id="tempurature" style="margin-top: 10px;height:65%;"></div>
			</div>
			
		</div>
		<?php include("PrototypeFooter.php"); ?>

		<!--<script type="text/javascript">
			var userid=getCookie("username");
		</script>-->

		
	</body>
	
</html>