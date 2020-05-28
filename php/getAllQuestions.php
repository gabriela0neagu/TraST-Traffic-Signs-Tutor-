<?php

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$sql="SELECT * FROM questions";

	$result = mysqli_query($con,$sql);

	$questions = array();

	while($row = mysqli_fetch_assoc($result)) {
		$questionObj = new \stdClass();
		$questionObj->id = $row['id'];
		$questionObj->question = $row['question'];
		$questionObj->answ1= $row['answer1'];
		$questionObj->answ2 = $row['answer2'];
		$questionObj->answ3 = $row['answer3'];
		$questionObj->category = $row['category'];
		$questionObj->correct = $row['correctAnswer'];

	    $questions[]=$questionObj;
	}

	echo json_encode($questions, JSON_PRETTY_PRINT);

	mysqli_close($con);


?>