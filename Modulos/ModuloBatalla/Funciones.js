$(document).ready(function () {

    validarInicioSesion();
});

function validarInicioSesion() {

    if (sessionStorage.getItem("nombreUsuario") === null) {
        
        let aplicacionURL = sessionStorage.getItem("aplicacionURL");
        location.href = aplicacionURL + "/" + "Modulos/ModuloInicioSesion/Pagina.php";

    } else {
        
        let nombreUsuario = sessionStorage.getItem("nombreUsuario");
        $("#nombreUsuario").text(nombreUsuario);
        crearPosiciones();        
        obtenerBatalla();
    }
}

function obtenerBatalla() {

    let Desafio = {

        "id": sessionStorage.getItem("idDesafio"),
    };
    let servidorURL = sessionStorage.getItem("servidorURL");    
    let url = servidorURL + "/" + "index.php/batallas?desafio=" + JSON.stringify(Desafio);

    $.ajax({
        url: url,
        method: "GET",
        success: function (provisoriaRespuesta) {

            let provisoriaRespuestaBatalla = JSON.parse(provisoriaRespuesta);
            console.log(provisoriaRespuestaBatalla);     
            sessionStorage.setItem("idUsuario1", provisoriaRespuestaBatalla[0].usuario1.idUsuario1);
            sessionStorage.setItem("nombreUsuario1", provisoriaRespuestaBatalla[0].usuario1.nombreUsuario1);
            sessionStorage.setItem("colorUsuario1", provisoriaRespuestaBatalla[0].usuario1.colorUsuario1);
            sessionStorage.setItem("idUsuario2", provisoriaRespuestaBatalla[1].usuario2.idUsuario2);
            sessionStorage.setItem("nombreUsuario2", provisoriaRespuestaBatalla[1].usuario2.nombreUsuario2);
            sessionStorage.setItem("colorUsuario2", provisoriaRespuestaBatalla[1].usuario2.colorUsuario2);            
            let personaje1 = provisoriaRespuestaBatalla[2].personajesUsuario1;            
            let personaje2 = provisoriaRespuestaBatalla[3].personajesUsuario1;
            let personaje3 = provisoriaRespuestaBatalla[4].personajesUsuario2;
            let personaje4 = provisoriaRespuestaBatalla[5].personajesUsuario2;
            let orientacion1 = "Derecha";
            let orientacion2 = "Izquierda";
            let posicion1 = "2B";
            let posicion2 = "3B";
            let posicion3 = "18S";
            let posicion4 = "19S";            
            crearPersonajes(sessionStorage.getItem("idUsuario1"), personaje1.idPersonaje, personaje1.nombrePersonaje, personaje1.categoria, sessionStorage.getItem("colorUsuario1"), personaje1.alcanceArma, personaje1.ataqueArma, personaje1.danoArma, personaje1.defensaArma, personaje1.defensaArmadura, personaje1.evasion, personaje1.iniciativa, personaje1.punteriaArma, personaje1.resistenciaArma, personaje1.resistenciaArmadura, personaje1.salud, personaje1.tipoDano, orientacion1, posicion1);
            crearPersonajes(sessionStorage.getItem("idUsuario1"), personaje2.idPersonaje, personaje2.nombrePersonaje, personaje2.categoria, sessionStorage.getItem("colorUsuario1"), personaje2.alcanceArma, personaje2.ataqueArma, personaje2.danoArma, personaje2.defensaArma, personaje2.defensaArmadura, personaje2.evasion, personaje2.iniciativa, personaje2.punteriaArma, personaje2.resistenciaArma, personaje2.resistenciaArmadura, personaje2.salud, personaje2.tipoDano, orientacion1, posicion2);
            crearPersonajes(sessionStorage.getItem("idUsuario2"), personaje3.idPersonaje, personaje3.nombrePersonaje, personaje3.categoria, sessionStorage.getItem("colorUsuario2"), personaje3.alcanceArma, personaje3.ataqueArma, personaje3.danoArma, personaje3.defensaArma, personaje3.defensaArmadura, personaje3.evasion, personaje3.iniciativa, personaje3.punteriaArma, personaje3.resistenciaArma, personaje3.resistenciaArmadura, personaje3.salud, personaje3.tipoDano, orientacion2, posicion3);
            crearPersonajes(sessionStorage.getItem("idUsuario2"), personaje4.idPersonaje, personaje4.nombrePersonaje, personaje4.categoria, sessionStorage.getItem("colorUsuario2"), personaje4.alcanceArma, personaje4.ataqueArma, personaje4.danoArma, personaje4.defensaArma, personaje4.defensaArmadura, personaje4.evasion, personaje4.iniciativa, personaje4.punteriaArma, personaje4.resistenciaArma, personaje4.resistenciaArmadura, personaje4.salud, personaje4.tipoDano, orientacion2, posicion4);
        }
    });
}

