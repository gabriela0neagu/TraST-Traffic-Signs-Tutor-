<?php
	session_start();

	$loggedUser = $_SESSION['ID'];

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$sql="SELECT * FROM users WHERE id='$loggedUser' ORDER BY score DESC ";

	$result = mysqli_query($con,$sql);
	$row = mysqli_fetch_assoc($result);

	echo $row['username'];

	mysqli_close($con); 

?>