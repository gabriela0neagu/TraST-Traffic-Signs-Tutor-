<?php
session_start();
$firstName = filter_input(INPUT_POST, 'firstname');
$lastName = filter_input(INPUT_POST, 'lastname');
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
$email = filter_input(INPUT_POST, 'email');


$hash = password_hash($password, PASSWORD_BCRYPT); 

if(!empty($firstName) || !empty($lastName) || !empty($username) || !empty($password) || !empty($email)){
	$host = "localhost";
	$dbusername = "root";
	$dbpassword = "";
	$dbname = "trast";

	$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
	if (mysqli_connect_error()){
			die('Connect Error ('. mysqli_connect_errno() .') '
				. mysqli_connect_error());
		}
		else{
			$sql = "INSERT INTO users (email, firstName, lastName, username, password, score) VALUES ('$email', '$firstName', '$lastName', '$username', '$hash', 0)";

			if ($conn->query($sql) == TRUE){

				$_SESSION['Username']=$_POST['username'];
				$_SESSION['FirstName']=$firstName;
				$_SESSION['LastName']=$lastName;
				$_SESSION['Email']=$email;

			$querry="SELECT * FROM users WHERE username='$username'";

			$res=mysqli_query($conn, $querry);
			     
			$cont=mysqli_num_rows($res);

			if($cont > 0){
			      $data = mysqli_fetch_array ($res);
			      $_SESSION['ID'] = $data["id"];
			      $_SESSION['Score'] = $data["score"];
			      $currentId = $_SESSION['ID'];

			      for($i=1; $i<= 30 ; $i++){
			      	 $insertQuerry = "INSERT INTO quizez (userId, quizId) VALUES ('$currentId', '$i')";
			      	 if ($conn->query($insertQuerry) != TRUE)
			      	 	echo "[quizez] insert failed";
			      }


			      $capitol="prim_ajutor";

				  for($i=1; $i<= 4 ; $i++){
			      	 $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$currentId', '$capitol' , '$i')";
			      	 if ($conn->query($insertQuerry) != TRUE)
			      	 	echo "[legislation] insert failed";
			      }


				  $capitol="mecanica_auto";

				  for($i=1; $i<= 14 ; $i++){
				     $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$currentId', '$capitol' , '$i')";
			      	 if ($conn->query($insertQuerry) != TRUE)
			      	 	echo "[legislation] insert failed";
			      }


				   $capitol="conducere_ecologica";

				    for($i=1; $i<= 2 ; $i++){
			      	  $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$currentId', '$capitol' , '$i')";
			      	 if ($conn->query($insertQuerry) != TRUE)
			      	 	echo "[legislation] insert failed";
			      }



				    $capitol="conduita_preventiva";

					for($i=1; $i<= 10 ; $i++){
			      	 $insertQuerry = "INSERT INTO legislation (userId, nume_curs, capitol) VALUES ('$currentId', '$capitol' , '$i')";
			      	 if ($conn->query($insertQuerry) != TRUE)
			      	 	echo "[legislation] insert failed";
			      }


			      for($i=1; $i<=20; $i++)
                  {
        	        $insertQuerry = "INSERT INTO signs (userId, category) VALUES ('$currentId', '$i')";
			      	 if ($conn->query($insertQuerry) != TRUE)
			      	 	echo "[signs] insert failed";
                   }

			    }
		     header('location:../html/Trast.html');
		     die();
			}
			else{
				echo "Something went wrong";
                 //header('location:SignUpPage.html');
                 die();
                 $conn->close();

			}
			//header('location:LogIn.html');

		}

}
else{
	echo "All fields are rquired";
	die();
}
?>