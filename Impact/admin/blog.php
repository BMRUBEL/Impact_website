<?php
session_start();
if(!isset($_SESSION['username'])){
  header('Location:index.php');
}
$db=new mysqli('localhost','root','','construction');
$blog=$db->query('select * from blogs order by id desc');
if(isset($_POST['headline'])){
    $headline=$_POST['headline'];
    $details=$_POST['details'];
    $file=$_FILES['photo']['name'];
    move_uploaded_file($_FILES['photo']['tmp_name'],'../assets/'.$file);
  $query="INSERT INTO `blogs` (`id`, `headline`, `details`, `photo`) VALUES (NULL, '$headline', '$details', '$file')";
   $db->query($query);
   header('Location:blog.php');

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
            <h1 class="m-0">Starter Page</h1>
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
                <h5 class="m-0">Blog</h5>
              </div>
              <div class="card-body">
                <h6 class="card-title">Special title treatment</h6>
                    <form action="" method="post" enctype="multipart/form-data">
                        <table class="table table-bordered">
                            <tr>
                                <td>
                                    <input type="file" name="photo" class="form-control">
                                </td>
                                <td>
                                    <input type="text" name="headline" placeholder="Enter headline" class="form-control">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <textarea name="details" id="" cols="30" rows="10" placeholder="enter details" class="form-control"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="submit" value="Save" class="btn btn-block btn-success">
                                </td>
                            </tr>
                        </table>
                    </form>
                    <hr>
                    <table class="table table-bordered">
                        <tr>
                            <th>SL</th>
                            <th>Headline</th>
                            <th>Details</th>
                            <th>Photo</th>
                            <th></th>
                        </tr>
                        <?php $i=0; while($data=$blog->fetch_assoc()){ ?>
                <tr>
                    <td><?php echo ++$i ?></td>
                    <td><?php echo $data['headline'] ?></td>
                    <td><?php echo $data['details'] ?></td>
                    <td>
                        <img src="../assets/<?php echo $data['photo'] ?>" alt="" height="80" width="100"/>
                    </td>
                    <td>
                        <a href="edite_b.php?id=<?php echo $data['id'] ?>" class="btn btn-success btn-xs">Edit</a>
                        |
                        <a href="delete_b.php?id=<?php echo $data['id'] ?>" onclick="return confirm('Do you want to delete this recored')" class="btn btn-success btn-xs">Delete</a>
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
