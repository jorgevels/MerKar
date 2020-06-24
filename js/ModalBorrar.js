// devinimos los tres eventos del formulario
document.getElementById("MiFormulario").addEventListener("submit", submit);
document.getElementById("ok").addEventListener("click", enviar);
document.getElementById("ko").addEventListener("click", cancelar);

handlesubmit = e => {
  e.preventDefault();
};

// Funcion que se ejecuta al pulsar el botón enviar el formulario
function submit(e) {
  // Cancelamos el envio a la espera de que valide el formulario
  e.preventDefault();

  // Mostramos la capa con el formulario de validacion
  document.getElementById("capa").style.display = "block";
}

// Funcion que se ejecuta al pulsar el boton Enviar de cuadro de dialogo
function enviar(e) {
  // Escondemos la capa
  document.getElementById("capa").style.display = "none";

  e.preventDefault();
  // Enviamos el formulario

  // No envíe el formulario
  document.forms["MiFormulario"].submit(e => {
    e.preventDefault();
  });
}

// Funcion que se ejecuta al pulsar el boton Cancelar de cuadro de dialogo
function cancelar(e) {
  // Simplemente escondemkos el formulario
  document.getElementById("capa").style.display = "none";
}
