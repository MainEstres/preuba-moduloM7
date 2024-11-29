<script setup>
import { ref } from 'vue';


const text = ref('')

</script>

<template>

    <div>
        <input type="text" v-model="text">
        <button class="boton" @click="$emit('enviar', text)">Enviar</button>
    </div>
</template>