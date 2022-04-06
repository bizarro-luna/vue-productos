<template>
  <div id="generar">
    <SliderComponent :texto="'Busqueda: '+this.termino" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Artículos</h1>
        <div id="articles" v-if="productos">
          <ProductoComponent :productosComponent="productos" />
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <SideBar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { Global } from "../Global.js";
import ProductoComponent from "./ProductoComponent.vue";
import SliderComponent from "./SliderComponent.vue";
import SideBar from "./SideBar.vue";
export default {
  name: "BuscadorComponent",
  components: {
    SliderComponent,
    SideBar,
    ProductoComponent
  },
  data() {
    return {
      productos: null,
      busqueda:null
    };
  },
  mounted() {
    this.termino =this.$route.params.termino;
    this.obtenerBusqueda(this.termino);
  },
  methods: {
    obtenerBusqueda(termino) {
      fetch(Global.url + "productos-termino/"+termino)
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
  },
};
</script>