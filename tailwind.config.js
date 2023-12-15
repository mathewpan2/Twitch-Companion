import "tailwind-scrollbar-hide"

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide")
  ],
  variants: {},
  corePlugins: {
    preflight: true,
  },
}

