

var url = window.location.href.toString().split("/");
var chatacter = url[url.length-1];
var predictChart; //predict圖
var predictDay; //預測天數
var accumulateNet =[];
var net=[];

var XMean;
var YMean;
var XYMean;
var Slope;

$(document).ready(function(){
   

    $.ajax({
        url:'queryDB.php',
        type:'GET',
        data:{action:chatacter},
        dataType:'json',
        success:function(result){
            var tmp = result.sort(function(a,b){return a.dayCal > b.dayCal ? 1:-1;});
            computeNet(result);  
            drawAcc(accumulateNet);
            addRegularLine();

            console.log(getCookie('averageCal'));

        },
        error:function(xhr, status, error){
            console.log(xhr.responseText);
            console.log("status = "+status);
            console.log("error = "+error);
        }
    });

    $('#analysis').click(function(){ 
        var targetDay = parseInt(document.getElementById('targetFinishedDay').value);//user預計多久可以完成
        var targetWeight = parseInt(document.getElementById('targetWeight').value);//user理想體重
        predictDay = getTargetDay(targetWeight,YMean,Slope);//回歸預測

        if(parseInt(predictDay)<parseInt(targetDay)){
            console.log(predictDay);
            alert("經過預測，持續保持的話就會達成目標");
        }
        else{
            console.log("預計天數："+predictDay);
            showAnalysis();
            drawAnalysis(Math.round((1500-parseInt(Slope*-86400000))/1500*100));
            document.getElementById("BMR").innerHTML = "BMR"+'</br>1500';
            document.getElementById("intake").innerHTML = "平均攝取"+'</br>'+(1500-parseInt(Slope*-86400000))+'卡';
            document.getElementById("analy").innerHTML = "預計"+'</br>'+predictDay+'天';
        }
    });

    $('#suggest').click(function(){
        var targetDay = parseInt(document.getElementById('targetFinishedDay').value);//user預計多久可以完成
        var targetWeight = parseInt(document.getElementById('targetWeight').value);//user理想體重

        var analysisModal = document.getElementById('analysisModal');   
        // open the modal 
        analysisModal.style.display = "none";
        var suggestModal = document.getElementById('suggestModal');
        suggestModal.style.display = "block";
        var span = document.getElementsByClassName("close")[2];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            suggestModal.style.display = "none";
        }
        var favoriteSport = getCookie("sportName");
        var unitEX = getCookie("unitEX");
        var dailyEx = Math.round(Slope*-86400000);
        var neededDailyEx = ((getCookie("weight")-targetWeight)*-7700-YMean)/targetDay;
        var addedSportTime = Math.round((neededDailyEx + dailyEx)/-unitEX);

        var favoriteFood = decodeURI(getCookie('foodName')).replace(/\+/g,"");
        var minusSportTime = Math.round((getCookie('averageCal')/unitEX));

        document.getElementById("reduceIntake").innerHTML = "1."+favoriteFood+"吃太多囉，請減量";
        document.getElementById("increaseActivity").innerHTML = "2.增加運動量："+'</br>每日持續'+favoriteSport+"："+addedSportTime+"分";
        document.getElementById("combineAbove").innerHTML = "3.兩者並行："+'</br>每少吃一份'+favoriteFood+"可以少"+favoriteSport+"："+minusSportTime+"分";
    });

});



function calculateXMean(array){
    var x=0;
    for(var i=0;i<array.length;i++){
        x+=(array[i][0]);
    }
    return x/array.length;
}
function calculateYMean(array){
    var y=0;
    for(var i=0;i<array.length;i++){
        y+=array[i][1];
    }
    return y/array.length;
}
function calculateXYMean(array){
    var xy=0;
    for(var i=0;i<array.length;i++){
        xy+=((array[i][0])*(array[i][1]));
    }
    return xy/array.length;
}
function getCov(XYMean,XMean,YMean){
    return XYMean-XMean*YMean;
}
function getVar(array,XMean){
    var result = 0;
    for(var i=0;i<array.length;i++){
        result+=Math.pow(array[i][0]-XMean,2);
    }
    return result/array.length;
}
function getPredictCal(XMean,YMean,Slope,x){
    return YMean+Slope*(x-XMean);   
}
function getTargetDay(targetWeight,YMean,Slope){
    var needLose = (getCookie("weight")-targetWeight)*-7700;
    if(needLose-YMean>0){
        for(var i =0;i<accumulateNet.length;++i){
            if(accumulateNet[i][1]<needLose)
                return i;
        }
    }
    else{
        var day = ((needLose-YMean)/Slope/86400000);
        return Math.ceil(day);
    }
}

function computeNet(result){
    var combine =[];
    for(var i=1;i<result.length;i++){
        if(result[i].dayCal === result[i-1].dayCal){
            result[i-1] = Object.assign({},result[i-1],result[i]);
        }
    }
    combine.push(result[0]);
    for(var i=1;i<result.length;i++){
        combine.push(result[i]);
        if(result[i].dayCal === result[i-1].dayCal){
            combine.pop();
        }
    }
    var sum = 0;
    for(var i=combine.length-30;i<combine.length;i++){
        
        if(combine[i].hasOwnProperty('sumExp') && combine[i].hasOwnProperty('sumCal')){
            sum+=(combine[i].sumCal-combine[i].sumExp-1500);
            net.push(Array(Date.parse(combine[i].dayCal),combine[i].sumCal-combine[i].sumExp-1500));
            accumulateNet.push(Array(Date.parse(combine[i].dayCal),sum));
        }
        else if(combine[i].hasOwnProperty('sumExp')){
            sum+=(0-combine[i].sumExp-1500);
            net.push(Array(Date.parse(combine[i].dayCal),0-combine[i].sumExp-1500));
            accumulateNet.push(Array(Date.parse(combine[i].dayCal),sum));
        }
        else if(combine[i].hasOwnProperty('sumCal')){
            sum+=(combine[i].sumCal-1500);
            net.push(Array(Date.parse(combine[i].dayCal),combine[i].sumCal-1500));
            accumulateNet.push(Array(Date.parse(combine[i].dayCal),sum));
        }
        else{
            sum+=-1500;
            net.push(Array(Date.parse(combine[i].dayCal),-1500));
            accumulateNet.push(Array(Date.parse(combine[i].dayCal),sum));
        }
    }
    

}

