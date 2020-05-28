<?php

$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$id_user = intval($_GET['id']);

	$sql="UPDATE users SET admin=1 WHERE id ='$id_user'";

	if ($con->query($sql) != TRUE){
	    	echo "[users]: not updated admin";
	    }
	else
		echo "done";
	mysqli_close($con);

?>