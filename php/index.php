<?php

require_once ('php/CreateDb.php');
require_once ('./php/component.php');


// create instance of Createdb class
$database = new CreateDb( "tw", "indicatoare_si_marcaje");

?>

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


<div class="row">
    <div class="cuprins">

        <h2>Indicatoare si marcaje </h2>
        <p>
            <a href="indicatoare-de-avertizare.html" class="btn"> Indicatoare de avertizare</a>
            <br>
            <br>
            <a href="indicatoare-de-prioritate.html" class="btn"> Indicatoare de prioritate</a>
            <br>
            <br>
            <a href="indicatoare-de-interzicere-sau-restrictie.html" class="btn"> Indicatoare de interzicere sau restricție</a>
            <br>
            <br>
            <a href="indicatoare-de-obligare.html" class="btn"> Indicatoare de obligare</a>
            <br>
            <br>
            <a href="indicatoare-de-orientare.html" class="btn"> Indicatoare de orientare</a>
            <br>
            <br>
            <a href="indicatoare-de-informare.html" class="btn"> Indicatoare de informare</a>
            <br>
            <br>
            <a href="indicatoare-de-informare-turistica.html" class="btn"> Indicatoare de informare turistică</a>
            <br>
            <br>
            <a href="panouri-aditionale.html" class="btn"> Panouri adiționale</a>
            <br>
            <br>
            <a href="semafoare-pentru-dirijarea-circulatiei.html" class="btn"> Semafoare pentru dirijarea circulației</a>
            <br>
            <br>
            <a href="semnale-luminoase-la-trecerile-la-nivel-cu-calea-ferata.html" class="btn"> Semnale luminoase la trecerile la nivel cu calea ferată</a>
            <br>
            <br>
            <a href="dispozitive-luminoase-pentru-dirijarea-circulatiei-pe-benzi.html" class="btn"> Dispozitive luminoase pentru dirijarea circulației pe benzi</a>
            <br>
            <br>
            <a href="marcaje-transversale.html" class="btn"> Marcaje transversale</a>
            <br>
            <br>
            <a href="marcaje-diverse.html" class="btn"> Marcaje diverse</a>
            <br>
            <br>
            <a href="marcaje-temporare-pentru-semnalizarea-lucrarilor-in-zona-drumului-public.html" class="btn">  Marcaje temporare pentru semnalizarea lucrărilor în zona drumului public</a>
            <br>
            <br>
            <a href="marcaje-laterale.html" class="btn"> Marcaje laterale</a>
            <br>
            <br>
            <a href="indicatoare-rutiere-temporare.html" class="btn"> Indicatoare rutiere temporare</a>
            <br>
            <br>
            <a href="mijloace-de-semnalizare-a-lucrarilor.html" class="btn"> Mijloace de semnalizare a lucrărilor</a>
            <br>
            <br>
            <a href="indicator-kilometric.html" class="btn"> Indicator kilometric</a>
            <br>
            <br>
            <a href="indicator-hectometric.html" class="btn"> Indicator hectometric</a>
            <br>
            <br>
        </p>
    </div>

        <div class="holdingcontainer">

                <?php
                $result=$database->getData();
                while ($row=mysqli_fetch_assoc($result)){
                    component($row['titlu'],$row['img']);
                }
                ?>

        </div>



</body>
</html>
