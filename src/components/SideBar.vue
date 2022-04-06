<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <router-link to="/producto-crear" class="btn btn-success">Crear producto</router-link>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <form @submit.prevent="buscarProductos()">
        <input type="text" name="search" v-model="termino" />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
 
</template>

<script>
export default {
  name: "SideBar",
  data(){
    return {
      termino:null
    }
  },
  methods:{
    buscarProductos(){
      this.$router.push('/redireccion/'+this.termino);
    },
    crearProducto(){
      this.$router.push('/producto-crear');
    }

  }
};
</script>