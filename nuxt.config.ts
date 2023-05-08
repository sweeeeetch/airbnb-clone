// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "<rootDir>",
  },
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

  css: ["assets/style.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
