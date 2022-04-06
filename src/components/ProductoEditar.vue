<template src="./ProductoCrear.html" ></template>


<script>
import { Global } from "../Global.js";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import SideBar from "./SideBar.vue";
import Producto from "../models/Producto";
export default {
  name: "ProuctoEditar",
  components: {
    SideBar,
  },
  data() {
    return {
      v$: useVuelidate(),
      file: [],
      producto: new Producto("", "", ""),
      submitted: false,
      isEdit: true,
      rutaImagen: Global.url + "producto/uploads/img/",
    };
  },
  validations: {
    producto: {
      nombre: {
        required,
      },
      precio: {
        required,
      },
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.obtenerProducto(this.id);
  },
  methods: {
    guardar() {
      this.submitted = true;

      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      } else {
        

        fetch(Global.url + "producto/"+this.id, {
          method: "PUT",
          body: JSON.stringify(this.producto),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .catch((err) => alert("Error al guardar " + err))
          .then((res) => {
            if (res.idProducto && this.file!=null && this.file!=undefined && this.file!='') {
              const formData = new FormData();
              formData.append("archivo", this.file);
              formData.append("id", res.idProducto);

              fetch(Global.url + "producto/upload-img", {
                method: "PUT",
                body: formData,
              })
                .then((response) => response.json())
                .catch((error) => console.error("Error:", error))
                .then((response) =>{
                    
                    if(response.fotoHashCode){
                        this.$swal('Articulo Editado','El articulo se ha editado correctamente','success');
                        console.log("Se guardo el producto:", response);
                        this.$router.push("/producto/"+this.id);
                    }else{
                        this.$swal('Error','El articulo no se ha editado bien','error');
                    }
                    
                   
                });
            }else{
               this.$swal('Articulo Editado','El articulo se ha editado correctamente','success');
               this.$router.push("/producto/"+this.id);
            }
          });
      }
    },
    cambioArchivo() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    obtenerProducto(idProducto) {
      fetch(Global.url + "producto/" + idProducto)
        .then((res) => {
          if (res.status !== 200) {
            return;
          }

          return res.json();
        })
        .catch((err) => console.log("Error: " + err))
        .then((res) => (this.producto = res));
    }
  },
};
</script>