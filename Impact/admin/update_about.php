<?php
// $db=new mysqli('localhost','root','','impact');
// if(isset($_POST['title'])){
//     $title=$_POST['title'];
//     $title_1=$_POST['title_1'];
//     $file=$_FILES['photo']['name'];
//     $file_1=$_FILES['image']['name'];
//     if(move_uploaded_file($_FILES['photo']['tmp_name'],'./dist/assets/'.$file)){
//         $db->query=("UPDATE about SET title='$title',title_1='$title_1', photo='$file'where id=".$_GET['id']);

//     }else{
//         $db->query=("UPDATE about SET title='$title',title_1='$title_1'where id=".$_GET['id']);
//     }

$db = new mysqli('localhost', 'root', '', 'impact');

if (isset($_POST['title'])) {
    $title = $_POST['title'];
    $title_1 = $_POST['title_1'];
    $file = $_FILES['photo']['name'];
    $file_1 = $_FILES['image']['name'];

    if (move_uploaded_file($_FILES['photo']['tmp_name'], './dist/assets/' . $file . $file_1)) {
        $query = $db->prepare("UPDATE `about` SET `title`=?, `title_1`=?, `photo`=?, `photo_1`=? WHERE `id`=?");
        $query->bind_param('ssssi', $title, $title_1, $file, $file_1, $_GET['id']);
        $query->execute();
        $query->close();
    } else {
        $query = $db->prepare("UPDATE `about` SET `title`=?, `title_1`=?, `photo`=?, `photo_1`=? WHERE `id`=?");
        $query->bind_param('ssssi', $title, $title_1, $file, $file_1, $_GET['id']);
        $query->execute();
        // $query->close();
    }
     header('Location: about.php');
}


 


 

 
    

//       header('Location: about.php');
// }

?>