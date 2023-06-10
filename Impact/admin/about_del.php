<?php
$db=new mysqli('localhost','root','','impact');
$db->query("delete from about where id=".$_GET['id']);
header('Location: about.php');
?>