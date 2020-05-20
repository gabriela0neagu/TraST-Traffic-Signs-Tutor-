<?php

   
$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	for($i=1; $i<=7; $i++)
		for($j=1; $j<=20; $j++)
        {
        	$insertQuerry = "INSERT INTO signs (userId, category) VALUES ('$i', '$j')";
			      	 if ($con->query($insertQuerry) != TRUE)
			      	 	echo "[signs] insert failed";
        }
?>