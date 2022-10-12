$(document).ready(function () {

    validarInicioSesion();
});

function validarInicioSesion() {

    if (sessionStorage.getItem("nombreUsuario") === null) {

        location.href = "http://localhost/Prototipo.01/Modulos/ModuloInicioSesion/Pagina.php";

    } else {
        
        $("#campoIndicadorTurno").val("Clarck");

        crearPosiciones();
        obtenerPersonajes();
        let nombreUsuario = sessionStorage.getItem("nombreUsuario");
        $("#nombreUsuario").text(nombreUsuario);
    }
}

const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");
const imagenTablero = document.querySelector("#imagenTablero");

var listaPosiciones = [];
var listaPersonajes = [];

function crearPosiciones() {

    let columna = 0;
    let letraColumna;
    let fila = 0;    
    let aumentoCoordenadasX = 0;
    let aumentoCoordenadasY = 0;
    let disminucionCoordenadasX = 0;
    let segundoAumentoCoordenadasY = 0;

    for (let i = 1; i < 401; i++) {

        columna++;        
        aumentoCoordenadasX = (aumentoCoordenadasX + 32);
        aumentoCoordenadasY = (aumentoCoordenadasY + 16);

        if (columna > 20) {

            columna = 1;            
            disminucionCoordenadasX = (disminucionCoordenadasX + 32);
            segundoAumentoCoordenadasY = (segundoAumentoCoordenadasY + 16);
            aumentoCoordenadasX = (32 - disminucionCoordenadasX);
            aumentoCoordenadasY = (16 + segundoAumentoCoordenadasY);
        }
        
        if (columna === 1) {

            letraColumna = "A";

        } else if (columna === 2) {

            letraColumna = "B";

        } else if (columna === 3) {

            letraColumna = "C";

        } else if (columna === 4) {

            letraColumna = "D";

        } else if (columna === 5) {

            letraColumna = "E";

        } else if (columna === 6) {

            letraColumna = "F";

        } else if (columna === 7) {

            letraColumna = "G";

        } else if (columna === 8) {

            letraColumna = "H";

        } else if (columna === 9) {

            letraColumna = "I";

        } else if (columna === 10) {

            letraColumna = "J";

        } else if (columna === 11) {

            letraColumna = "K";

        } else if (columna === 12) {

            letraColumna = "L";

        } else if (columna === 13) {

            letraColumna = "M";

        } else if (columna === 14) {

            letraColumna = "N";

        } else if (columna === 15) {

            letraColumna = "O";

        } else if (columna === 16) {

            letraColumna = "P";

        } else if (columna === 17) {

            letraColumna = "Q";

        } else if (columna === 18) {

            letraColumna = "R";

        } else if (columna === 19) {

            letraColumna = "S";

        } else if (columna === 20) {

            letraColumna = "T";
        }

        let x = (i / 20);

        if (fila < x) {

            fila++;
        }

        let nombre = (fila + letraColumna);
        
        let posicion = {
            
            "nombre": nombre,
            "columna": columna,
            "fila": fila,
            "coordenadaX1": (640 + aumentoCoordenadasX),
            "coordenadaX2": (647 + aumentoCoordenadasX),
            "coordenadaX3": (632 + aumentoCoordenadasX),
            "coordenadaX4": (655 + aumentoCoordenadasX),
            "coordenadaX5": (624 + aumentoCoordenadasX),
            "coordenadaX6": (663 + aumentoCoordenadasX),
            "coordenadaX7": (616 + aumentoCoordenadasX),
            "coordenadaX8": (671 + aumentoCoordenadasX),
            "coordenadaX9": (624 + aumentoCoordenadasX),
            "coordenadaX10": (663 + aumentoCoordenadasX),
            "coordenadaX11": (632 + aumentoCoordenadasX),
            "coordenadaX12": (655 + aumentoCoordenadasX),
            "coordenadaX13": (640 + aumentoCoordenadasX),
            "coordenadaX14": (647 + aumentoCoordenadasX),
            "coordenadaY1": (20 + aumentoCoordenadasY),
            "coordenadaY2": (23 + aumentoCoordenadasY),
            "coordenadaY3": (24 + aumentoCoordenadasY),
            "coordenadaY4": (27 + aumentoCoordenadasY),
            "coordenadaY5": (28 + aumentoCoordenadasY),
            "coordenadaY6": (31 + aumentoCoordenadasY),
            "coordenadaY7": (32 + aumentoCoordenadasY),
            "coordenadaY8": (35 + aumentoCoordenadasY),
            "coordenadaY9": (36 + aumentoCoordenadasY),
            "coordenadaY10": (39 + aumentoCoordenadasY),
            "coordenadaY11": (40 + aumentoCoordenadasY),
            "coordenadaY12": (43 + aumentoCoordenadasY),
            "coordenadaY13": (44 + aumentoCoordenadasY),
            "coordenadaY14": (47 + aumentoCoordenadasY),
            "disponibilidad": true,
            "estado": "SIN ESTADO"
        };
        
        this.listaPosiciones.push(posicion);
    }
}

