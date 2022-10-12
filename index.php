<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Perro Negro Websitie</title>
        <!--Estos <links> contienen la CDN de Bootstrap que dan estilo e iconos a la página web.-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    </head>
    <body>        
        <nav class="navbar sticky-top" style="background-color:#6B6B6B;">
            <!--Este <div></div> contiene el menú de opciones.-->         
            <div class="container-fluid">                               
                <p style="color:white;"><img height="75px" src="Imagenes/Logotipo.gif" width="150px"><b>Perro Negro Sitio Web,</b> únete a una asombrosa comunidad de jugadores...</p> 
                <div class="btn-group">
                    <button class="btn btn-success" id="botonIniciarSesion" type="button">Iniciar Sesión <i class="bi bi-key"></i></a></button>
                    <button class="btn btn-primary" id="botonRegistrarse" type="button">Registrarse <i class="bi bi-person-badge"></i></a></button>
                </div>
            </div>
        </nav> 
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-success alert-dismissible show sticky-top" id="alertaVisual" role="alert">
                <p><b id="mensajeAlertaVisual">Bienvenido... aprovecha las increíbles ofertas de este mes de nuestros auspiciadores.</b></p>
                <button aria-label="Close" class="btn-close" id="botonOcultarAlertaVisual" type="button"></button>
            </div>           
            <!--Este <div></div> el carrusel con las imágenes publicitarias.-->
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="4000">
                        <img height="400px" src="Imagenes/Publicidad/Publicidad1.jpg" class="d-block w-100" width="1000px">
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img height="400px" src="Imagenes/Publicidad/Publicidad2.jpg" class="d-block w-100" width="1000px">
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img height="400px" src="Imagenes/Publicidad/Publicidad3.jpg" class="d-block w-100" width="1000px">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </main>
        <!--Estos <script></script> contienen las CDN de jQuery y Bootstrap que dan funcionalidades a la página web.-->
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        <script src="Funciones.js"></script>
    </body>
</html>