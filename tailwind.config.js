module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: '#00BCD4',
                secondary: '',
                disabled: '',
                active: '#04c4c4',
                oragne: '#ea580c'
            }
        },

    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}