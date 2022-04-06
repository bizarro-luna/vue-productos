<template>
  <div id="generar">
    <SliderComponent texto='Ultimos Aritculos agregados' showBtn='true' />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
           <ProductoComponent :productosComponent="productos" />
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <SideBar />
      <div class="clearfix" ></div>
    </div>
  </div>
</template>


<script>
import { Global } from "../Global.js";
import SliderComponent from './SliderComponent.vue';
import SideBar  from './SideBar.vue';
import ProductoComponent from "./ProductoComponent.vue";
export default {
  name: "UltimosArticulos",
  components:{
    SliderComponent,
    SideBar,
    ProductoComponent
  },
   data() {
    return {
      productos: null
    };
  },
  mounted() {
    this.obtenerArticulos();
  },
   methods: {
    obtenerArticulos() {
      fetch(Global.url + "ultimos-productos")
        .then((res) => {
          if (res.status !== 200) {
            return;
          }

          return res.json();
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          this.productos = response;
          //console.log(this.productos);
        });
    },
  }
};
</script>