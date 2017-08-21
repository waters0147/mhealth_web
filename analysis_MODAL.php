<!DOCTYPE html>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="css/MODAL.css">
	</head>
	<body>
		<!-- The Modal -->
		<div id="analysisModal" class="modal">
			<!-- Modal content -->
		  	<div class="modal-content" style="width:500px;height:auto;">
		  		<div class="modal-header">
			    	<span class="close">&times;</span>
			    	<label>Regression Analysis</label>
			    </div>
			    <div class="modal-body">
			    	<div id="analysisChart"></div>
			    </div>
			    <div class="modal-footer">
			    	<div id="BMR" class="textBox"></div>
			    	<div id="intake" class="textBox"></div>
			    	<div id="analy" class="textBox"></div>
			    	<div class="textBox"><button id="suggest" class="btn btn-primary">Suggest</button></div>
			    </div>
		  	</div>
		</div>
		
	</body>
	
</html>