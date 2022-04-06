import { createRouter, createWebHistory } from "vue-router";


import UltimosArticulos from '../components/UltimosArticulos.vue';
import MiComponente from '../components/MiComponente.vue';
import HelloWorld from '../components/HelloWorld.vue';
import BlogComponent from '../components/BlogComponent.vue';
import FormularioComponent from '../components/FormularioComponent.vue';
import PaginaComponent from '../components/PaginaComponent.vue';
import ErrorComponent from '../components/ErrorComponent.vue';
import PeliculasComponent from '../components/PeliculasComponent.vue';
import BuscadorComponent from '../components/BuscadorComponent.vue';
import Redireccion from '../components/Redireccion.vue';
import ProductoDetalle from '../components/ProductoDetalle.vue';
import ProductoCrear from '../components/ProductoCrear.vue';
import ProductoEditar from '../components/ProductoEditar.vue';
const routes = [

    { path: '/home', component: UltimosArticulos },
    { path: '/ultimos-articulos', component: UltimosArticulos },
    { path: '/mi-componente', component: MiComponente },
    { path: '/hola-mundo', component: HelloWorld },
    { path: '/blog', component: BlogComponent },
    { path: '/producto/:id', name:'producto', component: ProductoDetalle },
    { path: '/producto-crear', name:'producto-crear', component: ProductoCrear },
    { path: '/producto-editar/:id', name:'producto-editar', component: ProductoEditar },
    { path: '/formulario', component: FormularioComponent },
    { path: '/pagina/:id?', name: 'pagina', component: PaginaComponent },
    { path: '/peliculas', name: 'peliculas', component: PeliculasComponent },
    { path: '/', component: UltimosArticulos },
    { path: '/redireccion/:termino', component:Redireccion  },
    { path: '/buscador/:termino', component:BuscadorComponent  },
    { path: "/:catchAll(.*)",name: "NotFound", component: ErrorComponent ,meta: {requiresAuth: false} }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;