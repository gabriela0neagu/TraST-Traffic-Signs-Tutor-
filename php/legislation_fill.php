<?php

$id=6;
 
$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}
$capitol="prim_ajutor";

	for($i=1; $i<= 4 ; $i++){
			      	 $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$id', '$capitol' , '$i')";
			      	 if ($con->query($insertQuerry) != TRUE)
			      	 	echo "[quizez] insert failed";
			      }


$capitol="mecanica_auto";

	for($i=1; $i<= 14 ; $i++){
			      	 $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$id', '$capitol' , '$i')";
			      	 if ($con->query($insertQuerry) != TRUE)
			      	 	echo "[quizez] insert failed";
			      }


$capitol="conducere_ecologica";

	for($i=1; $i<= 2 ; $i++){
			      	 $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$id', '$capitol' , '$i')";
			      	 if ($con->query($insertQuerry) != TRUE)
			      	 	echo "[quizez] insert failed";
			      }



$capitol="conduita_preventiva";

	for($i=1; $i<= 10 ; $i++){
			      	 $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$id', '$capitol' , '$i')";
			      	 if ($con->query($insertQuerry) != TRUE)
			      	 	echo "[quizez] insert failed";
			      }


?>