/*$("#contenedorTablero").click(function (evento) {
    
    x = evento.offsetX;
    y = evento.offsetY;

    obtenerCoordenadasX_Y(x, y);
});*/

/*function obtenerCoordenadasX_Y(x, y){
    
    let coordenadaX = x;
    let coordenadaY = y;
    let mensaje;

    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if ((coordenadaX >= this.listaPosiciones[i].coordenadaX7 & coordenadaX <= this.listaPosiciones[i].coordenadaX8) & (coordenadaY >= this.listaPosiciones[i].coordenadaY1 & coordenadaY <= this.listaPosiciones[i].coordenadaY14)) {

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX1 & coordenadaX <= this.listaPosiciones[i].coordenadaX2) & (coordenadaY >= this.listaPosiciones[i].coordenadaY1 & coordenadaY <= this.listaPosiciones[i].coordenadaY2)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
                    mensaje = this.listaPosiciones[i].nombre;
                    $("#mensajeAlertaVisual").text(mensaje);
                    break;
                }
            }

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX3 & coordenadaX <= this.listaPosiciones[i].coordenadaX4) & (coordenadaY >= this.listaPosiciones[i].coordenadaY3 & coordenadaY <= this.listaPosiciones[i].coordenadaY4)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
                    mensaje = this.listaPosiciones[i].nombre;
                    $("#mensajeAlertaVisual").text(mensaje);
                    break;
                }
            }

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX5 & coordenadaX <= this.listaPosiciones[i].coordenadaX6) & (coordenadaY >= this.listaPosiciones[i].coordenadaY5 & coordenadaY <= this.listaPosiciones[i].coordenadaY6)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
                    mensaje = this.listaPosiciones[i].nombre;
                    $("#mensajeAlertaVisual").text(mensaje);
                    break;
                }
            }

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX7 & coordenadaX <= this.listaPosiciones[i].coordenadaX8) & (coordenadaY >= this.listaPosiciones[i].coordenadaY7 & coordenadaY <= this.listaPosiciones[i].coordenadaY8)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
                    mensaje = this.listaPosiciones[i].nombre;
                    $("#mensajeAlertaVisual").text(mensaje);
                    break;
                }
            }

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX9 & coordenadaX <= this.listaPosiciones[i].coordenadaX10) & (coordenadaY >= this.listaPosiciones[i].coordenadaY9 & coordenadaY <= this.listaPosiciones[i].coordenadaY10)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
                    mensaje = this.listaPosiciones[i].nombre;
                    $("#mensajeAlertaVisual").text(mensaje);
                    break;
                }
            }

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX11 & coordenadaX <= this.listaPosiciones[i].coordenadaX12) & (coordenadaY >= this.listaPosiciones[i].coordenadaY11 & coordenadaY <= this.listaPosiciones[i].coordenadaY12)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
                    mensaje = this.listaPosiciones[i].nombre;
                    $("#mensajeAlertaVisual").text(mensaje);
                    break;
                }
            }

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX13 & coordenadaX <= this.listaPosiciones[i].coordenadaX14) & (coordenadaY >= this.listaPosiciones[i].coordenadaY13 & coordenadaY <= this.listaPosiciones[i].coordenadaY14)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
                    mensaje = this.listaPosiciones[i].nombre;
                    $("#mensajeAlertaVisual").text(mensaje);
                    break;
                }
            }
        }
    }
}*/

