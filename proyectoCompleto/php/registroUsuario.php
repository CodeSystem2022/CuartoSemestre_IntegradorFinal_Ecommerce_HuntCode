<?php
//Traigo la conexion para poder agregar cosas a la bd
    include 'conexion_bd.php';

//Use el metodo POST para agregar los datos en la bd
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $clave = $_POST["clave"];
//Encripto la clave
    $clave = hash('sha512' , $clave);

//Meto los datos a la bd 
    $query = "INSERT INTO usuarios(nombre, apellido, correo, clave) 
              VALUES('$nombre', '$apellido', '$correo', '$clave')";

//Verifico que no se repitan datos
$verificarCorreo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' ");

if(mysqli_num_rows($verificarCorreo) > 0){
    echo'
        <script> 
            alert("Este correo ya esta registrado, intenta con otro diferente");
            window.location = "../registro.html";
        </script>
    ';
    exit();
}
$ejecutar = mysqli_query($conexion, $query);
//Esto seria para que me tire un cartel en caso de que los datos hayan sido cargados
    if ($ejecutar){
        echo '
            <script>
                alert("Usuario registrado exitosamente");
                window.location = "../registro.html";
            </script>
        ';
    }else{
        echo '
            <script>
                alert("¡ERROR AL REGISTRARSE! Intentalo de nuevo");
                window.location = "../registro.html";
            </script>
        ';  
    }
    mysqli_close($conexion);
?>