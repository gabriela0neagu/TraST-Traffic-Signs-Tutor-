<?php

$web_url = "http://" . $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];

$str = "<?xml version='1.0' ?>";
$str .= "<rss version='2.0'>";
	$str .= "<channel>";
		$str .= "<title> Trast </title>";
		$str .= "<description> Clasament </description>";
		$str .= "<language> ro </language>";
		$str .= "<link> $web_url </link>";

		$con = mysqli_connect('localhost','root','','trast');
		$result = mysqli_query($con, "SELECT * FROM users ORDER BY score DESC");

		while ($row = mysqli_fetch_object($result))
		{
			$str .= "<item>";
				$str .= "<title>" . $row->username . "</title>";
				$str .= "<description>". $row->score ."</description>";
				$str .= "<link>". "localhost/test/php/profile.php?id=" . $row->id . "</link>";
			$str .= "</item>";

		}
	$str .= "</channel>";

$str .= "</rss>";

file_put_contents("rss.xml", $str);

header("Location: rss.xml");
echo "Done";

?>