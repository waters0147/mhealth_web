<!DOCTYPE html>
<html>
	<head>
		<style>
			html,body{
				height: 100%;
			}
			#linechart_fitness{float:left;margin:5px;max-height:800px;max-width:1400px;}
		</style>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    	<script type="text/javascript">
    		google.charts.load('current',{'packages':['line']});
    		google.charts.setOnLoadCallback(drawChart);

    		function drawChart(){
	    		var data = new google.visualization.DataTable();
		      	data.addColumn('number', 'Weekly');
		      	data.addColumn('number', '體重');
		      	data.addColumn('number', 'BMI');
		      	data.addColumn('number', '體脂肪量');
		      	data.addColumn('number', '骨骼肌重');


		      	data.addRows([
		        	[1,  37.8, 80.8, 41.8,1],
		        	[2,  30.9, 69.5, 32.4,2],
		        	[3,  25.4,   57, 25.7,3],
		        	[4,  11.7, 18.8, 10.5,4],
		        	[5,  11.9, 17.6, 10.4,5],
		        	[6,   8.8, 13.6,  7.7,6],
		        	[7,   7.6, 12.3,  9.6,7],
		        	[8,  12.3, 29.2, 10.6,8],
		        	[9,  16.9, 42.9, 14.8,9],
		        	[10, 12.8, 30.9, 11.6,10],
		        	[11,  5.3,  7.9,  4.7,11],
		        	[12,  6.6,  8.4,  5.2,12],
		        	[13,  4.8,  6.3,  3.6,13],
		        	[14,  4.2,  6.2,  3.4,14]
		      	]);

		      	var options = {
		        	chart: {
		          	title: '體重、 BMI 、體脂肪量以及骨骼肌重的曲線圖(weekly basis)',
		          	
		        	},
		        	width: 1400,
		        	height: 800
		      	};

		      	var chart = new google.charts.Line(document.getElementById('linechart_fitness'));
		      	chart.draw(data, options);
	      	}
    	</script>
	</head>
	<body>
		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");			
		?>
		<div id="linechart_fitness"></div>


		<?php include("PrototypeFooter.php"); ?>

	</body>
	
</html>