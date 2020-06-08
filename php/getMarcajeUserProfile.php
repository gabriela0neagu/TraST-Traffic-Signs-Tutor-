<?php

session_start();

 $con = mysqli_connect('localhost','root','','tw');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql = "SELECT * FROM indicatoare_si_marcaje WHERE titlu LIKE '%marcaje%'";

$result = mysqli_query($con,$sql);

$marcaje = array();

while($row = mysqli_fetch_assoc($result)) {
    $marcaje[] = $row['id']; 
}
mysqli_close($con);

$con = mysqli_connect('localhost','root','','trast');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$currentUser_id= $_GET['id'];

$sql = "SELECT COALESCE(SUM(visited), 0) AS sum, COUNT(id) AS total FROM signs WHERE userId =$currentUser_id AND category IN (" . 
         implode(',', array_map('intval', $marcaje)) . ")";

$result = mysqli_query($con,$sql);

$marcajeObj=new \stdClass();
while($row = mysqli_fetch_assoc($result)) {
    $marcajeObj->visited = $row['sum'];
    $marcajeObj->total = $row['total']; 
}


$sql = "SELECT COALESCE(SUM(visited), 0) AS sum, COUNT(id) AS total FROM signs WHERE userId =$currentUser_id AND category NOT IN (" . 
         implode(',', array_map('intval', $marcaje)) . ")";

$result = mysqli_query($con,$sql);

$indicatoareObj=new \stdClass();

while($row = mysqli_fetch_assoc($result)) {
	if($row['sum'] == NULL)
		$marcajeObj->visited=0;
    $indicatoareObj->visited = $row['sum']; 
    $indicatoareObj->total = $row['total'];
}

$obj=new \stdClass();
$obj->indicatoare = $indicatoareObj;
$obj->marcaje = $marcajeObj;

echo json_encode($obj, JSON_PRETTY_PRINT);

mysqli_close($con);

?>