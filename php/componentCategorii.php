<?php

function component($titlu, $img){
    $element = "

            <div class=\"internalcontainerL\">
                <form action=\"indexCategorii.php\" method=\"post\">
                        <h1>$titlu</h1>
                        <div>
                            <img src=\"$img\" alt=\"Image1\" class=\"dasimages\">
                        </div>
                         <button  type=\"button\" class=\"open-info\">Vezi mai mult</button> 
                  </form>
             </div>
            
    ";
    echo $element;
}