function obtenerPersonajes() {

    let id = {
        
        "id": sessionStorage.getItem("idUsuario")
    };

    let url = "http://localhost/PrototipoServidor.01/index.php/personajes?id=" + JSON.stringify(id);

    $.ajax({

        url: url,
        method: "GET",
        success: function (respuesta) {

            let listaPersonajes = JSON.parse(respuesta);

            for (let i = 0; i < listaPersonajes.length; i++) {
                
                let id = listaPersonajes[i].id;                
                let nombre = listaPersonajes[i].nombre;
                let categoria = listaPersonajes[i].categoria;
                let color = listaPersonajes[i].color;
                let agilidad = listaPersonajes[i].agilidad;
                let destreza = listaPersonajes[i].destreza;
                let intelecto = listaPersonajes[i].intelecto;
                let punteria = listaPersonajes[i].punteria;
                let vigor = listaPersonajes[i].vigor;
                let movimiento = listaPersonajes[i].movimiento;
                let heroismo = listaPersonajes[i].heroismo;                
                
                crearPersonajes(id, nombre, color, agilidad, destreza, intelecto, punteria, vigor, movimiento, heroismo, categoria);
            }
        }
    });
}

function crearPersonajes(a, b, c, d, e, f, g, h, i, j, k) {
    
    let id = parseInt(a);
    let nombre = b;
    let color = c;
    let agilidad = parseInt(d);
    let destreza = parseInt(e);
    let intelecto = parseInt(f);
    let punteria = parseInt(g);
    let vigor = parseInt(h);
    let movimiento = parseInt(i);
    let heroismo = parseInt(j);
    let categoria = k;
    let posicion = "10J";
    
    let personaje = {
        "id": id,
        "nombre": nombre,
        "color": color,
        "agilidad": agilidad,
        "destreza": destreza,
        "intelecto": intelecto,
        "punteria": punteria,
        "vigor": vigor,
        "movimiento" : movimiento,
        "heroismo": heroismo,
        "categoria": categoria,
        "posicion": posicion,
        "coordenadaX": "",
        "coordenadaY": ""
    };
    
    this.listaPersonajes.push(personaje);
    
    let plantilla = "";
    
    let coordenadaX = 0;
    let coordenadaY = 0;
    
    for (let l = 0; l < this.listaPersonajes.length; l++) {

        for (let m = 0; m < this.listaPosiciones.length; m++) {

            if (this.listaPersonajes[l].posicion === this.listaPosiciones[m].nombre) {

                coordenadaX = (this.listaPosiciones[m].coordenadaX7 + 12);
                coordenadaY = (this.listaPosiciones[m].coordenadaY1 - 44);
                this.listaPosiciones[m].disponibilidad = false;
            }
        }

        plantilla += `
            <img 
                height="64px"
                id="personaje${this.listaPersonajes[l].id}"
                src="../../Imagenes/Personajes/Miniaturas/Posturas/Abajo/${this.listaPersonajes[l].categoria}/${this.listaPersonajes[l].color}"
                style="left:${coordenadaX}px; position:absolute; top:${coordenadaY}px; z-index:1;"
                title="${this.listaPersonajes[l].nombre}"
                width="40px"
            >`;

        $("#contenedorTablero").append(plantilla);
    }    
}

var posicionActualPersonaje;

function obtenerInformacionPersonaje (x) {
    
    let X = parseInt(x);
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {
        
        if (this.listaPersonajes[i].identificador === X) {
            
            $("#nombrePersonaje").text(this.listaPersonajes[i].nombre);
            let imagenRetrato = `Imagenes/Retratos/${this.listaPersonajes[i].retrato}/${this.listaPersonajes[i].retrato}.png`;
            document.getElementById("retratoPersonaje").src = imagenRetrato;
            $("#alcancePersonaje").text(this.listaPersonajes[i].alcance);
            $("#ataquePersonaje").text(this.listaPersonajes[i].ataque);
            $("#danoPersonaje").text(this.listaPersonajes[i].dano);
            $("#defensaPersonaje").text(this.listaPersonajes[i].defensa);
            $("#movimientoPersonaje").text(this.listaPersonajes[i].movimiento);
            let saludActual = this.listaPersonajes[i].salud + "/" + this.listaPersonajes[i].salud;
            $("#saludPersonaje").text(saludActual);
            
            this.posicionActualPersonaje = this.listaPersonajes[i].posicion;
        }        
    }    
}

const botonMoverse = document.querySelector("#botonMoverse");

var listaCuadradosMovimiento = [];
var listaBotonesMovimiento = [];

