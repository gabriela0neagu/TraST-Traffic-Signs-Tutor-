<?php

session_start();

if(isset($_SESSION['ID']))
	echo "logged";
else
	echo "nobody";

?>