import ChildComponet from "@/components/ChildComponet.vue";
import ParentComponent from "@/components/ParentComponent.vue";
import { mount, shallowMount } from "@vue/test-utils";
import {  describe, expect, test } from "vitest";



describe('Componente Child', ()=>{
    test('Probando que se envia algun texto', async ()=>{
        const wrapper = shallowMount(ChildComponet)
        const boton = wrapper.find('.boton');
        const input = wrapper.find('input')
        input.setValue('Hola')
        await boton.trigger('click');
        expect(input.element.value).toBe('Hola')
    })
})
//La verdad no c si estara bien pero funciona 
describe('Componente Child', ()=>{
    test('Probando que SI se envia algun texto', async ()=>{
        const wrapper = mount(ChildComponet, ParentComponent)
        const p = wrapper.find('p')
        const boton = wrapper.find('.boton')
        const input = wrapper.find('input')
        await input.setValue('Hola')
        await boton.trigger('click')
         expect(p.text()).toBe('El hijo dice: Hola')
    })
})