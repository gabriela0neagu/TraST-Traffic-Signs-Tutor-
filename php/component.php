<?php
function component($titlu, $img){
    $element = "

                <form action=\"../php/index.php\" method=\"post\">

                       <div class=\"card\">
                         <div class=\"face face1\">
                          <div class=\"content\">
                            <img src=\"$img\">
                            <h3>$titlu</h3>
                          </div>
                          </div>

                         <div class=\"face face2\">
                          <div class=\"content\">
                            <button type=\"button\" class=\"buton-indicator\" name=\"add\">vezi explicatia aici</button> 
                          </div>
                         </div>
                       </div>
                  </form>
            
    ";
    echo $element;
}


