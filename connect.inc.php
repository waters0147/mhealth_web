<?php

$dsn = 'mysql:dbname=mhealth;host=localhost:3306;charset=utf8';
$account='root';
$psd='123456';
global $db;
try{
	$db = new PDO($dsn, $account, $psd);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $pe){
	echo $pe->getMessage();
}




?>