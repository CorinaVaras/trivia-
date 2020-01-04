
let nombre="";
let categoria="";

window.onload = function () {

    let params = new URLSearchParams(this.location.search);

    nombre= params.get("nombre");
    categoria=params.get("maquillaje");


}









let respuestaCorrecta1 = "Cuidado de la piel";
let respuestaCorrecta2 = "6";
let respuestaCorrecta3 = "Una vez al mes";

let respuestaPregunta1 = "";
let respuestaPregunta2 = "";
let respuestaPregunta3 = "";

let contadorRespuestasCorrectas = 0;

function enviarResultado() {

	// Verifica si esta marcado
	if (document.getElementById("pregunta1Radio1").checked) {
        respuestaPregunta1 ="Cuidado de la piel";

    } else if (document.getElementById("pregunta1Radio2").checked) {
        respuestaPregunta1 = "Dormir bien";

    } else if (document.getElementById("pregunta1Radio2").checked) {
        respuestaPregunta1 = "Ninguna de las anteriores";
    }


    // esta es la respuesta ingresada por el usuario de la pregunta 2
    if (document.getElementById("pregunta2Radio1").checked) {
        respuestaPregunta2 = "6";

    } else if (document.getElementById("pregunta2Radio2").checked) {
        respuestaPregunta2 = "2";

    } else if (document.getElementById("pregunta2Radio3").checked) {
        respuestaPregunta2 = "9";
    }

    
    // esta es la respuesta ingresada por el usuario de la pregunta 3
    if (document.getElementById("pregunta3Radio1").checked) {
        respuestaPregunta3 = "Una vez al mes";

    } else if (document.getElementById("pregunta3Radio2").checked) {
        respuestaPregunta3 = "Cada 15 dias";

    } else if (document.getElementById("pregunta3Radio3").checked) {
        respuestaPregunta3 = "Cada 3 meses";
    }

	
	
	if (respuestaPregunta1 == "" || respuestaPregunta2 == "" || respuestaPregunta3 == "") {

        alert("Para continuar debe responder todas las preguntas");
        
    } else {

		if (respuestaPregunta1 == respuestaCorrecta1) {

			contadorRespuestasCorrectas++;
		}

		if (respuestaPregunta2 == respuestaCorrecta2) {

			contadorRespuestasCorrectas++;

		}

		if (respuestaPregunta3 == respuestaCorrecta3) {

			contadorRespuestasCorrectas++;

		}

		document.getElementById("preguntas1").hidden = true;
        document.getElementById("preguntas2").hidden = true;
        document.getElementById("pantallaFinal").hidden = false;

        document.getElementById("textoFinal").innerHTML = nombre + " tu resultado fue de " + contadorRespuestasCorrectas + " respuestas correctas";


    }


}


/*
let numPar=2;
let numImpar=1;

if (numPar == 0) {
console.log("Esto es un número par");

} else {
    console.log("este es un número impar"); 
} */