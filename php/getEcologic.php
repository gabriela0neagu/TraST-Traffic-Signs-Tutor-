<?php


$capitol = intval($_GET['id']);


$con = mysqli_connect('localhost','root','','curslegislatie');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM cursecologie WHERE id='".$capitol."'";

$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
	echo $row['text'];
}


?>