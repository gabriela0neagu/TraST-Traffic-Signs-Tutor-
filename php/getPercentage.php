<?php

session_start();

	$nume_curs = $_GET['curs'];
	$currentUser_id = $_SESSION['ID'];

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$sql = "SELECT SUM(visited) AS sum FROM legislation WHERE userId ='$currentUser_id' AND nume_curs = '$nume_curs'";
	$result = mysqli_query($con,$sql);
	$row = mysqli_fetch_assoc($result);
	 echo $row['sum'];
?>