<template>
  <div id="generar">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Fomulario</h2>

        <form class="mid-form" @submit.prevent="mostrarProducto()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="producto.nombre" />
            <div
              class="input-errors"
              v-for="error of v$.producto.nombre.$errors"
              :key="error.$uid"
            >
              <div class="error-msg" v-if="submitted"  >{{ error.$message }}</div>
            </div>
            <!--<div v-if="v$.producto.nombre.$error">
              Este campo es requerido {{ v$.producto.nombre.$errors[0].$message }}
            </div>-->
          </div>

          <div class="form-group">
            <label for="precio">Precio</label>
            <input type="number" name="precio" v-model="producto.precio" />
             <div
              class="input-errors"
              v-for="error of v$.producto.precio.$errors"
              :key="error.$uid"
            >
              <div class="error-msg"  v-if="submitted" >{{ error.$message }} </div>
            </div>
             <!--<div v-if="v$.producto.precio.$error">
              Este campo es requerido
            </div>-->
          </div>

          <!-- <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio"></textarea>
          </div>-->

          <div class="form-group radibuttons">
            <input
              type="radio"
              name="genero"
              value="hombre"
              v-model="producto.genero"
            />
            Hombre
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="producto.genero"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              value="otro"
              v-model="producto.genero"
            />
            Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="datos" v-if="producto.nombre && producto.precio">
          <h3>{{ producto.nombre + " " + producto.precio }}</h3>
        </div>
      </section>
      <SideBar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import SideBar from "./SideBar.vue";
export default {
  name: "FormularioComponent",
  components: {
    SideBar,
  },
  validations: {
    producto: {
      nombre: {
        required,
        minLength: minLength(4),
      },
      precio: {
        required,
        minLength: minLength(2),
      },
    },
  },
  data() {
    return {
      v$: useVuelidate(),
      submitted: false,
      producto: {
        nombre: "",
        precio: "",
        genero: "",
      },
    };
  },
  methods: {
    mostrarProducto() {
      console.log(this.producto);
      this.submitted = true;
      console.log(this.v$);
      //Para mostrar las validaciones de los errores
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }

      alert("Validacion pasada");
    },
  },
};
</script>