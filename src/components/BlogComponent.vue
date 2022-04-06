<template>
  <div id="generar">
    <SliderComponent texto="Blog" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
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
  name: "BlogComponent",
  components: {
    SliderComponent,
    SideBar,
    ProductoComponent,
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
      fetch(Global.url + "obtener-productos")
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