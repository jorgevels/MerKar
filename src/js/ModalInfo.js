const instructions = document.getElementById("instrucciones");
if (instructions) {
  instructions.addEventListener("click", async () => {
    await Swal.fire({
      /*  type: "info", */
      imageUrl:
        "https://res.cloudinary.com/imagesfull/image/upload/v1594676015/like/favicon-Info_pkpykw.ico",
      title: "Merquemos",
      html: `<div style="text-align: left;"><strong>1.</strong>No más listas de compras en papel.</div>
        <div style="text-align: left;"><strong>2.</strong>Con esta PWA podras crear tus listas de compras desde tu teléfono.</div>
                   <div style="text-align: left;"><strong>3.</strong>Con el boton del signo más de color verde, podras agregar tus artículos a una lista muy cool.</div>
                   <div style="text-align: left;"><strong>4.</strong>Puedes seleccionar la cantidad y la unidad que desees.</div>
                   <div style="text-align: left;"><strong>5.</strong>Si quieres eliminar un articulo de la lista, con el boton de color rojo, lo podras hacer.</div>
                   <div style="text-align: left;"><strong>6.</strong>Al momento de tus compras, en la columna de selección podras ir marcando los productos que ya depositaste en tu carro de compras .</div>
                    <div style="text-align: left;"><strong>7.</strong>Si no cliqueas el boton de borrar lista, anque cierres la aplicacion tu lista no se borrara.</div>
                   <br>
                   <div style="text-align: right;"><strong>Dev.</strong> Jorge Velasquez 😉</div>
                   `,
    });
  });
}

/* const instructions = document.getElementById("instrucciones");
instructions.addEventListener("click", () => {
  Swal.fire({
    title: "Custom animation with Animate.css",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}); */
