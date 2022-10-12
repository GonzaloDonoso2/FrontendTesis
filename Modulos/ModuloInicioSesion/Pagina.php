<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!--Estos <links> contienen la CDN de Bootstrap que dan estilo e iconos a la página web.-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    </head>
    <body>        
        <nav class="navbar sticky-top" style="background-color:#6B6B6B;">
            <!--Este <div></div> contiene el menú de opciones.-->         
            <div class="container-fluid">
                <p style="color:white;"><img height="75px" src="../../Imagenes/Logotipo.gif" width="150px"><b>Perro Negro Sitio Web,</b> ingrese su correo electrónico y contraseña para iniciar su sesión.</p>                               
            </div>
        </nav> 
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-warning alert-dismissible fade sticky-top" id="alertaVisual" role="alert">
                <p><b id="mensajeAlertaVisual"></b></p>
                <button aria-label="Close" class="btn-close" id="botonOcultarAlertaVisual" type="button"></button>                
            </div>
            <!--Este <div></div> contiene el formulario para registrase e iniciar sesión.-->
            <div class="container form-control">
                <p><b>Correo Electrónico</b></p>
                <input class="form-control" id="correoElectronico" placeholder="Correo Electrónico" type="text">
                <p><b>Contraseña</b></p>
                <input class="form-control" id="contrasena" placeholder="Contraseña" type="password">
                <br>
                <button class="btn btn-outline-success form-control" id="botonIniciarSesion" type="button">Iniciar Sesión <i class="bi bi-key"></i></button>
            </div>
        </main>
        <!--Estos <script></script> contienen las CDN de jQuery y Bootstrap que dan funcionalidades a la página web.-->
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> 
        <script src="Funciones.js"></script>
    </body>
</html>