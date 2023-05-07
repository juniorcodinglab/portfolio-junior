import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "assets/scss/app.scss";`}
    },
    rules: [
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
      },
    ],
  },
  build: {
    input: {
      main: resolve(__dirname, 'index.html'),
      nested: resolve(__dirname, 'dist/index.html'),
    },
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
})
