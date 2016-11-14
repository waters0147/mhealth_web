$(document).ready(function(){
    $.ajax({
        url:'queryBPP.php',
        type:'GET',
        dataType:'json',
        success:function(result){
            console.log('success');

            var systolic = [];
            var diastolic = [];
            var pulse = [];

            for(i=0;i<Object.keys(result).length;i++){
                var date = result[i].date;
                systolic[i] = [Date.parse(date),parseInt(result[i].systolic)];
                diastolic[i] = [Date.parse(date),parseInt(result[i].diastolic)];
                pulse[i] = [Date.parse(date),parseInt(result[i].pulse)];
            }
            drawBPChart(systolic,diastolic);
            drawPulseChart(pulse);


        },
        error:function(xhr, status, error){
            alert(xhr.responseText);

        }
    });
});



function drawBPChart(sys,dias) { 
    var BPChart = Highcharts.chart('BP', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: '血壓'
        },
        xAxis: {
            type:'datetime'
        },
        yAxis: {
            title: {
                text: 'Y-value'
            },
            plotLines: [{
                value: 140,
                color: 'red',
                dashStyle: 'longdash',
                width: 2,
                label: {
                    text: 140
                }
            }, {
                value: 90,
                color: 'green',
                dashStyle: 'longdash',
                width: 2,
                label: {
                    text: 90
                }
            }]
        },
        series: [{
            name: '收縮壓',
            color:'black',
            data: sys
        }, {
            name: '舒張壓',
            color:'brown',
            data: dias
        }]
    });
}

function drawPulseChart(pulse) { 
    var PulseChart = Highcharts.chart('Pulse', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: '脈搏'
        },
        xAxis: {
            type:'datetime'
        },
        yAxis: {
            title: {
                text: 'Y-value'
            },
            plotLines: [{
                value: 90,
                color: 'red',
                dashStyle: 'longdash',
                width: 2,
                label: {
                    text: 90
                }
            }]
        },
        series: [{
            name: '脈搏',
            color:'black',
            data: pulse
        }]
    });
}