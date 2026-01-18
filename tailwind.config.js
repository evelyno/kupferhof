/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rosental: {
                    50: '#faf8f5',
                    100: '#f5f0e8',
                    200: '#e8dcc8',
                    300: '#d4bc9a',
                    400: '#b8956d',
                    500: '#7e6648',
                    600: '#6b5539',
                    800: '#4a3a27',
                    900: '#3a2e1f',
                    950: '#2a2116',
                },
                stone: {
                    850: '#1f1f1f',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
