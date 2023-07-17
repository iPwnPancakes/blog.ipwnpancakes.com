/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			space: {}
		},
	},
	daisyui: {
		themes: [
			'dracula',
			{
				mytheme: {
					"primary": "#8dd861",
					"secondary": "#9ccde2",
					"accent": "#94ecfc",
					"neutral": "#211c27",
					"base-100": "#2a4150",
					"info": "#a4d1ea",
					"success": "#57eac5",
					"warning": "#e7851d",
					"error": "#ed6a5e",
				},
			},
		],
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
}
