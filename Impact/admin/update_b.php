<?php
 $db=new mysqli('localhost','root','','construction');
 if(isset($_POST['headline'])){
    $headline=$_POST['headline'];
    $details=$_POST['details'];
    $file=$_FILES['photo']['name'];
   if( move_uploaded_file($_FILES['photo']['tmp_name'],'../assets/'.$file)){
   $db->query=("update blogs set headline='$headline', details='$details',photo='$file' where id=".$_GET['id']);
   }else{
    $db->query=("update blogs set headline='$headline', details='$details' where id=".$_GET['id']);
   }
   header('Location:blog.php');
}
?>

 
 