<script setup>
import { RouterLink, RouterView } from 'vue-router';
import ParentComponent from './components/ParentComponent.vue';


</script>


<template>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView></RouterView>

    <div class="hero">
        <ParentComponent></ParentComponent>
    </div>
</template>



<style scoped>
.hero {
    display: flex;
    justify-content: center;
    padding: 5rem;
}

nav {
    display: flex;
    justify-content: center;
}
</style>