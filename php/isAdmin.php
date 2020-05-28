<?php

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$id_user = intval($_GET['id']);

	$sql="SELECT * FROM users WHERE id ='$id_user'";

	$result = mysqli_query($con,$sql);

	$users = array();

	while($row = mysqli_fetch_assoc($result)) {
		echo $row['admin'];
	}

	mysqli_close($con);
	?>
