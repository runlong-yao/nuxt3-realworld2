import { resolve } from "node:path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Conduit",
      meta: [{ charset: "utf-8" }],
      link: [
        {
          href: "//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
          rel: "stylesheet",
          type: "text/css",
        },
        {
          href: "//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic",
          rel: "stylesheet",
          type: "text/css",
        },
        {
          href: "//demo.productionready.io/main.css",
          rel: "stylesheet",
          type: "text/css",
        },
      ],
    },
  },
  modules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt"],
  components: [
    {
      prefix: "Layout",
      path: resolve("./components/layouts"),
      global: true,
    },
    {
      prefix: "V",
      path: resolve("./components/ui"),
      global: true,
    },
  ],
});
