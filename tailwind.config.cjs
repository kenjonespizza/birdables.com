const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				beak: {
					50: "#FFF4E3",
					100: "#FFEED1",
					200: "#FFDFAB",
					300: "#FFD186",
					400: "#FFC25E",
					500: "#FBAB2A",
					600: "#F29600",
					700: "#D78500",
					800: "#B16E00",
					900: "#794B00",
				},
				gray: {
					50: "#F7FAFC",
					100: "#EFF4F6",
					200: "#DBE1E5",
					300: "#ACB9C1",
					400: "#7B8890",
					500: "#505A60",
					600: "#3D454A",
					700: "#2B343A",
					800: "#1B242B",
					900: "#11191E",
					'blue': "#D3E1E4",
				},
				text: "rgba(17, 25, 20, 0.7)"
			},
			dropShadow: {
				'card': ['0 1px 2px rgba(0, 0, 0, 0.1)', '0 1px 1px rgba(0, 0, 0, 0.06)', '0 8px 5px rgba(0, 0, 0, 0.08)', '0 5px 25px rgba(0, 0, 0, 0.15)']
			},
			fontFamily: {
				sans: ["'GreycliffCF'", ...defaultTheme.fontFamily.sans],
			},
			fontWeight: {
				normal: 500,
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
