document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
  
    
  
    // Ejemplo de AJAX: si lo usamos por ahora no vamos a ver si nos funciona php
    /*
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito o error.
      }
    };
    xhr.send("nombre=" + nombre + "&correo=" + correo + "&mensaje=" + mensaje);
    */
  });
  