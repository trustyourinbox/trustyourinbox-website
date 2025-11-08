# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to:

**security@trustyourinbox.com**

### What to Include

Please include the following information in your report:

- Type of vulnerability (XSS, CSRF, SQLi, etc.)
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- **Initial Response**: Within 48 hours of report
- **Status Update**: Within 7 days with preliminary assessment
- **Resolution**: Security patches are developed and released as quickly as possible

### What to Expect

1. We will acknowledge your email within 48 hours
2. We will provide a more detailed response within 7 days indicating next steps
3. We will keep you informed of progress towards a fix and announcement
4. We will notify you when the vulnerability is fixed

## Security Best Practices

### For Contributors

1. **Never commit sensitive data**
   - No API keys, passwords, or tokens in code
   - Use environment variables for secrets
   - Check `.env.local` is in `.gitignore`

2. **Dependencies**
   - Run `npm audit` before submitting PRs
   - Keep dependencies up to date
   - Review security advisories for dependencies

3. **Code Review**
   - All code must be reviewed before merging
   - Security-sensitive changes require additional review
   - Follow OWASP Top 10 guidelines

4. **Input Validation**
   - Validate and sanitize all user inputs
   - Use parameterized queries for database operations
   - Implement proper authentication and authorization

### For Users

1. **Keep Up to Date**
   - Always use the latest version
   - Subscribe to security announcements

2. **Environment Variables**
   - Never share your `.env.local` file
   - Use strong, unique API keys
   - Rotate credentials regularly

3. **Reporting Issues**
   - Report security concerns privately
   - Do not disclose vulnerabilities publicly until patched

## Security Features

### Current Security Measures

- ✅ Automated dependency scanning (npm audit)
- ✅ Pre-push security audits
- ✅ TypeScript strict mode (type safety)
- ✅ Content Security Policy headers
- ✅ Environment variable isolation
- ✅ No high-severity vulnerabilities policy

### Planned Enhancements

- CodeQL static analysis
- Dependabot automatic updates
- Secret scanning
- SAST/DAST testing
- Penetration testing

## Disclosure Policy

- We follow responsible disclosure practices
- Security researchers are acknowledged (with permission)
- Public disclosure only after patch is released
- CVE IDs assigned for critical vulnerabilities

## Hall of Fame

We thank the following security researchers for responsibly disclosing vulnerabilities:

_(None yet - be the first!)_

## Contact

- **Security Email**: security@trustyourinbox.com
- **General Support**: support@trustyourinbox.com
- **Website**: https://trustyourinbox.com

---

Thank you for helping keep TrustYourInbox and our users safe!
