document.getElementById("MiFormulario2").addEventListener("submit", submit);
document.getElementById("MiFormulario").addEventListener("submit", submit);
document.getElementById("ok").addEventListener("click", enviar);
document.getElementById("ko").addEventListener("click", cancelar);

handlesubmit = (e) => {
  e.preventDefault();
};

function submit(e) {
  e.preventDefault();

  document.getElementById("capa").style.display = "block";
}

function enviar() {
  document.getElementById("capa").style.display = "none";

  document.forms["MiFormulario2"].submit(() => {});
  document.forms["MiFormulario"].submit(() => {});
}

function cancelar(e) {
  document.getElementById("capa").style.display = "none";
}
