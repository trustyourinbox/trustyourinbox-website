# Contributing to TrustYourInbox

Thank you for your interest in contributing to TrustYourInbox! This document provides guidelines and best practices for contributing to the project.

## Development Setup

### Prerequisites

- Node.js >= 22.0.0 < 26.0.0
- npm >= 10.0.0

### Installation

```bash
git clone git@github.com:trustyourinbox/trustyourinbox-website.git
cd trustyourinbox-website
npm install
```

### Running Locally

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Git Workflow

We use Git hooks to ensure code quality and consistency. The following hooks are automatically run:

### Pre-Commit Hook

Runs on every commit before the commit is created. Includes:

1. **Prettier formatting** - Automatically formats staged files
2. **TypeScript type checking** - Ensures no type errors (`tsc --noEmit`)

**Note**: ESLint is temporarily disabled in pre-commit due to a known bug with ESLint 9.39.x and FlatCompat. We rely on TypeScript's strict mode and Prettier for code quality.

### Commit Message Hook

Validates commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Valid types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding or updating tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

**Examples:**

```bash
git commit -m "feat: add DMARC analyzer tool"
git commit -m "fix(api): resolve authentication timeout"
git commit -m "docs: update installation instructions"
```

### Pre-Push Hook

Runs before pushing to remote. Includes:

1. **TypeScript type check** - Ensures no type errors
2. **Production build** - Ensures the project builds successfully
3. **Security audit** - Checks for high-severity vulnerabilities (warning only)

**Skip pre-push checks** (use sparingly):

```bash
git push --no-verify
```

## Available Scripts

### Development

```bash
npm run dev          # Start development server with hot reload
npm run build        # Create production build
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run Next.js linter
npm run lint:fix     # Fix auto-fixable lint issues
npm run type-check   # Run TypeScript type checking
npm run format       # Format all files with Prettier
npm run format:check # Check if files are formatted
```

### Validation

```bash
npm run validate     # Run all checks (format, type-check, lint)
npm run validate:fix # Auto-fix formatting and linting, then type-check
```

### Security

```bash
npm run security:audit # Audit dependencies for vulnerabilities
npm run security:fix   # Attempt to fix vulnerabilities automatically
```

### Pre-Commit

```bash
npm run pre-commit   # Manually run pre-commit checks (lint-staged)
```

## Code Style Guide

### TypeScript

- Use TypeScript for all new files
- Enable strict mode (already configured in `tsconfig.json`)
- Avoid `any` types - use `unknown` or proper typing
- Use interfaces for object shapes, types for unions/primitives

### React

- Use functional components with hooks
- Use `const` for component declarations
- Prefer named exports for components
- Keep components small and focused (< 200 lines)

### Formatting

- We use Prettier for automatic formatting
- Configuration in `.prettierrc`
- Run `npm run format` before committing (or let pre-commit handle it)

### File Naming

- Components: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- Pages (Next.js): lowercase with hyphens (e.g., `about/page.tsx`, `contact-us/page.tsx`)

## Branching Strategy

### Main Branches

- `main` - Production-ready code
- `upgrade/*` - Major version upgrades and migrations

### Feature Branches

Create feature branches from `main`:

```bash
git checkout main
git pull origin main
git checkout -b feat/your-feature-name
```

**Branch naming:**

- `feat/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/doc-name` - Documentation updates
- `refactor/refactor-name` - Code refactoring
- `test/test-name` - Test additions/updates

## Pull Request Process

1. **Create a branch** following naming conventions
2. **Make your changes** with meaningful commits
3. **Ensure all checks pass**:
   ```bash
   npm run validate
   npm run build
   ```
4. **Push to your branch**:
   ```bash
   git push origin your-branch-name
   ```
5. **Create a Pull Request** with:
   - Clear title following conventional commit format
   - Description of changes
   - Related issue numbers (if applicable)
   - Screenshots (for UI changes)

6. **Address review feedback** if requested
7. **Squash and merge** when approved

## Testing

Currently, we rely on:

- TypeScript strict mode for type safety
- Next.js build process for SSR/SSG validation
- Manual testing for UI/UX

Future: We plan to add:

- Unit tests (Jest + React Testing Library)
- E2E tests (Playwright)
- Visual regression tests

## Troubleshooting

### Pre-commit hooks failing

If hooks are causing issues:

```bash
# Temporarily skip hooks (use sparingly)
git commit --no-verify -m "your message"

# Update husky hooks
npm run prepare
```

### Type checking errors

```bash
# Run type check to see detailed errors
npm run type-check

# Common issues:
# - Missing type definitions: npm install --save-dev @types/package-name
# - Implicit any: Add proper types or use 'unknown'
```

### Build failures

```bash
# Clean .next directory
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

## Security

### Reporting Security Issues

**DO NOT** create public GitHub issues for security vulnerabilities.

Instead, email security issues to: [security@trustyourinbox.com](mailto:security@trustyourinbox.com)

### Dependency Updates

- Run `npm audit` regularly
- Update dependencies with care (test thoroughly)
- Keep Node.js and npm within supported versions

## Questions?

- Check existing issues on GitHub
- Create a new issue for bugs or feature requests
- Email [support@trustyourinbox.com](mailto:support@trustyourinbox.com) for general questions

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to TrustYourInbox! 🎉
