/*var net = [-500,-400,-350,100,-450,-300,-200,-450,-250,150,200,-300,-500,-500,-600,-450,-400,-300,-200,-350,100,150,300,-600,-550,
            -450,-300,-450,-400,-350,-250,-600,-550,100,-300,-350,-400,-400,-500,-450,-300,150,200,-300,-400,-600,-550,-450,-500,
            -350,-400,-100,-250,-300,-400,150,-300,100,-400,-450,-300,-350,300,400];*/

/*var XMean = calculateXMean(net);
var YMean = calculateYMean(net);
var XYMean = calculateXYMean(net);
var Slope = getCov()/getVar(net);
console.log("Slope = "+Slope);
console.log((net.length));*/

var url = window.location.href.toString().split("/");
var chatacter = url[url.length-1];
var predictChart;
var accumulateNet =[];
var net=[];
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
        },
        error:function(xhr, status, error){
            alert(xhr.responseText);

        }

    });

    $('#drawLine').click(function(){
        
        var XMean = calculateXMean(accumulateNet);
        var YMean = calculateYMean(accumulateNet);
        var XYMean = calculateXYMean(accumulateNet);
        var Slope = getCov(XYMean,XMean,YMean)/getVar(accumulateNet,XMean);

        predictChart.addSeries({
            type:'line',
            name:'Regrsssion Line',
            data: [
            [accumulateNet[0][0],getPredictCal(XMean,YMean,Slope,accumulateNet[0][0])],
            [accumulateNet[accumulateNet.length-1][0],getPredictCal(XMean,YMean,Slope,accumulateNet[accumulateNet.length-1][0])]]
        });
        var target = parseInt(document.getElementById('targetWeight').value);

        document.getElementById('completeDay').innerHTML = getTargetDay(target,XMean,YMean,Slope)+"天";
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
function getTargetDay(targetWeight,XMean,YMean,Slope){
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
    for(var i=0;i<combine.length;i++){
        
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
        title: {
            text: 'AccumulateNet'
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

