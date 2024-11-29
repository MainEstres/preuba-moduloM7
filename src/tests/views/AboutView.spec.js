import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { beforeEach, describe, expect, test } from "vitest";
import AboutView from "@/views/AboutView.vue";
import { createPinia, setActivePinia } from "pinia";

describe('AboutView', ()=>{
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    test('Probando la existencia de la vista', async ()=>{
        const router = createRouter({
            history: createWebHistory(),
            routes: [
              {
                path: '/about',
                name: 'AboutViewVue',
                component: AboutView,
              },
            ],
        })
        router.push('/about')
        await router.isReady()
        const wrapper = mount(AboutView, {
        global: {
          plugins: [router],
        },
      })
      expect(wrapper.findComponent(AboutView).exists()).toBe(true)

    })  
})