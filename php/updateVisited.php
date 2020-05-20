<?php

session_start();

	$capitol = intval($_GET['id']) + 1;
	$nume_curs = $_GET['curs'];


	$currentUser_id = $_SESSION['ID'];

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$querry = "UPDATE legislation SET visited = 1 WHERE userId ='$currentUser_id' AND capitol = '$capitol' AND nume_curs = '$nume_curs'";
	echo $querry;
	    if ($con->query($querry) != TRUE){
	    	echo "[legislation]: not updated";
	    }
	    else echo $querry;

?>