function crearCuadradosMovimiento() {
    
    let nombrePersonajeTurno = $("#campoIndicadorTurno").val();
    let idPersonaje;
    let movimientoPersonajeTemporal;
    let movimientoPersonaje;
    let posicionPersonaje;    
    let columna;
    let fila;
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {

        if (this.listaPersonajes[i].nombre === nombrePersonajeTurno) {
            
            idPersonaje = this.listaPersonajes[i].id;
            movimientoPersonajeTemporal = this.listaPersonajes[i].movimiento;
            posicionPersonaje = this.listaPersonajes[i].posicion;
        }
    }
    
    let idImagenPersonaje = "personaje" + idPersonaje;
    document.getElementById(idImagenPersonaje).style.opacity = "0.2";

    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].nombre === posicionPersonaje) {

            columna = this.listaPosiciones[i].columna;
            fila = this.listaPosiciones[i].fila;
        }
    }
        
    movimientoPersonaje = parseInt(movimientoPersonajeTemporal);    
    let limiteVerticalSuperior = (fila - movimientoPersonaje);
    let limiteVerticalInferior = (fila + movimientoPersonaje);
    let incrementoIzquierdo = 0;
    let incrementoDerecho = 0;
    
    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].disponibilidad === true) {

            if (this.listaPosiciones[i].fila >= limiteVerticalSuperior & this.listaPosiciones[i].fila <= limiteVerticalInferior) {

                if (this.listaPosiciones[i].columna >= (columna - incrementoIzquierdo) & this.listaPosiciones[i].columna <= (columna + incrementoDerecho)) {

                    let cuadradoCoordenadaX = (this.listaPosiciones[i].coordenadaX7 - 8);
                    let botonCoortdendaX = (this.listaPosiciones[i].coordenadaX7 + 5);
                    let cuadradoCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 4);
                    let botonCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 5);
                    
                    let plantillaCuadrados = `
                        <img
                            height="36px"
                            id="cuadradoMovimiento${this.listaPosiciones[i].nombre}"
                            src="../../Imagenes/Cuadrados/AzulA.png"
                            style='left:${cuadradoCoordenadaX}px; position:absolute; top:${cuadradoCoordenadaY}px; z-index:0;'
                            width="72px"
                        >`;
                    
                    let plantillaBotones= `
                        <button
                            class="btn btn-link-primary"
                            id="botonMovimiento${this.listaPosiciones[i].nombre}"
                            onclick="seleccionarPosicion('${this.listaPosiciones[i].nombre}', '${idPersonaje}')"
                            src="../../Imagenes/Cuadrados/AzulA.png"
                            style='left:${botonCoortdendaX}px; position:absolute; top:${botonCoordenadaY}px; z-index:2;'
                            title="Posición: ${this.listaPosiciones[i].nombre}"
                        ><i class="fa-solid fa-arrows-to-circle"></i></button>`;

                    $("#contenedorTablero").append(plantillaCuadrados);
                    $("#contenedorTablero").append(plantillaBotones);
                    
                    let cuadradoMovimiento = {
                        
                        "id" : this.listaPosiciones[i].nombre
                    }
                    
                    let botonMovimiento = {
                        
                        "id" : this.listaPosiciones[i].nombre
                    }
                    
                    this.listaCuadradosMovimiento.push(cuadradoMovimiento);
                    this.listaBotonesMovimiento.push(botonMovimiento);
                }
                
                if (this.listaPosiciones[i].columna === 20) {

                    if (this.listaPosiciones[i].fila < fila) {
                        
                        incrementoIzquierdo = (incrementoIzquierdo + 1);
                        incrementoDerecho = (incrementoDerecho + 1);

                    } else {
                        
                        incrementoIzquierdo = (incrementoIzquierdo - 1);
                        incrementoDerecho = (incrementoDerecho - 1);
                    }
                }
            }
        }
    }
    
    /*$("#contenedorTablero").click(function (evento) {

        x = evento.offsetX;
        y = evento.offsetY;

        obtenerPosicionSeleccionda(x, y);
    });*/
}

var idPersonajeActivo;
var posicionActualPersonajeActivo;
var posicionNuevaPersonajeActitvo;

function seleccionarPosicion(x, y) {
    
    let idPosicion = "cuadradoMovimiento" + x; 
    let idPersonaje = "personaje" + y;
    
    document.getElementById(idPosicion).src = "../../Imagenes/Cuadrados/AzulB.png";
    
    for (let i = 0; i < this.listaBotonesMovimiento.length; i++) {
        
        let idBotonMovimientoDesactivar = "botonMovimiento" + this.listaBotonesMovimiento[i].id;
        
        document.getElementById(idBotonMovimientoDesactivar).disabled = true;
    }
    
    $("#panelMensajesMovimiento").modal("show");
}

function moverPersonaje () {
    
    document.getElementById(idPersonaje).style.opacity = "0.8";
    
    
    
}

