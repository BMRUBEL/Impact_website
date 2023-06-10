<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers:  *");
$con=new mysqli('localhost','root','','impact');
$data=json_decode(file_get_contents('php://input'),true);
if(isset($data['name'])){
    $con->query("INSERT INTO `contact` (`id`, `name`, `email`, `subject`, `message`) VALUES (NULL, '".$data['name']."', '".$data['email']."', '".$data['subject']."', '".$data['message']."')");
}
echo json_encode($data);
