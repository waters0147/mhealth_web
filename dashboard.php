<!DOCTYPE html>
<html>
	<head>
		
		<link rel="stylesheet" type="text/css" href="CSS/dashboard.css">
	</head>
	<style>
		html,body{
			height: 100%;
			min-height: 100%;
			width:100%;
		}
	</style>
	<body>
		
		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");
		?>	
		<div style="height:100%;width:100%;padding-left:300px;" class="content">
			<div class="title"><span>總表</span></div>
			<div class="graph">
				<div><input type="date" name = "dashDate" style="width:30%"></div>
				
			</div>
		</div>
		
		<?php
			include("PrototypeFooter.php");
		?>

		
	
		
	</body>
	
</html>