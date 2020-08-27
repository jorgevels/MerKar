$(document)
  .click(function () {
    //Creamos la Funcion del Click
    var totales = $(".form-control:checked").length;
    //Creamos una Variable y Obtenemos el Numero de Checkbox que esten Seleccionados
    $("").text((document.getElementById("totales").value = totales));
    //Asignamos a la Etiqueta <p> el texto de cuantos Checkbox ahi Seleccionados(Combinando la Variable)
  })
  .trigger("click"); //Simulamos el Evento Click(Desde el Principio, para que muestre cuantos ahi Seleccionados)
