import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: './src/home.vue' // Replace 'newEntryPoint.js' with your desired entry file
    }
  }
})
