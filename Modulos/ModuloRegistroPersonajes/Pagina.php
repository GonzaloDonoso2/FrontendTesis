<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!--Estos <links> contienen la CDN de Bootstrap que dan estilo e iconos a la página web.-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <script src="https://kit.fontawesome.com/06c09b3cfb.js" crossorigin="anonymous"></script>
    </head>
    <body>        
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color:#6B6B6B;">
            <!--Este <div></div> contiene el menú de opciones.-->         
            <div class="container-fluid">
                <img height="50px" src="../../Imagenes/Logotipo.gif" width="100px">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Perro Negro</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" onclick="volver()">Volver</a>
                        </li>
                    </ul>
                </div>
                <button class="btn btn-danger" id="botonTerminarSesion" title="Terminar la sesión actual" type="button"><i class="bi bi-door-open"></i></a></button>
            </div>
        </nav> 
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-warning alert-dismissible fade sticky-top" id="alertaVisual" role="alert">
                <p><b id="mensajeAlertaVisual"></b></p>
                <button aria-label="Close" class="btn-close" id="botonOcultarAlertaVisual" type="button"></button>                
            </div>
            <!--Este <div></div> contiene el formulario para registrase.-->
            <div class="container form-control">
                <div class="row">
                    <div class="col">
                        <p><b>Nombre</b></p>
                        <input class="form-control" id="nombre" placeholder="Nombre" type="text">
                        <br>                        
                        <div class="input-group mb-3">
                            <button class="btn btn-outline-secondary" id="botonCambiarColorIzquierdo" type="button">Ant.</button>
                            <img height="312" id="retratoPersonaje" src="../../Imagenes/Personajes/Retratos/Cazador/Amarillo.png" width="210">
                            <button class="btn btn-outline-secondary" id="botonCambiarColorDerecho" type="button">Sig.</button>
                        </div>                        
                        <br>
                        <p><b>Categoría</b></p>   
                        <div class="input-group mb-3">
                            <button class="btn btn-outline-secondary" id="botonCambiarCategoriaIzquierdo" type="button">Ant.</button>
                            <input class="form-control" id="categoria" readonly type="text">
                            <button class="btn btn-outline-secondary" id="botonCambiarCategoriaDerecho" type="button">Sig.</button>
                        </div>    
                    </div>
                    <div class="col">
                        <p><b>Agilidad</b></p>
                        <input class="form-control" id="agilidad" max="95" min="35" step="5" type="number" value="35">
                        <p><b>Destreza</b></p>
                        <input class="form-control" id="destreza" max="95" min="35" step="5" type="number" value="35">
                        <p><b>Intelecto</b></p>
                        <input class="form-control" id="intelecto" max="95" min="35" step="5" type="number" value="35">
                        <p><b>Puntería </b></p>
                        <input class="form-control" id="punteria" max="95" min="35" step="5" type="number" value="35">
                        <p><b>Vigor</b></p>
                        <input class="form-control" id="vigor" max="95" min="35" step="5" type="number" value="35">
                        <p><b>Heroísmo</b></p>
                        <input class="form-control" id="heroismo" max="95" min="35" step="5" type="number" value="35">
                        <br>
                        <button class="btn btn-outline-success form-control" id="botonRegistrarse" title="Registrar Usuario" type="button">Registrarse <i class="bi bi-pencil"></i></button>
                    </div>            
                </div>
            </div>
        </main>
        <!--Estos <script></script> contienen las CDN de jQuery y Bootstrap que dan funcionalidades a la página web.-->
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> 
        <script src="Funciones.js"></script>
    </body>
</html>