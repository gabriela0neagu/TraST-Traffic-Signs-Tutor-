<?php
function indicator($titlu, $img, $descriere)
{
    $element = "
                <form action=\"getIndicator.php\" method=\"post\">
                       <div class=\"box\">
                        <div class=\"imgBx\">
                          <img src=\"$img\" alt=\"Image1\" >
                        </div>
                        <div class=\"content\">
                         <h2>$titlu</h2>
                        <p>$descriere</p>
                        </div>
                       </div> 
                  </form>
    ";
    echo $element;
}


