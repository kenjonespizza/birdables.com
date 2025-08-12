module.exports = {
  plugins: {
    // Tailwind v4 uses its own PostCSS plugin automatically via the CSS @import
    // Include autoprefixer; cssnano optional in production
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'development' ? {} : { cssnano: { preset: 'default' } })
  }
};