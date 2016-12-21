var net = [-500,-400,-350,100,-450,-300,-200,-450,-250,150,200,-300,-500,-500,-600,-450,-400,-300,-200,-350,100,150,300,-600,-550,
			-450,-300,-450,-400,-350,-250,-600,-550,100,-300,-350,-400,-400,-500,-450,-300,150,200,-300,-400,-600,-550,-450,-500,
			-350,-400,-100,-250,-300,-400,150,-300,100,-400,-450,-300,-350,300,400];

/*var XMean = calculateXMean(net);
var YMean = calculateYMean(net);
var XYMean = calculateXYMean(net);
var Slope = getCov()/getVar(net);
console.log("Slope = "+Slope);
console.log((net.length));*/

function calculateXMean(array){
	var x=0;
	for(var i=0;i<array.length;i++){
		x+=(i+1);
	}
	return x/array.length;
}
function calculateYMean(array){
	var x=0;
	for(var i=0;i<array.length;i++){
		x+=array[i];
	}
	return x/array.length;
}
function calculateXYMean(array){
	var x=0;
	for(var i=0;i<array.length;i++){
		x+=(i+1)*array[i];
	}
	return x/array.length;
}
function getCov(XYMean,XMean,YMean){
	return XYMean-XMean*YMean;
}
function getVar(array,XMean){
	var result = 0;
	for(var i=0;i<array.length;i++){
		result+=Math.pow(i-XMean,2);
	}
	return result/array.length;
}
function getPredictCal(XMean,YMean,Slope,x){
	return YMean+Slope*(x-XMean);	
}
function getTargetDay(targetWeight,XMean,YMean,Slope){
	var needLose = (65-targetWeight)*-7700;
	var day = (needLose-YMean)/Slope+XMean;
	return Math.ceil(day);
}


$(document).ready(function(){

	var accumulateNet =[];
	var sum = 0;
	for(var i=0;i<net.length;++i){
		sum+=net[i];
		accumulateNet[i] = sum;
	}
	var XMean = calculateXMean(accumulateNet);
	console.log("XMEAN = "+XMean);
	var YMean = calculateYMean(accumulateNet);
	console.log("YMEAN = "+YMean);
	var XYMean = calculateXYMean(accumulateNet);
	console.log("XYMEAN = "+XYMean);
	var Slope = getCov(XYMean,XMean,YMean)/getVar(accumulateNet,XMean);
	console.log("SLOPE = "+Slope);

	var predictChart = Highcharts.chart('weightPredict', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Net'
        },
        /*xAxis: {
            type:'datetime'
        },*/
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
            name: 'Net',
            data: accumulateNet,
        	negativeColor:'green',
        	color:'red'
        }]
    });


	$('#drawLine').click(function(){

		predictChart.addSeries({
			type:'line',
        	name:'Regrsssion Line',
        	data: [[0,getPredictCal(XMean,YMean,Slope,0)],[accumulateNet.length-1,getPredictCal(XMean,YMean,Slope,accumulateNet.length-1)]]
		});
		var target = parseInt(document.getElementById('targetWeight').value);

		document.getElementById('completeDay').innerHTML = getTargetDay(target,XMean,YMean,Slope)+"天";
	});

});
