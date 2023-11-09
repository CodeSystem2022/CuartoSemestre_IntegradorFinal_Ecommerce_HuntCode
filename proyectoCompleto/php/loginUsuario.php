<?php

    session_start();
//Use este codigo para verificar que se habia iniciado sesion correctamente
/*    if(!isset($_SESSION['usuario'])){
        echo'
            <script>
                alert("No has iniciado sesión");
            </script>
        ';
        session_destroy();
        die();
}
*/ 


    Include 'conexion_bd.php';

//Conecto las variables
    $clave = $_POST['clave'];
    $correo = $_POST['correo'];

//Valido correo y clave
    $validarLogin = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' and clave='$clave'");
          
    if(mysqli_num_rows($validarLogin) > 0){
        $_SESSION['usuario']=$correo;
        echo'
            <script>
                alert("Abrio sesion de manera exitosa")
            </script>
        ';
        exit();
    }else{
        echo'
            <script>
                alert("Error al abrir sesion. Verifique los datos introducidos")
                alert("Si no tiene cuenta registrese aqui")
                window.location = "../registro.html";
            </script>
    ';
    exit();
    }
?>