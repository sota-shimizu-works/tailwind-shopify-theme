module.exports = {
  mode: "jit",
  prefix: "tw-",
  purge: [
    "./layout/*.liquid",
    "./templates/*.{liquid, json}",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./assets/*.{liquid, js}",
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
