import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const webpack = require('webpack')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jquery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   jQuery: 'jquery'
    // }),
    vue()
  ],
})
