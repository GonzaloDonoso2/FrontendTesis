$(document).ready(function () {
    
    validarInicioSesion ();
});

function validarInicioSesion () {
    
    if (sessionStorage.getItem("nombreUsuario") === null) {
        
        let aplicacionURL = sessionStorage.getItem("aplicacionURL");        
        location.href = aplicacionURL + "/Modulos/ModuloInicioSesion/Pagina.php";
        
    } else {
        
        obtenerUsuario();  
    }   
}

function obtenerUsuario() {

    let id = {
        
        "id": sessionStorage.getItem("idUsuario")
    };
    let servidorURL = sessionStorage.getItem("servidorURL");      
    let url = servidorURL + "/" + "index.php/usuarios?id=" + JSON.stringify(id);

    $.ajax({

        url: url,
        method: "GET",
        success: function (respuesta) {
            
            console.log(respuesta);

            let listaUsuarios = JSON.parse(respuesta);

            let correoElectronico;
            let nombre;
            let retrato;
            let retratoUsuario;

            for (let i = 0; i < listaUsuarios.length; i++) {
                
                correoElectronico = listaUsuarios[i].correoElectronico;
                nombre = listaUsuarios[i].nombre;
                retrato = listaUsuarios[i].retrato;
                contrasena = listaUsuarios[i].contrasena;
                retratoUsuario = "../../../PrototipoServidor.01/Imagenes/RetratosUsuarios/" + retrato;
            }
            
            $("#nombre").val(nombre);
            $("#correoElectronico").val(correoElectronico);
            $("#contrasena1").val(contrasena);

            document.getElementById("retratoUsuario").src = retratoUsuario;
        }
    });
}

const botonCorregir1 = document.querySelector("#botonCorregir1");
const botonCorregir2 = document.querySelector("#botonCorregir2");
const botonCorregir3 = document.querySelector("#botonCorregir3");
const botonCorregir4 = document.querySelector("#botonCorregir4");
const botonRegistrar1 = document.querySelector("#botonRegistrar1");
const botonRegistrar2 = document.querySelector("#botonRegistrar2");
const botonRegistrar3 = document.querySelector("#botonRegistrar3");
const botonRegistrar4 = document.querySelector("#botonRegistrar4");
const botonBuscar = document.querySelector("#botonBuscar");
const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");

function habilitarCorreccionNombre () {
    
    $("#nombre").removeAttr("readonly");
    $("#botonRegistrar1").removeAttr("disabled"); 
    
    document.getElementById("botonCorregir1").setAttribute("disabled", true);
}

function habilitarCorreccionRetrato () {
    
    $("#retrato").removeAttr("disabled");
    $("#botonRegistrar2").removeAttr("disabled"); 
    
    document.getElementById("botonCorregir2").setAttribute("disabled", true);
}

function habilitarCorreccionCorreoElectronico () {
    
    $("#correoElectronico").removeAttr("readonly");
    $("#botonBuscar").removeAttr("disabled"); 
    
    document.getElementById("botonCorregir3").setAttribute("disabled", true);
}

function habilitarCorreccionContrasena () {
    
    $("#contrasena1").removeAttr("readonly");
    $("#contrasena2").removeAttr("readonly");
    $("#botonRegistrar4").removeAttr("disabled"); 
    
    document.getElementById("botonCorregir4").setAttribute("disabled", true);
}

