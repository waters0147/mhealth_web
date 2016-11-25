<!DOCTYPE html>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>	
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link href="CSS/lightbox.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="CSS/foodCalendar.css">

	</head>
	<body>
		
		<?php
			include("PrototypeHead.php");
			include("PrototypeLeftBar.php");
		?>	

		<div style="float:left;">
			<table class="table">
				<thead>
					<tr>
						<td></td>
						<td>Mon</td>
						<td>Tue</td>
						<td>Wed</td>
						<td>Thu</td>
						<td>Fri</td>
						<td>Sat</td>
						<td>Sun</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="vert-align">breakfast</td>
						<td><a href="food/apple-7.jpg" data-lightbox="image-1"><img class="foodImg" src="food/apple-7.jpg"/></a></td>
						<td><a href="food/breakfast.jpg" data-lightbox="image-1"><img class="foodImg" src="food/breakfast.jpg"/></a></td>
						<td><a href="food/breakfast1.jpg" data-lightbox="image-1"><img class="foodImg" src="food/breakfast1.jpg"/></a></td>
						<td><img class="foodImg"/></td>
						<td><img class="foodImg"/></td>
						<td><a href="food/breakfast2.jpg" data-lightbox="image-1"><img class="foodImg" src="food/breakfast2.jpg"/></a></td>
						<td><a href="food/breakfast3.jpg" data-lightbox="image-1"><img class="foodImg" src="food/breakfast3.jpg"/></a></td>
					</tr>
					<tr>
						<td class="vert-align">lunch</td>
						<td><a href="food/lunch.jpg" data-lightbox="image-1"><img class="foodImg" src="food/lunch.jpg"/></a></td>
						<td><a href="food/lunch2.jpg" data-lightbox="image-1"><img class="foodImg" src="food/lunch2.jpg"/></a></td>
						<td><a href="food/lunch3.jpg" data-lightbox="image-1"><img class="foodImg" src="food/lunch3.jpg"/></a></td>
						<td><a href="food/lunch4.jpg" data-lightbox="image-1"><img class="foodImg" src="food/lunch4.jpg"/></a></td>
						<td><a href="food/lunch5.jpg" data-lightbox="image-1"><img class="foodImg" src="food/lunch5.jpg"/></a></td>
						<td><a href="food/lunch6.jpg" data-lightbox="image-1"><img class="foodImg" src="food/lunch6.jpg"/></a></td>
						<td><a href="food/lunch7.jpg" data-lightbox="image-1"><img class="foodImg" src="food/lunch7.jpg"/></a></td>
					</tr>
					<tr>
						<td class="vert-align">teabreak</td>
						<td><a href="food/teabreak.jpg" data-lightbox="image-1"><img class="foodImg" src="food/teabreak.jpg"/></a></td>
						<td><img class="foodImg"/></td>
						<td><a href="food/teabreak1.jpg" data-lightbox="image-1"><img class="foodImg" src="food/teabreak1.jpg"/></a></td>
						<td><img class="foodImg"/></td>
						<td><img class="foodImg"/></td>
						<td><a href="food/teabreak2.jpg" data-lightbox="image-1"><img class="foodImg" src="food/teabreak2.jpg"/></a></td>
						<td><a href="food/teabreak3.jpg" data-lightbox="image-1"><img class="foodImg" src="food/teabreak3.jpg"/></a></td>
					</tr>
					<tr>
						<td class="vert-align">dinner</td>
						<td><a href="food/dinner.jpg" data-lightbox="image-1"><img class="foodImg" src="food/dinner.jpg"/></a></td>
						<td><a href="food/dinner1.jpg" data-lightbox="image-1"><img class="foodImg" src="food/dinner1.jpg"/></a></td>
						<td><a href="food/dinner2.jpg" data-lightbox="image-1"><img class="foodImg" src="food/dinner2.jpg"/></a></td>
						<td><a href="food/dinner3.jpg" data-lightbox="image-1"><img class="foodImg" src="food/dinner3.jpg"/></a></td>
						<td><a href="food/dinner4.jpg" data-lightbox="image-1"><img class="foodImg" src="food/dinner4.jpg"/></a></td>
						<td><a href="food/dinner5.jpg" data-lightbox="image-1"><img class="foodImg" src="food/dinner5.jpg"/></a></td>
						<td><a href="food/dinner6.jpg" data-lightbox="image-1"><img class="foodImg" src="food/dinner6.jpg"/></a></td>
					</tr>
					<tr>
						<td class="vert-align">others</td>
						<td><a href="food/other1.jpg" data-lightbox="image-1"><img class="foodImg" src="food/other1.jpg"/></a></td>
						<td><img class="foodImg"/></td>
						<td><a href="food/other2.jpg" data-lightbox="image-1"><img class="foodImg" src="food/other2.jpg"/></a></td>
						<td><img class="foodImg"/></td>
						<td><a href="food/other3.jpg" data-lightbox="image-1"><img class="foodImg" src="food/other3.jpg"/></a></td>
						<td><img class="foodImg"/></td>
						<td><a href="food/other4.jpg" data-lightbox="image-1"><img class="foodImg" src="food/other4.jpg"/></a></td>
					</tr>
				</tbody>
			</table>
		</div>

		<?php
			include("PrototypeFooter.php");
		?>

		
		<script src="js/lightbox.js"></script>
	</body>
	
</html>