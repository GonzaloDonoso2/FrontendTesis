$(document).ready(function () {
    
    validarInicioSesion();
});

function validarInicioSesion() {
    
    if (sessionStorage.getItem("nombreUsuario") === null) {
        
        let aplicacionURL = sessionStorage.getItem("aplicacionURL");
        location.href = aplicacionURL + "/" + "Modulos/ModuloInicioSesion/Pagina.php";
        
    } else {
        
        mostrarSaludoInicial();
        obtenerPersonajes();
        buscarDesafios();
    }   
}

function mostrarSaludoInicial() {
    
    let nombreUsuario = sessionStorage.getItem("nombreUsuario");
    let mensaje = "Bienvenido " + nombreUsuario;

    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
    $("#mensajeAlertaVisual").text(mensaje);
    $("#nombreUsuario").text(nombreUsuario);
}

/*Esta función se borran
los registros de páginas
anteriores en caso de 
existir.*/

function borrarRegistros() {
    
    sessionStorage.removeItem("idDesafio");
    sessionStorage.removeItem("colorUsuario1");
    sessionStorage.setItem("estadoDesafio", "");
    sessionStorage.removeItem("idUsuario2");    
}

/*Con esta función el usuario
puede seleccionar el color que 
utilizara su escuadrón durante 
la batalla.*/

function seleccionarColor(color) {

    let desafio = {

        "idDesafio": sessionStorage.getItem("idDesafio"),
        "colorUsuario2": color
    };
    let servidorURL = sessionStorage.getItem("servidorURL");    
    let url = servidorURL + "/" + "index.php/desafios?desafio=" + JSON.stringify(desafio);
    
    
    
    $.ajax({
        url: url,
        method: "PUT",
        success: function (respuesta) {

            if (respuesta === "Color seleccionado " + color + ".") {
                
                $("#botonIrBatalla").removeAttr("disabled");
            }
        }
    });
}

const botonAceptarDesafio = document.querySelector("#botonAceptarDesafio");

function aceptarDesafio(){   
    
    let desafioAceptado = {
        
        "idDesafio": sessionStorage.getItem("idDesafio")
    };
    let servidorURL = sessionStorage.getItem("servidorURL");    
    let url = servidorURL + "/" + "index.php/desafios?desafioAceptado=" + JSON.stringify(desafioAceptado);
    
    $.ajax({        
        url: url,
        method: "PUT",
        success: function(respuesta){
            
            if(respuesta === "Desafío aceptado."){
                
                sessionStorage.setItem("estadoDesafio", respuesta);
                
                $("#panelMensajeDesafios").modal("hide");             
                
                let colorUsuario1 = sessionStorage.getItem("colorUsuario1");
                let botonAmarillo = "";
                let botonAzul = "";
                let botonMorado = "";
                let botonNaranjo = "";
                let botonRojo = "";
                let botonVerde = "";
                let plantilla;
                
                if(colorUsuario1 !== "Amarillo"){
                    
                    botonAmarillo = `<button class="btn" id="botonAmarillo" onclick="seleccionarColor('Amarillo')" style="background-color: #E5E5E5;" title="Amarillo" type="button"><img height="50px" src="../../Imagenes/Escudos/Amarillo.png" width="50px"></button>`;                                        
                } 
                if(colorUsuario1 !== "Azul"){
                    
                    botonAzul = `<button class="btn" id="botonAzul" onclick="seleccionarColor('Azul')" style="background-color: #E5E5E5;" title="Azul" type="button"><img height="50px" src="../../Imagenes/Escudos/Azul.png" width="50px"></button>`;                    
                } 
                if(colorUsuario1 !== "Morado"){
                    
                    botonMorado = `<button class="btn" id="botonMorado" onclick="seleccionarColor('Morado')" style="background-color: #E5E5E5;" title="Morado" type="button"><img height="50px" src="../../Imagenes/Escudos/Morado.png" width="50px"></button>`;                    
                } 
                if(colorUsuario1 !== "Naranjo"){
                    
                    botonNaranjo = `<button class="btn" id="botonNaranjo" onclick="seleccionarColor('Naranjo')" style="background-color: #E5E5E5;" title="Naranjo" type="button"><img height="50px" src="../../Imagenes/Escudos/Naranjo.png" width="50px"></button>`;                    
                } 
                if(colorUsuario1 !== "Rojo"){
                    
                    botonRojo = `<button class="btn" id="botonRojo" onclick="seleccionarColor('Rojo')" style="background-color: #E5E5E5;" title="Rojo" type="button"><img height="50px" src="../../Imagenes/Escudos/Rojo.png" width="50px"></button>`;                    
                } 
                if(colorUsuario1 !== "Verde"){
                    
                    botonVerde = `<button class="btn" id="botonVerde" onclick="seleccionarColor('Verde')" style="background-color: #E5E5E5;" title="Verde" type="button"><img height="50px" src="../../Imagenes/Escudos/Verde.png" width="50px"></button>`;
                } 
                
                plantilla = botonAmarillo + botonAzul + botonMorado + botonNaranjo + botonRojo + botonVerde;
                
                $("#panelContenedorBotonesOpcionColores").html(plantilla);
                $("#panelOpcionesColores").modal("show");
            }            
        }
    });    
}

