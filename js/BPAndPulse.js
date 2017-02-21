var url = window.location.href.toString().split("/");
var chatacter = url[url.length-1];
$(document).ready(function(){

    $.ajax({
        url:'queryDB.php',
        type:'GET',
        data:{action:chatacter},
        dataType:'json',
        success:function(result){
            console.log('success');
            
            switch (chatacter){
                case 'BPAndPulse.php':
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
                    break;
            
                case 'foodRecord.php':

                    var food = new Array();
                    for(i=0;i<Object.keys(result).length;i++){
                        //var time = result[i].time;
                        //var data = new Object();
                        //highChart部分會少八小時，故強制加八小      
                        //data.Time=Date.parse(time)+1000*60*60*8;
                        //data.Calories=parseInt(result[i].calories);
                        //data.Name=result[i].name;                        
                        //food[i] = data;
                        var time = result[i].time;
                        food[i] = [Date.parse(time)+1000*60*60*8,parseInt(result[i].calories),result[i].name];

                    }

                    console.log(food);
                    drawFoodRecordChart(food);
                    break;

                case 'waterDiary.php':
                    var weight = getCookie("weight");
                    document.getElementById("weightParam").innerHTML = "您目前的體重為"+weight+
                    "KG，您每天至少攝入"+weight*30+"毫升水量。";
                    var drunkWater = new Array();
                    for(i=0;i<Object.keys(result).length;i++){
                        drunkWater[i] = [Date.parse(result[i].date),parseInt(result[i].drunkwater)];
                    }
                    drawWaterChart(drunkWater);
                    break;

                case 'sportDiary.php':
                    var spEx = new Array();
                    var spTime = new Array();
                    for(i=0;i<Object.keys(result).length;i++){
                        spEx[i]=[Date.parse(result[i].day),parseInt(result[i].spEx)]; 
                        spTime[i]=[Date.parse(result[i].day),parseInt(result[i].spTime)]; 

                    }
                    drawSportExRecordChart(spEx);
                    drawSportTimeRecordChart(spTime);
                    break;
                case 'weightWeeklyDiary.php':
                    var weight = new Array();
                    var bmi = new Array();
                    for(i=0;i<Object.keys(result).length;i++){
                        var d = new Date(parseInt(result[i].time));
                        weight[i]=[Date.parse(d)+1000*60*60*8,parseInt(result[i].weight)];
                        var computeBMI = parseInt(result[i].weight)/Math.pow(parseInt(result[i].height)/100,2);
                        bmi[i] = [Date.parse(d)+1000*60*60*8,computeBMI];
                    }
                    drawWeightChart(weight);
                    drawBMIChart(bmi);
                    break;

                case 'bodyTemperature.php':
                    var tmp = new Array();
                    for(i=0;i<Object.keys(result).length;i++){
                        console.log(typeof result[i].tempurature);
                        tmp[i] = [Date.parse(result[i].day)+1000*60*60*8,parseInt(result[i].tempurature)];
                    }
                    drawTempuratureChart(tmp);                    
                    break;



            }


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

function drawSportExRecordChart(SportExRecord) { 
    var PulseChart = Highcharts.chart('sportExpenditure', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: '消耗熱量'
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
            name: '消耗熱量',         
            data: SportExRecord

        }]
    });

}

function drawSportTimeRecordChart(SportTimeRecord) { 
    var PulseChart = Highcharts.chart('sportTime', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: '運動時間'
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
            name: '運動時間',         
            data: SportTimeRecord

        }]
    });

}

function drawWeightChart(weightRecord){
    var PulseChart = Highcharts.chart('weight', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: '體重'
        },
        xAxis: {
            type:'datetime'
        },
        yAxis: {
            title: {
                text: 'Kg'
            },
            
        },
        series: [{
            name: '體重(kg)',         
            data: weightRecord

        }]
    });
}

function drawBMIChart(BMIRecord){
    var PulseChart = Highcharts.chart('bmi', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'BMI'
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
            name: 'BMI',         
            data: BMIRecord

        }]
    });
}

function drawWaterChart(drunkRecord){
    var PulseChart = Highcharts.chart('water', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: '喝水日記'
        },
        xAxis: {
            type:'datetime'
        },
        yAxis: {
            title: {
                text: 'Y-value'
            },
            
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
                                    console.log("SUCCESS");
                                    console.log(result);
                                    
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
            name:'水',
            data: drunkRecord

        }]
    });
}

function drawTempuratureChart(tempRecord){
    var PulseChart = Highcharts.chart('tempurature', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: '體溫'
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
            name:'顳溫(℃)',
            data: tempRecord

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