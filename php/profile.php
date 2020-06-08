<?php

  $id = $_GET['id'];

?>

<script type="text/javascript">
	localStorage.setItem('id_user_profil', <?php echo $id;
		?>)
	window.document.location = '../html/profil_user.html'
</script>


