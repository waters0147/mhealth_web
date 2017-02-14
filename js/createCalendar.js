var dateObj = new Date();

$( document ).ready(function() {
    	
    // calendar div中的html部分
    renderHtml();
    // 表格中顯示日期
    showCalendarData();
    // 绑定事件
    bindEvent();

    $.ajax({
    	url:'getFileList.php',
    	type:'GET',
    	dataType:'json',
    	success:function(result){
    		setImage(result);
    	},
    	error:function(xhr, status, error){
            alert(xhr.responseText);

        }
    });




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
    var _imgs = document.getElementsByName("foodImg");
    var border = _table.getElementsByTagName("td");
    var _firstDay = new Date(_year, _month - 1, 1);    // first day of this month
    for(var i = 0; i < _tds.length; i++) {
    	_imgs[i].setAttribute("id","T"+i);
        var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
        var _thisDayStr = getDateStr(_thisDay);
        _tds[i].innerText = _thisDay.getDate();
        //_tds[i].data = _thisDayStr;
        _tds[i].setAttribute('data', _thisDayStr);
        if(_thisDayStr == getDateStr(new Date())) {        
            _tds[i].className = 'currentDay';
        }else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
            _tds[i].className = 'currentMonth';    // this month
            border[i].style.border = '1px solid black';
        }else {        // other month
            _tds[i].className = 'otherMonth';
            border[i].style.borderStyle = 'none';
            console.log(_imgs[i].getAttribute("id"));
            document.getElementById("T"+i).style.visibility = 'hidden';

        }
    }
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
    $.ajax({
    	url:'getFileList.php',
    	type:'GET',
    	dataType:'json',
    	success:function(result){
    		setImage(result);
    	},
    	error:function(xhr, status, error){
            alert(xhr.responseText);

        }
    });

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

	var dFont = document.getElementsByName('dFont');
	var foodImg = document.getElementsByName("foodImg");
	for(i=0;i<dFont.length;++i){
		for(j=0;j<result.length;j++){
			if(getImagePrefix(j,result)==dFont[i].getAttribute("data")){
				foodImg[i].setAttribute("src","./808234765943569/"+result[j]);
				
			}
		}

	}

}


function getImagePrefix(index,result){
	return result[index].substr(0,result[index].indexOf('_'));
}