<?php
$id = intval($_GET['id'])+1;

$con = mysqli_connect('localhost','root','','tw');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM indicatoare_si_marcaje WHERE id='$id'";
$result = mysqli_query($con,$sql);

$row = mysqli_fetch_assoc($result);
$genericdescription = $row['descriere'];
echo $genericdescription;
//$infoobj=new \stdClass();
//$infoobj->descriere = $genericdescription;
?>




