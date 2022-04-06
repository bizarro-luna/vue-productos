<template>
  <div id="generar">
   
    <div class="center">
      <section id="content">
        <h2 class="subheader">Minios</h2>

        <div class="mis-datos" v-if="misDatos">

          {{misDatos}}

        </div>

        <div class="favorita" v-if="favorito">
          El favorito es:
          <h3>{{favorito.title}}</h3>
        </div>

        <!--Listado articulos-->
        <div id="articles">
          <!-- v-for="valor in minios"
        v-bind:key="valor.id" -->
          <div v-for="valor in minionsMayusculas" v-bind:key="valor.id">
            <PeliculaComponent 
              :minion="valor"
              v-on:favorita="haLlegadoFavorita"
              >
              </PeliculaComponent>
          </div>

          <!--AÑADIR Minios VIA JS-->


          <!--<li v-for="(value, key) in minios" :key="value.tile">
        {{ key }}: {{ value }}
      </li>-->
        </div>
      </section>
      <SideBar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>


<script>
import PeliculaComponent from "./PeliculaComponent.vue";
import SideBar  from './SideBar.vue';
export default {
  name: "PeliculasComponent",
  components: {
    PeliculaComponent,
    SideBar, 
  },
  methods:{
    haLlegadoFavorita(favorito){
      console.log("haLlegadoFavorita "+favorito.title)
      this.favorito=favorito;
    }
  },
  data() {
    return {
      nombre:'Hector',
      apellido:'Luna',
      favorito:null,
      minios: [
        {
          title: "Minios 1",
          year: 2017,
          id: 10,
          imagen: "https://luna-clientes-heroku.herokuapp.com/api/uploads/img/",
        },
        {
          title: "Minios 2",
          year: 2018,
          id: 11,
          imagen: "https://luna-clientes-heroku.herokuapp.com/api/uploads/img/",
        },
        {
          title: "Minios 3",
          year: 2015,
          id: 12,
          imagen: "https://luna-clientes-heroku.herokuapp.com/api/uploads/img/",
        },
        {
          title: "Minios 4",
          year: 2019,
          id: 4,
          imagen: "https://luna-clientes-heroku.herokuapp.com/api/uploads/img/",
        },
      ],
    };
  },
  computed:{
      minionsMayusculas(){
        var minionsMayusculas= this.minios;
        for(var i=0;i<this.minios.length;i++){
          minionsMayusculas[i].title=   minionsMayusculas[i].title.toUpperCase();
        }

        return minionsMayusculas;

      },
      misDatos(){
        return this.nombre.toUpperCase()+' '+this.apellido.toUpperCase();
      }
  }
};
</script>