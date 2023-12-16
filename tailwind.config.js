
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFDD0',
        'light-yellow': '#FEFFE3',
        'milk': '#FDFFF6'
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
  variants: {},
  corePlugins: {
    preflight: true,
  },
}

