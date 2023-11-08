<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    $opcion = $_POST["opciones"];

    $destinatario = "fastcarsmendoza@outlook.es"; 

    $asunto = "Nuevo mensaje de contacto de $nombre";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $correo\n";
    $contenido .= "Opción seleccionada: $opcion\n";
    $contenido .= "Mensaje:\n$mensaje";

    $headers = "From: $correo, FASTCARS PAGE";

    $enviado = mail($destinatario, $asunto, $contenido, $headers);

    if ($enviado) {
        echo "El mensaje ha sido enviado correctamente. ¡Gracias por ponerte en contacto!";
        echo '<script type="text/javascript">alert("El correo se ha enviado con éxito.");</script>';
    } else {
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}

?>
