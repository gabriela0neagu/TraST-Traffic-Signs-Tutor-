<?php

$con = mysqli_connect('localhost','root','','trast');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM users ORDER BY score DESC";

$result = mysqli_query($con,$sql);

$users = array();

while($row = mysqli_fetch_assoc($result)) {
	$userObj=new \stdClass();
	$userObj->username = $row['username'];
	$userObj->score= $row['score'];
    $users[]=$userObj;
}

echo json_encode($users, JSON_PRETTY_PRINT);

mysqli_close($con);
?>