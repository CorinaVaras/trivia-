let nombre="";
let categoria="";

window.onload = function () {

let params= new this.URLSearchParams(this.location.search);

nombre=params.get("nombre");
categoria=params.get("ingles");
 
}





let respuestaCorrecta1 = "Hello";
let respuestaCorrecta2 = "Dog";
let respuestaCorrecta3 = "Mother";

let respuestaPregunta1 = "";
let respuestaPregunta2 = "";
let respuestaPregunta3 = "";

let contadorRespuestasCorrectas = 0;

function enviarResultado() {

	// Verifica si esta marcado
	if (document.getElementById("pregunta1Radio1").checked) {
        respuestaPregunta1 ="Hello";

    } else if (document.getElementById("pregunta1Radio2").checked) {
        respuestaPregunta1 = "Thank you";

    } else if (document.getElementById("pregunta1Radio2").checked) {
        respuestaPregunta1 = "Bye";
	}
	

    // esta es la respuesta ingresada por el usuario de la pregunta 2
    if (document.getElementById("pregunta2Radio1").checked) {
        respuestaPregunta2 = "Dog";

    } else if (document.getElementById("pregunta2Radio2").checked) {
        respuestaPregunta2 = "Cat";

    } else if (document.getElementById("pregunta2Radio3").checked) {
        respuestaPregunta2 = "Rabbit";
	}
	

    // esta es la respuesta ingresada por el usuario de la pregunta 3
    if (document.getElementById("pregunta3Radio1").checked) {
        respuestaPregunta3 = "Mother";

    } else if (document.getElementById("pregunta3Radio2").checked) {
        respuestaPregunta3 = "Father";

    } else if (document.getElementById("pregunta3Radio3").checked) {
        respuestaPregunta3 = "Sister";
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


