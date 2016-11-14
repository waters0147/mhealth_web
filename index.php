<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/index.css">
		<script type="text/javascript" src="js/FBFuntions.js"></script>
		<style>
			html,body{
				height: 100%;
			}

		</style>
	</head>
	<body>
		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");
		?>	
		<div class="overlay"></div>
		<form name="form" method="post" action="connectSession.php">
			<div class="login">
				<div>
					<div class="loginFont">Welcome! Please Sign In</div>
					<hr class="loginHR">
				</div>
				<div style="width:70%;margin:0 auto;">
					<label for="acc">Account:</label>
					<div><input type="text" class="form-control" name="acc" id="acc"></div>
					<label for="pwd">Password:</label>
					<div><input type="password" class="form-control" name="pwd" id="pwd"></div>
				</div>
				<div style="width:70%;margin:0 auto;padding-top: 20px;">
					<div><input type="submit" class="btn btn-primary" style="width:100%;" value="Login"></input></div>
					<div style="margin-top: 10px;" class="fbLogin" onclick="checkLoginState()"><span>Facebook Login</span></div>
				</div>
			</div>
		</form>

		<?php
			include("PrototypeFooter.php");
		?>

		
	</body>
	
</html>