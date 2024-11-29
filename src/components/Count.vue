<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();

const { count } = storeToRefs(useCounter);

const { increment, decrement } = useCounter;
</script>


<template>
    <div class="hero">
        <h4 class="count">{{ count }}</h4>

        <span class="group">
            <button class="increment" @click="increment">+</button>
            <button class="decrement" @click="decrement">-</button>
        </span>
    </div>
</template>

<style scoped>
.hero {
    display: flex;
    justify-content: center;
    padding: 5rem;
}

.group {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>