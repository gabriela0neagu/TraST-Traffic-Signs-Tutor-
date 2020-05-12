 
<?php
$q = intval($_GET['q'])+1;


$con = mysqli_connect('localhost','root','','curslegislatie');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM curspreventiv WHERE  id='".$q."'";

$result = mysqli_query($con,$sql);
 $obj=new \stdClass();
 //$imag==new \stdClass();
while($row = mysqli_fetch_array($result)) {
   $obj->id=$row['id'] ;
    $obj->title= $row['titlu'] ;
    $obj->continut = $row['continut'] ;
    $poze=array();
    $descrieri=array();
   for($i=1;$i<= $row["contor-poze"];$i++)
   { $poze[]=$row["poza".$i];
     $descrieri[]=$row["descriere".$i];
   }
   $obj->vector_poze=$poze;
   $obj->vector_descrieri=$descrieri;
    
   }

  
echo json_encode($obj, JSON_PRETTY_PRINT);
//echo json_encode($imag, JSON_PRETTY_PRINT);
//var_dump(json_encode($obj, true));
mysqli_close($con);
?>
