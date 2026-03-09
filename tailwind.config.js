/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0A0A14',
                    card: '#10101E',
                },
                primary: {
                    DEFAULT: '#7B61FF',
                    light: '#9E88FF',
                },
                accent: {
                    DEFAULT: '#C4B5FD',
                },
                text: {
                    main: '#FFFFFF',
                    body: '#BBBBD0',
                    small: '#7B7B9A',
                }
            },
            fontFamily: {
                heading: ['Unbounded', 'sans-serif'],
                body: ['Noto Sans', 'sans-serif'],
            },
            borderRadius: {
                'golden': '2rem',
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}
