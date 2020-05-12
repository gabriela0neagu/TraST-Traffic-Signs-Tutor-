<?php
$tabel = $_GET['nume'];
$nrIndicator = intval($_GET['nr']);
$con = mysqli_connect('localhost','root','','tw');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM $tabel WHERE id='$nrIndicator'";
$result = mysqli_query($con,$sql);

while ($row = mysqli_fetch_assoc($result))
    $descriere=$row['descriere'];

echo $descriere;