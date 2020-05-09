<?php
function component($titlu, $descriere, $img){
    $element = "

            <div class=\"internalcontainerL\">
                <form action=\"index.php\" method=\"post\">
                        <h1>$titlu</h1>
                        <div>
                            <img src=\"$img\" alt=\"Image1\" class=\"dasimages\">
                        </div>
                        <h2>$descriere</h2>
                        <button type=\"submit\" class=\"btn btn-warning my-3\" name=\"add\">vezi indicator</button> 
                  </form>
             </div>
            
    ";
    echo $element;
}


