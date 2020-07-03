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
      $("#selectall").on("click", function () {
        $(".form-control").prop("checked", this.checked);
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
