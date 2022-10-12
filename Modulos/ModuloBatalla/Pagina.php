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
                            <a class="nav-link" aria-current="page" href="#">Opcion1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Opcion2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Opcion3</a>
                        </li>
                    </ul>
                </div>
                <button class="btn btn-danger" id="botonTerminarSession" title="Terminar la sesión actual" type="button"><i class="bi bi-door-open"></i></a></button>
            </div>
        </nav> 
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-success alert-dismissible show" id="alertaVisual" role="alert">
                <p><b id="mensajeAlertaVisual">Bienvenido jugador</b></p>
                <button aria-label="Close" class="btn-close" id="botonOcultarAlertaVisual" type="button"></button>
            </div>
            <!--Este <div></div> contiene el tablero de juego.-->
            <div id="contenedorTablero" style="position:relative;">
                <div style="left:1144px; position:absolute; top:1px; z-index:0;">
                    <form class="form-floating">
                        <input class="form-control" id="campoIndicadorTurno" readonly type="text">
                        <label for="campoIndicadorTurno">Turno del personaje:</label>
                    </form>
                </div>
                <div style="left:1px; position:absolute; top:1px; z-index:0;">
                    <form class="form-floating">
                        <!--<input class="form-control" id="campoIndicadorTurno" readonly type="text">
                        <label for="campoIndicadorTurno">Turno del personaje:</label>-->
                        <button class="btn btn-outline-danger" id="botonAtacar" onclick="" title="Atacar" type="button"><i class="fa-solid fa-hand-fist"></i></button>
                        <button class="btn btn-outline-primary" id="botonMoverse" onclick="crearCuadradosMovimiento()" title="Moverse" type="button"><i class="fa-solid fa-arrows-up-down-left-right"></i></button>
                    </form>
                </div>
                <img id="imagenTablero" src="../../Imagenes/Tablero.png">                
            </div>
            <!--Este <div></div> el panel con mensajes para el jugador.-->
            <div class="modal fade" id="panelMensajesMovimiento" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirmar Posición</h5>
                            <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" id="botonOcultarPanelMensajesMovimiento" type="button"></button>
                        </div>
                        <div class="modal-body">
                            <p>¿Está seguro de que quiere que su personaje se mueva a esta posición en el tablero?</p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success" data-bs-dismiss="modal" id="botonConfirmarPosicion" onclick="moverPersonajeActivo()" title="Confirmar la selección de esta posición" type="button">Confirmar <i class="fa-solid fa-arrows-to-circle"></i></button>
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