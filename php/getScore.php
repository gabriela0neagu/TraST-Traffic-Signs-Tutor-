<?php

	session_start();

	$currentUser_id = $_SESSION['ID'];
	$quizId = intval($_GET['idQuiz']);

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}


	$querry = "SELECT taken FROM quizez WHERE userId ='$currentUser_id' AND quizId = '$quizId'";

	$result = mysqli_query($con, $querry);

	while ($row = mysqli_fetch_assoc($result)){
		$doneAlready = $row['taken'];
	} 

	if($doneAlready == 0){
		echo 1;
	}
	else{
		$querry = "SELECT score FROM quizez WHERE userId ='$currentUser_id' AND quizId = '$quizId'" ;
		$result = mysqli_query($con,$querry);

		while($row = mysqli_fetch_assoc($result)) {
			$score= $row['score'];
		}
		echo $score;
	}

mysqli_close($con);

?>