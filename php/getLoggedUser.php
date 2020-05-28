<?php

	session_start();
	$current_user = $_SESSION['ID'];

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$sql="SELECT * FROM users WHERE id='$current_user'";

	$result = mysqli_query($con,$sql);

	$row = mysqli_fetch_assoc($result);
	$loggedUser = new \stdClass();
	$loggedUser->username = $row['username'];
	$loggedUser->firstName = $row['firstName'];
	$loggedUser->lastName = $row['lastName'];
	$loggedUser->score = $row['score'];
	$loggedUser->email = $row['email'];
	$loggedUser->isAdmin = $row['admin'];

	echo json_encode($loggedUser, JSON_PRETTY_PRINT);

	mysqli_close($con);
?>