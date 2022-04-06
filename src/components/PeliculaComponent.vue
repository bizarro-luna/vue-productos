<template>
 <article
        class="article-item"
        
      >
        <div class="image-wrap">
          <img
            :src="minion.imagen + minion.id"
            :alt="minion.title"
            :title="minion.title"
          />
        </div>

        <h2>{{ minion.title }}</h2>
        <span
          class="date"
          :class="{
            yeargreen: minion.year >= 2018,
            yearred: minion.year < 2018,
          }"
        >
          {{ minion.year }}
        </span>
        <a href="#">Leer más</a>

        <input type="button"  value='Favorito' @click="pasarFavoritaPadre(minion)" />

        <div class="clearfix"></div>
      </article>
    
</template>

<script>
export default {
    name:'PeliculaComponent',
    props:['minion'],
    methods:{
      pasarFavoritaPadre(minion){
        console.log(minion); 
        //Para emitir el valor al padre
        this.$emit('favorita',minion);    

      }
    }

}
</script>