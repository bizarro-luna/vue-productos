<template src="./ProductoCrear.html" ></template>


<script>
import { Global } from "../Global.js";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import SideBar from "./SideBar.vue";
import Producto from "../models/Producto";
export default {
  name: "ProuctoCrear",
  components: {
    SideBar,
  },
  data() {
    return {
      v$: useVuelidate(),
      file: [],
      producto: new Producto("", "", ""),
      submitted: false,
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
    console.log(this.producto);
  },
  methods: {
    guardar() {
      this.submitted = true;

      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      } else {
        

        fetch(Global.url + "producto", {
          method: "POST",
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
                        this.$swal('Articulo Creado','El articulo se ha creado correctamente','success');
                        console.log("Se guardo el producto:", response);
                        this.$router.push("/blog");
                    }else{
                        this.$swal('Error','El articulo no se ha creado bien','error');
                    }
                    
                   
                });
            }else{
               this.$router.push("/blog");
            }
          });
      }
    },
    cambioArchivo() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
  },
};
</script>