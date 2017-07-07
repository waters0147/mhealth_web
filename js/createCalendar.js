var dateObj = new Date();
var _firstDay;
var flag = 0;
$( document ).ready(function() {
    	
    // calendar div中的html部分
    renderHtml();
    // 表格中顯示日期
    showCalendarData();
    // 绑定事件
    bindEvent();  
 
});

function renderHtml() {

    var calendar = document.getElementById("calendar");
    var titleBox = document.createElement("div");    
    var bodyBox = document.createElement("div");    

    
    titleBox.className = 'calendar-title-box';
    titleBox.innerHTML = "<span class='prev-month' id='prevMonth'></span>" +
        "<span class='calendar-title' id='calendarTitle'></span>" +
        "<span id='nextMonth' class='next-month'></span>";
    calendar.appendChild(titleBox);        // 添加到calendar div中

    // 设置表格区的html结构
    bodyBox.className = 'calendar-body-box';
    var _headHtml = "<tr class='tableHead'>" + 
                        "<th>日</th>" +
                        "<th>一</th>" +
                        "<th>二</th>" +
                        "<th>三</th>" +
                        "<th>四</th>" +
                        "<th>五</th>" +
                        "<th>六</th>" +
                    "</tr>";
    var _bodyHtml = "";


    for(var i = 0; i < 6; i++) {    
        _bodyHtml += "<tr class='tableBody'>" +
                        "<td><div class = 'dFont' name='dFont'></div><img class = 'foodImg' name='foodImg'></td>" +
                        "<td><div class = 'dFont' name='dFont'></div><img class = 'foodImg' name='foodImg'></td>" +
                        "<td><div class = 'dFont' name='dFont'></div><img class = 'foodImg' name='foodImg'></td>" +
                        "<td><div class = 'dFont' name='dFont'></div><img class = 'foodImg' name='foodImg'></td>" +
                        "<td><div class = 'dFont' name='dFont'></div><img class = 'foodImg' name='foodImg'></td>" +
                        "<td><div class = 'dFont' name='dFont'></div><img class = 'foodImg' name='foodImg'></td>" +
                        "<td><div class = 'dFont' name='dFont'></div><img class = 'foodImg' name='foodImg'></td>" +
                    "</tr>";
    }
    bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table'>" +
                        _headHtml + _bodyHtml +
                        "</table>";
    // 添加到calendar div中
    calendar.appendChild(bodyBox);
}


function showCalendarData() {
	var _imgs = document.getElementsByName("foodImg");
	for(var i=0;i<_imgs.length;++i){
		document.getElementsByName("foodImg")[i].removeAttribute("src");
		document.getElementsByName("foodImg")[i].removeAttribute("onclick");
		document.getElementsByName("foodImg")[i].style.visibility = 'hidden';
	}
    var _year = dateObj.getFullYear();
    var _month = dateObj.getMonth() + 1;
    var _dateStr = getDateStr(dateObj);

    // set title
    var calendarTitle = document.getElementById("calendarTitle");
    var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4,2) + "月";
    calendarTitle.innerText = titleStr;

    // set td number
    var _table = document.getElementById("calendarTable");
    var _tds = document.getElementsByName("dFont");
    
    var border = _table.getElementsByTagName("td");
    _firstDay = new Date(_year, _month - 1, 1);    // first day of this month
    for(var i = 0; i < _tds.length; i++) {

        var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
        var _thisDayStr = getDateStr(_thisDay);
        _tds[i].innerText = _thisDay.getDate();
        //_tds[i].data = _thisDayStr;
        _tds[i].setAttribute('data', _thisDayStr);
        _imgs[i].setAttribute("id","T"+i);
        if(_thisDayStr == getDateStr(new Date())) {        
            _tds[i].className = 'currentDay';
        }else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
            _tds[i].className = 'currentMonth';    // this month
            border[i].style.border = '1px solid black';
        }else {        // other month
            _tds[i].className = 'otherMonth';
            border[i].style.borderStyle = 'none';
            document.getElementById("T"+i).style.visibility = 'hidden';

        }
    }
    var date2ISO = _firstDay.toLocaleDateString();
    flag = 0;
    $.ajax({
    	url:'getFileList.php',
    	type:'GET',
    	data:{
    		firstDay:date2ISO,
    		flag:flag
    	},
    	dataType:'json',
    	success:function(result){
    		console.log("SUCCESS");
    		setImage(result);
    	},
    	error:function(xhr, status, error){
    		console.log("FAILED");    
            console.log("XHR = "+xhr.responseText);
            console.log("STATUS = "+status);
            console.log("ERROR = "+error);

        }
    });
}
//綁定onclick event
function bindEvent() {
    document.getElementById("prevMonth").addEventListener("click", function() {
    	toPrevMonth();
	});
    document.getElementById("nextMonth").addEventListener("click", function() {
    	toNextMonth();
	});

}
/**
 * click preMonth
 */
