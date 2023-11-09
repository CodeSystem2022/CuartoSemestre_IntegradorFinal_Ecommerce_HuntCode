<?php 
/* Esta es la conexion con la base de datos, creo que no esta conectada, nunca lo pude verificar*/
    $conexion = mysqli_connect("localhost","root","","login_register_db");

/* Lineas de prueba para saber si se establecio la conexion, no me anduvo*/    
    if($conexion){
        echo "Conexion exitosa con la base de datos";
    }else{
        echo "Error al conectarse con la base de datos";
    }
    /* BASE DE DATOS hecha en XAMMP con phpmyadmin */ 


?>