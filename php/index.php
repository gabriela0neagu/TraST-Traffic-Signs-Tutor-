<?php

require_once ('../php/CreateDb.php');
require_once ('../php/component.php');


// create instance of Createdb class
$database = new CreateDb( "tw", "indicatoare_si_marcaje");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Indicatoare si marcaje</title>
    <link rel="stylesheet" href="../css/style2.css">
    <script defer src="../javascript/categorie.js"></script>
</head>
<body>

<nav class="slidemenu">

    <!-- Item 1 -->
    <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
  <label for="slide-item-1"><p class="icon">★</p><span><a href="../html/Trast.html">Acasa</a></span></label>
  
  <!-- Item 2 -->
  <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
  <label for="slide-item-2"><p class="icon">★</p><span><a href="../html/curslegislatie1.html">Curs de legislatie </a></span></label>

<!-- Item 3 -->
  <input type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>
  <label for="slide-item-3"><p class="icon">★</p><span><a href="../php/index.php">Indicatoare si marcaje</a></span></label>

<!-- Item 4 -->
  <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
  <label for="slide-item-4"><p class="icon">★</p><span><a href="../html/Quizez.html">Chestionare DRPCIV </a></span></label>

  <!-- Item 5 -->
  <input type="radio" name="slideItem" id="slide-item-5" class="slide-toggle"/>
  <label for="slide-item-5"><p class="icon">★</p><span><a href="../html/Categorii.html">Categorii permis  </a></span></label>

  <!-- Item 6 -->
  <input type="radio" name="slideItem" id="slide-item-6" class="slide-toggle"/>
  <label for="slide-item-6"><p class="icon">★</p><span><a href="../html/Leaderboard.html">Leader board </a></span></label>

    <div class="clear"></div>

    <!-- Bar -->
    <div class="slider">
        <div class="bar"></div>
    </div>
</nav>
    <div class="container">
         <?php
            $result=$database->getData();
             while ($row=mysqli_fetch_assoc($result)){
              component($row['titlu'],$row['img']);
            }
        ?>
    </div>

<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

</body>
</html>