function verificarCorreoElectronico() {

    let correoElectronicoUsuario = $("#correoElectronico").val();
    let mensaje = "";

    if (correoElectronicoUsuario === "") {

        mensaje = "Primero debe ingresar su correo electrónico.";

        $("#alertaVisual").addClass("alert-warning").removeClass("alert-danger").removeClass("alert-success");
        $("#alertaVisual").addClass("show").removeClass("fade");
        $("#mensajeAlertaVisual").text(mensaje);
        $("#correoElectronico").focus();

    } else {

        let correoElectronico = {

            "correoElectronico": correoElectronicoUsuario
        };        
        let servidorURL = sessionStorage.getItem("servidorURL");      
        let url = servidorURL + "/" + "index.php/usuarios?correoElectronico=" + JSON.stringify(correoElectronico);

        $.ajax({

            url: url,
            method: "GET",
            success: function (respuesta) {
                
                console.log(respuesta);

                if (respuesta === "Este usuario no está registrado.") {

                    mensaje = "Este correo electrónico no está registrado";

                    $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);
                    
                    document.getElementById("botonBuscar").setAttribute("disabled", true);
                    
                    $("#botonRegistrar3").removeAttr("disabled");

                } else {

                    mensaje = "Este correo electrónico está registrado";

                    $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);
                    $("#correoElectronico").focus();
                    $("#correoElectronico").val("");
                }
            }
        });
    }
}

function registrarNombre() {

    let nombre = $("#nombre").val();
    let mensaje = "";

    if (nombre === "") {
        
        mensaje = "Primero debe ingresar un nombre.";

        $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
        $("#alertaVisual").addClass("show").removeClass("fade");
        $("#mensajeAlertaVisual").text(mensaje);        
        $("#nombre").focus();
        
    } else {
        
        let nombreUsuario = {
            "id": sessionStorage.getItem("idUsuario"),
            "nombre": nombre
        };        
        let servidorURL = sessionStorage.getItem("servidorURL");    
        let url = servidorURL + "/" + "index.php/usuarios?nombre=" + JSON.stringify(nombreUsuario);
        
        $.ajax({
       
            url: url,
            method: "PUT",
            success: function (respuesta) {
                
                console.log(respuesta);

                if (respuesta === "El nombre del usuario fue corregido de manera exitosa.") {

                    mensaje = respuesta;

                    $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);

                    setTimeout(function () {
                        
                        let aplicacionURL = sessionStorage.getItem("aplicacionURL");
                        location.href = aplicacionURL + "/Modulos/ModuloPerfilUsuario/Pagina.php";

                    }, 2000);

                } else {

                    mensaje = "El nombre del usuario no pudo ser registrado.";

                    $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);
                    
                    setTimeout(function () {
                        
                        let aplicacionURL = sessionStorage.getItem("aplicacionURL");
                        location.href = aplicacionURL + "/" + "Modulos/ModuloPerfilUsuario/Pagina.php";

                    }, 2000);
                }
            }
        });
    }
}

/*function registrarRetrato() {

    let retrato = document.querySelector("#retrato");   
    let formData = new FormData();

    let id = {
        "id": sessionStorage.getItem("idUsuario")
    };
    

    formData.append("id", JSON.stringify(id));
    formData.append("retrato", retrato.files[0]);

    fetch(
            "http://localhost/PrototipoServidor.01/index.php/usuarios", {
                method: "POST",
                body: formData
            }

    ).then((respuesta) => {
        
        let mensaje;

        if (respuesta.ok) {

            mensaje = "El retrato del usuario fue corregido de manera exitosa.";

            $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
            $("#alertaVisual").addClass("show").removeClass("fade");
            $("#mensajeAlertaVisual").text(mensaje);

            setTimeout(function () {

                location.href = "http://localhost/Prototipo.01/Modulos/ModuloPerfilUsuario/Pagina.php";

            }, 2000);

        } else {

            mensaje = "El retrato del usuario no pudo ser registrado.";

            $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
            $("#alertaVisual").addClass("show").removeClass("fade");
            $("#mensajeAlertaVisual").text(mensaje);

            setTimeout(function () {

                location.href = "http://localhost/Prototipo.01/Modulos/ModuloPerfilUsuario/Pagina.php";

            }, 2000);
        }
    })
}*/

