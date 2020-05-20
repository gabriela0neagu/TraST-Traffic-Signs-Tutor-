<?php
session_start();
$_SESSION["errors"]=0;

$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');

if (!empty($username)){
	if (!empty($password)){
		$host = "localhost";
		$dbusername = "root";
		$dbpassword = "";
		$dbname = "trast";
// Create connection
		$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
		if (mysqli_connect_error()){
			die('Connect Error ('. mysqli_connect_errno() .') '
				. mysqli_connect_error());
		}
		else{

			$sql="SELECT * FROM users WHERE username='$username'";

			$result=mysqli_query($conn, $sql);
			     
			$count=mysqli_num_rows($result);

			if($count > 0){
			      $data = mysqli_fetch_array ($result);
			      	$_SESSION['ID'] = $data["id"];
			        $_SESSION["FirstName"] = $data["firstName"];
			        $_SESSION["LastName"] = $data["lastName"];
			        $_SESSION["Username"] = $data["username"];
			        $_SESSION["Email"] = $data ["email"];
			        $_SESSION["Score"] = $data ["score"];
			        if(!password_verify($password, $data['password']))
			        {
			        	$_SESSION["errors"]=1;
			        	header('location:../html/LogIn.html');
			        	die();
			        }
			}
			else {
				 $_SESSION["errors"] = 1;
                 header('location:../html/LogIn.html');
                 die();
			}

			if(isset($_SESSION['ID'])) {
			    header('location:../html/Profile.html');
			    die();
			}
			$conn->close();
			//header('location:LogIn.html');

		}

	}
	
}
?>