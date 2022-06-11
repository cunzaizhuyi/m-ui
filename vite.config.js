import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import Components from 'unplugin-vue-components/vite';
// import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    // Inspect(),
    // AutoImport({
    //   imports: ['vue', 'vue-router'],
    //   resolvers: [],
    //   // Generate corresponding .eslintrc-auto-import.json file.
    //   // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    //   eslintrc: {
    //     enabled: false, // Default `false`
    //     filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    //     globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    //   },
    // }),
    // Components({
    //   dirs: ['src/components'],
    //   resolvers: [],
    // }),
    Unocss({
      shortcuts: {
      },
    }),
  ],
  build: {
  },
  base: './',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') },
    ],
  },
  server: {
    port: 3002,
  },
});
