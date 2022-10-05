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
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-invert-body': theme('colors.zinc[400]'),
                        '--tw-prose-invert-headings': theme('colors.zinc[200]'),
                        '--tw-prose-invert-links': theme('colors.cyan[500]'),
                        '--tw-prose-invert-underline': 'transparent',
                        '--tw-prose-invert-underline-hover': theme('colors.cyan[500]'),
                        maxWidth: 'unset',
                        h2: {
                            fontSize: '1.25rem',
                            marginTop: '5rem',
                            marginBottom: '1rem',
                            lineHeight: '1.75rem'
                        },
                        a: {
                            textDecorationColor: 'var(--tw-prose-invert-underline)',
                            transition: 'text-decoration-color 150ms',
                            '&:hover': {
                                textDecorationColor: 'var(--tw-prose-invert-underline-hover)',
                            }
                        },
                        img: {
                            marginTop: '2.5rem',
                            marginBottom: '2.5rem',
                            borderRadius: '1.5rem'
                        }
                    }
                }
            })
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('children', '& > *')
        },
        require('@tailwindcss/typography')
    ],
}