botonAceptarDesafio.addEventListener("click", aceptarDesafio, false);

const botonRechazarDesafio = document.querySelector("#botonRechazarDesafio");

function rechazarDesafio() {

    let desafioRechazado = {

        "idDesafio": sessionStorage.getItem("idDesafio")
    };
    let servidorURL = sessionStorage.getItem("servidorURL");    
    let url = servidorURL + "/" + "index.php/desafios?desafioRechazado=" + JSON.stringify(desafioRechazado);

    $.ajax({
        url: url,
        method: "PUT",
        success: function (respuesta) {

            if (respuesta === "Desafío rechazado.") {

                sessionStorage.setItem("estadoDesafio", respuesta);
                $("#panelMensajeDesafios").modal("hide");                
                setTimeout(function () {

                    sessionStorage.setItem("idDesafio", null);                    
                    sessionStorage.setItem("estadoDesafio", null);
                    sessionStorage.setItem("colorUsuario1", null);
                    buscarDesafios();
                    
                }, 2000);
            }
        }
    });    
}

botonRechazarDesafio.addEventListener("click", rechazarDesafio, false);

function buscarDesafios() {

    function buscar() {

        console.log("Se esta ejecuntando el buscador de desafios...")

        let usuario = {

            "idUsuario": sessionStorage.getItem("idUsuario")
        };
        let servidorURL = sessionStorage.getItem("servidorURL"); 
        let url = servidorURL + "/" + "index.php/desafios?usuario=" + JSON.stringify(usuario);
        
        console.log(url);

        $.ajax({
            url: url,
            method: "GET",
            success: function (provisoriaRespuestaExterior) {

                if (provisoriaRespuestaExterior !== "Sin desafios vigentes.") {

                    clearInterval(idEjecutorFuncionExterna);
                    let respuestaExterior = JSON.parse(provisoriaRespuestaExterior);
                    sessionStorage.setItem("idDesafio", respuestaExterior[0].idDesafio);
                    sessionStorage.setItem("colorUsuario1", respuestaExterior[0].colorUsuario1);
                    $("#fechaDesafio").text(respuestaExterior[0].fecha);
                    $("#mensajeDesafio").text("(" + respuestaExterior[0].idDesafio + ")" + " Fue desafiado por el usuario " + respuestaExterior[0].nombreUsuario1 + " a una batalla.");
                    $("#panelMensajeDesafios").modal("show");
                    let segundosRestantes = 19;

                    function cuentaRegresiva() {

                        if (segundosRestantes >= 0) {                           

                            let idDesafio = {

                                "id": sessionStorage.getItem("idDesafio"),
                            };
                            let servidorURL = sessionStorage.getItem("servidorURL"); 
                            url = servidorURL + "/" + "index.php/desafios?idDesafio=" + JSON.stringify(idDesafio);

                            $.ajax({
                                url: url,
                                method: "GET",
                                success: function (provisoriaRespuestaInterior) {

                                    if (provisoriaRespuestaInterior !== "Sin Respuesta.") {

                                        clearInterval(idEjecutorFuncionInterna);                                        
                                        console.log("Dejo de funcionar la cuenta regrasiva...");

                                    } else {
                                        
                                        segundosRestantes--;
                                        $("#mensajeCuentaRegresiva").text(segundosRestantes);
                                        console.log("Se esta ejecuntando la cuenta regresiva...");
                                    }
                                }
                            });                           

                        } else {

                            clearInterval(idEjecutorFuncionInterna);
                            rechazarDesafio();
                            buscarDesafios();
                            console.log("Se rechazo el desafio por defecto al acaberse el tiempo...");
                        }
                    }

                    idEjecutorFuncionInterna = setInterval(cuentaRegresiva, 1000);
                }
            }
        });
    }

    idEjecutorFuncionExterna = setInterval(buscar, 1000);
}

