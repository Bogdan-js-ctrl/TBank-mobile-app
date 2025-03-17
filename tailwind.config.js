module.exports = {
  content: [

    './app/components/**/*.tsx',
    './app/components/screens/auth/Auth.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