$("#contenedorTablero").click(function (evento) {

    x = evento.offsetX;
    y = evento.offsetY;

    obtenerPosicionSeleccionda(x, y);
});

function obtenerPosicionSeleccionda(x, y) {    
    
    let coordenadaX = x;
    let coordenadaY = y;
    let posicion;

    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if ((coordenadaX >= this.listaPosiciones[i].coordenadaX7 & coordenadaX <= this.listaPosiciones[i].coordenadaX8) & (coordenadaY >= this.listaPosiciones[i].coordenadaY1 & coordenadaY <= this.listaPosiciones[i].coordenadaY14)) {

            if ((coordenadaX >= this.listaPosiciones[i].coordenadaX1 & coordenadaX <= this.listaPosiciones[i].coordenadaX2) & (coordenadaY >= this.listaPosiciones[i].coordenadaY1 & coordenadaY <= this.listaPosiciones[i].coordenadaY2)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    posicion = this.listaPosiciones[i].nombre;
                    console.log(posicion);
                    break;
                }

            } else if ((coordenadaX >= this.listaPosiciones[i].coordenadaX3 & coordenadaX <= this.listaPosiciones[i].coordenadaX4) & (coordenadaY >= this.listaPosiciones[i].coordenadaY3 & coordenadaY <= this.listaPosiciones[i].coordenadaY4)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    posicion = this.listaPosiciones[i].nombre;
                    console.log(posicion);
                    break;
                }

            } else if ((coordenadaX >= this.listaPosiciones[i].coordenadaX5 & coordenadaX <= this.listaPosiciones[i].coordenadaX6) & (coordenadaY >= this.listaPosiciones[i].coordenadaY5 & coordenadaY <= this.listaPosiciones[i].coordenadaY6)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    posicion = this.listaPosiciones[i].nombre;
                    console.log(posicion);
                    break;
                }

            } else if ((coordenadaX >= this.listaPosiciones[i].coordenadaX7 & coordenadaX <= this.listaPosiciones[i].coordenadaX8) & (coordenadaY >= this.listaPosiciones[i].coordenadaY7 & coordenadaY <= this.listaPosiciones[i].coordenadaY8)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    posicion = this.listaPosiciones[i].nombre;
                    console.log(posicion);
                    break;
                }

            } else if ((coordenadaX >= this.listaPosiciones[i].coordenadaX9 & coordenadaX <= this.listaPosiciones[i].coordenadaX10) & (coordenadaY >= this.listaPosiciones[i].coordenadaY9 & coordenadaY <= this.listaPosiciones[i].coordenadaY10)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    posicion = this.listaPosiciones[i].nombre;
                    console.log(posicion);
                    break;
                }

            } else if ((coordenadaX >= this.listaPosiciones[i].coordenadaX11 & coordenadaX <= this.listaPosiciones[i].coordenadaX12) & (coordenadaY >= this.listaPosiciones[i].coordenadaY11 & coordenadaY <= this.listaPosiciones[i].coordenadaY12)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    posicion = this.listaPosiciones[i].nombre;
                    console.log(posicion);
                    break;
                }

            } else if ((coordenadaX >= this.listaPosiciones[i].coordenadaX13 & coordenadaX <= this.listaPosiciones[i].coordenadaX14) & (coordenadaY >= this.listaPosiciones[i].coordenadaY13 & coordenadaY <= this.listaPosiciones[i].coordenadaY14)) {

                for (let j = 0; j < this.listaPosiciones.length; j++) {

                    posicion = this.listaPosiciones[i].nombre;
                    console.log(posicion);
                    break;
                }
            }
        }
    }
    
    /*for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].nombre === posicion) {

            if (this.listaPosiciones[i].disponibilidad === true) {
                
                console.log(this.listaPosiciones[i]);

                mensaje = "OK";

                $("#alertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text(mensaje);

            } else {

                mensaje = "Debe seleccionar una posición disponible en el tablero.";

                $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text(mensaje);
            }
        }
    }*/
    
    /*for (var i = 0; i < this.listaCuadradosMovimiento.length; i++) {
        
        if (this.listaPosiciones === true) {
            
            if (this.listaCuadradosMovimiento === posicion) {

            mensaje = "Primero debe ingresar todos los datos del personaje.";

            $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
            $("#alertaVisual").addClass("show").removeClass("fade");
            $("#mensajeAlertaVisual").text(mensaje);

        } else {
            
            let a = "";

        }      
            
        } else{
            
        }
    }*/
}

function ocultarAlertaVisual() {
    
    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);
