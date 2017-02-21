<!DOCTYPE html>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>	
		<link href="CSS/lightbox.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="CSS/foodCalendar.css">
		<script type="text/javascript" src="js/createCalendar.js"></script>
	</head>
	<body>
		
		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");
		?>	

		<div class="calendar" id="calendar"></div>
		<!-- The Modal -->
		<div id="myModal" class="modal">
			<!-- Modal content -->
		  	<div class="modal-content" style="width:500px;height: 500px;">
		    	<span class="close">&times;</span>
		    	<table  id="foodDetailList" style="width:100%;height:100%;">
					<thead>
						<tr>
							<th>#</th>
							<th>名稱</th>
							<th>卡路里</th>
							<th>紀錄時間</th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
		  	</div>
		</div>
		<?php
			include("PrototypeFooter.php");
		?>

		
		<script src="js/lightbox.js"></script>
		
	</body>
	
</html>