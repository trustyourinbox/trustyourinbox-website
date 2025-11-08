# TrustYourInbox Website

Modern, high-performance marketing website for TrustYourInbox - the simple, effective DMARC management platform built for MSPs and IT teams.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 22.0.0 < 26.0.0
- npm >= 10.0.0

### Installation

```bash
git clone git@github.com:trustyourinbox/trustyourinbox-website.git
cd trustyourinbox-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The app uses Turbopack for fast hot module replacement - changes appear instantly.

## 📁 Project Structure

```
trustyourinbox-website/
├── src/
│   ├── app/              # Next.js 16 App Router pages
│   │   ├── api/          # API routes
│   │   ├── blog/         # Blog posts
│   │   ├── guides/       # Educational guides
│   │   ├── tools/        # Free DMARC tools
│   │   └── vs/           # Competitor comparison pages
│   ├── components/       # React components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   └── lib/              # Utilities and helpers
├── public/               # Static assets
├── .husky/               # Git hooks
└── CONTRIBUTING.md       # Developer guide
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Code Quality**: Prettier, TypeScript strict mode
- **Git Hooks**: Husky + lint-staged

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server (Turbopack)
npm run build        # Create production build
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run Next.js linter
npm run lint:fix     # Auto-fix linting issues
npm run type-check   # Run TypeScript type checking
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without changes
```

### Validation

```bash
npm run validate     # Run all checks (format, type-check, lint)
npm run validate:fix # Auto-fix formatting/linting, then validate
```

### Security

```bash
npm run security:audit # Check for vulnerabilities
npm run security:fix   # Auto-fix vulnerabilities
```

## 🎣 Git Hooks

The project uses Husky git hooks to ensure code quality:

### Pre-Commit

- ✅ Prettier formatting (automatic)
- ✅ TypeScript type checking
- ✅ Only runs on staged files (fast!)

### Commit Message

- ✅ Validates [Conventional Commits](https://www.conventionalcommits.org/) format
- ✅ Format: `<type>[scope]: <description>`
- ✅ Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

### Pre-Push

- ✅ Full TypeScript type check
- ✅ Production build (all 78 pages)
- ✅ Security audit

**Example commits:**

```bash
git commit -m "feat: add DMARC analyzer tool"
git commit -m "fix(api): resolve authentication timeout"
git commit -m "docs: update installation guide"
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed developer guidelines.

## 🏗️ Build Output

The production build generates:

- **78 static pages** - Pre-rendered for optimal performance
- **5 API routes** - Dynamic server-side functionality
- **Optimized bundles** - Tree-shaking, code splitting, and minification
- **Image optimization** - Automatic AVIF/WebP conversion

## 🔒 Security

- Regular dependency audits via `npm audit`
- No high-severity vulnerabilities allowed
- Environment variables for sensitive data
- Content Security Policy headers
- Automated security checks in pre-push hook

Report security issues to: [security@trustyourinbox.com](mailto:security@trustyourinbox.com)

## 📝 Environment Variables

Create a `.env.local` file for local development:

```bash
# SendGrid (for contact forms)
SENDGRID_API_KEY=your_sendgrid_api_key

# Optional: Analytics
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id
```

**Note**: Never commit `.env.local` or expose API keys.

## 🚢 Deployment

The site is deployed on [Vercel](https://vercel.com):

```bash
# Automatic deployments
git push origin main  # → Production (trustyourinbox.com)
git push origin dev   # → Preview (dev.trustyourinbox.com)
```

Manual deployment:

```bash
npm run build
npm run start
```

## 🧪 Testing

Current quality gates:

- ✅ TypeScript strict mode
- ✅ Next.js build validation
- ✅ Prettier formatting
- ✅ Manual QA testing

Future additions:

- Unit tests (Jest + React Testing Library)
- E2E tests (Playwright)
- Visual regression tests

## 📚 Key Features

### Free Tools

- DMARC Analyzer - Parse and understand DMARC records
- DMARC Domain Checker - Check domain DMARC status
- SPF Surveyor - Analyze SPF records
- DKIM Inspector - Inspect DKIM configuration
- XML Converter - Convert DMARC XML reports to readable format
- Forensic Report Viewer - View forensic DMARC reports
- Policy Impact Simulator - Simulate DMARC policy changes

### Content

- Comprehensive guides library (25+ guides)
- Blog with technical articles
- Competitor comparison pages
- Solutions pages for different audiences

### Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: All "Good"
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- Development setup
- Code style guide
- Git workflow
- Pull request process
- Troubleshooting

## 📄 License

Proprietary - Copyright © 2025 TrustYourInbox. All rights reserved.

## 🔗 Links

- **Website**: [trustyourinbox.com](https://trustyourinbox.com)
- **Documentation**: [docs.trustyourinbox.com](https://docs.trustyourinbox.com)
- **Support**: [support@trustyourinbox.com](mailto:support@trustyourinbox.com)
- **Twitter**: [@trustyourinbox](https://twitter.com/trustyourinbox)

---

Built with ❤️ by the TrustYourInbox team
