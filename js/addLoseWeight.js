$(document).ready(function () { 
	var url = window.location.href.toString().split("/");
    var chatacter = url[url.length-1];

	$.ajax({
		url:'queryDB.php',
        type:'GET',
        data:{action:chatacter},
        dataType:'json',
        success:function(result){
        	console.log("SUCCESS");
        	switch (chatacter){
        		case 'loseWeight.php':
	        		var table = document.getElementById("loseWeightList");
		        	var listArr = new Array();
		        	for(i=0;i<Object.keys(result).length;i++){
		                var row = table.insertRow(i+1);
		                var cell1 = row.insertCell(0);
				    	var cell2 = row.insertCell(1);
				    	var cell3 = row.insertCell(2);
				    	cell1.innerHTML = "減重班";
				    	cell2.innerHTML = result[i].recordedDay;
				    	cell3.innerHTML = "瀏覽";
				    	cell3.style.color = "#0066FF";
				    	cell3.style.cursor = "pointer";
				    	listArr[i] = result[i].listID;
				    	cell3.onclick = function(){
				    		var rowIndex = this.parentNode.rowIndex-1;
				    		showTable(listArr[rowIndex]);
				    	}
		            }
		            break;

		        case 'updateLoseWeight.php':
		        	fillTable(result);
		        	break;
        	}
        	

		    

        },
        error:function(xhr, status, error){
        	console.log("FAILED");
            alert(xhr.responseText);
        }

	});
});


function showTable(listid){
	document.cookie = "listid="+listid;
	window.location.href = 'http://localhost/mhealth_web/updateLoseWeight.php';
}

function fillTable(result){
	for (var k in result[0]) {
        if (result[0].hasOwnProperty(k)) {
        	var tmp = document.getElementById(k);
        	if(k=="weekGoal" || k=="eatContent"){
        		var str = result[0][k];
        		var res = str.replace(/<br>/g,"\r\n");
        		tmp.value = res;
        	}
        	else if(k=="sleepTime" || k=="wakeUpTime"){
        		var str = result[0][k];
        		var res = str.replace(" ","T");
        		tmp.value = res;
        	}
        	else{
        		tmp.value = result[0][k];
        	}
           	
        }
    }
}