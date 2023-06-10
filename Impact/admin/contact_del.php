<?php
$db=new mysqli('localhost','root','','impact');
$db->query("delete from contact where id=".$_GET['id']);
header('Location: contact.php');
?>