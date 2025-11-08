# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- GitHub Actions CI workflow with lint, type check, build, and security audit
- Dependabot configuration for automated dependency updates
- ESLint flat config migration (removed FlatCompat circular structure bug)
- CHANGELOG.md to track project changes
- GitHub issue templates for bug reports, feature requests, and questions
- CODEOWNERS file for automatic code review assignments
- Developer experience enhancements:
  - `.editorconfig` for cross-editor consistency
  - `.nvmrc` to lock Node.js version (22.12.0)
  - `.vscode/settings.json` and `.vscode/extensions.json` for team-wide VSCode configuration
  - `LICENSE` file (proprietary)
  - `SECURITY.md` with vulnerability disclosure policy
  - `.github/PULL_REQUEST_TEMPLATE.md` for standardized PRs
- Git hooks enhancements:
  - `.husky/post-merge` for automatic dependency installation
  - Branch name validation in commit-msg hook
- npm scripts:
  - `deps:check` - Check for unused dependencies with depcheck
  - `analyze` - Bundle analysis with ANALYZE=true flag
- Comprehensive documentation:
  - Updated README.md with full project documentation
  - CONTRIBUTING.md with developer guide (250+ lines)

### Changed

- Migrated ESLint from FlatCompat to full flat config
- Re-enabled ESLint in pre-commit hooks (was temporarily disabled)
- Removed deprecated `.eslintignore` (now using `ignores` in flat config)

### Fixed

- ESLint circular structure bug by migrating away from FlatCompat
- React hooks warnings by adding appropriate rule overrides

## [0.1.0] - 2025-01-08

### Added

- Icon library migration from react-icons to lucide-react
- Comprehensive git hooks and quality checks:
  - Pre-commit: Prettier, type checking, ESLint
  - Commit-msg: Conventional Commits validation
  - Pre-push: Full type check, production build, security audit
- `.mailmap` for git identity consolidation
- `.prettierignore` and `.eslintignore` for build output exclusion

### Changed

- Upgraded to Next.js 16.0.1 with Turbopack
- Updated dependencies:
  - Minor version updates for ESLint, Lucide React, @types/node
  - Patch updates for Tailwind CSS, Radix UI, Sharp, lint-staged
- Optimized dependencies by removing unused packages

### Fixed

- Security vulnerability CVE-2025-64118 in tar package

### Removed

- react-icons package (replaced with lucide-react)
- Unused dependencies identified in audit

## [0.0.1] - 2024-12-18

### Added

- Initial project setup with Next.js 15
- Complete guide library (24 comprehensive guides):
  - Email authentication fundamentals
  - SPF implementation and best practices
  - DKIM configuration and troubleshooting
  - DMARC policy management
  - Advanced topics (BIMI, forensic reports, multi-tenant)
- Free DMARC tools suite:
  - DMARC Policy Generator
  - DMARC Domain Checker
  - DMARC Analyzer
  - DKIM Inspector & Validator
  - SPF Surveyor
  - XML Converter
  - Domain Security Checker
  - DMARC Policy Impact Simulator
- Marketing pages:
  - Homepage with hero, features, stats, testimonials
  - Product page
  - Pricing page
  - Solutions pages (MSP, IT Teams, Enterprise)
  - About page
  - Contact page
- Blog with 4 articles:
  - DMARC Compliance Requirements 2025
  - DMARC Policy Comparison
  - Implementing DMARC in Large Organizations
  - PCI DSS DMARC Compliance 2025
- Comparison pages:
  - vs. PowerDMARC
  - vs. EasyDMARC
  - vs. Dmarcian
- Comprehensive SEO optimization:
  - Dynamic sitemap.xml
  - Structured data (Schema.org)
  - llms.txt for AI search engines
  - OpenGraph and Twitter Card metadata
- UI Components:
  - Dark mode support with next-themes
  - Custom chart components with Recharts
  - shadcn/ui component library
  - Responsive navigation
  - Interactive tools with real-time validation
- Analytics:
  - Vercel Speed Insights integration
  - Performance monitoring

### Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui + Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Email**: SendGrid
- **Deployment**: Vercel
- **Package Manager**: npm

---

## Legend

- `Added` - New features
- `Changed` - Changes to existing functionality
- `Deprecated` - Soon-to-be removed features
- `Removed` - Removed features
- `Fixed` - Bug fixes
- `Security` - Vulnerability fixes

[Unreleased]: https://github.com/trustyourinbox/trustyourinbox-website/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/trustyourinbox/trustyourinbox-website/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/trustyourinbox/trustyourinbox-website/releases/tag/v0.0.1
