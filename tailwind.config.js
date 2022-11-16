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
                        '--tw-prose-invert-counters': theme('colors.zinc[200]'),
                        '--tw-prose-invert-dots': theme('colors.zinc[200]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0, 0, 0, 0.4)',
                        '--tw-prose-invert-pre-border': 'hsla(240, 6%, 90%, 0.1)',
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
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            borderRadius: '1.5rem'
                        },
                        ol: {
                            paddingLeft: '1.5rem',
                            marginTop: '2.5rem',
                            marginBottom: '2.5rem',

                            '& > li': {
                                paddingLeft: '0.875rem',
                                marginTop: '1.5rem',
                                marginBottom: '1.5rem',

                                '&::marker': {
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    color: 'var(--tw-prose-invert-counters)'
                                }
                            }
                        },
                        ul: {
                            paddingLeft: '1.5rem',
                            marginTop: '2.5rem',
                            marginBottom: '2.5rem',

                            '& > li': {
                                paddingLeft: '0.875rem',
                                marginTop: '1.5rem',
                                marginBottom: '1.5rem',

                                '&::marker': {
                                    fontSize: '0.875rem',
                                    color: 'var(--tw-prose-invert-dots)'
                                }
                            }
                        },
                        pre: {
                            padding: '2rem',
                            marginTop: '2.5rem',
                            marginBottom: '2.5rem',
                            borderRadius: '1.5rem',
                            border: '1px solid',
                            borderColor: 'var(--tw-prose-invert-pre-border)'
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