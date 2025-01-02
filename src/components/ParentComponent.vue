<script setup>
import { ref } from 'vue';
import Child from './ChildComponet.vue';


const nuevoText = ref('');

const enviar = (text) => {
    nuevoText.value = text
    nuevoText.value = '';

}

</script>

<template>

    <div>
        <Child @enviar="enviar"></Child>

        <p>El hijo dice: {{ nuevoText }}</p>

    </div>


</template>