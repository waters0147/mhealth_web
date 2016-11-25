$(document).ready(function(){
    $.ajax({
        url:'queryBPP.php',
        type:'GET',
        dataType:'json',
        success:function(result){
            console.log('success');
            var url = window.location.href.toString();
            if(url.includes("BPAndPulse.php")){
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
            }
            else if(url.includes("foodRecord.php")){
                var food = new Array();
                var tmp=[];
                for(i=0;i<Object.keys(result).length;i++){
                    var time = result[i].time;
                    /*var data = new Object();
                    //highChart部分會少八小時，故強制加八小      
                    data.Time=Date.parse(time)+1000*60*60*8;
                    data.Calories=parseInt(result[i].calories);
                    data.Name=result[i].name;                        
                    //food[i] = data;*/

                    food[i] = {"Time:"+Date.parse(time)+1000*60*60*8,"Calories:"+parseInt(result[i].calories),"Name:"+result[i].name};

                }
                console.log(food);
                drawFoodRecordChart(food);
            }
            /*else{
            }*/


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

function drawFoodRecordChart(foodRecord) { 
    var PulseChart = Highcharts.chart('food', {
        chart: {
            type: 'line'
        },
        tooltip:{

            formatter: function() {
                //console.log(this.point.config[2]);
                var s = '<b>' + Highcharts.dateFormat("%A, %b %e, %H:%M:%S", this.x) + '</b>';
                console.log(this);
                //s+='Name: '+this.point[0]+'</br>'+
                //   'Calories '+this.point[1];

                //return s;
            
            }

            
            
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Calories'
        },
        xAxis: {
            type:'datetime'
        },
        yAxis: {
            title: {
                text: 'Y-value'
            },
            
        },
        series: [{
            name: 'calories',         
            data: foodRecord

        }]
    });

}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}