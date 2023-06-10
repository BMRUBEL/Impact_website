<?php
$db=new mysqli('localhost','root','','impact');
$db->query("delete from service where id=".$_GET['id']);
header('Location: service.php');
?>