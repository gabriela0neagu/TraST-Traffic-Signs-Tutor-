<?php
session_start();
unset($_SESSION['ID']);
unset($_SESSION["Username"]);
header("Location:../html/LogIn.html");
?>