function registrarCorreoElectronico() {

    let correoElectronico = $("#correoElectronico").val();
    
    let correoElectronicoUsuario = {
        "id": sessionStorage.getItem("idUsuario"),
        "correoElectronico": correoElectronico
    };
    let servidorURL = sessionStorage.getItem("servidorURL");    
    let url = servidorURL + "/" + "index.php/usuarios?correoElectronico=" + JSON.stringify(correoElectronicoUsuario);

    $.ajax({

        url: url,
        method: "PUT",
        success: function (respuesta) {

            console.log(respuesta);

            if (respuesta === "El correo electrónico del usuario fue corregido de manera exitosa.") {

                mensaje = respuesta;

                $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text(mensaje);

                setTimeout(function () {
                    
                    let aplicacionURL = sessionStorage.getItem("aplicacionURL");
                    location.href = aplicacionURL + "/" + "Modulos/ModuloPerfilUsuario/Pagina.php";

                }, 2000);

            } else {

                mensaje = "El correo electrónico del usuario no pudo ser registrado.";

                $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text(mensaje);

                setTimeout(function () {

                    let aplicacionURL = sessionStorage.getItem("aplicacionURL");
                    location.href = aplicacionURL + "/" + "Modulos/ModuloPerfilUsuario/Pagina.php";

                }, 2000);
            }
        }
    });
}

function registrarContrasena() {
    
    let contrasena1 = $("#contrasena1").val();
    let contrasena2 = $("#contrasena2").val();
    let mensaje = "";

    if (contrasena1 === "" | contrasena2 === "") {
        
        mensaje = "Primero debe ingresar la contraseña y su confirmación.";

        $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
        $("#alertaVisual").addClass("show").removeClass("fade");
        $("#mensajeAlertaVisual").text(mensaje);

    } else if (contrasena1 !== contrasena2) {
        
        mensaje = "Su contraseña debe ser igual a la confirmación de su contraseña.";

        $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
        $("#alertaVisual").addClass("show").removeClass("fade");
        $("#mensajeAlertaVisual").text(mensaje);
        
        $("#contrasena1").val("");
        $("#contrasena1").focus();
        $("#contrasena2").val("");
        
    } else {
        
        let contrasena = {
            "id": sessionStorage.getItem("idUsuario"),
            "contrasena": contrasena1
        };
        let aplicacionURL = sessionStorage.getItem("aplicacionURL");     
        let url = aplicacionURL + "/" + "index.php/usuarios?contrasena=" + JSON.stringify(contrasena);
        
        $.ajax({
       
            url: url,
            method: "PUT",
            success: function (respuesta) {
                
                console.log(respuesta);
                
                if (respuesta === "La contraseña del usuario fue corregido de manera exitosa.") {

                    mensaje = respuesta;

                    $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);

                    setTimeout(function () {
                        
                        let aplicacionURL = sessionStorage.getItem("aplicacionURL");
                        location.href = aplicacionURL + "/" + "Modulos/ModuloPerfilUsuario/Pagina.php";

                    }, 2000);

                } else {

                    mensaje = "La contraseña del usuario no pudo ser registrada.";

                    $("#alertaVisual").addClass("alert-danger").removeClass("alert-succes").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);
                }
            }
        });
    }    
}

function irPaginaMenuOpciones () {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");    
    location.href = aplicacionURL + "/" + "Modulos/ModuloMenuOpciones/Pagina.php";    
}

function ocultarAlertaVisual() {
    
    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonCorregir1.addEventListener("click", habilitarCorreccionNombre, false);
botonCorregir2.addEventListener("click", habilitarCorreccionRetrato, false);
botonCorregir3.addEventListener("click", habilitarCorreccionCorreoElectronico, false);
botonCorregir4.addEventListener("click", habilitarCorreccionContrasena, false);
botonBuscar.addEventListener("click", verificarCorreoElectronico, false);
botonRegistrar1.addEventListener("click", registrarNombre, false);
botonRegistrar2.addEventListener("click", registrarRetrato, false);
botonRegistrar3.addEventListener("click", registrarCorreoElectronico, false);
botonRegistrar4.addEventListener("click", registrarContrasena, false);
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




