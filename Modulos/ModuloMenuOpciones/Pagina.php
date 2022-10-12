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
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color:#6B6B6B;">
            <!--Este <div></div> contiene el menú de opciones.-->         
            <div class="container-fluid">
                <img height="50px" src="../../Imagenes/Logotipo.gif" width="100px">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Perro Negro</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" onclick="irPaginaDesafios()()">Desafíos</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" onclick="irPaginaPerfilUsuario()">Mi Perfil</a>
                        </li>
                    </ul>
                </div>
                <button class="btn btn-danger" id="botonTerminarSesion" title="Terminar la sesión actual" type="button"><i class="bi bi-door-open"></i></a></button>
            </div>
        </nav> 
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-success alert-dismissible show sticky-top" id="alertaVisual" role="alert">
                <p><b id="mensajeAlertaVisual">Bienvenido... aprovecha las increíbles ofertas de este mes de nuestros auspiciadores.</b></p>
                <button aria-label="Close" class="btn-close" id="botonOcultarAlertaVisual" type="button"></button>
            </div>
            <div class="container form-control">
                <div class="row">
                    <div class="col">
                        <h5 class="card-title" id="nombreUsuario">Card title</h5>
                    </div>
                    <div class="col">
                        <div>
                            <ul>
                                <li>victorias: 5</li>
                                <li>Empates: 4</li>
                                <li>Derrotas: 2</li>
                            </ul>
                        </div>
                    </div>
                </div>               
                <div class="row">  
                    <div class="col">
                        <button class="btn btn-outline-success" id="botonRegistrar" onclick="irPaginaRegistroPersonajes()" type="button" title="Crear Personaje">Crear Personaje<i class="bi bi-plus-lg"></i><i class="bi bi-person"></i></button>
                        <br><br>
                        <div class="form-control" style="height: 300px; overflow-y: scroll; width: 100%;">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Retrato</th>
                                        <th>Categoría</th>
                                        <th>Nombre</th>
                                        <th>Acciones</th>
                                    </tr> 
                                </thead>  
                                <tbody id="tablaPersonajes"></tbody>  
                            </table>
                        </div>
                    </div>
                </div>                
            </div>
            <!--Este <div></div> el panel con mensajes de desafío para el usuario.-->
            <div class="modal fade" id="panelMensajeDesafios" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #fff3cd; color: #664d03; justify-content: center;">
                            <h5><b>Has recibido un desafío</b> <i class="bi bi-shield-exclamation"></i></h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <h6 id="fechaDesafio" style="text-align: center;"></h6>
                                    <h6 id="mensajeDesafio" style="text-align: center;"></h6>
                                </div> 
                                <div class="col" style="background-color: #fff3cd; color: #664d03;">
                                    <h1 id="mensajeCuentaRegresiva" style="font-size: 80px; text-align: center;"><i class="bi bi-exclamation-triangle"></i></h1>
                                </div>
                            </div>                            
                        </div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-success" data-bs-dismiss="modal" id="botonAceptarDesafio" title="¿Acepta este desafío?" type="button">Aceptar <i class="bi bi-shield-check"></i></button>
                            <button class="btn btn-danger" data-bs-dismiss="modal" id="botonRechazarDesafio" title="¿Rechaza este desafío?" type="button">Rechazar <i class="bi bi-shield-x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Este <div></div> el panel con las opciones de colores para el usuario.-->
            <div class="modal fade" id="panelOpcionesColores" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #d1e7dd; color: #0f5132; justify-content: center;">
                            <h5><b>Seleccione un color para su escuadrón</b> <i class="bi bi-shield-exclamation"></i></h5>
                        </div>
                        <div class="modal-footer" id="panelContenedorBotonesOpcionColores" style="justify-content: center;"></div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-success" data-bs-dismiss="modal" disabled id="botonIrBatalla" title="Ir a la batalla." type="button">Ir a la batalla <i class="bi bi-shield-check"></i></button>
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