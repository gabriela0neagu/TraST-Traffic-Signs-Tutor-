<?php

$id = $_GET['id'];
$question = $_GET['q'];
$answer1 =$_GET['a1'];
$answer2 = $_GET['a2'];
$answer3 = $_GET['a3'];
$category = $_GET['cat'];
$correctAnswer = $_GET['cor'];


$con = mysqli_connect('localhost','root','','trast');
if ($con) {
	echo"Success";}
	else{
    die('Could not connect: ' . mysqli_error($con));}


$sql= "UPDATE questions SET question='$question', answer1='$answer1', answer2='$answer2', answer3='$answer3', category='$category', correctAnswer= '$correctAnswer' WHERE id='$id'";
       if(!mysqli_query($con,$sql))
      {
         echo "ERROR: Could not able to execute $sql";
      }
 	
 	echo $sql;


?>      