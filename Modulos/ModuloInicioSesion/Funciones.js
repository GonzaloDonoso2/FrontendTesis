const botonIniciarSesion = document.querySelector("#botonIniciarSesion");

function iniciarSesion() {

    let correoElectronico = $("#correoElectronico").val();
    let contrasena = $("#contrasena").val();
    let mensaje = "Primero ingrese su correo electrónico y contraseña.";

    if (correoElectronico === "" | contrasena === "") {
        
        $("#alertaVisual").addClass("alert-warning").removeClass("alert-danger").removeClass("alert-success");
        $("#alertaVisual").addClass("show").removeClass("fade");
        mensaje = "Primero ingrese su correo electrónico y contraseña.";
        $("#mensajeAlertaVisual").text(mensaje);
        $("#correoElectronico").focus();
        $("#correoElectronico").val("");
        $("#contrasenaUsuario").val("");

    } else {
        
        let usuario = {
            "correoElectronico": correoElectronico,
            "contrasena": contrasena
        };   
        let servidorURL = sessionStorage.getItem("servidorURL");         
        let url = servidorURL + "/" + "index.php/usuarios?usuario=" + JSON.stringify(usuario); 

        $.ajax({   
                      
            url: url,
            method: "GET",
            success: function (provisoriaRespuesta) {
                
                console.log(provisoriaRespuesta);
                
                if (provisoriaRespuesta === "Este usuario no está registrado.") {
                    
                    $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");                    
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text("Su correo electrónico o contraseña no están registrados.");
                    $("#correoElectronicoUsuario").focus();
                    $("#correoElectronicoUsuario").val("");
                    $("#contrasenaUsuario").val("");

                } else {
                    
                    let respuesta = JSON.parse(provisoriaRespuesta);
                    sessionStorage.setItem("idUsuario", respuesta[0].id);
                    sessionStorage.setItem("nombreUsuario", respuesta[0].nombre);
                    sessionStorage.setItem("retratoUsuario", respuesta[0].retrato);
                    let aplicacionURL = sessionStorage.getItem("aplicacionURL");
                    location.href = aplicacionURL + "/" + "Modulos/ModuloMenuOpciones/Pagina.php";                
                }
            }
        });
    }
}

botonIniciarSesion.addEventListener("click", iniciarSesion, false);

const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");

function ocultarAlertaVisual() {
    
    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);




