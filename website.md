## `website.md`

### ✅ Project: TrustYourInbox Website – Task List

#### 🧱 1. Overview

> Build a sleek, modern, competitive marketing website for **TrustYourInbox**, a DMARC-focused email security SaaS, aimed at competing with dmarcian.com, valimail.com, and easydmarc.com.

---

### 🛠️ 2. Tech Stack

| Layer            | Tech                           | Notes                                                 |
| ---------------- | ------------------------------ | ----------------------------------------------------- |
| **Frontend**     | [Next.js](https://nextjs.org/) | Static site generation + dynamic content where needed |
| **Styling**      | Tailwind CSS                   | Utility-first, responsive, clean design               |
| **Components**   | shadcn/ui or Radix UI          | Modern React UI components                            |
| **Icons**        | Lucide / Heroicons             | Crisp iconography for UI clarity                      |
| **Markdown CMS** | MDX or Contentlayer            | For managing and embedding marketing content easily   |
| **Hosting**      | Vercel / Cloudflare Pages      | Edge-optimized performance                            |
| **Analytics**    | Plausible / PostHog            | Privacy-friendly, product-centric insights            |

---

### 🎨 3. Design Direction

- **Tone:** Authoritative, approachable, technical but clean.
- **Color Palette:** Navy blue, electric violet, white, gray gradients.
- **Fonts:** Inter (body), Space Grotesk or Satoshi (headers)
- **Layout:**
  - Full-width hero with CTA
  - Sticky top navbar with logo and action buttons
  - Responsive grid sections
  - Animated transitions on scroll
- **Visual Elements:**
  - Custom illustrations: email flow, DMARC policy visualization
  - Dynamic graphs for demo or benefits section
  - Logos of integrations (Google Workspace, Microsoft 365, etc.)

---

### 🧩 4. Sitemap + Pages

| Page            | Description                                              |
| --------------- | -------------------------------------------------------- |
| `/`             | Hero, features, benefits, CTA                            |
| `/how-it-works` | Explain DMARC, SPF, DKIM – TrustYourInbox approach       |
| `/pricing`      | Clear, simple pricing tiers (Freemium? Free trial?)      |
| `/blog`         | DMARC insights, email security tips, threat intel        |
| `/about`        | Company mission, leadership, values                      |
| `/contact`      | Form or scheduling link                                  |
| `/resources`    | Whitepapers, compliance guides, documentation            |
| `/login`        | Auth portal (will redirect to Keycloak or app dashboard) |

---

### 🧪 5. Feature Blocks (per homepage)

- ✅ DMARC enforcement overview
- ✅ Email deliverability boost
- ✅ Live domain analysis (demo component)
- ✅ One-click configuration guidance
- ✅ Integration partners
- ✅ Security & compliance standards

---

### 🚀 6. Key Tasks for Cursor

#### A. Setup & Boilerplate

- [ ] Scaffold Next.js project with Tailwind
- [ ] Configure custom `_app.tsx` with font, theme, layout wrapper
- [ ] Add SEO via `next-seo`

#### B. Component System

- [ ] Design header + navbar
- [ ] Hero component with image/animation & CTA
- [ ] Feature blocks with icons/text
- [ ] Footer with links, social, copyright

#### C. Pages + Routing

- [ ] Implement all sitemap pages with markdown-driven or static content
- [ ] Use MDX or Contentlayer to manage blog/resources

#### D. Styling

- [ ] Define theme: font sizes, spacing, colors
- [ ] Mobile-first breakpoints
- [ ] Dark mode toggle (optional)

#### E. Integration

- [ ] Connect contact form (e.g., Formspree or backend route)
- [ ] Add analytics (Plausible / PostHog)

#### F. Deployment

- [ ] Setup GitHub repo
- [ ] Configure CI/CD with Vercel
- [ ] Add domain: `trustyourinbox.com`

---

### 📌 Inspirations to Pull From

#### ✅ [dmarcian.com](https://dmarcian.com)

- Strong educational focus
- Technical illustrations
- Light UX tone

#### ✅ [valimail.com](https://valimail.com)

- Polished, enterprise-focused
- Simple pricing navigation
- Trust-focused design

#### ✅ [easydmarc.com](https://easydmarc.com)

- Direct callouts
- Domain analysis widget
- Effective use of CTAs

---

### 💬 Your Setup Summary

- No existing assets—brand new build.
- Tone: **Professional, small business–friendly**
- Forms: **Native contact/demo form**
- Blog: **MDX-based**
- Analytics: **Avoid for now**
