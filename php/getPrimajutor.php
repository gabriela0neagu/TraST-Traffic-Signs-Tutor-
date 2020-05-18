<?php

$capitol = intval($_GET['id']);


$con = mysqli_connect('localhost','root','','curslegislatie');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM cursprimajutor WHERE id='".$capitol."'";


$result = mysqli_query($con,$sql);
$obj=new \stdClass();
while($row = mysqli_fetch_array($result)) {
    $paragrafe=array();
    $poze=array();
    $descriere=array();
    	$paragrafe[]=$row['paragraf1'];
    	$paragrafe[]=$row['paragraf2'];
    	$poze[]=$row['poza1'];
    	$poze[]=$row['poza2'];
        $descriere[]=$row['descriere_poza1'];
        $descriere[]=$row['descriere_poza2'];
    $obj->text=$paragrafe;
    $obj->poze=$poze;
    $obj->descriere=$descriere;
   }

  
echo json_encode($obj, JSON_PRETTY_PRINT);

?>