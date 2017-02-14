<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/member.css">
	<script src="js/FBFunctions.js"></script>
</head>
<body>

	<?php
	session_start();

	//include("checkAuth.php");
	include("PrototypeHead.php");
	//include("PrototypeLeftBar.php");
	
	if($_SESSION['username'] ==='root'){

		include 'connect.inc.php';

		/*$sql = $db->query("SELECT * FROM user");

		foreach ($sql as $row) {
			echo $row['name']."<br>";
		}*/
	}
	else{
		echo '<script> alert("無權限");</script>';
	}	
	?>

	<div style="height:100vh;width:100vw;background-color: #E0E0E0;">
		<div class="tableBox">
			<div class="panel panel-primary" style="margin-bottom: 0px;">
				<div class="panel-heading">User list</div>
				<div class="panel-body" style="overflow-y: auto;height: 500px;">
					<table class="table table-hover">
						<thead>
						    <tr>
						      	<th>
						      		<h3 style="font-size:x-large"><span style="font-weight:bolder">#</span></h3>
						      	</th>
						      	<th>
						      		<h3 style="font-size:x-large"><span style="font-weight:bolder">id</span></h3>
						      	</th>
						      	<th>
						      		<h3 style="font-size:x-large"><span style="font-weight:bolder">Name</span></h3>
						      	</th>
						     	<th>
						     		<h3 style="font-size:x-large"><span style="font-weight:bolder">bornDay</span></h3>
						     	</th>
						      	<th>
						      		<h3 style="font-size:x-large"><span style="font-weight:bolder">show</span></h3>
						      	</th>
						    </tr>
						</thead>
						<tbody>
							<?php
								$sql = $db->query("SELECT t1.* FROM user t1 WHERE t1.addedTime = (SELECT MAX(t2.addedTime) FROM user t2 WHERE t2.id = t1.id)" );
								foreach($sql as $key=>$value){
									echo 
									'<tr>
										<td class="filterable-cell">'.$key.'</td>
										<td class="filterable-cell">'.$value['id'].'</td>
										<td class="filterable-cell">'.$value['name'].'</td>
										<td class="filterable-cell">'.$value['bornday'].'</td>
										<td class="filterable-cell">
											<button type="button" class="btn btn-primary" onclick="showUser('.$value['id'].')">Show
											</button>
										</td>
									</tr>';

								}
							?>		    
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>


	<script type="text/javascript">	
		function showUser(userID){
		      document.cookie = 'username='+userID;
		      document.location.href='foodCalendar.php';
		}
	</script>


	<?php include("PrototypeFooter.php"); ?>
</body>


</html>