function toPrevMonth() {
    dateObj = new Date(dateObj.getFullYear(),dateObj.getMonth() - 1,1);
    showCalendarData(dateObj);
    

}

/**
 * click nextMonth
 */
function toNextMonth() {
    dateObj = new Date(dateObj.getFullYear(),dateObj.getMonth() + 1,1);
    showCalendarData(dateObj);
}

/**
 * date to string， 4位年+2位月+2位日
 */
function getDateStr(date) {
    var _year = date.getFullYear();
    var _month = date.getMonth() + 1;     
    var _d = date.getDate();
    
    _month = (_month > 9) ? ("" + _month) : ("0" + _month);
    _d = (_d > 9) ? ("" + _d) : ("0" + _d);
    return _year + _month + _d;
}



function setImage(result){
	var _tds = document.getElementsByName("dFont");
    var _imgs = document.getElementsByName("foodImg");
	for(i=0;i<_tds.length;++i){
		for(j=0;j<Object.keys(result).length;++j){
			if(_tds[i].getAttribute("class")=="currentMonth" || _tds[i].getAttribute("class")=="currentDay"){
                var str = result[j].recordedTime.substring(0,10).replace(/-/g,"");
                if(str == _tds[i].getAttribute("data")){
                    _imgs[i].setAttribute("src","data:image/jpeg;base64,"+result[j].image);
                    _imgs[i].style.visibility = 'visible';
                    _imgs[i].setAttribute("onclick","showFoodDetail("+str+");");
                }
            }
		}
	}
	
}


function showFoodDetail(data){
	flag=1;
	$.ajax({
    	url:'getFileList.php',
    	type:'GET',
    	data:{
    		firstDay:data,
    		flag:flag
    	},
    	dataType:'json',
    	success:function(result){
            console.log(result);
			var modal = document.getElementById('myModal');
			// open the modal 
			showFoodDetailTable(result);
			modal.style.display = "block";
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			    var table = document.getElementById("foodDetailList");
			    var rowCount = table.rows.length;
				for (var x=rowCount-1; x>0; x--) {
				   table.deleteRow(x);
				}

			}
    	},
    	error:function(xhr, status, error){
    		console.log("FAILED");
            alert(xhr.responseText);

        }
    });



    function showFoodDetailTable(result){
    	var modal = document.getElementById('myModal');
    	var table = document.getElementById("foodDetailList");
    	for(i=0;i<Object.keys(result).length;i++){
            var row = table.insertRow(i+1);
            var cell0 = row.insertCell(0);
	    	var cell1 = row.insertCell(1);
	    	var cell2 = row.insertCell(2);
	    	var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
	    	cell0.innerHTML = i;
	    	cell1.innerHTML = result[i].name;
            switch(result[i].meal){
                case '0':
                    cell2.innerHTML = "早餐";
                    break;
                case '1':
                    cell2.innerHTML = "午餐";
                    break;
                case '2':
                    cell2.innerHTML = "晚餐";
                    break;
                case '3':
                    cell2.innerHTML = "點心";
                    break;
                case '4':
                    cell2.innerHTML = "宵夜";
                    break;
                case '5':
                    cell2.innerHTML = "其他";
                    break;
            }
	    	cell3.innerHTML = result[i].calories;
	    	cell4.innerHTML = result[i].recordedTime;
	    	
        }
    }
}

