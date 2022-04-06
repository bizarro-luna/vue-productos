<template>
  <div id="generar">
    <SliderComponent texto='Página de Prueba' showBtn='true' />
    <div class="center">
      <section id="content">
        <h1 class="subheader">{{ titulo }}</h1>
        <hr />
        <h1>Este es mi componente</h1>
        <h2>{{ subtitulo }}</h2>
        <hr />

        <h2>Reactividad</h2>
        <input type="text" v-model="nombre" />
        Mi nombre es <strong>{{ nombre }}</strong>

        <h2>Directivas Condicionales</h2>
        <input type="number" v-model="edad" />

        Mi edad es: <strong>{{ edad }}</strong>

        <p
          class="alert-success-provisional"
          v-if="edad && edad > 17 && edad < 65"
        >
          Eres mayor de Edad
        </p>

        <p class="alert-purple-provisional" v-else-if="edad && edad > 64">
          Eres de la tercera edad
        </p>

        <p class="alert-danger-provisional" v-else>No eres mayor de edad</p>

        <h2>Directiva loop</h2>
        <ol>
          <li v-for="p in peliculas" :key="p">
            {{ p }}
          </li>
        </ol>

        <!--<pre>
        {{$data}}
      </pre>-->
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
  name: "MiComponente",
  components: {
    SliderComponent,
    SideBar,
  },
  data() {
    return {
      titulo: "Mi componente",
      subtitulo: "Soy el subtitulo de mi componente ",
      nombre: "",
      edad: 0,
      peliculas: [
        "Batman vs Superman",
        "Spiderman",
        "El señor de los anillos",
        "Huevos",
      ],
    };
  },
};
</script>