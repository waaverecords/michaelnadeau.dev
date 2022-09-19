/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            fontSize: {
                '4xl': [
                    '2rem',
                    {
                        lineHeight: '2.5rem'
                    }
                ]
            }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('children', '& > *')
        }
    ],
}