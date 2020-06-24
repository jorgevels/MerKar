$(document)
  .click(function() {
    //Creamos la Funcion del Click
    var totales = $(".form-control:checked").length;
    //Creamos una Variable y Obtenemos el Numero de Checkbox que esten Seleccionados
    $("").text((document.getElementById("totales").value = totales));
    //Asignamos a la Etiqueta <p> el texto de cuantos Checkbox ahi Seleccionados(Combinando la Variable)
  })
  .trigger("click"); //Simulamos el Evento Click(Desde el Principio, para que muestre cuantos ahi Seleccionados)

/* function contar() {
  var checkboxes = formulario.checkbox; //Array que contiene los checkbox
  var cont = 0; //Variable que lleva la cuenta de los checkbox pulsados
  for (var x = 0; x < checkboxes.length; x++) {
    if (checkboxes[x].checked) {
      cont = cont + 1;
    }
  }
  formulario.totales.value = cont;
} */

/* function contar() {
  var checkboxes = checkbox;
  var cont = 0;
  for (var x = 0; x < checkboxes.length; x++) {
    if (checkboxes[x].checked) {
      cont = cont + 1;
    }
  }
  totales.value = cont;
} */

/* function qtdChecados() {
  var inputs,
    i,
    totales = 0;
  inputs = document.getElementsByTagName("input");
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "checkbox") {
      if (inputs[i].checked == true) {
        totales++;
      }
    }
    document.getElementById("totales").value = totales;
  }
} */
/*  return checados; */

/* var cboxes = document.getElementsByTagName("input");
for (var i = 0; i < cboxes.length; i++) {
  var valor = cboxes[i].checked;
  if (cboxes[i].className == "form-controls") {
    if (!cboxes[i].addEventListener) {
      cboxes[i].attachEvent("onclick", contar);
    } else {
      cboxes[i].addEventListener("click", contar, false);
    }
  }
} */

/* function contar() {
  var totales = "";
  var contador = 1;
  const casillas = document.getElementsByTagName("input");
  for (var i = 0; i < casillas.length; i++) {
    var valor = casillas[i].checked;
    var clase = casillas[i].className;
    if (clase == "form-controls") {
      if (valor == true) {
        totales = contador++;
      }
    }
  }
  document.getElementById("totales").value = totales;
}
 */
/* function contarInputs() {
  var inputs = $("input[name^=articulos]");
  var count = inputs.length;

  document.getElementById("count").value = count;
  contarInputs();
}

$(document).on("click", ".remove", function() {
  var inputs = $("input[name^=articulos]");
  var count = inputs.length;

  var totales = "";
  var contador = 1;
  const casillas = document.getElementsByTagName("input");
  for (var i = 0; i < casillas.length; i++) {
    var valor = casillas[i].checked;
    var clase = casillas[i].className;
    if (clase == "form-controls") {
      if (valor == true) {
        totales = contador++;
        document.getElementById("totales").value = totales - 1;
      }
      if (valor == false) {
        totales = totales;
        document.getElementById("totales").value = totales - 0;
      }
    }
  }

  $(this)
    .closest("tr")
    .remove();
  document.getElementById("count").value = count - 2;
}); */

/* function contar() {
  var checkboxes = form.checkbox; //Array que contiene los checkbox
  var totales = 0; //Variable que lleva la cuenta de los checkbox pulsados
  for (var x = 0; x < checkboxes.length; x++) {
    if (checkboxes[x].checked) {
      totales = totales + 1;
    }
  }

  document.getElementById("totales").value = totales;
} */

/* contarInputs();

function contarInputs() {
  var inputs = $("input[name^=articulos]");
  var count = inputs.length;

  document.getElementById("count").value = count;
  alert(count);
} */