const botonOcultarAlertaVisual = document.querySelector("#botonOcultarAlertaVisual");
const imagenTablero = document.querySelector("#imagenTablero");

var listaPosiciones = [];

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

var listaPersonajes = [];

function crearPersonajes(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    
    let idUsuario = parseInt(a);  
    let id = parseInt(b);
    let nombre = c;
    let categoria = d;
    let color = e;
    let alcanceArma = parseInt(f);
    let ataqueArma = parseInt(g);
    let danoArma = parseInt(h);
    let defensaArma = parseInt(i);
    let defensaArmadura = parseInt(j);
    let evasion = parseInt(k);
    let iniciativa = parseInt(l);
    let punteriaArma = parseInt(m);
    let resistenciaArma = parseInt(n);
    let resistenciaArmadura = parseInt(o);
    let salud = parseInt(p);
    let orientacion = r;
    let posicion = s;
    
    let personaje = {
        "idUsuario": idUsuario,
        "id": id,
        "nombre": nombre,
        "categoria": categoria,
        "color": color,  
        "alcanceArma": alcanceArma, 
        "ataqueArma": ataqueArma,
        "danoArma": danoArma,
        "defensaArma": defensaArma,
        "defensaArmadura": defensaArmadura,
        "evasion": evasion,
        "iniciativa": iniciativa,
        "punteriaArma": punteriaArma,
        "resistenciaArma": resistenciaArma,
        "resistenciaArmadura": resistenciaArmadura,
        "salud": salud,
        "orientacion": orientacion,
        "posicion": posicion,
        "coordenadaX": "",
        "coordenadaY": ""
    };
    
    console.log(personaje);
    
    this.listaPersonajes.push(personaje);
    
    let plantilla = "";    
    let coordenadaX = 0;
    let coordenadaY = 0;
    
    for (let l = 0; l < this.listaPersonajes.length; l++) {

        for (let m = 0; m < this.listaPosiciones.length; m++) {

            if (this.listaPersonajes[l].posicion === this.listaPosiciones[m].nombre) {

                coordenadaX = (this.listaPosiciones[m].coordenadaX7 + 8);
                coordenadaY = (this.listaPosiciones[m].coordenadaY1 - 44);
                this.listaPosiciones[m].disponibilidad = false;
            }
        }

        plantilla += `
            <img 
                height="64px"
                id="personaje${this.listaPersonajes[l].id}"
                src="../../Imagenes/Personajes/Miniaturas/Posturas/${this.listaPersonajes[l].orientacion}/${this.listaPersonajes[l].color}.png"
                style="left:${coordenadaX}px; position:absolute; top:${coordenadaY}px; z-index:2;"
                title="${this.listaPersonajes[l].nombre}"
                width="44px"
            >`;

        $("#contenedorTablero").append(plantilla);
    }    
}

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
    
    if (limiteVerticalSuperior === 0) {
        
        limiteVerticalSuperior = 1;
        incrementoIzquierdo = (1);
        incrementoDerecho = (1);
        
    } else if (limiteVerticalSuperior < 0) {
        
        let X = ((limiteVerticalSuperior * -1) + 1);
        
        limiteVerticalSuperior = 1;
        incrementoIzquierdo = (X);
        incrementoDerecho = (X);
    }   
    
    let X;    
    
    if (columna === 20) {
        
        X = 19;     
        
    } else {
        
        X = 20;
    }
    
    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].disponibilidad === true) {

            if (this.listaPosiciones[i].fila >= limiteVerticalSuperior & this.listaPosiciones[i].fila <= limiteVerticalInferior) {

                if (this.listaPosiciones[i].columna >= (columna - incrementoIzquierdo) & this.listaPosiciones[i].columna <= (columna + incrementoDerecho)) {

                    let cuadradoCoordenadaX = (this.listaPosiciones[i].coordenadaX7 - 8);
                    let botonCoordendaX = (this.listaPosiciones[i].coordenadaX7 + 5);
                    let cuadradoCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 4);
                    let botonCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 5);
                    
                    let plantillaCuadrados = `
                        <img
                            height="36px"
                            id="cuadradoMovimiento${this.listaPosiciones[i].nombre}"
                            src="../../Imagenes/Cuadrados/AzulA.png"
                            style='left:${cuadradoCoordenadaX}px; position:absolute; top:${cuadradoCoordenadaY}px; z-index:1;'
                            width="72px"
                        >`;
                    
                    let plantillaBotones = `
                        <button
                            class="btn btn-link-primary"
                            id="botonMovimiento${this.listaPosiciones[i].nombre}"
                            onclick="seleccionarPosicion('${this.listaPosiciones[i].nombre}', '${idPersonaje}')"
                            src="../../Imagenes/Cuadrados/AzulA.png"
                            style='left:${botonCoordendaX}px; position:absolute; top:${botonCoordenadaY}px; z-index:3;'
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
                    
                    console.log(this.listaPosiciones[i]);
                }
                
                if (this.listaPosiciones[i].columna === X) {

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
}

var listaMovimientos = [];

function seleccionarPosicion(x, y) {
    
    let idPosicion = "cuadradoMovimiento" + x;
    let posicionFinal = x;
    
    document.getElementById(idPosicion).src = "../../Imagenes/Cuadrados/AzulB.png";
    
    for (let i = 0; i < this.listaBotonesMovimiento.length; i++) {
        
        let idBotonMovimientoDesactivar = "botonMovimiento" + this.listaBotonesMovimiento[i].id;
        
        document.getElementById(idBotonMovimientoDesactivar).disabled = true;
    }
    
    let movimiento = {
        "personaje": y,
        "orientacion" : "",
        "direccion" : "",        
        "posicionInicial": "",
        "posicionFinal": posicionFinal
    }
    
    this.listaMovimientos.push(movimiento);
    
    $("#panelMensajesMovimiento").modal("show");        
}

function animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje) {

    let imagen;

    if (secuenciaAnimacion === 1) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}`;

    } else if (secuenciaAnimacion === 2) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}`;

    } else if (secuenciaAnimacion === 3) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}`;

    } else if (secuenciaAnimacion === 4) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}`;

    } else if (secuenciaAnimacion === 5) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}`;

    } else if (secuenciaAnimacion === 6) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}`;
        secuenciaAnimacion = 0;
    }

    document.getElementById(idImagenPersonaje).src = imagen;

    secuenciaAnimacion++;
    
    return secuenciaAnimacion;
}

function moverPersonajeActivo () {
    
    let contenedorTablero = document.getElementById("contenedorTablero");
    
    for (let i = 0; i < this.listaBotonesMovimiento.length; i++) {

        let idBotonMovimiento = "botonMovimiento" + this.listaBotonesMovimiento[i].id;
        let botonMovimiento = document.getElementById(idBotonMovimiento);
        
        contenedorTablero.removeChild(botonMovimiento);
    }

    this.listaBotonesMovimiento = [];

    let idPersonajeTemporal;
    let posicionFinal;
    
    for (let i = 0; i < this.listaMovimientos.length; i++) {
        
        idPersonajeTemporal = this.listaMovimientos[i].personaje;   
        posicionFinal = this.listaMovimientos[i].posicionFinal;   
    }        
    
    let idPersonaje = parseInt(idPersonajeTemporal);
    let idImagenPersonaje = "personaje" + idPersonaje;
    let posicionInicial;
    let colorPersonaje;
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {

        if (this.listaPersonajes[i].id === idPersonaje) {

            posicionInicial = this.listaPersonajes[i].posicion;
            colorPersonaje = this.listaPersonajes[i].color;
        }
    } 
    
    let coordenadaInicialX;
    let coordenadaInicialY;
    let columnaInicial;
    let filaInicial;
    let coordenadaFinalX;
    let coordenadaFinalY; 
    let columnaFinal;
    let filaFinal;
    
    for (let i = 0; i < this.listaPosiciones.length; i++) {
        
        if (this.listaPosiciones[i].nombre === posicionInicial) {

            coordenadaInicialX = parseInt(this.listaPosiciones[i].coordenadaX7);
            coordenadaInicialY = parseInt(this.listaPosiciones[i].coordenadaY1);
            columnaInicial = parseInt(this.listaPosiciones[i].columna);
            filaInicial = parseInt(this.listaPosiciones[i].fila);
        }
        
        if (this.listaPosiciones[i].nombre === posicionFinal) {

            coordenadaFinalX = parseInt(this.listaPosiciones[i].coordenadaX7);
            coordenadaFinalY = parseInt(this.listaPosiciones[i].coordenadaY1);
            columnaFinal = parseInt(this.listaPosiciones[i].columna);
            filaFinal = parseInt(this.listaPosiciones[i].fila);
        }        
    }
    
    let direccion;
    
    if (columnaInicial === columnaFinal & filaInicial > filaFinal) {
        
        direccion = "ARRIBA";
        
    } else if (columnaInicial < columnaFinal & filaInicial > filaFinal) {
        
        direccion = "ARRIBA Y DERECHA";
        
    } else if (columnaInicial < columnaFinal & filaInicial === filaFinal) {
        
        direccion = "DERECHA";        
        
    } else if (columnaInicial < columnaFinal & filaInicial < filaFinal) {
        
        direccion = "ABAJO Y DERECHA";        
        
    } else if (columnaInicial === columnaFinal & filaInicial < filaFinal) {
        
        direccion = "ABAJO";        
        
    } else if (columnaInicial > columnaFinal & filaInicial < filaFinal) {
        
        direccion = "ABAJO Y IZQUIERDA";        
        
    } else if (columnaInicial > columnaFinal & filaInicial === filaFinal) {
        
        direccion = "IZQUIERDA";        
        
    } else if (columnaInicial > columnaFinal & filaInicial > filaFinal) {
        
        direccion = "ARRIBA Y IZQUIERDA"; 
    }
    
    this.listaMovimientos[0].posicionInicial = posicionInicial;
    
    document.getElementById(idImagenPersonaje).style.opacity = "1";
    document.getElementById(idImagenPersonaje).style.zIndex = "2";
    
    let velocidadAnimacion = 100;
    
    if (direccion === "ARRIBA") {
             
        let movimientos = 0;
        let destino = (coordenadaFinalX - coordenadaInicialX); 
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "CorrerArriba";
        let idEjecutorFuncion;
        
        function animacion() {

            if (movimientos < destino) {  
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);
                avanceHorizontalTemporal = ((coordenadaInicialX + 12) + movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 46) - (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";
                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientos = (movimientos + 4);

            } else {

                clearInterval(idEjecutorFuncion);
                
                imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Arriba/${colorPersonaje}`;
                
                document.getElementById(idImagenPersonaje).src = imagen;  
                
                for (let i = 0; i < this.listaPosiciones.length; i++) {
                    
                    if (this.listaPosiciones[i].nombre === posicionInicial) {
                        
                        this.listaPosiciones[i].disponibilidad = true;
                    }
                    
                    if (this.listaPosiciones[i].nombre === posicionFinal) {
                        
                        this.listaPosiciones[i].disponibilidad = false;
                    }                    
                }
                
                for (let i = 0; i < this.listaPersonajes.length; i++) {
                    
                    if (this.listaPersonajes[i].id === idPersonaje) {
                        
                        this.listaPersonajes[i].posicion = posicionFinal;
                    }                    
                }
                
                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);   
                }
                
                this.listaCuadradosMovimiento = []; 
                this.listaMovimientos = [];
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "ARRIBA Y DERECHA") {

        let destinoHorizontal = (coordenadaFinalX - (coordenadaInicialX - 4));
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY); 
        let direccionInterna;
        let destinoVertical;
        
        if (coordenadaInicialY < coordenadaFinalY) {            
            
            destinoVertical = (coordenadaFinalY - (coordenadaInicialY - 2));            
            direccionInterna = "ABAJO";
            
        } else if (coordenadaInicialY === coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - (coordenadaFinalY - 2));
            direccionInterna = "NINGUNA"; 
            
        } else if (coordenadaInicialY > coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - (coordenadaFinalY - 2));
            direccionInterna = "ARRIBA"; 
        }        
        
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0;         
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "";
        let idEjecutorFuncion;      
        
        function animacion() {

            if (movimientosVerticales < destinoVertical) { 

                if (direccionInterna === "ABAJO") {

                    avanceVerticalTemporal = (coordenadaActualY + movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    direccionAnimacion = "CorrerAbajo";

                } else if (direccionInterna === "NINGUNA") {

                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    direccionAnimacion = "CorrerDerecha";
                    
                } else if (direccionInterna === "ARRIBA") {
                    
                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px"; 
                    direccionAnimacion = "CorrerArriba";
                }
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientosVerticales = (movimientosVerticales + 2);

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {
                
                direccionAnimacion = "CorrerDerecha";
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);
                
                avanceHorizontalTemporal = (coordenadaActualX + movimientosHorizontales);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                
                movimientosHorizontales = (movimientosHorizontales + 4);
                
            } else {

                clearInterval(idEjecutorFuncion);
                
                imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Derecha/${colorPersonaje}`;
                
                document.getElementById(idImagenPersonaje).src = imagen;  

                for (let i = 0; i < this.listaPosiciones.length; i++) {

                    if (this.listaPosiciones[i].nombre === posicionInicial) {

                        this.listaPosiciones[i].disponibilidad = true;
                    }

                    if (this.listaPosiciones[i].nombre === posicionFinal) {

                        this.listaPosiciones[i].disponibilidad = false;
                    }
                }

                for (let i = 0; i < this.listaPersonajes.length; i++) {

                    if (this.listaPersonajes[i].id === idPersonaje) {

                        this.listaPersonajes[i].posicion = posicionFinal;
                    }
                }

                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);
                }

                this.listaCuadradosMovimiento = [];
                this.listaMovimientos = [];
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "DERECHA") {
        
        let movimientos = 0;
        let destino = (coordenadaFinalX - coordenadaInicialX); 
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "CorrerDerecha";
        let idEjecutorFuncion;      
        
        function animacion() {

            if (movimientos < destino) {                  
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);                
                avanceHorizontalTemporal = ((coordenadaInicialX + 12) + movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 42) + (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";
                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientos = (movimientos + 4);

            } else {

                clearInterval(idEjecutorFuncion);
                
                imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Derecha/${colorPersonaje}`;
                
                document.getElementById(idImagenPersonaje).src = imagen;  
                
                for (let i = 0; i < this.listaPosiciones.length; i++) {
                    
                    if (this.listaPosiciones[i].nombre === posicionInicial) {
                        
                        this.listaPosiciones[i].disponibilidad = true;
                    }
                    
                    if (this.listaPosiciones[i].nombre === posicionFinal) {
                        
                        this.listaPosiciones[i].disponibilidad = false;
                    }                    
                }
                
                for (let i = 0; i < this.listaPersonajes.length; i++) {
                    
                    if (this.listaPersonajes[i].id === idPersonaje) {
                        
                        this.listaPersonajes[i].posicion = posicionFinal;
                    }                    
                }
                
                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);   
                }
                
                this.listaCuadradosMovimiento = []; 
                this.listaMovimientos = [];
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);
        
    } else if (direccion === "ABAJO Y DERECHA") {
        
        let destinoHorizontal;  
        let direccionInterna;  
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        
        if (coordenadaInicialX < coordenadaFinalX) {            
            
            destinoHorizontal = (coordenadaFinalX - coordenadaInicialX);            
            direccionInterna = "DERECHA";
            
        } else if (coordenadaInicialX === coordenadaFinalX) {
            
            destinoHorizontal = coordenadaInicialX;
            direccionInterna = "NINGUNA"; 
            
        } else if (coordenadaInicialX > coordenadaFinalX) {
            
            destinoHorizontal = (coordenadaInicialX - coordenadaFinalX);
            direccionInterna = "IZQUIERDA"; 
        }          
        
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY);         
        let destinoVertical = (coordenadaFinalY - (coordenadaInicialY - 2));
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0;
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "CorrerAbajo";
        let idEjecutorFuncion;      
        
        function animacion() {            
            
            if (movimientosVerticales < destinoVertical) { 
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje); 
                avanceVerticalTemporal = (coordenadaActualY + movimientosVerticales);
                avanceVertical = avanceVerticalTemporal + "px";
                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientosVerticales = (movimientosVerticales + 2);

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {  
                                
                if (direccionInterna === "DERECHA") {
                    
                    avanceHorizontalTemporal = (coordenadaActualX + movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    direccionAnimacion = "CorrerDerecha";

                } else if (direccionInterna === "NINGUNA") {
                    
                    avanceHorizontalTemporal = (coordenadaActualX);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    direccionAnimacion = "CorrerIzquierda";  
                    movimientosHorizontales = (destinoHorizontal - 4);
                    
                } else if (direccionInterna === "IZQUIERDA") {
                    
                    avanceHorizontalTemporal = ((coordenadaActualX - 8) - movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px"; 
                    direccionAnimacion = "CorrerIzquierda";                   
                }
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje); 

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                
                movimientosHorizontales = (movimientosHorizontales + 4);

            } else if (movimientosHorizontales === destinoHorizontal & movimientosVerticales === destinoVertical) {
                
                clearInterval(idEjecutorFuncion);
                
                if (direccionInterna === "DERECHA") {                    

                    imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Derecha/${colorPersonaje}`;                    

                } else {

                    imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Abajo/${colorPersonaje}`;
                }
                
                document.getElementById(idImagenPersonaje).src = imagen;

                for (let i = 0; i < this.listaPosiciones.length; i++) {

                    if (this.listaPosiciones[i].nombre === posicionInicial) {

                        this.listaPosiciones[i].disponibilidad = true;
                    }

                    if (this.listaPosiciones[i].nombre === posicionFinal) {

                        this.listaPosiciones[i].disponibilidad = false;
                    }
                }

                for (let i = 0; i < this.listaPersonajes.length; i++) {

                    if (this.listaPersonajes[i].id === idPersonaje) {

                        this.listaPersonajes[i].posicion = posicionFinal;
                    }
                }

                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);
                }

                this.listaCuadradosMovimiento = [];
                this.listaMovimientos = [];
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "ABAJO") {

        let destino = (coordenadaInicialX - coordenadaFinalX);        
        let movimientos = 0;
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "CorrerAbajo";
        let idEjecutorFuncion;   
        
        function animacion() {

            if (movimientos < destino) {  
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje); 
                avanceHorizontalTemporal = ((coordenadaInicialX + 4) - movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 42) + (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientos = (movimientos + 4);

            } else {

                clearInterval(idEjecutorFuncion);
                
                imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Abajo/${colorPersonaje}`;
                
                document.getElementById(idImagenPersonaje).src = imagen;  
                
                for (let i = 0; i < this.listaPosiciones.length; i++) {
                    
                    if (this.listaPosiciones[i].nombre === posicionInicial) {
                        
                        this.listaPosiciones[i].disponibilidad = true;
                    }
                    
                    if (this.listaPosiciones[i].nombre === posicionFinal) {
                        
                        this.listaPosiciones[i].disponibilidad = false;
                    }                    
                }
                
                for (let i = 0; i < this.listaPersonajes.length; i++) {
                    
                    if (this.listaPersonajes[i].id === idPersonaje) {
                        
                        this.listaPersonajes[i].posicion = posicionFinal;
                    }                    
                }
                
                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);   
                }
                
                this.listaCuadradosMovimiento = []; 
                this.listaMovimientos = [];
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);
        
    } else if (direccion === "ABAJO Y IZQUIERDA") {

        let destinoHorizontal = ((coordenadaInicialX + 4) - coordenadaFinalX);        
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY); 
        let direccionInterna;
        let destinoVertical
        
        if (coordenadaInicialY < coordenadaFinalY) {            
            
            destinoVertical = (coordenadaFinalY - (coordenadaInicialY - 2));            
            direccionInterna = "ABAJO";
            
        } else if (coordenadaInicialY === coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - (coordenadaFinalY - 2));
            direccionInterna = "NINGUNA"; 
            
        } else if (coordenadaInicialY > coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - (coordenadaFinalY - 2));
            direccionInterna = "ARRIBA";
            
        }        
        
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0;
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "";
        let idEjecutorFuncion;
                
        function animacion() {

            if (movimientosVerticales < destinoVertical) {
                
                if (direccionInterna === "ABAJO") {

                    avanceVerticalTemporal = (coordenadaActualY + movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    direccionAnimacion = "CorrerAbajo";

                } else if (direccionInterna === "NINGUNA") {

                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    direccionAnimacion = "CorrerIzquierda";
                    
                } else if (direccionInterna === "ARRIBA") {
                    
                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    direccionAnimacion = "CorrerArriba"; 
                }    
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);                              

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientosVerticales = (movimientosVerticales + 2);

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {
                
                direccionAnimacion = "CorrerIzquierda";                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje); 
                avanceHorizontalTemporal = (coordenadaActualX - movimientosHorizontales);
                avanceHorizontal = avanceHorizontalTemporal + "px";

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                
                movimientosHorizontales = (movimientosHorizontales + 4);
                
            } else {

                clearInterval(idEjecutorFuncion);
                
                imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Izquierda/${colorPersonaje}`;
                
                document.getElementById(idImagenPersonaje).src = imagen;

                for (let i = 0; i < this.listaPosiciones.length; i++) {

                    if (this.listaPosiciones[i].nombre === posicionInicial) {

                        this.listaPosiciones[i].disponibilidad = true;
                    }

                    if (this.listaPosiciones[i].nombre === posicionFinal) {

                        this.listaPosiciones[i].disponibilidad = false;
                    }
                }

                for (let i = 0; i < this.listaPersonajes.length; i++) {

                    if (this.listaPersonajes[i].id === idPersonaje) {

                        this.listaPersonajes[i].posicion = posicionFinal;
                    }
                }

                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);
                }

                this.listaCuadradosMovimiento = [];
                this.listaMovimientos = [];
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);;

    } else if (direccion === "IZQUIERDA") {

        let destino = (coordenadaInicialX - coordenadaFinalX);        
        let movimientos = 0;
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "CorrerIzquierda";
        let idEjecutorFuncion;
        
        function animacion() {

            if (movimientos < destino) {  

                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);
                avanceHorizontalTemporal = ((coordenadaInicialX - 0) - movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 46) - (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientos = (movimientos + 4);

            } else {

                clearInterval(idEjecutorFuncion);
                
                imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Izquierda/${colorPersonaje}`;
                
                document.getElementById(idImagenPersonaje).src = imagen;  
                
                for (let i = 0; i < this.listaPosiciones.length; i++) {
                    
                    if (this.listaPosiciones[i].nombre === posicionInicial) {
                        
                        this.listaPosiciones[i].disponibilidad = true;
                    }
                    
                    if (this.listaPosiciones[i].nombre === posicionFinal) {
                        
                        this.listaPosiciones[i].disponibilidad = false;
                    }                    
                }
                
                for (let i = 0; i < this.listaPersonajes.length; i++) {
                    
                    if (this.listaPersonajes[i].id === idPersonaje) {
                        
                        this.listaPersonajes[i].posicion = posicionFinal;
                    }                    
                }
                
                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);   
                }
                
                this.listaCuadradosMovimiento = []; 
                this.listaMovimientos = [];
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "ARRIBA Y IZQUIERDA") {

        let destinoHorizontal;
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY);         
        let destinoVertical = (coordenadaInicialY - coordenadaFinalY);
        let direccionInterna;
                        
        if (coordenadaInicialX < coordenadaFinalX) { 
            
            destinoHorizontal = (coordenadaFinalX - coordenadaInicialX);                
            direccionInterna = "DERECHA";
            
        } else if (coordenadaInicialX === coordenadaFinalX){
            
            destinoHorizontal = coordenadaInicialX;            
            direccionInterna = "NINGUNA"; 
        
        } else if (coordenadaInicialX > coordenadaFinalX) {
            
            destinoHorizontal = (coordenadaInicialX - coordenadaFinalX);                 
            direccionInterna = "IZQUIERDA"; 
        }          
        
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0;
        let secuenciaAnimacion = 1;
        let direccionAnimacion = "CorrerArriba";
        let idEjecutorFuncion;   
        
        function animacion() {
            
            if (movimientosVerticales < destinoVertical) {
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);                                              
                avanceVerticalTemporal = ((coordenadaActualY - 2) - movimientosVerticales);
                avanceVertical = avanceVerticalTemporal + "px";

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientosVerticales = (movimientosVerticales + 2);

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {
                                
                if (direccionInterna === "DERECHA") {

                    avanceHorizontalTemporal = ((coordenadaActualX + 4) + movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    direccionAnimacion = "CorrerDerecha";

                } else if (direccionInterna === "NINGUNA") {
                    
                    avanceHorizontalTemporal = (coordenadaActualX);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    direccionAnimacion = "CorrerIzquierda";  
                    movimientosHorizontales = (destinoHorizontal - 4);
                    
                } else if (direccionInterna === "IZQUIERDA") {
                    
                    avanceHorizontalTemporal = ((coordenadaActualX - 4) - movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    direccionAnimacion = "CorrerIzquierda";
                }  
                
                console.log(direccionInterna);
                
                secuenciaAnimacion = animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje);                                              
                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                
                movimientosHorizontales = (movimientosHorizontales + 4);
                
            } else {

                clearInterval(idEjecutorFuncion);
                
                if (direccionInterna === "IZQUIERDA") {                    

                    imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Arriba/${colorPersonaje}`;                    

                } else if (direccionInterna === "NINGUNA" | direccionInterna === "DERECHA") {

                    imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/Derecha/${colorPersonaje}`;
                }
                
                document.getElementById(idImagenPersonaje).src = imagen;

                for (let i = 0; i < this.listaPosiciones.length; i++) {

                    if (this.listaPosiciones[i].nombre === posicionInicial) {

                        this.listaPosiciones[i].disponibilidad = true;
                    }

                    if (this.listaPosiciones[i].nombre === posicionFinal) {

                        this.listaPosiciones[i].disponibilidad = false;
                    }
                }

                for (let i = 0; i < this.listaPersonajes.length; i++) {

                    if (this.listaPersonajes[i].id === idPersonaje) {

                        this.listaPersonajes[i].posicion = posicionFinal;
                    }
                }

                for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

                    let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
                    let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);

                    contenedorTablero.removeChild(cuadradoMovimiento);
                }

                this.listaCuadradosMovimiento = [];
                this.listaMovimientos = [];
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);
    }  
}

function ocultarAlertaVisual() {
    
    $("#alertaVisual").addClass("fade").removeClass("show");
}

botonOcultarAlertaVisual.addEventListener("click", ocultarAlertaVisual, false);
