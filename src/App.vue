<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="navbar bg-dark nav-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/" style="color:white">
        <img src="@/assets/logo.svg" alt="Bootstrap" width="30" height="24">
        PokeApi
      </router-link>
      <div>
        <router-link class="btn btn-outline-primary me-2" to="/">Home</router-link>
        <router-link class="btn btn-outline-primary me-2" to="/pokemons">Pokemons</router-link>
        <router-link class="btn btn-outline-primary me-2" to="/favPokemons">Favoritos</router-link>
      </div>
    </div>
  </nav>

  <div class="container text-center">
    <RouterView /> 
  </div>
</template>
