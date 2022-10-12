<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!--Estos <links> contienen la CDN de Bootstrap que dan estilo e iconos a la página web.-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <!--Este <script></script> contienen la CDN de Font Awesome que dan iconos a la página web.-->
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
            <!--Este <div></div> contiene el formulario para buscar usuarios y realizar los desafíos.-->
            <div class="container form-control">
                <p><b>Nombre</b></p>
                <div class="input-group mb-3">                   
                    <input class="form-control" id="nombreUsuario" placeholder="Nombre" type="text">
                    <button class="btn btn-outline-primary" id="botonBuscarUsuario" title="Busque a otros usuarios por su nombre para desafiarlos a una batalla." type="button">Buscar Usuario <i class="bi bi-people"></i><i class="bi bi-search"></i></button>      
                </div>
                <p><b id="tituloColorSeleccionado">Escoja el color de su escuadrón</b><b id="colorSeleccionado"></b></p>
                <button class="btn" disabled id="botonAmarillo" onclick="seleccionarColor('Amarillo')" style="background-color: #E5E5E5;" title="Amarillo" type="button"><img height="50px" src="../../Imagenes/Escudos/Amarillo.png" width="50px"></button>
                <button class="btn" disabled id="botonAzul" onclick="seleccionarColor('Azul')" style="background-color: #E5E5E5;" title="Azul" type="button"><img height="50px" src="../../Imagenes/Escudos/Azul.png" width="50px"></button> 
                <button class="btn" disabled id="botonMorado" onclick="seleccionarColor('Morado')" style="background-color: #E5E5E5;" title="Morado" type="button"><img height="50px" src="../../Imagenes/Escudos/Morado.png" width="50px"></button>               
                <button class="btn" disabled id="botonNaranjo" onclick="seleccionarColor('Naranjo')" style="background-color: #E5E5E5;" title="Naranjo" type="button"><img height="50px" src="../../Imagenes/Escudos/Naranjo.png" width="50px"></button>               
                <button class="btn" disabled id="botonRojo" onclick="seleccionarColor('Rojo')" style="background-color: #E5E5E5;" title="Rojo" type="button"><img height="50px" src="../../Imagenes/Escudos/Rojo.png" width="50px"></button>               
                <button class="btn" disabled id="botonVerde" onclick="seleccionarColor('Verde')" style="background-color: #E5E5E5;" title="Verde" type="button"><img height="50px" src="../../Imagenes/Escudos/Verde.png" width="50px"></button> 
                <p><b id="tituloUsuario">¿Quiere desafiar a este usuario a una batalla?</b></p>
                <button class="btn btn-success" disabled id="botonAceptarDesafio" title="Aceptar" type="button">Aceptar <i class="bi bi-shield-check"></i></button>
                <button class="btn btn-danger" disabled id="botonRechazarDesafio" title="Rechazar" type="button">Rechazar <i class="bi bi-shield-x"></i></button> 
            </div>
            <!--Este <div></div> contiene el panel con el mensaje de espera al desafío realizado.-->
            <div class="modal fade" id="panelMensajesDesafio" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #fff3cd; color: #664d03; justify-content: center;">
                            <h5><b>Esperando respuesta del desafío</b> <i class="bi bi-shield-exclamation"></i></h5>
                        </div>
                        <div class="modal-body">
                            <div class="col" style="background-color: #fff3cd; color: #664d03;">
                                <h1 id="mensajeCuentaRegresiva" style="font-size: 80px; text-align: center;"><i class="bi bi-exclamation-triangle"></i></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Este <div></div> contiene el panel con el mensaje de aviso con el desafío aceptado.-->
            <div class="modal fade" id="panelMensajesDesafioAceptado" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #d1e7dd; color: #0f5132; justify-content: center;">
                            <h5><b>Desafío Aceptado</b> <i class="bi bi-shield-check"></i></h5>
                        </div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-success" data-bs-dismiss="modal" id="botonIrBatalla" title="Ir a la batalla." type="button">Ir a la batalla <i class="bi bi-shield-check"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Este <div></div> contiene el panel con el mensaje de aviso con el desafío rechazado.-->
            <div class="modal fade" id="panelMensajesDesafioRechazado" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #f8d7da; color: #842029; justify-content: center;">
                            <h5><b>Desafío Rechazado</b> <i class="bi bi-shield-x"></i></h5>
                        </div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-danger" data-bs-dismiss="modal" id="botonCerrarPanelMensajeDesafio" title="Ir a la batalla." type="button">Cerrar <i class="bi bi-shield-x"></i></button>
                        </div>
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