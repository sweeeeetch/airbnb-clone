export default defineNuxtConfig({
  app: {
    head: {
      title: "Airbnb",
      meta: [{ name: "description", content: "This is Airbnb clone on Nuxt" }],
      link: [
        { rel: "shortcut icon", type: "image/svg+xml", href: "/logo.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  css: ["assets/style.scss", "vue-toast-notification/dist/theme-sugar.css"],
  modules: ["nuxt-icons", "@pinia/nuxt", "@vee-validate/nuxt", "@sidebase/nuxt-auth"],
  pinia: {
    autoImports: ["defineStore"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  auth: {
    provider: {
      type: "authjs",
    },
  },
  plugins: [
    "~/plugins/vee-validate.js",
    { src: "~/plugins/vue-toast-notification.js", mode: "client" },
  ],
});
