let popHandler = () => {
  Swal.fire({
    type: "warning",
    title: `Deseas salir! <br>`,
    text: "Si sales se perderan los cambios en tu lista",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
    cancelButtonText: "No"
  }).then(result => {
    if (result.value) {
      window.history.back();
    } else {
      window.history.forward();
      setTimeout(() => {
        window.addEventListener("popstate", popHandler, { once: true });
      }, 0);
    }
  });
};

window.addEventListener("popstate", popHandler, { once: true });
window.history.pushState(null, null, null);
