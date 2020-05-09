<?php

require_once ('php/CreateDb.php');
require_once ('./php/component.php');


// create instance of Createdb class
$database = new CreateDb( "tw", "indicatoareavertizare");

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
</head>
<body>


<nav class="slidemenu">

    <!-- Item 1 -->
    <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
    <label for="slide-item-1"><p class="icon">★</p><span><a href="index.html">Categorii permis </a></span></label>

    <!-- Item 2 -->
    <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
    <label for="slide-item-2"><p class="icon">★</p><span><a href="curslegislatie1.html">Curs de legislatie </a></span></label>

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
    <div class="side">
        <h2>Legislatia rutiera: </h2>

        <a href="cursurimecanica.html" class="btn"> Curs de mecanica</a>
        <br>
        <br>
        <a href="cursuriajutor.html" class="btn"> Curs de prim-ajutor</a>
        <br>
        <br>
        <a href="cursuriecologic.html" class="btn"> Conducerea ecologica
        </a>
        <br>
        <br>
        <a href="cursuripreventiv.html" class="btn"> Conduita preventiva</a>
        <br></div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    </p>
    <div class='continut'>
        <p>Va prezentam o sursa completa de informatie pentru toti cei interesati de eventualele probleme sau defectiuni ce pot aparea la masini, site-ul oferind sprijin in depistarea acestora inainte de a merge la service.</p>
        <p>Pe aceasta pagina va punem la dispozitie informatii despre rolul diferitelor parti componente ale autovehiculelor, despre modul de functionare al acestora dar si despre eventualele defectiuni ce pot aparea datorita uzurii sau a altor factori externi (ploaie, inghet, etc). De asemenea, tot aici gasiti si ce masuri preventive sau de remediere puteti lua in cazul aparitiei anumitor simptome la masina proprie. Indiferent ca aveti probleme cu ambreiajul, cu cutia de viteze, cu sistemul de directie sau chiar cu modul in care functioneaza motorul, va oferim informatii generale despre cele mai frecvente defectiuni ce pot aparea precum si despre cauzele acestora.</p>
        <p>Informatia de pe site-ul nostru vrea sa aiba rolul unui curs de mecanica auto pentru proaspetii soferi care nu s-au confruntat pana in prezent cu astfel de probleme.</p>
        <p>Citind aceasta informatie veti putea depista din timp eventualele probleme ce pot aparea sau chiar veti putea evita aparitia unor astfel de probleme prin cateva actiuni preventive simple de genul inlocuirea lichidelor si a filtrelor la termenele recomandate de producatori, verificarea gradului de uzura al diferitelor componente (ex. placute si discuri de frana) sau chiar verificarea presiunii din anvelope (o presiune prea mare sau prea mica putand duce la uzura prematura a acestora).</p>

        <br>
        <br>
     <div class="holdingcontainer">

                <?php
                $result=$database->getData();
                while ($row=mysqli_fetch_assoc($result)){
                    component($row['titlu'],$row['descriere'],$row['img']);
                }
                ?>

        </div>

</div>
</div>

</body>
</html>
