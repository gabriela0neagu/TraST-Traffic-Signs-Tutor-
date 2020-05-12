<?php
$tabel = $_GET['nume'];
$con = mysqli_connect('localhost','root','','tw');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
$sql="SELECT COUNT(*) as 'numarind' FROM $tabel ";
$result = mysqli_query($con,$sql);

while ($row = mysqli_fetch_assoc($result))
    $numar=$row['numarind'];

echo $numar;





