<?php

session_start();

	$categorie= intval($_GET['categorie']) + 1;

	$currentUser_id = $_SESSION['ID'];

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$querry = "UPDATE signs SET visited = 1 WHERE userId ='$currentUser_id' AND category = '$categorie'";
	echo $querry;
	    if ($con->query($querry) != TRUE){
	    	echo "[signs]: not updated";
	    }
	    else echo $querry;

?>