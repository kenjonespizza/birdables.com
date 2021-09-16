const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			animation: ['motion-safe'],
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			borderWidth: {
				'3': '3px;'
			},
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
				'card': ['0 0 1px rgba(17, 25, 30, 0.1)', '0 1px 1px rgba(17, 25, 30, 0.06)', '0 8px 5px rgba(17, 25, 30, 0.05)', '0 5px 25px rgba(17, 25, 30, 0.10)'],
				'card-hover': ['0 0 1px rgba(17, 25, 30, 0.1)', '0 1px 1px rgba(17, 25, 30, 0.06)', '0 8px 15px rgba(17, 25, 30, 0.05)', '0 5px 35px rgba(17, 25, 30, 0.10)'],
			},
			fontFamily: {
				sans: ["'GreycliffCF'", ...defaultTheme.fontFamily.sans],
			},
			fontWeight: {
				normal: 500,
			},
			minWidth: {
				'0': '0',
				'1/4': '25%',
				'1/3': '33.33%',
				'1/2': '50%',
				'2/3': '66.66%',
				'3/4': '75%',
				'full': '100%',
			},
			ringWidth: {
        '3': '3px',
      },
			ringOffsetWidth: {
        '3': '3px',
      },
			scale: {
				'flip': '-1',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	]
};

module.exports = config;
