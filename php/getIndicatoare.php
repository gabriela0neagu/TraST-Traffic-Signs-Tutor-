

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Indicatoare si marcaje</title>
    <link rel="stylesheet" href="style2.css">
    <script defer src="categorie.js"></script>
</head>
<body>

<nav class="slidemenu">

    <!-- Item 1 -->
    <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
    <label for="slide-item-1"><p class="icon">★</p><span><a href="index.html">Categorii permis </a></span></label>

    <!-- Item 2 -->
    <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
    <label for="slide-item-2"><p class="icon">★</p><span><a href="http://localhost/tw/curslegislatie1.html">Curs de legislatie </a></span></label>

    <!-- Item 3 -->
    <input type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>
    <label for="slide-item-3"><p class="icon">★</p><span><a href="indicatoaresimarcaje.html">Indicatoare si marcaje</a></span></label>

    <!-- Item 4 -->
    <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
    <label for="slide-item-4"><p class="icon">★</p><span><a href="chestionare.html">Chestionare DRPCIV </a></span></label>

    <div class="clear"></div>

    <!-- Bar -->
    <div class="slider">
        <div class="bar"></div>
    </div>
</nav>


</body>
</html>

<?php
$id = intval($_GET['id'])+1;

$con = mysqli_connect('localhost','root','','tw');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM indicatoare2 WHERE id='$id'";
$result = mysqli_query($con,$sql);

$row = mysqli_fetch_assoc($result);
$genericdescription = $row['descriere'];
echo $genericdescription;
//$infoobj=new \stdClass();
//$infoobj->descriere = $genericdescription;
?>




