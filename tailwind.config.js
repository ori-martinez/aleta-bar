/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ './src/**/*.{js,jsx,ts,tsx}', ],
    theme: {
        extend: {
            colors: {
                'aquamarine': '#28B0B5',
                'blue-dark': '#12141C',
            },
            screens: { 'xs': '400px' },
        },
    },
    plugins: [],
}
