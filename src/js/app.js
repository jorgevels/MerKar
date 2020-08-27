require("../page/main/App.css");

const app = new Vue({
  el: "#app",
  data: {
    titulo: "Mercados OR",
    tareas: [],
    nameArticle: "",
    quantity: "",
    unit: "",
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        nameArticle: this.nameArticle,
        quantity: this.quantity,
        unit: this.unit,
        estado: false,
      });

      contarInputs();
      this.nameArticle = "";
      this.quantity = "";
      this.unit = "";

      localStorage.setItem("mk", JSON.stringify(this.tareas));

      /*  Funcion que cuenta la lista de articulos */
      function contarInputs() {
        let inputs = $("input[name^=articulos]");
        let count = inputs.length;
        document.getElementById("count").value = count;
        /* alert(count); */
      }

      /*  Selecciona todos los checkbox */

      $("#selectAll").on("click", function () {
        $(".form-control").prop("checked", this.checked);
        /* if ($(".form-control:checked").length > 0) {
          this.tareas[index].estado = true;
        } else {
          this.tareas[index].estado = false;
        } */
      });

      //  Si todos los checkbox estan selecionados, marca el checkbox principal sino lo desmarca
      $(".form-control").on("click", function () {
        if ($(".form-control").length == $(".form-control:checked").length) {
          $("#selectall").prop("checked", true);
        } else {
          $("#selectall").prop("checked", false);
        }
      });
    },

    /* seleccionarTodos() {
      $("#selectAll").on("click", function () {
        $(".form-control").prop("checked", this.checked);

        
      });
    }, */

    editarTarea(index) {
      if ($(".form-control:checked").length > 0) {
        this.tareas[index].estado = true;
      } else {
        this.tareas[index].estado = false;
      }

      localStorage.setItem("mk", JSON.stringify(this.tareas));
    },

    eliminar(index) {
      let inputs = $("input[name^=articulos]");
      let count = inputs.length - 1;
      document.getElementById("count").value = count - 1;

      let totales = inputs.length - 1;
      document.getElementById("totales").value = totales - 1;

      this.tareas.splice(index, 1);
      localStorage.setItem("mk", JSON.stringify(this.tareas));
    },
    // Elimina toda la lista
    eliminarAll(index) {
      this.tareas.splice(index, -1000);
      /* localStorage.setItem("mk", JSON.stringify(this.tareas)); */
      localStorage.removeItem("mk", JSON.stringify(this.tareas));
    },
  },
  created() {
    let datosDB = JSON.parse(localStorage.getItem("mk"));
    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  },
});

// Confirmar Closse de la pagina

let popHandler = () => {
  Swal.fire({
    type: "warning",
    title: `Deseas salir! <br>`,
    text: "Si sales se perderan los cambios en tu lista",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
    cancelButtonText: "No",
  }).then((result) => {
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

// Contar Inputs
$(document)
  .click(function () {
    //Creamos la Funcion del Click
    var totales = $(".form-control:checked").length;
    //Creamos una Variable y Obtenemos el Numero de Checkbox que esten Seleccionados
    $("").text((document.getElementById("totales").value = totales));
    //Asignamos a la Etiqueta <p> el texto de cuantos Checkbox ahi Seleccionados(Combinando la Variable)
  })
  .trigger("click"); //Simulamos el Evento Click(Desde el Principio, para que muestre cuantos ahi Seleccionados)

// Modal de validacion al borrar la lista

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
