import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: { host: true, port: 9000 }
  // build: {
  // 在 outDir 中生成 manifest.json
  // manifest: true,
  // rollupOptions: {
  // 覆盖默认的 .html 入口
  // input: '/path/to/main.js'
  // }
  // }
})
