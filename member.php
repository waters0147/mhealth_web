<!DOCTYPE html>
<html>
<head>
	
</head>
<body>


	<?php
	session_start();

	include("PrototypeHead.php");
	include("PrototypeLeftBar.php");
	
	echo $_SESSION['username'];
	echo $_GET['username'];


	include("PrototypeFooter.php");
	?>
</body>


</html>