<!DOCTYPE html>
<html>
	<head>
		<style>
			html,body{
				height: 100%;
			}
			#linechart_calories{float:left;margin:5px;max-height:800px;max-width:1400px;}
		</style>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    	<script type="text/javascript">
    		google.charts.load('current',{'packages':['line']});
    		google.charts.setOnLoadCallback(drawChart);

    		function drawChart(){
	    		var data = new google.visualization.DataTable();
		      	data.addColumn('number', 'Weekly');
		      	data.addColumn('number', 'Food calories');
		      	data.addColumn('number', 'Calories burned');
	


		      	data.addRows([
		        	[1,  37.8, 80.8],
		        	[2,  30.9, 69.5],
		        	[3,  25.4,   57],
		        	[4,  11.7, 18.8],
		        	[5,  11.9, 17.6],
		        	[6,   8.8, 13.6],
		        	[7,   7.6, 12.3],
		        	[8,  12.3, 29.2],
		        	[9,  16.9, 42],
		        	[10, 12.8, 30.9],
		        	[11,  5.3,  7.9],
		        	[12,  6.6,  8.4],
		        	[13,  4.8,  6.3],
		        	[14,  4.2,  6.2]
		      	]);

		      	var options = {
		        	chart: {
		          	title: '食物熱量與活動/運動熱量消耗曲線圖(weekly basis)',
		          	
		        	},
		        	width: 1400,
		        	height: 800
		      	};

		      	var chart = new google.charts.Line(document.getElementById('linechart_calories'));
		      	chart.draw(data, options);
	      	}
    	</script>
	</head>
	<body>

		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");			
		?>
		<div id="linechart_calories"></div>


		<?php include("PrototypeFooter.php"); ?>

	</body>
	
</html>