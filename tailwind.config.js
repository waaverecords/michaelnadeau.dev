/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            fontSize: {
                'base': [
                    '1rem',
                    {
                        lineHeight: '1.75rem'
                    }
                ],
                'sm': [
                    '0.875rem',
                    {
                        lineHeight: '1.5rem'
                    }
                ],
                '4xl': [
                    '2rem',
                    {
                        lineHeight: '2.5rem'
                    }
                ],
                '5xl': [
                    '3rem',
                    {
                        lineHeight: '3.5rem'
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