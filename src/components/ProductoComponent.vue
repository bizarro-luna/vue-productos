<template>
  <section id="articles-component">
    <div v-if="productosComponent && productosComponent.length > 0">
      <article
        class="article-item"
        v-for="p in productosComponent"
        :key="p.idProducto"
      >
        <div class="image-wrap">
          <img
            :src="rutaImagen + p.idProducto"
            :alt="p.nombre"
            :title="p.nombre"
            v-if="p.fotoHashCode"
          />
          <img
            src="../assets/img/notFound.png"
            :alt="p.nombre"
            :title="p.nombre"
            v-if="!p.fotoHashCode"
          />
        </div>

        <h2>
          <router-link :to="{ name: 'producto', params: { id: p.idProducto } }">
            {{ p.nombre }}
          </router-link>
        </h2>

        <span class="date">{{ moment(p.fechaCreacion).fromNow() }} </span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>



      </article>
    </div>
    <div v-else-if="productosComponent && productosComponent.length < 1">
      No hay articulos
    </div>

    <div v-else>Cargando...</div>
  </section>
</template>

<script>
import { Global } from "../Global.js";
import moment from "moment";
export default {
  name: "ProductoComponent",
  props: ["productosComponent"],
  created: function () {
    this.moment = moment;
  },
  data() {
    return {
      rutaImagen: Global.url + "producto/uploads/img/",
    };
  },
};
</script>