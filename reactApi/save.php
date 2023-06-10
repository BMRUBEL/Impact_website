<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers:  *");
$con=new mysqli('localhost','root','','test');
$data=json_decode(file_get_contents('php://input'),true);
$name=$data['name'];
$roll=$data['roll'];
$fee=$data['fee'];
$con->query("insert into st_info(name,roll,fee)values('".$name."','".$roll."',".$fee.")");
echo json_encode(['status'=>true]);