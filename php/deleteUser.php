<?php

$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$id_user = intval($_GET['id']);

	$sql="DELETE FROM users WHERE id ='$id_user'";

	if ($con->query($sql) != TRUE){
	    	echo "[users]: not deleted user";
	    }
	else echo "done";
	mysqli_close($con);

?>