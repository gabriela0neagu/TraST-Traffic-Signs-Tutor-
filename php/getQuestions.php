<?php
$id = intval($_GET['id'])+1;

$con = mysqli_connect('localhost','root','','trast');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM questions WHERE id BETWEEN (10*('$id'-1)+1) AND ('$id' * 10)";
$result = mysqli_query($con,$sql);

$setOfQuestions = array();

while($row = mysqli_fetch_assoc($result)) {
	$answers = array();
	$answer1Obj=new \stdClass();
  $answer2Obj=new \stdClass();
  $answer3Obj=new \stdClass();
  $jsonObject=new \stdClass();

   $answer1 = $row['answer1'];
   $answer1Obj->text = $answer1;
   $answer2 = $row['answer2'];
   $answer2Obj->text = $answer2;
   $answer3 = $row['answer3'];
   $answer3Obj->text = $answer3;
   $correct_answer=$row['correctAnswer'];

   if($answer1 == $correct_answer)
   	    $answer1Obj->correct= True;
   	else
   		$answer1Obj->correct= False;

  
   if($answer2 == $correct_answer)
   	    $answer2Obj->correct= True;
   	else
   		$answer2Obj->correct= False;


   if($answer3 == $correct_answer)
   	    $answer3Obj->correct= True;
   	else
   		$answer3Obj->correct= False;


   $answers[] = $answer1Obj;
   $answers[] = $answer2Obj;
   $answers[] = $answer3Obj;

   
   $jsonObject->question = $row['question'];
   $jsonObject->answers = $answers;
   
   $setOfQuestions[]= $jsonObject;
}


echo json_encode($setOfQuestions, JSON_PRETTY_PRINT);

mysqli_close($con);
?>