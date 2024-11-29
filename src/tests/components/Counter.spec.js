import Count from "@/components/Count.vue";
import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";


describe('Componente Count.vue', ()=>{
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    test('Validar que el valor de count sea 0', ()=>{
        const wrapper = shallowMount(Count)
        const count = wrapper.find('.count')
        expect(count.text()).toBe("0")
    })
    test('Incrementar en 1 el valor del contador', async () => {
        const wrapper = shallowMount(Count)
        const botonIncrementar = wrapper.find('.increment')
        await botonIncrementar.trigger('click')
        expect(wrapper.find('.count').text()).toBe("1")
    })
    test('Decremente en -1 el valor del contador', async () => {
        const wrapper = shallowMount(Count)
        const botonDecrementar = wrapper.find('.decrement')
        await botonDecrementar.trigger('click')
        expect(wrapper.find('.count').text()).toBe("-1")
    })
})