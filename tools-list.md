# Trust Your Inbox Website - Tools and Technologies

This document provides a comprehensive overview of the tools, frameworks, and technologies used in the Trust Your Inbox website project.

## Core Framework and Runtime

- **Next.js** (v14.2.29) - React framework for production
- **React** (v18.2.0) - JavaScript library for building user interfaces
- **TypeScript** (v5.3.3) - Typed JavaScript

## Domain Security Tools

### Email Authentication Tools

- **DMARC Domain Checker** - Comprehensive tool for checking DMARC, SPF, and DKIM configurations
- **Domain Security Checker** - Full security analysis including email authentication, transport security, and DNS security
- **DKIM Inspector** - Specialized tool for inspecting and validating DKIM records
- **DMARC Subdomain Policy Checker** - Analyzes DMARC policy coverage across subdomains

### Security Features

- DMARC policy validation
- SPF record analysis
- DKIM signature verification
- MTA-STS configuration checking
- TLS-RPT monitoring
- DNSSEC validation
- FCrDNS (Forward Confirmed Reverse DNS) checking

## UI Components and Styling

### Component Libraries

- **Radix UI** - Unstyled, accessible components
  - @radix-ui/react-label
  - @radix-ui/react-select
  - @radix-ui/react-slot

### Styling and Animation

- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **Tailwind CSS Animate** (v1.0.7) - Animation utilities
- **Framer Motion** (v12.12.1) - Animation library
- **Lucide React** (v0.511.0) - Icon library
- **React Icons** (v5.5.0) - Icon library
- **Class Variance Authority** (v0.7.1) - Component styling utilities
- **clsx** (v2.1.1) - Utility for constructing className strings
- **tailwind-merge** (v3.3.0) - Merge Tailwind CSS classes

## Data Visualization

- **Chart.js** (v4.4.9) - Charting library
- **React Chart.js 2** (v5.3.0) - React wrapper for Chart.js

## Data Processing and Utilities

- **adm-zip** (v0.5.16) - ZIP file handling
- **asn1.js** (v5.4.1) - ASN.1 encoding/decoding
- **cidr-tools** (v11.0.3) - CIDR block utilities
- **xml2js** (v0.6.2) - XML to JavaScript object converter
- **sharp** (v0.34.2) - Image processing

## Development Tools

### Build and Development

- **PostCSS** (v8.4.35) - CSS processing
- **Autoprefixer** (v10.4.18) - CSS vendor prefixing

### Linting and Type Checking

- **ESLint** (v8.57.0) - JavaScript/TypeScript linting
- **ESLint Config Next** (v14.1.0) - Next.js ESLint configuration

### Type Definitions

- **@types/node** (v20.11.24)
- **@types/react** (v18.2.61)
- **@types/react-dom** (v18.2.19)

## Project Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint configuration

## Project Structure

```
├── src/
│   ├── app/        # Next.js app directory
│   ├── components/ # React components
│   └── lib/        # Utility functions and shared code
├── public/         # Static assets
└── design/         # Design assets
```
