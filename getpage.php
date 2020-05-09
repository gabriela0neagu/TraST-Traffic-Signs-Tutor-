 
<?php
$q = intval($_GET['q'])+1;


$con = mysqli_connect('localhost','root','','curslegislatie');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM cursmecanica WHERE  id='".$q."'";

$result = mysqli_query($con,$sql);
 $obj=new \stdClass();
while($row = mysqli_fetch_array($result)) {
   
    $obj->title= $row['titlu'] ;
    $obj->continut = $row['continut'] ;
    //$obj->poz1 = $row['poza1'] ;
    //$obj->poz2 = $row['poza2'] ;
    //$obj->poz3 = $row['poza3'] ;
    
 
   }
echo json_encode($obj, JSON_PRETTY_PRINT);
//var_dump(json_encode($obj, true));
mysqli_close($con);
?>

