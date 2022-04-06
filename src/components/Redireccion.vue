<template>
    <h1>Redirigiendo...</h1>
</template>

<script>
export default {
    name:"RedireccionComponent",
    mounted(){
        var termino = this.$route.params.termino;
        this.$router.push('/buscador/'+termino);
    }
}
</script>