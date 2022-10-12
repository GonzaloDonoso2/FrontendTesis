$(document).ready(function () {

    validarInicioSesion();
});

/*Esta función verifica que la 
variable llamada "idUsuario" 
tenga un valor distinto de nulo, 
si el valor de la variable es 
distinto de nulo el usuario puede 
navegar por esta página, pero si 
el valor de la variable es nulo el 
usuario será forzado a navegar a la 
página de inicio donde deberá iniciar 
sesión.*/

function validarInicioSesion() {

    if (sessionStorage.getItem("idUsuario") === null) {
        
        let aplicacionURL = sessionStorage.getItem("aplicacionURL");        
        location.href =  aplicacionURL + "/" + "Modulos/ModuloInicioSesion/Pagina.php";

    } else {

        console.log(sessionStorage.getItem("nombreUsuario"));
    }
}

const botonBuscarUsuario = document.querySelector("#botonBuscarUsuario");

/*Esta función busca el 
"idUsuario" de un usuario 
registrado en la base de 
datos y aun este vigente 
mediante su "nombre".*/

function buscarUsuario() {

    let nombre = $("#nombreUsuario").val();

    if (nombre !== "") {

        let nombreUsuario = {
            "nombre": nombre
        };
        let servidorURL = sessionStorage.getItem("servidorURL"); 
        let url = servidorURL + "/" + "index.php/usuarios?nombreUsuario=" + JSON.stringify(nombreUsuario);

        $.ajax({

            url: url,
            method: "POST",
            success: function (provisoriaRespuesta) {

                if (provisoriaRespuesta === "Este usuario no está registrado.") {

                    $("#nombreUsuario").val("");
                    $("#nombreUsuario").focus();
                    $("#mensajeAlertaVisual").text(provisoriaRespuesta);
                    $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");

                } else {

                    let respuesta = JSON.parse(provisoriaRespuesta);
                    sessionStorage.setItem("idUsuario2", respuesta[0].idUsuario);

                    $("#mensajeAlertaVisual").text(nombre + " esta registrado, puede desafiarlo a una batalla.");
                    $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");

                    document.getElementById("nombreUsuario").setAttribute("readonly", true);
                    document.getElementById("botonBuscarUsuario").setAttribute("disabled", true);

                    $("#botonAmarillo").removeAttr("disabled");
                    $("#botonAzul").removeAttr("disabled");
                    $("#botonMorado").removeAttr("disabled");
                    $("#botonNaranjo").removeAttr("disabled");
                    $("#botonRojo").removeAttr("disabled");
                    $("#botonVerde").removeAttr("disabled");
                }
            }
        });

    } else {

        $("#mensajeAlertaVisual").text("Debe escribir el nombre de un usuario antes para poder buscarlo.");
        $("#alertaVisual").addClass("alert-warning").removeClass("alert-success").removeClass("alert-danger");
        $("#alertaVisual").addClass("show").removeClass("fade");
    }
}

botonBuscarUsuario.addEventListener("click", buscarUsuario, false);

/*Con esta función el usuario
puede seleccionar el color que 
utilizara su escuadrón durante 
la batalla.*/

function seleccionarColor(x) {

    $("#tituloColorSeleccionado").text("Escoja el color de su escuadrón:");

    if (x === "Amarillo") {

        document.getElementById("colorSeleccionado").style.color = "#C59D10";

    } else if (x === "Azul") {

        document.getElementById("colorSeleccionado").style.color = "#1029C5";

    } else if (x === "Morado") {

        document.getElementById("colorSeleccionado").style.color = "#7010C5";

    } else if (x === "Naranjo") {

        document.getElementById("colorSeleccionado").style.color = "#C55110";

    } else if (x === "Rojo") {

        document.getElementById("colorSeleccionado").style.color = "#C5101A";

    } else if (x === "Verde") {

        document.getElementById("colorSeleccionado").style.color = "#47C510";
    }

    sessionStorage.setItem("colorUsuario1", x);

    $("#colorSeleccionado").text(" " + x);

    let nombreUsuario = $("#nombreUsuario").val();

    $("#tituloUsuario").text("¿Quiere desafiar a " + nombreUsuario + " a una batalla?");
    $("#botonAceptarDesafio").removeAttr("disabled");
    $("#botonRechazarDesafio").removeAttr("disabled");
}

const botonAceptarDesafio = document.querySelector("#botonAceptarDesafio");
const botonRechazarDesafio = document.querySelector("#botonRechazarDesafio");

function buscarRespuesta() { 
    
    let segundosRestantes = 24;

    function buscar() {    

        let idDesafio = {

            "id": sessionStorage.getItem("idDesafio"),
        };
        let servidorURL = sessionStorage.getItem("servidorURL"); 
        url = servidorURL + "/" + "index.php/desafios?idDesafio=" + JSON.stringify(idDesafio);

        $.ajax({
            url: url,
            method: "GET",
            success: function (provisoriaRespuestaExterior) {

                if (provisoriaRespuestaExterior !== "Sin Respuesta.") {
                    
                    clearInterval(idEjecutorFuncion);

                    $("#panelMensajesDesafio").modal("hide");

                    let respuestaExterior = JSON.parse(provisoriaRespuestaExterior);

                    if (respuestaExterior[0].estadoDesafio === "ACEPTADO") {

                        $("#panelMensajesDesafioAceptado").modal("show");

                    } else if (respuestaExterior[0].estadoDesafio === "RECHAZADO") {

                        $("#panelMensajesDesafioRechazado").modal("show");
                    }

                } else if (provisoriaRespuestaExterior === "Sin Respuesta.") { 

                    if (segundosRestantes >= 0) {

                        $("#mensajeCuentaRegresiva").text(segundosRestantes);

                        segundosRestantes--;

                    } else {

                        let desafioRechazado = {

                            "idDesafio": sessionStorage.getItem("idDesafio")
                        };
                        let servidorURL = sessionStorage.getItem("servidorURL"); 
                        url = servidorURL + "/" + "index.php/desafios?desafioRechazado=" + JSON.stringify(desafioRechazado);

                        $.ajax({
                            url: url,
                            method: "PUT",
                            success: function (provisoriaRespuestaInterior) {

                                console.log(provisoriaRespuestaInterior);

                                if (provisoriaRespuestaInterior === "Desafío rechazado.") {

                                    clearInterval(idEjecutorFuncion);

                                    sessionStorage.removeItem("idDesafio");

                                    $("#panelMensajesDesafio").modal("hide");
                                    $("#panelMensajesDesafioRechazado").modal("show");
                                }
                            }
                        });
                    }
                }
            }
        });
    }

    let idEjecutorFuncion = setInterval(buscar, 1000);
}

