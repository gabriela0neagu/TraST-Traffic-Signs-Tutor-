<?php
function indicator($titlu, $img, $descriere)
{
    $element = "
            <div class=\"internalcontainerL\">
                <form action=\"getIndicator.php\" method=\"post\">
                        <h1>$titlu</h1>
                        <div>
                            <img src=\"$img\" alt=\"Image1\" class=\"dasimages\" >
                        </div>
                        <div>
                        <p>$descriere</p>
                        </div>
                  </form>
             </div>
    ";
    echo $element;
}


