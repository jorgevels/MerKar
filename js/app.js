const app = new Vue({
  el: "#app",
  data: {
    titulo: "Mercados OR",
    tareas: [],
    /*  checkboxArticle: "1", */
    nameArticle: "",
    quantity: "",
    unit: "",
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        /* checkboxArticle: this.checkboxArticle, */
        nameArticle: this.nameArticle,
        quantity: this.quantity,
        unit: this.unit,
        estado: false,
      });

      contarInputs();

      /* contar(); */
      /*  this.checkboxArticle = ""; */
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

      /* var cboxes = document.getElementsByTagName("input");

      for (var i = 0; i < cboxes.length; i++) {
        let valor = cboxes[i].checked;
        if (cboxes[i].className == "form-control") {
        if (!cboxes[i].addEventListener) {
          cboxes[i].attachEvent("onclick", contar);
        } else {
          cboxes[i].addEventListener("click", contar, true);
        }
         }
      } */

      /* function contar() {
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

      /* return totales; */
      /*  Funcion que cuenta los articulos en el carrito */

      /*  function contar() {
        let totales = "";
        let contador = 1;
        const casillas = document.getElementsByTagName("input");
        for (var i = 0; i < casillas.length; i++) {
          let valor = casillas[i].checked;
          let clase = casillas[i].className;
          if (clase == "form-control") {
            if (valor == true) {
              totales = contador++;
            }
          }
        }
        document.getElementById("totales").value = totales;
      } */

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

      /* $(document).on("click", ".remove", function() {
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
        document.getElementById("count").value = count - 1;
      }); */
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
      this.tareas.splice(index, 1000);
      localStorage.setItem("mk", JSON.stringify(this.tareas));
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
