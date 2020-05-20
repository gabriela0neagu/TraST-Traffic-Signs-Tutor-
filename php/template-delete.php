
<!DOCTYPE html>
<html lang="ro">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#333641">
	<title>Stergere intrebari</title>
	<link rel="stylesheet" type="text/css" href="template-delete.css">
</head>
<body>
	<?php
	 $con= mysqli_connect('localhost','root','','trast') or die('Could not connect: ' . mysqli_error($con));
	 $sql="select *from questions"; 
	 $result=mysqli_query($con,$sql);
	 if(!$result)
      {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
}
?>

<form class="chenar">
<h1> Sterge intrebare</h1>

	<div class="tabel">

<?php
if(isset($_POST['submitDelete'])){
	$key=$_POST['keyToDelete'];

	//vf daca ce vrem sa stergem exista
	$check=mysqli_query($con,"select *from questions where id=$key") or die("not found".mysqli_error($con));
	if(mysqli_num_rows($check)>0){
		//inseamna ca exista si trb sters
		$sqlDelete=mysqli_query($con,"DELETE FROM questions WHERE id ='$key'")
		or die("not deleted".mysqli_error($con));?>
	
		<div class="alert-succes">
			<p>Inregistrare stearsa</p>
		</div>

		<?php  }
		else{  
			              ?>
			<div class="alert-warning">
			<p>Nu exista aceasta inregistrare</p>
		</div>

		<?php }
	}
else if(isset($_POST['submitEdit'])){
	$questionpage =$_POST['intrebare'];
$answer1page =$_POST['raspuns1'];
$answer2page =$_POST['raspuns2'];
$answer3page =$_POST['raspuns3'];
$categorypage =$_POST['categorie'];
$correctAnswerpage =$_POST['raspunsCorect'];
	$key1=$_POST['keyToEdit'];
	//vf daca ce vrem sa editam exista
	$check=mysqli_query($con,"select *from questions where id=$key") or die("not found".mysqli_error($con));
	if(mysqli_num_rows($check)>0){
		//inseamna ca exista si trb editat
		$sqlEdit=mysqli_query($con,"UPDATE set questions SET question='$questionpage', answer1='$answer1page', answer2='$answer2page', answer3='$answer3page', category='$categorypage', correctAnswer='correctAnswerpage' where id='$key1'")
		or die("not deleted".mysqli_error($con));?>
	
		<div class="alert-succes">
			<p>Inregistrare editata</p>
		</div>

		<?php  }
		else{  
			              ?>
			<div class="alert-warning">
			<p>Nu exista aceasta  inregistrare</p>
		</div>
<?php }
}
?>


<br>
<br>


		<table class="table-border">
			<tr>
                <th>Id intrebare</th>
				<th>Intrebare</th>
				<th>Raspunsul 1</th>
				<th>Raspunsul 2</th>
				<th>Raspunsul 3</th>
				<th>Categorie </th>
				<th>Raspunsul corect</th>
				<th>Selecteaza pentru a sterge</th>
				<th>Editeaza</th>
				<th>Sterge intrebarea</th>

			</tr>
			<?php

			$sr= 1;
			while( $row=mysqli_fetch_array($result)) {
				?>
			<tr>
			<form action="" method="post" role="form">
				<td><?php echo $sr;?></td>
				<td><?php echo $row['question'];?></td>
				<td><?php echo $row['answer1'];?></td>
				<td><?php echo $row['answer2'];?></td>
				<td><?php echo $row['answer3'];?></td>
				<td><?php echo $row['category'];?></td>
				<td><?php echo $row['correctAnswer'];?></td>
				<td>
					<input type="checkbox" name="keyToDelete" value="<?php echo $row['id'];?>" required></td>
					<td><input type="checkbox" name="keyToEdit" value="<?php echo $row['id'];?>" required></td>
				<td>
					<input type="submit" name="submitDelete" class="btnDelete">
				</td>
			</form>
		</tr>
		<?php $sr++;}
		?>
		</table>

	</div>
</form>
	</body>
	</html>