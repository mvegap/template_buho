<?php 


if($_SERVER["REQUEST_METHOD"] == "POST"){

	$nombres = strip_tags($_POST["nombres"]);
	$email = filter_var(trim($_POST["email"]),FILTER_SANITIZE_EMAIL);

	// definimos el correo de recepcion
	$recibe = "mvegaplm@gmail.com";
	$asunto = "REGISTRO WEB";

	$email_content = "Nombres: $nombres\n";
	$email_content = "Correo electronico: $email\n\n";
	$email_content = "Enviado desde la página web";

	$email_headers = "From: $nombres <$email>";

	// enviamos el correo

	if(mail($recibe, $asunto, $email_content, $email_headers))
	{
		http_response_code(200);
		echo "Gracias, te haz registrado correctamente.";
	}else{
		http_response_code(500);
		echo "Ocurrió un error al registrarte. Intenta de nuevo.";
	}

}else{
	http_response_code(403);
	echo "Ocurrió un problema con el envio del formulario. Intenta nuevamente.";
}

?>