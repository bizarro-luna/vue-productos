<template>
  <div id="generar">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="producto">
          <div class="image-wrap">
            <img
              :src="rutaImagen + producto.idProducto"
              :alt="producto.nombre"
              :title="producto.nombre"
              v-if="producto.fotoHashCode"
            />
            <img
              src="../assets/img/notFound.png"
              alt="No encontrado"
              title="No encontrado"
              v-if="!producto.fotoHashCode"
            />
          </div>

          <h1 class="subheader">{{ producto.nombre }}</h1>
          <span class="date">{{
            moment(producto.fechaCreacion).fromNow()
          }}</span>
          <p>Precio $ {{ producto.precio }}</p>

          <div class="clearfix"></div>

          <router-link
            :to="'/producto-editar/' + producto.idProducto"
            class="btn btn-warning"
            >Editar</router-link
          >
          <a
            @click="eliminarProducto(producto.idProducto)"
            class="btn btn-danger"
            >Eliminar</a
          >
        </article>
      </section>
      <SideBar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import { Global } from "../Global.js";
import moment from "moment";
export default {
  name: "ProductoDetalle",
  components: {
    SideBar,
  },
  created: function () {
    this.moment = moment;
  },
  data() {
    return {
      rutaImagen: Global.url + "producto/uploads/img/",
      producto: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.obtenerProducto(this.id);
  },
  methods: {
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
    },
    eliminarProducto(idProducto) {
      this.$swal({
        title: "Estas seguro",
        text: "Una vez eliminado, no se recuperara el producto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        showCloseButton: true,
        dangerMode: true,
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(Global.url + "producto/" + idProducto, {
            method: "DELETE",
          })
            .then((resp) => {
              if (resp.status == 204) {
                this.$swal(
                  "Producto borrado",
                  "El articulo se ha borrado correctamente",
                  "success"
                );
                this.$router.push("/blog");
              } else {
                this.$swal(
                  "Error",
                  "El articulo no se ha borrado correctamente",
                  "danger"
                );
              }
            })
            .catch((error) =>
              this.$swal("Error", "Error en el servidor " + error, "danger")
            );
        } else {
          this.$swal("Casi no has borrado nada!!");
        }
      });
    }//Termina metodo de liminar
  },
};
</script>