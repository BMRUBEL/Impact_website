<?php
$db=new mysqli('localhost','root','','impact');
if(isset($_POST['title'])){
    $title=$_POST['title'];
    $designation=$_POST['designation'];
    $file=$_FILES['photo']['name'];
    if(move_uploaded_file($_FILES['photo']['tmp_name'],'./dist/assets/'.$file)){
       $query = $db->prepare("UPDATE `team` SET `title`=?,`designation`=?,`photo`=? WHERE `id`=?");
        $query->bind_param('sssi',$title,$designation,$file,$_GET['id']);
        $query->execute();
        $query->close();

     }else{
        $query = $db->prepare("UPDATE `team` SET `title`=?,`designation`=?,`photo`=? WHERE `id`=?");
        $query->bind_param('sssi',$title,$designation,$file,$_GET['id']);
        $query->execute();
        $query->close();

     }
     header('Location: team.php');

    }


?>