// vim: set ts=4 sw=4 et:
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',

    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
    typescript: {
        strict: true,
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
