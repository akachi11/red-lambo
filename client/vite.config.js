// import { defineConfig } from 'vite';
// 
// import ReactPlugin from '@vitejs/plugin-react';

// export default defineConfig({
//   
//   plugins: [RubyPlugin(), ReactPlugin()],
// });



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path';
import RubyPlugin from 'vite-plugin-ruby';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
        alias: {
          timers: 'rollup-plugin-node-polyfills/polyfills/timers',
        },
      },
    plugins: [react()],
  })