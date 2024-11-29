import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { beforeEach ,describe, expect, test } from "vitest";
import HomeView from "@/views/HomeView.vue";
import { createPinia, setActivePinia } from "pinia";

describe('HomeView', ()=>{
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    test('Probando la existencia de la vista', async ()=>{
        const router = createRouter({
            history: createWebHistory(),
            routes: [
              {
                path: '/',
                name: 'HomeViewVue',
                component: HomeView,
              },
            ],
        })
        router.push('/')
        await router.isReady()
        const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })
      expect(wrapper.findComponent(HomeView).exists()).toBe(true)

    })  
})
