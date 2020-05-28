<?php

$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$id_question = intval($_GET['id']);

	$sql="DELETE FROM questions WHERE id ='$id_question'";

	if ($con->query($sql) != TRUE){
	    	echo "[questions]: not deleted question";
	    }
	else echo "done";
	mysqli_close($con);

?>