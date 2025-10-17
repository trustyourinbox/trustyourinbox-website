module.exports = {
  // Lint & format TypeScript and JavaScript files
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],

  // Format JSON, CSS, and Markdown files
  "*.{json,css,scss,md}": ["prettier --write"],

  // Type-check TypeScript files
  "*.{ts,tsx}": () => "tsc --noEmit",
};
