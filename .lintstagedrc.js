module.exports = {
  // Lint & format TypeScript and JavaScript files (excluding design folder)
  "*.{js,jsx,ts,tsx}": (files) => {
    const filteredFiles = files.filter((file) => !file.includes("/design/"));
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
