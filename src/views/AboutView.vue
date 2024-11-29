<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();
const { count } = storeToRefs(useCounter);

</script>


<template>
  <div class="about">
    <h1>Tus oportunidades son {{ count }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
