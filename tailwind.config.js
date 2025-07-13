/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                purple: 'var(--purple)',
                blue: 'var(--blue)',
                pink: 'var(--pink)',
                dark: 'var(--dark)',
                light: 'var(--light)',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'bounce': 'bounce 2s infinite',
                'wiggle': 'wiggle 2s ease-in-out infinite',
                'pulse': 'pulse 2s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(5deg)' },
                    '75%': { transform: 'rotate(-5deg)' },
                },
            },
        },
    },
    plugins: [],
} 