// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "nuxt-bunny-fonts"],
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🖥️</text></svg>",
				},
			],
		},
	},
	bunnyFonts: {
		families: {
			Montserrat: [200, 300, 400, 500, 600, 700, 900],
		},
	},
	runtimeConfig: {
		public: {
			appUrl: process.env.APP_URL,
		},
	},
});
