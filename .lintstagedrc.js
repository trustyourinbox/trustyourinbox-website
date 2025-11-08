module.exports = {
  // Lint & format TypeScript and JavaScript files (excluding design folder and config files)
  "*.{js,jsx,ts,tsx}": (files) => {
    const filteredFiles = files.filter(
      (file) =>
        !file.includes("/design/") &&
        !file.endsWith(".config.js") &&
        !file.endsWith(".config.mjs") &&
        !file.endsWith(".config.ts")
    );
    if (filteredFiles.length === 0) return [];
    return [
      `prettier --write ${filteredFiles.join(" ")}`,
      `eslint --fix --max-warnings=0 ${filteredFiles.join(" ")}`,
    ];
  },

  // Format JSON, CSS, and Markdown files
  "*.{json,css,scss,md}": ["prettier --write"],

  // Type-check TypeScript files (runs on ALL TS files, not just staged)
  "*.{ts,tsx}": () => "tsc --noEmit",
};
