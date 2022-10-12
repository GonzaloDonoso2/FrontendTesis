let URL = window.location.toString();
let aplicacionURL;
let servidorURL;

if (URL === "https://frontendtesis1.herokuapp.com/") {
    
    aplicacionURL = "https://frontendtesis1.herokuapp.com";
    servidorURL = "https://backendtesis1.herokuapp.com";
    sessionStorage.setItem("aplicacionURL", aplicacionURL);
    sessionStorage.setItem("servidorURL", servidorURL);   
    
} else {
    
    aplicacionURL = "http://localhost/Prototipo.01";    
    servidorURL = "http://localhost/PrototipoServidor.01";
    sessionStorage.setItem("aplicacionURL", aplicacionURL);
    sessionStorage.setItem("servidorURL", servidorURL);   
}

const botonIniciarSesion = document.querySelector("#botonIniciarSesion");

function irPaginaInicioSesion() {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");    
    location.href = aplicacionURL + "/" + "Modulos/ModuloInicioSesion/Pagina.php";
}

botonIniciarSesion.addEventListener("click", irPaginaInicioSesion, false);

const botonRegistrarse = document.querySelector("#botonRegistrarse");

function irPaginaRegistroUsuarios() {
    
    let aplicacionURL = sessionStorage.getItem("aplicacionURL");    
    location.href = aplicacionURL + "/" + "Modulos/ModuloRegistroUsuarios/Pagina.php";
}

botonRegistrarse.addEventListener("click", irPaginaRegistroUsuarios, false);

const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");

function ocultarAlertaVisual() {
    
    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);
