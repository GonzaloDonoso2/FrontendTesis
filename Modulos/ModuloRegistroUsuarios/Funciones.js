const botonBuscar = document.querySelector("#botonBuscar");
const botonRegistrarse = document.querySelector("#botonRegistrarse");
const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");
const botonVolver = document.querySelector("#botonVolver");

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

                    mensaje = respuesta;

                    $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);
                    
                    document.getElementById("correoElectronico").setAttribute("readonly", true);
                    
                    $("#nombre").removeAttr("readonly");
                    $("#contrasena1").removeAttr("readonly");
                    $("#contrasena2").removeAttr("readonly");
                    $("#botonRegistrarse").removeAttr("disabled");

                } else {

                    mensaje = respuesta;

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

function registrarUsuario() {

    let nombre = $("#nombre").val();
    let correoElectronico = $("#correoElectronico").val();
    let contrasena1 = $("#contrasena1").val();
    let contrasena2 = $("#contrasena2").val();
    let mensaje = "";

    if (nombre === "" | correoElectronico === "" | contrasena1 === "" | contrasena2 === "") {
        
        mensaje = "Primero debe ingresar todos sus datos.";

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
        
        let usuario = {
            "nombre": nombre,
            "retrato": "",
            "correoElectronico": correoElectronico,
            "contrasena": contrasena1
        };
        let servidorURL = sessionStorage.getItem("servidorURL");         
        let url = servidorURL + "/" + "index.php/usuarios?usuario=" + JSON.stringify(usuario);
        
        $.ajax({
       
            url: url,
            method: "POST",
            success: function (respuesta) {
                
                console.log(respuesta);
                
                if (respuesta === "El usuario fue registrado de manera exitosa.") {

                    mensaje = respuesta;
                    $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);

                    setTimeout(function () {
                        
                        let aplicacionURL = sessionStorage.getItem("aplicacionURL");    
                        location.href = aplicacionURL + "/" + "/Modulos/ModuloInicioSesion/Pagina.php";

                    }, 2000);

                } else {

                    mensaje = "El usuario no pudo ser registrado.";
                    $("#alertaVisual").addClass("alert-danger").removeClass("alert-succes").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);
                }
            }
        });
    }
}

function irPaginaIndex () {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");    
    location.href = aplicacionURL + "/" + "index.php";    
}

function ocultarAlertaVisual() {
    
    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonBuscar.addEventListener("click", verificarCorreoElectronico, false);
botonRegistrarse.addEventListener("click", registrarUsuario, false);
botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);
botonVolver.addEventListener("click", irPaginaIndex, false);