function drawAcc(accumulateNet){
    predictChart = Highcharts.chart('weightPredict', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        legend: {
            itemStyle: {
                color: '#000000',
                fontSize: '24px'
            }
        },
        title: {
            text: 'AccumulateNet',
            style:{
                fontSize:'28px'
            }
        },
        xAxis: {
            type:'datetime',
            labels:{
                style:{
                    fontSize:'14px'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Calories',
                style:{
                    fontSize:'22px'
                }
            },
            labels:{
                style:{
                    fontSize:'18px'
                }
            },
            plotLines: [{
                value: 0,
                color: '#FF9224',
                dashStyle: 'longdash',
                width: 2,
                label: {
                    text: 'Baseline'
                }
            }]
        },
        series: [{
            type:'line',
            name: 'accumulateNet',
            data: accumulateNet
        }]
    });
}


function drawNonAcc(Net){
    predictChart = Highcharts.chart('weightPredict', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Net'
        },
        xAxis: {
            type:'datetime'
        },
        yAxis: {
            title: {
                text: 'Calories'
            },
            plotLines: [{
                value: 0,
                color: '#FF9224',
                dashStyle: 'longdash',
                width: 2,
                label: {
                    text: 'Baseline'
                }
            }]
        },
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            
                            var date = new Date(this.x);
                            console.log(date.toLocaleDateString());
                            
                            $.ajax({
                                url:'HCPointClick.php',
                                type:'GET',
                                data:{
                                    action:chatacter,
                                    pointDate:date.toLocaleDateString()
                                },
                                dataType:'json',
                                success:function(result){
                                    showNetDetailTable(result,date);
                                    var modal = document.getElementById('myModal');
                                    // open the modal 
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
                                    console.log(xhr.responseText);

                                }
                            });
                           
                        }
                    }
                }
            }
        },
        series: [{
            type:'line',
            name: 'Net',
            data: Net
        }]
    });
}

function reDraw(selecterType){
    var selectValue = selecterType.value;
    if(selectValue == "acc"){
        document.getElementById("predictDiv").style.visibility = 'visible';
        drawAcc(accumulateNet);
    }
    else {
        document.getElementById("predictDiv").style.visibility = 'hidden';
        drawNonAcc(net);

    }

}


function showNetDetailTable(result,date){
    console.log(result);
    var table = document.getElementById("foodDetailList");
    table.deleteTHead();
    var header  = table.createTHead();
    var headText = ["#","名稱","數值","紀錄時間"];
    var rowHead = header.insertRow(0);
    for(i=0;i<headText.length;++i){
        var cellHead = rowHead.insertCell(i);
        cellHead.innerHTML = headText[i];
    }
    var modal = document.getElementById('myModal');
    var table = document.getElementById("foodDetailList");
    for(i=0;i<result.length;++i){
        var row = table.insertRow(i+1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = i;
        if(result[i].hasOwnProperty('sportName')){
            cell1.innerHTML = result[i].sportName;
            cell2.innerHTML = Math.round(-parseInt(result[i].expenditure)*Math.pow(10,2))/Math.pow(10,2);
            cell3.innerHTML = result[i].recordedTime;
        }
        else{
            cell1.innerHTML = result[i].foodName;
            cell2.innerHTML = result[i].calories;
            cell3.innerHTML = result[i].recordedTime;
        }            
    }
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = result.length;
    cell1.innerHTML = "BMR";
    cell2.innerHTML = "-1500";
    cell3.innerHTML = date.toLocaleDateString();
}

function addRegularLine(){
    XMean = calculateXMean(accumulateNet);
    YMean = calculateYMean(accumulateNet);
    XYMean = calculateXYMean(accumulateNet);
    Slope = getCov(XYMean,XMean,YMean)/getVar(accumulateNet,XMean);

    /*predictChart.addSeries({
        type:'line',
        name:'Regrsssion Line',
        data: [
        [accumulateNet[0][0],getPredictCal(XMean,YMean,Slope,accumulateNet[0][0])],
        [accumulateNet[accumulateNet.length-1][0],getPredictCal(XMean,YMean,Slope,accumulateNet[accumulateNet.length-1][0])]]
    });*/
    
    //document.getElementById('completeDay').innerHTML = getTargetDay(target,XMean,YMean,Slope)+"天";
}

function showAnalysis(){
    var modal = document.getElementById('analysisModal');   
    // open the modal 
    modal.style.display = "block";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
}


function drawAnalysis(percentage){   
    Highcharts.chart('analysisChart', {
    chart: {
        type: 'pie'
    },
    credits: {
        enabled: false
    },
    title:{
        text:'<span>'+percentage+'%</span><br/>',
        verticalAlign:'middle',
        y:-18,
        useHTML:true
    },
    plotOptions: {
        pie: {  
            size:200,
            innerSize:140,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        data: [{
            name:'consumed',
            y: percentage,
        },{
            name:'need',
            y: 100-percentage,
            color:'#d9f3f7'
        }]
    }]
    });
}


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
