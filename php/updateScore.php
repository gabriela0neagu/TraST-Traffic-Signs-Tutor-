<?php

	session_start();

	$newScore = intval($_GET['score']);
	$quizId = intval($_GET['id']);

  
	$currentUser_id = $_SESSION['ID'];

	$con = mysqli_connect('localhost','root','','trast');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}


//verificam daca quiz-ul a fost deja facut
	$querry = "SELECT taken FROM quizez WHERE userId ='$currentUser_id' AND quizId = '$quizId'";

	$result = mysqli_query($con, $querry);

	while ($row = mysqli_fetch_assoc($result))
	{
		$doneAlready = $row['taken'];
	} 

//doar daca acesta nu a fost deja facut, vom face update in tabele cu rezultatele obtinute
	if($doneAlready != 1){

	//adaugam progresul inregistrat in tabela quizez
		$querry = "UPDATE quizez SET score = '$newScore', taken = 1 WHERE userId ='$currentUser_id' AND quizId = '$quizId'";
	    if ($con->query($querry) != TRUE){
	    	echo "[quizez]: not updated";
	    }


	//preluam vechea valoare a scorului
		$querry="SELECT score FROM users WHERE id = '$currentUser_id' ";
		$result = mysqli_query($con,$querry);

		while($row = mysqli_fetch_assoc($result)) {
			$oldScore = $row['score'];
		}


	//adaugam noul scor obtinut la vechiul scor

		$sql="UPDATE users SET score = ('$oldScore' + '$newScore') WHERE id = '$currentUser_id'";

		if ($con->query($sql) != TRUE){
			echo "[users]: not updated";
			die();
		}

	//retinem in variabila de sesiune noul scor total

	    $querry="SELECT score FROM users WHERE id = '$currentUser_id' ";
		$result = mysqli_query($con,$querry);

		while($row = mysqli_fetch_assoc($result)) {
			$_SESSION["Score"] =  $row['score'];
		}

	}

	mysqli_close($con);

?>