<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/LeftBar.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script type="text/javascript" src="js/toggle.js"></script>
		<script type="text/javascript" src="js/FBFunctions.js"></script>
	</head>
	<body>
		
		<div class="menu">
			<div style="padding-top: 30px;">
		    	<ul class="menuUl">
		        	<li class="liTitle" id="calendarLi1" style="cursor: pointer;cursor: hand;">首頁</li>
		        	<a href="foodCalendar.php"><li class="foodCalendar" style="display:none;">Food Calendar</li></a>
		      	</ul>
		      	<ul class="menuUl">
		        	<li class="liTitle" id="calendarLi2" style="cursor: pointer;cursor: hand;">健康紀錄</li>
		        	<a href="foodRecord.php"><li class="fitness" style="display:none;">飲食紀錄</li></a>
		        	<a href="weightPredict.php"><li class="fitness" style="display:none;">體重預測</li></a>
		        	<a href="loseWeight.php"><li class="fitness" style="display:none;">減重紀錄</li></a>
		        	<a href="BPAndPulse.php"><li class="fitness" style="display:none;">血壓量測</li></a>
		        	<a href="waterDiary.php"><li class="fitness" style="display:none;">喝水日記</li></a>
		        	<a href="sportDiary.php"><li class="fitness" style="display:none;">運動日記</li></a>
		        	<a href="weightWeeklyDiary.php"><li class="fitness" style="display:none;">體重週記</li></a>
		        	<a href="bodyTemperature.php"><li class="fitness" style="display:none;">體溫紀錄</li></a>
		      	</ul>
		      	<ul class="menuUl">
		        	<a href="logout.php" onclick="fblogout();"><li class="liTitle">登出</li></a>
		      	</ul>
	      	</div>

	      	<script>
	      		$('#calendarLi1').click(calendarToggle);
	      		$('#calendarLi2').click(fitnessToggle);
	      	</script>
    	</div>

	</body>
	
</html>