function obtenerPersonajes() {

    let id = {
        
        "idUsuario": sessionStorage.getItem("idUsuario")
    };
    let servidorURL = sessionStorage.getItem("servidorURL"); 
    let url = servidorURL + "/" + "index.php/personajes?id=" + JSON.stringify(id);
    
    console.log(url);

    $.ajax({
        url: url,
        method: "GET",
        success: function (provisoriaRespuesta) {
            
            console.log(provisoriaRespuesta);
            let respuesta = JSON.parse(provisoriaRespuesta);
            let plantilla; 

            for (let i = 0; i < respuesta.length; i++) {
                
                plantilla += `
                    <tr>
                        <th>
                            <img src='../../Imagenes/Personajes/Retratos/${respuesta[i].categoria}.png'>
                        </th>
                        <th>
                            ${respuesta[i].categoria} 
                        </th>
                        <th>
                            ${respuesta[i].nombre} 
                        </th>
                        <th>
                            <div class='btn-group'>
                                <button class='btn btn-outline-danger' title='Borrar Personaje' type='button'><i class='bi bi-trash'></i></button>
                                <button class='btn btn-outline-primary' title='Corregir Personaje' type='button'><i class='bi bi-pencil'></i></button>
                            </div>
                        <th>
                    </tr>`;
            }
            
            $("#tablaPersonajes").html(plantilla);
        }
    });
}

const botonBatalla = document.querySelector("#botonBatalla");
const botonPerfilUsuario = document.querySelector("#botonPerfilUsuario");
const botonRegistrar = document.querySelector("#botonRegistrar");

function irPaginaDesafios() {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");     
    location.href = aplicacionURL + "/Modulos/ModuloDesafios/Pagina.php";
}

function irPaginaPerfilUsuario () {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");     
    location.href = aplicacionURL + "/" + "Modulos/ModuloPerfilUsuario/Pagina.php";
}

function irPaginaRegistroPersonajes () {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");        
    location.href = aplicacionURL + "/" + "Modulos/ModuloRegistroPersonajes/Pagina.php";
}

function terminarSesion () {

    sessionStorage.removeItem("idUsuario");
    sessionStorage.removeItem("nombreUsuario");
    sessionStorage.removeItem("retratoUsuario");
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");         
    location.href = aplicacionURL + "/" + "index.php";
}

const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");

function ocultarAlertaVisual () {
    
    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);

const botonTerminarSesion = document.querySelector("#botonTerminarSesion");

/*Con esta función el 
usuario puede terminar
la sesión actual.*/

function terminarSesion() {

    sessionStorage.removeItem("idUsuario");
    sessionStorage.removeItem("nombreUsuario");
    sessionStorage.removeItem("retratoUsuario");
    sessionStorage.removeItem("colorUsuario1");
    sessionStorage.removeItem("idUsuario2");
    sessionStorage.removeItem("idDesafio");
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");
    location.href = aplicacionURL + "/" + "index.php";
}

botonTerminarSesion.addEventListener("click", terminarSesion, false);




