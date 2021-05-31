module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
                'serif': ['DM Serif Display', 'ui-serif', 'Georgia', 'Times New Roman'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}