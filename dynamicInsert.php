<?php



include 'db_functions.php';

$dbFunction = new dbFunction;

$name = array('apple','pizza','hamburger','banana','steak','rice','丼飯','水煎包','咖哩飯','蛋包飯','炒麵','炒飯','牛奶麥片','吐司','麵包','炸雞');
$meal = array('早餐','午餐','晚餐','點心','宵夜');
$i = mt_rand(0,4);
$j = mt_rand(0,15);
$calories = mt_rand(200,700);
$timeX = 1481932800;
echo $calories;
$dateString = date("Y-m-d H:i:s",mt_rand( $timeX,$timeX+86399));

$dbFunction->testInsert('808234765943569',$db,$name[$j],$calories,$i,$dateString);









?>