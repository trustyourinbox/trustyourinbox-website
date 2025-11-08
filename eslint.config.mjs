import { fixupConfigRules } from "@eslint/compat";
import nextPlugin from "eslint-config-next";

const eslintConfig = [
  // Ignore patterns
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "dist/**",
      ".turbo/**",
      ".cache/**",
      "public/**",
      ".contentlayer/**",
      "design/**", // Design prototypes/experiments folder
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },

  // Apply Next.js rules with compatibility fixes
  ...fixupConfigRules(nextPlugin),

  // Project-specific overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Disable overly strict rules
      "@next/next/no-html-link-for-pages": "off",
      "react-hooks/set-state-in-effect": "off", // Common pattern for hydration
      "react-hooks/purity": "warn", // Change to warning instead of error
      "jsx-a11y/alt-text": "warn", // Change to warning instead of error
    },
  },
];

export default eslintConfig;