/*Esta función registra en la
 base de datos un desafío 
 vigente para un usuario ya 
 registrado en la base de datos 
 y vigente. */

function registrarDesafio() {

    let provisoriaFecha = new Date();
    let provisoriaHora = provisoriaFecha.getHours();
    let provisoriaMinuto = provisoriaFecha.getMinutes();
    let provisoriaSegundo = provisoriaFecha.getSeconds();
    let hora;
    let minuto;
    let segundo;

    if (provisoriaHora < 10) {

        hora = `0${provisoriaHora}`;

    } else {

        hora = provisoriaHora;
    }
    if (provisoriaMinuto < 10) {

        minuto = `0${provisoriaMinuto}`;

    } else {

        minuto = provisoriaMinuto;
    }
    if (provisoriaSegundo < 10) {

        segundo = `0${provisoriaSegundo}`;

    } else {

        segundo = provisoriaSegundo;
    }

    let dia = provisoriaFecha.getDate();
    let mes = (provisoriaFecha.getMonth() + 1);
    let anio = provisoriaFecha.getFullYear();
    let fechaDesafio;

    if (mes < 10) {

        fechaDesafio = `${dia}-0${mes}-${anio} ${hora}:${minuto}:${segundo}`;

    } else {

        fechaDesafio = `${dia}-${mes}-${anio} ${hora}:${minuto}:${segundo}`;
    }

    let idUsuario1 = sessionStorage.getItem("idUsuario");
    let idUsuario2 = sessionStorage.getItem("idUsuario2");
    let colorUsuario1 = sessionStorage.getItem("colorUsuario1");
    let desafio = {
        "estado": "VIGENTE",
        "fecha": fechaDesafio,
        "idUsuario1": idUsuario1,
        "idUsuario2": idUsuario2,
        "colorUsuario1": colorUsuario1
    };
    let servidorURL = sessionStorage.getItem("servidorURL"); 
    let url = servidorURL + "/" + "index.php/desafios?desafio=" + JSON.stringify(desafio);

    $.ajax({
        url: url,
        method: "POST",
        success: function (provisoriaRespuestaExterior) {

            if (provisoriaRespuestaExterior !== "Este usuario ya tiene un desafío anterior vigente.") {

                $("#panelMensajesDesafio").modal("show");

                let servidorURL = sessionStorage.getItem("servidorURL"); 
                url = servidorURL + "/" + "index.php/desafios?desafio=" + JSON.stringify(desafio);

                $.ajax({
                    url: url,
                    method: "GET",
                    success: function (provisoriaRespuestaInterior) {

                        console.log(provisoriaRespuestaInterior);

                        let respuestaInterior = JSON.parse(provisoriaRespuestaInterior);

                        sessionStorage.setItem("idDesafio", respuestaInterior[0].idDesafio);

                        buscarRespuesta();
                    }
                });

            } else if (provisoriaRespuestaExterior === "Este usuario ya tiene un desafío anterior vigente.") {

                $("#mensajeAlertaVisual").text(provisoriaRespuestaExterior);
                $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");

            }
        }
    });
}

botonAceptarDesafio.addEventListener("click", registrarDesafio, false);

const botonIrBatalla = document.querySelector("#botonIrBatalla");
const botonCerrarPanelMensajeDesafio = document.querySelector("#botonCerrarPanelMensajeDesafio");

function irBatalla() {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");            
    location.href = aplicacionURL + "/" + "Modulos/ModuloBatalla/Pagina.php";
}

function recargarPagina() {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");
    location.href = aplicacionURL + "/" + "Modulos/ModuloDesafios/Pagina.php";
}

botonRechazarDesafio.addEventListener("click", recargarPagina, false);
botonIrBatalla.addEventListener("click", irBatalla, false);
botonCerrarPanelMensajeDesafio.addEventListener("click", recargarPagina, false);

const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");

/*Esta función oculta la alerta
 visual con mensajes para el 
 usuario. */

function ocultarAlertaVisual() {

    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);

/*Con esta función
 el usuario puede 
 navegar a la página
 anterior.*/

function volver() {

    sessionStorage.removeItem("colorUsuario1");
    sessionStorage.removeItem("idUsuario2");
    sessionStorage.removeItem("idDesafio");
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");        
    location.href = aplicacionURL + "/" + "Modulos/ModuloMenuOpciones/Pagina.php";
}

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
    location.href = aplicacionURL + "/" + "Modulos/ModuloInicioSesion/Pagina.php";
}

botonTerminarSesion.addEventListener("click", terminarSesion, false);




