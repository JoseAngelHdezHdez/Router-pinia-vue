<script setup>
import { useGetData } from '@/composables/getData';
import { useRoute, useRouter } from 'vue-router';
import { useFavoritosStore } from '@/store/favoritos.js'

const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritosStore();

const { add, findPoke } = useFavoritos;

const back = () => {
    router.push('/pokemons')
};

const {data, loading, getData, errorData} = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-3" v-if="errorData">{{ errorData }}</div>
    <div v-if="data">
        <h1>Poke Name: {{ $route.params.name }}</h1>
        <img :src="data.sprites?.front_default" alt="">
        <h2>Abilidades</h2>
        <ul>
            <li v-for="abi in data.abilities">
                {{ abi.ability.name }}
            </li>
        </ul>
        <h2>Games</h2>
        <table>
            <tr>
                <th>Indice Juego</th>
                <th>Version</th>
                <th>Url</th>
            </tr>
            <tr v-for="juego in data.game_indices">
                <td>
                    {{ juego.game_index }}
                </td>
                <td>
                    {{ juego.version.name }}
                </td>
                <td>
                    {{ juego.version.url }}
                </td>
            </tr>
        </table>
        <button :disabled="findPoke(data.name)" @click="add(data)" class="btn btn-primary mb-2 mt-2">Agregar a Favoritos</button>
    </div>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>