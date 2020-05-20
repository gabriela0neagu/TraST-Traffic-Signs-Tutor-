<?php

//get the post variables on the page
$questionpage =$_POST['intrebare'];
$answer1page =$_POST['raspuns1'];
$answer2page =$_POST['raspuns2'];
$answer3page =$_POST['raspuns3'];
$categorypage =$_POST['categorie'];
$correctAnswerpage =$_POST['raspunsCorect'];

$con = mysqli_connect('localhost','root','','trast');
if ($con) {
	echo"Success";}
	else{
    die('Could not connect: ' . mysqli_error($con));}


$sql= "INSERT INTO questions (question, answer1, answer2, answer3, category, correctAnswer) VALUES('$questionpage','$answer1page','$answer2page','$answer3page','$categorypage','$correctAnswerpage')";
       if(!mysqli_query($con,$sql))
      {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
       
       
?>