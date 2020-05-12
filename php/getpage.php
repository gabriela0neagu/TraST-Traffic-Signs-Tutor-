<?php
$q = intval($_GET['q'])+1;


$con = mysqli_connect('localhost','root','','tw');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM indicatoare2 WHERE  id='".$q."'";
$result = mysqli_query($con,$sql);
 $obj=new \stdClass();
while($row = mysqli_fetch_array($result)) {
   
    $obj->title= $row['titlu'] ;
    $obj->continut = $row['descriere'] ;
 
   }
echo json_encode($obj, JSON_PRETTY_PRINT);
//var_dump(json_encode($obj, true));
mysqli_close($con);
?>

