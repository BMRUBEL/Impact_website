<?php
session_start();
if(!isset($_SESSION['username'])){
  header('Location: index.php');
}
$db = new mysqli('localhost', 'root', '', 'impact');
$about = $db->query('select * from about order by id desc');

if (isset($_POST['title'])) {
    $title = $_POST['title'];
    $file = $_FILES['photo']['name'];
    move_uploaded_file($_FILES['photo']['tmp_name'], './dist/assets/' . $file);
    $title_1 = $_POST['title_1'];
    $file_1 = $_FILES['image']['name'];
    move_uploaded_file($_FILES['image']['tmp_name'], './dist/assets/' . $file_1);
    $query = "INSERT INTO `about` (`id`, `title`, `photo`, `title_1`, `photo_1`) VALUES (NULL, '$title', '$file', '$title_1', '$file_1')";
    $db->query($query);
    header('Location: about.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Starter</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
   

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <?php
  require('menu.php');
  ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">About page</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- /.col-md-6 -->
          <div class="col-lg-12">
            

            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="m-0">About</h5>
              </div>
              <div class="card-body">
                 <form action="" method="post" enctype="multipart/form-data">
                    <table class="table table-bordered">
                        <tr>
                            <th>Title</th>
                            <td>
                                <input type="text" name="title" class="form-control" placeholder="Enter your title">
                            </td>
                            <th>Photo</th>
                            <td>
                                <input type="file" name="photo" class="form-control">
                            </td>
                        </tr>
                        <tr >
                            <th>Title_1</th>
                            <td colspan="4">
                                 <textarea name="title_1" id="" cols="80" rows="10" placeholder="Enter your discribe"></textarea>
                            </td>
                          
                        </tr>
                        <tr>
                           <th>Image</th>
                            <td  colspan="4">
                                <input type="file" name="image" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <input type="submit" class="btn btn-primary btn-block" value="Save">
                            </td>
                        </tr>
                    </table>
                 </form>
                  <hr>
                 <table class="table table-bordered">
                    <h1>List</h1>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Photo</th>
                        <th>Title_1</th>
                        <th>Photo_1</th>
                        <th></th>
                    </tr>
                    <?php $i=0; while($data=$about->fetch_assoc()){ ?>
                        <tr>
                            <td><?php echo ++$i ?></td>
                            <td><?php echo $data['title'] ?></td>
                           <td><img src="./dist/assets/<?php echo $data['photo'] ?>" width="100" height="80" /></td>
                            <td><?php echo $data['title_1'] ?></td>
                            <td><img src="./dist/assets/<?php echo $data['photo_1'] ?>" width="100" height="80" /></td>
                            <td>
                                <a href="about_edit.php?id=<?php echo $data['id'] ?> " class="btn btn-xs btn-success">Edit
                                
                            </a>
                            <a href="about_del.php?id=<?php echo $data['id'] ?>" class="btn btn-xs btn-danger"
                            onclick="return confirm('Are you sure?')">Delete</a>
                            </td>
                        </tr>    
                    <?php }?>
                 </table>
              </div>
            </div>
          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
</body>
</html>
