<!DOCTYPE html>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="CSS/LeftBar.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<script type="text/javascript" src="js/toggle.js"></script>
		<script type="text/javascript" src="js/FBFunctions.js"></script>
	</head>
	<style>
		.menuUl i{
			float: left;	    
		    padding-top: 10px;
		    padding-left:40px;
		    color: white;
		    font-size: 22px;	
		    display: none;		    
		}

	</style>
	<body>
		
		<div class="menu">
			
	    	<ul class="menuUl">
	        	<li class="liTitle" id="calendarLi1" style="cursor: pointer;cursor: hand;">首頁</li>
	        	<a href="dashboard.php">
	        		<i class="fa fa-dashboard" id="i1"></i>
	        		<li class="foodCalendar" style="display:none;">Dashboard</li>
	        	</a>
	      	</ul>
	      	<ul class="menuUl">
	        	<li class="liTitle" id="calendarLi2" style="cursor: pointer;cursor: hand;">健康紀錄</li>
	        	<a href="foodCalendar.php">
		        	<i class="fa fa-calendar" id="i2"></i>
		        	<li class="fitness" style="display:none;">Food Calendar</li>
	        	</a>
	        	<a href="foodRecord.php">
	        		<i class="fa fa-birthday-cake" id="i3"></i>
	        		<li class="fitness" style="display:none;">飲食紀錄</li>
	        	</a>
	        	<a href="weightPredict.php">
	        		<i class="fa fa-line-chart" id="i4"></i>
	        		<li class="fitness" style="display:none;">體重預測</li>
	        	</a>
	        	<a href="loseWeight.php">
	        		<i class="fa fa-hdd-o" id="i5"></i>
	        		<li class="fitness" style="display:none;">減重紀錄</li>
	        	</a>
	        	<a href="BPAndPulse.php">
	        		<i class="fa fa-flash" id="i6"></i>
	        		<li class="fitness" style="display:none;">血壓量測</li>
	        	</a>
	        	<a href="waterDiary.php">
	        		<i class="fa fa-glass" id="i7"></i>
	        		<li class="fitness" style="display:none;">喝水日記</li>
	        	</a>
	        	<a href="sportDiary.php">
	        		<i class="fa fa-bicycle" id="i8"></i>
	        		<li class="fitness" style="display:none;">運動日記</li>
	        	</a>
	        	<a href="weightWeeklyDiary.php">
	        		<i class="fa fa-child" id="i9"></i>
	        		<li class="fitness" style="display:none;">體重週記</li>
	        	</a>
	        	<a href="bodyTemperature.php">
	        		<i class="fa fa-thermometer-2" id="i10"></i>
	        		<li class="fitness" style="display:none;">體溫紀錄</li>
	        	</a>
	      	</ul>
	      	<ul class="menuUl">
	        	<a href="logout.php" onclick="fblogout();"><li class="liTitle">登出</li></a>
	      	</ul>
	      	

	      	<script>
	      		$('#calendarLi1').click(calendarToggle);
	      		$('#calendarLi2').click(fitnessToggle);
	      	</script>
    	</div>

	</body>
	
</html>