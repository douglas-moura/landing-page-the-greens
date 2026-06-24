/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'espaco-externo': "url('/src/assets/img/espaco/espaco-externo-1.webp')",
                'espaco-externo-noite': "url('/src/assets/img/espaco/espaco-externo-noite.webp')"
            },
        },
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif']
        },
        colors: {
            'verde-escuro': '#3B6429',
            'verde-claro': '#67B42E',
            'verde-reticula': '#EEF5E7',
            'preto': '#252525',
            'branco': '#FEFEFD',
        }
    },
    plugins: [],
}