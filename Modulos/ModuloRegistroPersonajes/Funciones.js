$(document).ready(function () {
    
    $("#categoria").val("Cazador");
});

const botonCambiarColorIzquierdo = document.querySelector("#botonCambiarColorIzquierdo");
const botonCambiarColorDerecho = document.querySelector("#botonCambiarColorDerecho");
const botonCambiarCategoriaIzquierdo = document.querySelector("#botonCambiarCategoriaIzquierdo");
const botonCambiarCategoriaDerecho = document.querySelector("#botonCambiarCategoriaDerecho");
const botonRegistrarse = document.querySelector("#botonRegistrarse");
const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");
const botonVolver = document.querySelector("#botonVolver");

var categoriaPersonaje;
var colorPersonaje;

function cambiarColorIzquierdo () {
    
    let rutaCompletaImagen = document.getElementById("retratoPersonaje").src;
    let arrayRutaCompletaImagen = rutaCompletaImagen.split("Retratos");
    let rutaComunImagen = arrayRutaCompletaImagen[0] + "Retratos/";
    let rutaParticularImagen = arrayRutaCompletaImagen[1];
    let arrayCategoriaColorPersonaje = rutaParticularImagen.split("/");
    let categoriaPersonaje = arrayCategoriaColorPersonaje[1];
    let colorPersonaje = arrayCategoriaColorPersonaje[2];
    
    if (colorPersonaje === "Amarillo.png") {
        
        colorPersonaje = "Verde.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;        
        
    } else if (colorPersonaje === "Verde.png") {
        
        colorPersonaje = "Rojo.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Rojo.png") {
        
        colorPersonaje = "Naranjo.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Naranjo.png") {
        
        colorPersonaje = "Morado.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Morado.png") {
        
        colorPersonaje = "Azul.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Azul.png") {
        
        colorPersonaje = "Amarillo.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;         
    }
}

function cambiarColorDerecho () {
    
    let rutaCompletaImagen = document.getElementById("retratoPersonaje").src;
    let arrayRutaCompletaImagen = rutaCompletaImagen.split("Retratos");
    let rutaComunImagen = arrayRutaCompletaImagen[0] + "Retratos/";
    let rutaParticularImagen = arrayRutaCompletaImagen[1];
    let arrayCategoriaColorPersonaje = rutaParticularImagen.split("/");
    let categoriaPersonaje = arrayCategoriaColorPersonaje[1];
    let colorPersonaje = arrayCategoriaColorPersonaje[2];
    
    if (colorPersonaje === "Amarillo.png") {
        
        colorPersonaje = "Azul.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;        
        
    } else if (colorPersonaje === "Azul.png") {
        
        colorPersonaje = "Morado.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Morado.png") {
        
        colorPersonaje = "Naranjo.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Naranjo.png") {
        
        colorPersonaje = "Rojo.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Rojo.png") {
        
        colorPersonaje = "Verde.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (colorPersonaje === "Verde.png") {
        
        colorPersonaje = "Amarillo.png";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;         
    }
}

