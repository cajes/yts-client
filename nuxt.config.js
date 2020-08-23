
const modulesConfig = {
  axios: {}
};

export default {

  modules: [
    '@nuxtjs/axios'
  ],

  plugins: [
    '@/plugins/Param.js'
  ],

  server: {
    port: 8000,
    host: '192.168.0.113',
    timing: false
  },

  srcDir: 'src/',


  publicRuntimeConfig: {
    YTS_API: 'https://yts.mx/api/v2/endpoint'
  },

  privateRuntimeConfig: {

  },

  ...modulesConfig
}