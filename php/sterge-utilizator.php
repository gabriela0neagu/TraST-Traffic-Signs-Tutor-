<!DOCTYPE html>
<html lang="ro">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#333641">
	<title>Stergere utilizator</title>
	<link rel="stylesheet" type="text/css" href="sterge-utilizator.css">
</head>
<body>
	<?php
	 $con= mysqli_connect('localhost','root','','trast') or die('Could not connect: ' . mysqli_error($con));
	 $sql="select *from users"; 
	 $result=mysqli_query($con,$sql);
	 if(!$result)
      {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
}
?>

<form  class="cadru">
<h1> Sterge utilizator</h1>


	<div class="tabel">
		<table class="table-border">
<?php
if(isset($_POST['submitDelete'])){
	$key=$_POST['keyToDelete'];

	//vf daca ce vrem sa stergem exista
	$check=mysqli_query($con,"select *from users where id=$key") or die("not found".mysqli_error($con));
	if(mysqli_num_rows($check)>0){
		//inseamna ca exista si trb sters
		$sqlDelete=mysqli_query($con,"DELETE FROM users WHERE id ='$key'")
		or die("not deleted".mysqli_error($con));?>
	
		<div class="alert-succes">
			<p>Utilizator sters</p>
		</div>

		<?php  }
		else{  
			              ?>
			<div class="alert-warning">
			<p>Nu exista acest utlizator</p>
		</div>

		<?php }
	}
	?>

			<tr>
                <th>Id utilizator</th>
				<th>Nume</th>
				<th>Prenume</th>
				<th> Nume de utilizator</th>
				<th>Selectat</th>
				<th>Sterge utilizatorul</th>

			</tr>
			<?php

			$sr= 1;
			while( $row=mysqli_fetch_array($result)) {
				?>
			<tr>
			<form action="" method="post" role="form">
				<td><?php echo $sr;?></td>
				<td><?php echo $row['firstName'];?></td>
				<td><?php echo $row['lastName'];?></td>
				<td><?php echo $row['username'];?></td>

				
				<td>
					<input type="checkbox" name="keyToDelete" value="<?php echo $row['id'];?>" required></td>
				<td>
					<input type="submit" name="submitDelete" class="btnDelete">
				</td>
			</form>
		</tr>
		<?php $sr++;}
		?>
	</form>
		</table>
	</div>
	</body>
	</html>