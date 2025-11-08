module.exports = {
  // Lint & format TypeScript and JavaScript files
  // Note: ESLint disabled temporarily due to circular structure bug in ESLint 9.39.x + FlatCompat
  // TODO: Re-enable once migrated to full flat config or ESLint fixes the bug
  "*.{js,jsx,ts,tsx}": ["prettier --write"],

  // Format JSON, CSS, and Markdown files
  "*.{json,css,scss,md}": ["prettier --write"],

  // Type-check TypeScript files (runs on ALL TS files, not just staged)
  "*.{ts,tsx}": () => "tsc --noEmit",
};
