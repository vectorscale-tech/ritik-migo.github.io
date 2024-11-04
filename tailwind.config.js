module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#333',
            h1: {
              color: '#333',
            },
            h2: {
              color: '#333',
            },
            // Add more typography customizations as needed
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}