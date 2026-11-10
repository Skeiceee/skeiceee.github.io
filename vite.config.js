import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// `./` keeps the build portable: funciona tanto en skeiceee.github.io
// como en un repositorio de proyecto (skeiceee.github.io/portafolio).
export default defineConfig({
  base: './',
  plugins: [svelte()]
});
