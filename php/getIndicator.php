<?php
require_once ('../php/indicator.php');
require_once ('../php/CreateDb.php');
$tabel = $_GET['name'];
$nrIndicator = intval($_GET['nr']);
$database = new CreateDb( "tw", $tabel);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Indicator</title>
    <link rel="stylesheet" href="../css/indicator.css">
</head>

<body>

    <?php
    $result=$database->getDataById($nrIndicator);
    $row=mysqli_fetch_assoc($result);
    indicator($row['titlu'],$row['img'],$row['descriere']);
    ?>


</body>

</html>