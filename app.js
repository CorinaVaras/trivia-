

window.onload = function () {

    document.getElementById("comenzar").addEventListener("click", () => {
        // boton comenzar cuando yo te de click ejecuta lo que te diga dentro de esta funcion

        var nombreIdInput = document.getElementById("nombre").value;
        window.location.href="opciones.html?name=" + nombreIdInput;




    });

}