function cambiarCategoriaIzquierdo () {
    
    let rutaCompletaImagen = document.getElementById("retratoPersonaje").src;
    let arrayRutaCompletaImagen = rutaCompletaImagen.split("Retratos");
    let rutaComunImagen = arrayRutaCompletaImagen[0] + "Retratos/";
    let rutaParticularImagen = arrayRutaCompletaImagen[1];
    let arrayCategoriaColorPersonaje = rutaParticularImagen.split("/");
    let categoriaPersonaje = arrayCategoriaColorPersonaje[1];
    let colorPersonaje = arrayCategoriaColorPersonaje[2];
    
    if (categoriaPersonaje === "Cazador") {
        
        categoriaPersonaje = "Zombi";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;        
        
    } else if (categoriaPersonaje === "Zombi") {
        
        categoriaPersonaje = "Medico";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (categoriaPersonaje === "Medico") {
        
        categoriaPersonaje = "Berserker";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (categoriaPersonaje === "Berserker") {
        
        categoriaPersonaje = "Centurion";  
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (categoriaPersonaje === "Centurion") {
        
        categoriaPersonaje = "Cazador";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;         
    } 
}

function cambiarCategoriaDerecho () {
    
    let rutaCompletaImagen = document.getElementById("retratoPersonaje").src;
    let arrayRutaCompletaImagen = rutaCompletaImagen.split("Retratos");
    let rutaComunImagen = arrayRutaCompletaImagen[0] + "Retratos/";
    let rutaParticularImagen = arrayRutaCompletaImagen[1];
    let arrayCategoriaColorPersonaje = rutaParticularImagen.split("/");
    let categoriaPersonaje = arrayCategoriaColorPersonaje[1];
    let colorPersonaje = arrayCategoriaColorPersonaje[2];
    
    if (categoriaPersonaje === "Cazador") {
        
        categoriaPersonaje = "Centurion"; 
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;        
        
    } else if (categoriaPersonaje === "Centurion") {  
        
        categoriaPersonaje = "Berserker";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (categoriaPersonaje === "Berserker") {
        
        categoriaPersonaje = "Medico";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (categoriaPersonaje === "Medico") {
        
        categoriaPersonaje = "Zombi";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje; 
        
    } else if (categoriaPersonaje === "Zombi") {
        
        categoriaPersonaje = "Cazador";        
        retratoPersonaje = rutaComunImagen + categoriaPersonaje + "/" + colorPersonaje;
        
        $("#categoria").val(categoriaPersonaje);
        
        document.getElementById("retratoPersonaje").src = retratoPersonaje;         
    } 
}

function registrarPersonaje() {
    
    let rutaCompletaImagen = document.getElementById("retratoPersonaje").src;
    let arrayRutaCompletaImagen = rutaCompletaImagen.split("Retratos");
    let rutaParticularImagen = arrayRutaCompletaImagen[1];
    let arrayCategoriaColorPersonaje = rutaParticularImagen.split("/");
    let categoriaPersonaje = arrayCategoriaColorPersonaje[1];
    let idCategoria;
    
    if (categoriaPersonaje === "Cazador") {
        
        idCategoria = 1;   
        
    } else if (categoriaPersonaje === "Centurion") {  
        
        idCategoria = 2;   
        
    } else if (categoriaPersonaje === "Berserker") {
        
       idCategoria = 3;   
        
    } else if (categoriaPersonaje === "Medico") {
        
       idCategoria = 4;   
        
    } else if (categoriaPersonaje === "Zombi") {
        
        idCategoria = 5;          
    } 
    
    let colorPersonaje = arrayCategoriaColorPersonaje[2];
    let nombre = $("#nombre").val();
    let agilidad = $("#agilidad").val();
    let destreza = $("#destreza").val();
    let intelecto = $("#intelecto").val();
    let punteria = $("#punteria").val();
    let vigor = $("#vigor").val();
    let heroismo = $("#heroismo").val();

    if (nombre === "" | agilidad === "" | destreza === "" | intelecto === "" | punteria === "" | vigor === "" | heroismo === "") {
        
        mensaje = "Primero debe ingresar todos los datos del personaje.";

        $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
        $("#alertaVisual").addClass("show").removeClass("fade");
        $("#mensajeAlertaVisual").text(mensaje);
        
    } else {
        
        let personaje = {
            "nombre": nombre,
            "color": colorPersonaje,
            "agilidad": agilidad,
            "destreza": destreza,
            "intelecto": intelecto,
            "punteria": punteria,
            "vigor": vigor,
            "heroismo": heroismo,
            "idUsuario": sessionStorage.getItem("idUsuario"),
            "idCategoria": idCategoria
        };
        let servidorURL = sessionStorage.getItem("servidorURL");     
        let url = servidorURL + "/" + "index.php/personajes?personaje=" + JSON.stringify(personaje);
        
        $.ajax({
       
            url: url,
            method: "POST",
            success: function (respuesta) {
                
                console.log(respuesta);
                
                if (respuesta === "El personaje fue registrado de manera exitosa.") {

                    mensaje = respuesta;

                    $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text(mensaje);

                    setTimeout(function () {
                        
                        let aplicacionURL = sessionStorage.getItem("aplicacionURL");    
                        location.href = aplicacionURL + "/" + "ModuloMenuOpciones/Pagina.php";

                    }, 2000);

                } else {

                    mensaje = "El personaje no pudo ser registrado.";

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

botonCambiarColorIzquierdo.addEventListener("click", cambiarColorIzquierdo, false);
botonCambiarColorDerecho.addEventListener("click", cambiarColorDerecho, false);
botonCambiarCategoriaIzquierdo.addEventListener("click", cambiarCategoriaIzquierdo, false);
botonCambiarCategoriaDerecho.addEventListener("click", cambiarCategoriaDerecho, false);
botonRegistrarse.addEventListener("click", registrarPersonaje, false);
botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);
botonVolver.addEventListener("click", irPaginaMenuOpciones, false);

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









