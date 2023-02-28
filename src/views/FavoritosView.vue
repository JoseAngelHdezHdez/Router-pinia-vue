<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
</script>

<template>
    <h1>Tus Pokemones Favoritos</h1>
    <p v-if="favoritos.length === 0">No tienes ni un pokemons favorito.... XS</p>
    <ul class="list-group">
        <li class="list-group-item" v-for="fav in favoritos" :key="fav.id">
            <div>
                {{ fav.id }}: {{ fav.name }}
            </div>
            <div> 
                <router-link :to="`/pokemons/${ fav.name }`" class="btn btn-sm btn-warning me-2">información</router-link>
                <button @click="remove(fav.id)" class="btn btn-sm btn-danger">Eliminar</button>
            </div>
        </li>
    </ul>
</template>