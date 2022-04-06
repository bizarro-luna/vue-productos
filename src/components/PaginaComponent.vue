<template>
  <div id="generar">
    <SliderComponent texto='Página de Prueba' showBtn='true' />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{ id_url }}</h3>
        <button @click="actualizarNombre()">Actualizar</button>
        <button @click="redirigirAlBlog()">Blog</button>
        <h4>{{ nombre }}</h4>
      </section>
      <SideBar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SideBar from "./SideBar.vue";
export default {
  name: "PaginaComponent",
  components: {
    SliderComponent,
    SideBar,
  },
  created() {
    console.log("Componente creado");
  },
  mounted() {
    this.id_url = this.$route.params.id;
    console.log("Componente montado");
  },
  updated() {
    console.log("Componente actualizado");
  },
  unmounted() {
    console.log("Componente unmounted");
  },
  data() {
    return {
      id_url: null,
      nombre: "Erick Luna",
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "ERICK LUNA";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
      //this.$router.push({name:'pagina',params:{id:'Redireccion'} })
    },
  },
};
</script>