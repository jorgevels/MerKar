const $instructions = document.getElementById("instrucciones");
$instructions.addEventListener("click", () => {
  Swal.fire({
    type: "info",
    title: "Merquemos",
    html: `<div style="text-align: left;"><strong>1.-</strong>No más listas de compras en papel.</div>
      <div style="text-align: left;"><strong>2.-</strong>Con esta PWA podras crear tus listas de compras desde tu teléfono.</div>
                 <div style="text-align: left;"><strong>3.-</strong>Con el boton del signo más de color verde, podras agregar tus artículos a una lista muy cool.</div>
                 <div style="text-align: left;"><strong>4.-</strong>Puedes seleccionar la cantidad y la unidad que desees.</div>
                 <div style="text-align: left;"><strong>5.-</strong>Si quieres eliminar un articulo de la lista, con el boton del signo menos de color rojo, lo podras hacer.</div>
                 <div style="text-align: left;"><strong>6.-</strong>Al momento de tus compras, en la columna de selección podras ir marcando los productos que ya depositaste en tu carro de compras .</div>
                 <br>
                 <div style="text-align: right;"><strong>Dev.</strong> Jorge Velasquez 😉</div>
                 `
  });
});
