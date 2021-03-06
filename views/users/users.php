<!DOCTYPE html>
<html lang="it">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title><?php echo $app_nome; ?> - Users</title>
		<meta name="generator" content="Bluefish 2.2.5" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="icon" type="image/png" href="<?php echo $app_icon; ?>">
		<link href="<?php echo $views_users; ?>css/bootstrap.min.css" rel="stylesheet">
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link href="<?php echo $views_users; ?>css/styles.css" rel="stylesheet">
		
		<script src="<?php echo $views_users; ?>js/jquery.min.js"></script>
		
		<script src="<?php echo $views_users; ?>js/function.js"></script>
		
		<script src="<?php echo $views_users; ?>js/bootstrap.min.js"></script>		
		
		
		
	</head>
	<body>
<!-- Header -->
<div id="top-nav" class="navbar navbar-inverse navbar-static-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-toggle"></span>
      </button>
      <a class="navbar-brand" href="#"><img src="<?php echo $app_icon; ?>" width="32" height="32" alt="" border="0" /> <?php echo $app_nome; ?></a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        
        <li class="dropdown">
          <a class="dropdown-toggle" role="button" data-toggle="dropdown" href="#">
            <i class="glyphicon glyphicon-user"></i> <?php echo $_SESSION['user_name']; ?> <span class="caret"></span></a>
          <ul id="g-account-menu" class="dropdown-menu" role="menu">
            <li><a href="<?php echo $dir_base; ?>"><i class="glyphicon glyphicon-home"></i> Dashboard</a></li>
            <li><a href="<?php echo $dir_base; ?>?logout"><i class="glyphicon glyphicon-off"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div><!-- /container -->
</div>
<!-- /Header -->

<!-- Main -->
<div class="container">
  
<div class="page-header">
  <h2>Gestione <small>utenti</small></h2>
</div>  
  
  <!-- lower section -->
  <div class="row">

    <div class="col-md-8">
      
      <table class="table table-striped">
        <thead>
          <tr><th>ID</th><th>Username</th><th>Email</th><th>Ruolo</th></tr>
        </thead>
        <tbody>
			<?php
			foreach ($_SESSION['users'] as $row) {
				echo "<tr><td>".$row['user_id']."</td><td>".$row['user_name']."</td><td>".$row['user_email']."</td><td></td></tr>";    
			}         
			?>        
         
        </tbody>
      </table>
      
     
      

    
    </div>
    <div class="col-md-4">
              
      <div class="panel panel-default">
        <div class="panel-heading">
          <div class="panel-title">
            
            <h4>Dett utente</h4>
          </div>
        </div>
        <div class="panel-body">
          
          <form class="form form-vertical">
            <div class="control-group">
              <label>Username</label>
              <div class="controls">
                <input type="text" class="form-control" placeholder="Username">
              </div>
            </div>      
            <div class="control-group">
              <label>Password</label>
              <div class="controls">
                <input type="password" class="form-control" placeholder="Password">
                
              </div>
            </div>   
            <div class="control-group">
              <label>Note</label>
              <div class="controls">
                <textarea class="form-control"></textarea>
              </div>
            </div> 
            <div class="control-group">
              <label>Ruolo</label>
              <div class="controls">
                <select class="form-control"><option>Utente</option><option>Amministratore</option></select>
              </div>
            </div>    
            <div class="control-group">
              <label>Territorio di competenza</label>
              <div class="controls">
                <select class="form-control">
						<?php
							foreach ($_SESSION['sedi'] as $row) {
							echo '<option name="itemsede" id="'.$row['cod'].'">'.$row['nome'].'</option>';    
							}         
						?>        
                
                </select>
              </div>
            </div>    
            <div class="control-group">
              <label></label>
              <div class="controls">
                <button type="submit" class="btn btn-primary">
                  Aggiorna
                </button>
              </div>
            </div>   
            
          </form>
          
          
        </div><!--/panel content-->
      </div><!--/panel-->
      
    </div><!--/col-->
    
  </div><!--/row-->
  
</div><!--/container-->
<!-- /Main -->


<footer class="text-center"><?php echo $app_nome; ?> - <a href="#"><strong>Rino Russo</strong></a></footer>


<div class="modal" id="addWidgetModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title">Add Widget</h4>
      </div>
      <div class="modal-body">
        <p>Add a widget stuff here..</p>
      </div>
      <div class="modal-footer">
        <a href="#" class="btn">Close</a>
        <a href="#" class="btn btn-primary">Save changes</a>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dalog -->
</div><!-- /.modal -->




	</body>
</html>