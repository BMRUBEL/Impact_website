<?php
$db=new mysqli('localhost','root','','impact');
$db->query("delete from team where id=".$_GET['id']);
header('Location: team.php');
?>