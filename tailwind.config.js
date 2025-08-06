/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            colors: {
                gray: {
                    800: '#37352f',
                    700: '#37352f',
                    200: '#e9e9e7',
                    100: '#f5f5f5',
                },
            },
            maxWidth: {
                '3xl': '768px',
            },
            animation: {
                'blur-in': 'blur-in 0.2s linear',
            },
        },
    },
    plugins: [],
};
