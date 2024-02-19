<?php
	$correo = "tezzlabr@gmail.com";
	$nombre = $_Post["nombre"];
	$email = $_Post["email"];
	$mensaje = $_Post["mensaje"];
	$informacion = "Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;

	mail($correo, "Contáctame", $informacion); 
  	header("Location:agradecimiento.html");
?>