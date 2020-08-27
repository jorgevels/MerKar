document.getElementById("FormValidation").addEventListener("submit", submit);
document.getElementById("FormDelete").addEventListener("submit", submit);
document.getElementById("ok").addEventListener("click", enviar);
document.getElementById("ko").addEventListener("click", cancelar);

handlesubmit = (e) => {
  e.preventDefault();
};

function submit(e) {
  e.preventDefault();

  document.getElementById("capa").style.display = "block";
}

function enviar(e) {
  document.getElementById("capa").style.display = "none";

  document.forms["FormDelete"].submit((e) => {
    e.preventDefault();
  });
  document.forms["FormValidation"].submit((e) => {
    e.preventDefault();
  });
  e.preventDefault();
}

function cancelar(e) {
  document.getElementById("capa").style.display = "none";
}
