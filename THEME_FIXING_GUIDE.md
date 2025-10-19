# Theme Fixing Guide - TrustYourInbox Tools Pages

## Overview

This guide documents all learnings from fixing theme consistency issues across tool pages. Use this as a checklist when reviewing or fixing any tool page.

## Critical Rules

### 1. NEVER Use Hardcoded Colors

**WRONG:**

```jsx
className = "bg-white text-gray-900 border-gray-200 text-indigo-600";
```

**CORRECT:**

```jsx
className = "bg-card text-foreground border-border text-primary";
```

### 2. Theme Color Mappings

| Hardcoded Color   | Replace With                                 | Purpose                       |
| ----------------- | -------------------------------------------- | ----------------------------- |
| `bg-white`        | `bg-card`                                    | Card backgrounds              |
| `bg-gray-50`      | `bg-muted`                                   | Muted backgrounds             |
| `bg-gray-100`     | `bg-muted`                                   | Alternative muted backgrounds |
| `text-gray-900`   | `text-foreground`                            | Primary text                  |
| `text-gray-700`   | `text-foreground` or `text-muted-foreground` | Secondary text                |
| `text-gray-600`   | `text-muted-foreground`                      | Muted text                    |
| `text-gray-500`   | `text-muted-foreground`                      | Placeholder/helper text       |
| `text-gray-400`   | `text-muted-foreground`                      | Very muted text               |
| `text-indigo-900` | `text-foreground`                            | Headers                       |
| `text-indigo-800` | `text-primary`                               | Keywords/important text       |
| `text-indigo-600` | `text-primary`                               | Links/accents                 |
| `border-gray-200` | `border-border`                              | Borders                       |
| `border-gray-100` | `border-border`                              | Light borders                 |

### 3. Status/Semantic Color Standards

**ALWAYS use theme semantic colors for status indicators, not hardcoded colors:**

| Hardcoded Color                  | Replace With                           | Use Case                     |
| -------------------------------- | -------------------------------------- | ---------------------------- |
| `bg-green-50` `text-green-800`   | `bg-success/10` `text-success`         | Success, Allowed, Pass, Good |
| `bg-yellow-50` `text-yellow-800` | `bg-warning/10` `text-warning`         | Warning, Quarantine, Weak    |
| `bg-red-50` `text-red-800`       | `bg-destructive/10` `text-destructive` | Error, Reject, Fail, Missing |
| `bg-blue-50` `text-blue-800`     | `bg-primary/10` `text-primary`         | Info, Inherited, Neutral     |

**Examples:**

```jsx
// WRONG - Hardcoded green/yellow/red colors
<div className="bg-green-50 rounded-lg p-4">
  <div className="text-green-800 font-bold">370</div>
  <div className="text-xs">Allowed</div>
</div>

// CORRECT - Theme semantic colors
<div className="bg-success/10 rounded-lg p-4">
  <div className="text-success font-bold">370</div>
  <div className="text-muted-foreground text-xs">Allowed</div>
</div>
```

**Why this matters:**

- Ensures consistency across all tools (Impact Simulator, Subdomain Checker, etc.)
- Theme colors automatically adapt to light/dark mode
- Semantic meaning is clear (success/warning/destructive)
- Future theme changes only need to update CSS variables

**Common status patterns:**

```jsx
// Success/Good/Pass
<div className="bg-success/10 text-success">✓ Passed</div>

// Warning/Weak/Quarantine
<div className="bg-warning/10 text-warning">⚠ Quarantine</div>

// Error/Bad/Reject
<div className="bg-destructive/10 text-destructive">✗ Rejected</div>

// Info/Inherited/Neutral
<div className="bg-primary/10 text-primary">ℹ Inherited</div>
```

### 4. Spacing Between Labels and Form Controls

**ALWAYS add spacing between labels and their form elements:**

```jsx
// WRONG - No spacing
<Label>Policy (p)</Label>
<Select>...</Select>

// CORRECT - Proper spacing
<Label className="mb-2 block">Policy (p)</Label>
<Select>...</Select>
```

**Standard spacing values:**

- `mb-2` for most labels with inputs/selects
- `mb-3` for labels with sliders or special controls

### 5. Accordion Component Fixes

**File:** `/src/components/ui/Accordion.tsx`

**Issue:** Hardcoded white backgrounds and gray text cause visibility issues

**Fix at line 73:**

```jsx
// BEFORE
className={`... bg-white text-gray-900 ...`}

// AFTER
className={`... bg-card text-foreground ...`}
```

### 6. Slider Visibility

**Issues:**

- Sliders may be invisible without borders
- Too thin sliders are hard to interact with

**Solutions:**

```jsx
// Add border for visibility
className =
  "h-3 w-full cursor-pointer appearance-none rounded-lg border border-border";

// Increase height from h-2 to h-3 for better visibility
```

### 7. Comprehensive Pattern Search

**Use these grep patterns to find hardcoded colors:**

```bash
# Find all hardcoded gray colors
grep -rn "text-gray-\|bg-gray-\|border-gray-" src/app/tools/[tool-name]/

# Find all hardcoded indigo colors
grep -rn "text-indigo-\|bg-indigo-" src/app/tools/[tool-name]/

# Find hardcoded white backgrounds
grep -rn "bg-white[^-]" src/app/tools/[tool-name]/
```

## Common Problem Areas

### 1. Main Tool Card/Container

```jsx
// WRONG
<div className="bg-white border-gray-200 shadow-md">

// CORRECT
<div className="bg-card border-border shadow-md">
```

### 2. Sidebar Content

```jsx
// WRONG
<div className="bg-gray-50 border-gray-200">

// CORRECT
<div className="bg-muted border-border">
```

### 3. Result Display Sections

```jsx
// WRONG
<div className="bg-gray-50 text-gray-500">
  <code className="text-gray-900">value</code>
</div>

// CORRECT
<div className="bg-muted text-muted-foreground">
  <code className="text-foreground">value</code>
</div>
```

### 4. Primary Action Buttons (Submit/Analyze/Check)

**ALWAYS use the homepage button styling for consistency across all tools:**

```jsx
// WRONG - Old solid color or purple gradient
<Button
  type="submit"
  className="bg-primary hover:bg-primary min-w-[120px] text-white"
/>

<Button
  type="submit"
  className="from-primary min-w-[120px] bg-gradient-to-r to-purple-500 text-white hover:opacity-90"
/>

// CORRECT - Homepage button style
<Button
  type="submit"
  size="lg"
  className="to-accent-hover from-primary min-w-[120px] gap-2 bg-gradient-to-r text-white hover:opacity-90"
>
  {loading ? (
    <span className="flex items-center gap-2">
      <svg className="h-4 w-4 animate-spin text-white" {/* spinner SVG */}>
      Analyzing...
    </span>
  ) : (
    <span className="flex items-center gap-2">
      Analyze <ArrowRight className="h-4 w-4" />
    </span>
  )}
</Button>
```

**Key Requirements:**

- `size="lg"` - Larger button size matching homepage
- `to-accent-hover from-primary` - Correct gradient (NOT `to-purple-500`)
- `gap-2` - Spacing for icon
- `hover:opacity-90` - Consistent hover effect
- Include `<ArrowRight>` icon from `lucide-react`
- **NO `rounded-full`** - Use default button radius (matches homepage)

### 5. Secondary Buttons and Links

```jsx
// WRONG
<button className="bg-white border-gray-200 text-indigo-600">

// CORRECT
<button className="bg-card border-border text-primary">
```

**Ghost Button Pitfalls:**

Ghost buttons (like "Learn more" links) often have critical UX issues:

```jsx
// WRONG - Invisible with no padding and no hover feedback
<Button
  variant="ghost"
  className="text-primary hover:text-primary h-auto p-0"
>
  Learn more <ArrowRight className="ml-1 h-4 w-4" />
</Button>

// CORRECT - Proper padding and clear hover state
<Button
  variant="ghost"
  className="text-primary hover:bg-primary/10"
>
  Learn more <ArrowRight className="ml-1 h-4 w-4" />
</Button>
```

**Common Ghost Button Mistakes:**

1. **`p-0` removes all padding** - Creates tiny, nearly invisible click targets
2. **`h-auto` removes height** - Makes buttons render as thin slivers
3. **`hover:text-{color}` when already `text-{color}`** - No visible hover feedback
4. **Missing hover state entirely** - Users can't tell if button is interactive

**Correct Hover States for Ghost Buttons:**

Use background highlights that match the button's semantic color:

```jsx
// Primary/Analytics buttons
className = "text-primary hover:bg-primary/10";

// Success/Compliance buttons
className = "text-success hover:bg-success/10";

// Warning buttons
className = "text-warning hover:bg-warning/10";

// Destructive/Error buttons
className = "text-destructive hover:bg-destructive/10";

// Muted/Neutral buttons
className = "text-muted-foreground hover:bg-muted";
```

**Why this matters:**

- Provides clear visual feedback on hover
- Maintains semantic color consistency with feature icons
- Creates sufficient clickable area for accessibility
- Works properly in both light and dark modes

### 6. Border Radius Consistency

**ALWAYS match the homepage border radius patterns for visual consistency:**

**Border Radius Standards:**

| Element Type                | Border Radius                | Example                                |
| --------------------------- | ---------------------------- | -------------------------------------- |
| Badges/Pills                | `rounded-full`               | Status badges, tags                    |
| Buttons (Primary/Secondary) | Default (none specified)     | CTA buttons, action buttons            |
| Cards                       | `rounded-md` or `rounded-lg` | Feature cards, result cards            |
| Screenshots/Images          | `rounded-md` or `rounded-lg` | Dashboard previews                     |
| Tab Buttons                 | `rounded-lg`                 | Navigation tabs                        |
| Icon Containers (square)    | `rounded-lg`                 | Feature icons backgrounds              |
| Icon Containers (circle)    | `rounded-full`               | Avatar placeholders, badge icons       |
| Large CTA Containers        | `rounded-2xl`                | Bottom CTA sections, feature showcases |
| Tab Content Panels          | `rounded-lg`                 | Content areas within tabs              |

**Common Mistakes:**

```jsx
// WRONG - Hero buttons with rounded-full (pill shape)
<Button size="lg" className="... rounded-full">Get Started</Button>

// CORRECT - Hero buttons use default radius
<Button size="lg" className="...">Get Started</Button>

// WRONG - Large container with tight radius
<div className="rounded-md p-8">

// CORRECT - Large CTA containers use rounded-2xl
<div className="rounded-2xl p-8">
```

**Key Principle:** Buttons should NOT use `rounded-full` unless they are icon-only buttons. Text buttons use the default Button component radius which matches the homepage.

### 7. Input Fields - Usually Already Correct

Input, Select, and Textarea components from `/src/components/ui` are typically already theme-aware. Only check if you see visual issues.

### 8. Semantic Headings for Result Sections

**Issue:** Result sections (Recommendations, Status, Output, etc.) may be missing proper semantic headings, making them harder to navigate and less accessible.

**WRONG - Using Card title prop only:**

```jsx
<Card className="mt-6" title="Recommendations">
  <div className="p-6">
    <ul className="space-y-2">{/* content */}</ul>
  </div>
</Card>
```

**CORRECT - Explicit semantic heading element:**

```jsx
<Card className="mt-6">
  <div className="p-6">
    <h3 className="text-foreground mb-4 text-lg font-semibold">
      Recommendations
    </h3>
    <ul className="space-y-2">{/* content */}</ul>
  </div>
</Card>
```

**Why this matters:**

- Screen readers rely on proper heading hierarchy (h1, h2, h3)
- Users can navigate by headings with keyboard shortcuts
- Improves SEO and document structure
- The Card component's `title` prop doesn't create a semantic HTML heading

**Common sections that need headings:**

- Recommendations
- Status/Results
- Generated Output
- Analysis/Breakdown
- Error Messages (when shown conditionally)

### 9. Card Component Padding - CRITICAL

**Issue:** The Card component from `/src/components/ui/Card.tsx` has NO default padding. Content placed directly inside `<Card>` will be flush against the edges.

**WRONG - Content flush against card edges:**

```jsx
<Card>
  <h3 className="text-foreground text-lg font-semibold">
    DKIM Configuration Score
  </h3>
  <p className="text-muted-foreground">Some content here</p>
</Card>
```

**CORRECT - Add p-6 padding wrapper:**

```jsx
<Card>
  <div className="p-6">
    <h3 className="text-foreground text-lg font-semibold">
      DKIM Configuration Score
    </h3>
    <p className="text-muted-foreground">Some content here</p>
  </div>
</Card>
```

**Why this matters:**

- The Card component only provides `rounded-lg border bg-card text-card-foreground shadow-sm`
- NO padding is included in the base Card component
- You must wrap card content in a `<div className="p-6">` or use the CardContent sub-component
- Without padding, content appears cramped and unprofessional

**Alternative - Use CardContent sub-component:**

```jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

<Card>
  <CardHeader>
    <CardTitle>DKIM Configuration Score</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">Some content here</p>
  </CardContent>
</Card>;
```

**Standard padding values:**

- `p-6` - Most result cards (Score, Warnings, Recommendations, Output)
- `p-4` - Smaller cards or nested cards
- CardHeader has `p-4 sm:p-6` built-in
- CardContent has `p-4 pt-0 sm:p-6` built-in

**Common mistake pattern:**

```jsx
// WRONG - These all have NO padding
<Card>
  <div className="flex items-center justify-between">...</div>
</Card>

<Card>
  <h3 className="text-lg font-semibold">Title</h3>
  <ul className="space-y-2">...</ul>
</Card>

// CORRECT - Always wrap content
<Card>
  <div className="p-6">
    <div className="flex items-center justify-between">...</div>
  </div>
</Card>

<Card>
  <div className="p-6">
    <h3 className="text-lg font-semibold">Title</h3>
    <ul className="space-y-2">...</ul>
  </div>
</Card>
```

### 10. Related Tools Section - Standard Pattern

**CRITICAL:** All tool pages must use the EXACT same Related Tools pattern from Domain Checker. Do NOT create custom colored backgrounds or different layouts.

**Reference Implementation:** `/src/app/tools/dmarc-domain-checker/page.tsx` (lines 281-343)

**WRONG - Custom colored backgrounds:**

```jsx
// DO NOT USE - Old pattern with hardcoded colors
<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
  <Link
    href="/tools/dmarc-analyzer"
    className="group relative overflow-hidden rounded-lg border border-primary/20 bg-secondary dark:border-primary dark:bg-primary p-5 transition-all hover:shadow-md"
  >
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 dark:bg-primary rounded-full p-2">
        <Shield className="text-primary h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold group-hover:underline">
          DMARC Analyzer
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">
          Analyze your DMARC configuration
        </p>
      </div>
    </div>
    <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></div>
  </Link>

  {/* Other cards with bg-green-50, bg-purple-50, etc. */}
</Link>
```

**CORRECT - Domain Checker pattern:**

```jsx
<div className="mt-8 mb-8">
  <div className="mb-4">
    <h2 className="text-xl font-bold tracking-tight">Related Tools</h2>
    <p className="text-muted-foreground mt-1 text-sm">
      More email authentication tools
    </p>
  </div>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
    <Link
      href="/tools/dmarc-analyzer"
      className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
    >
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
          <Shield className="text-primary h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
            DMARC Analyzer
          </h3>
          <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
            Analyze DMARC configuration and get detailed reports
          </p>
        </div>
      </div>
    </Link>
    {/* Repeat for other tools */}
  </div>
</div>
```

**Key Requirements:**

- **Header**: `text-xl font-bold` (NOT `text-2xl`), `mb-4` spacing
- **Description**: `text-sm text-muted-foreground mt-1`
- **Grid**: `gap-3 sm:grid-cols-3` (NOT `gap-4 md:grid-cols-3`)
- **Card Border**: `border-border/40 bg-card` (NOT custom colors)
- **Card Hover**: `hover:border-primary/30 hover:shadow-lg duration-200`
- **Card Padding**: `p-4` (NOT `p-5`)
- **Icon Container**: `bg-primary/10 rounded-md p-2 flex-shrink-0` (NOT `rounded-full`)
- **Icon Size**: `h-4 w-4` (NOT `h-6 w-6`)
- **Card Spacing**: `gap-3` between icon and text (NOT `gap-4`)
- **Title**: `text-sm font-semibold text-foreground group-hover:text-primary`
- **Description**: `text-xs text-muted-foreground mt-0.5 line-clamp-2`
- **NO bottom border animation** - Use simple `hover:shadow-lg` instead

**Why this matters:**

- Consistency across all tool pages
- Clean, professional appearance
- Works perfectly in both light and dark modes
- Avoids hardcoded colored backgrounds (green-50, purple-50, etc.)
- Proper responsive spacing and sizing

**Common mistakes to avoid:**

1. Using custom colored backgrounds (`bg-green-50`, `bg-purple-50`, `bg-primary`)
2. Wrong grid gap (`gap-4` instead of `gap-3`)
3. Wrong heading size (`text-2xl` instead of `text-xl`)
4. Rounded icon containers (`rounded-full` instead of `rounded-md`)
5. Large icons (`h-6 w-6` instead of `h-4 w-4`)
6. Adding bottom border animations
7. Wrong responsive breakpoint (`md:grid-cols-3` instead of `sm:grid-cols-3`)

### 11. Text Contrast on Colored Backgrounds

**Issue:** Text with reduced opacity or light color shades on colored alert/status backgrounds can have poor contrast, especially in light mode.

**Common Problems:**

- Using `opacity-80` or `opacity-60` on text within colored backgrounds
- Using very light or very dark color shades (`-50`, `-950`) that don't provide enough contrast
- Relying on `dark:` variants that may not apply correctly in all theme configurations

**Solutions:**

```jsx
// WRONG - Opacity reduces contrast
<div className="bg-red-50">
  <p className="text-red-900 opacity-80">Text is hard to read</p>
</div>

// WRONG - Using variants that don't work reliably
<div className="bg-red-50 dark:bg-red-950/30">
  <p className="text-red-950 dark:text-red-50">May not work in all setups</p>
</div>

// CORRECT - Solid color with good contrast
<div className="bg-red-50 dark:bg-red-950/30">
  <p className="text-red-800">Readable in both light and dark modes</p>
</div>
```

**Best Practices:**

- Use `-800` or `-700` color shades for text on light colored backgrounds
- These shades work well in both light mode (dark enough) and dark mode (bright enough)
- Avoid opacity modifiers (`opacity-80`, `opacity-60`) on text within colored backgrounds
- Test actual contrast in browser DevTools, not just visually
- If `dark:` variants cause issues, use a single solid color that works in both modes

**Recommended text colors for alert backgrounds:**

- Red alerts (`bg-red-50`): `text-red-800`
- Amber alerts (`bg-amber-50`): `text-amber-800`
- Green alerts (`bg-emerald-50`): `text-emerald-800`
- Blue alerts (`bg-blue-50`): `text-blue-800`

## Testing Checklist

### Before Declaring Victory:

1. **Visual Inspection - Dark Mode**
   - [ ] Navigate to the page in dark mode
   - [ ] Check main form/tool card - no white boxes
   - [ ] Check all accordion sections when collapsed - no white boxes
   - [ ] Expand all accordions and check contents
   - [ ] Check slider visibility (if present)
   - [ ] Check generated output sections
   - [ ] Verify all text is readable (not white on white or black on black)
   - [ ] Check alert/status boxes for text contrast on colored backgrounds
   - [ ] **CRITICAL**: Check all Card components have proper padding (content NOT flush against edges)

2. **Visual Inspection - Light Mode**
   - [ ] Toggle to light mode
   - [ ] Check main form/tool card - proper light theme
   - [ ] Check all accordion sections when collapsed
   - [ ] Expand all accordions and check contents
   - [ ] Check slider visibility (if present)
   - [ ] Check generated output sections
   - [ ] Verify all text is readable
   - [ ] **CRITICAL**: Check alert/status boxes - text should NOT appear gray/washed out on colored backgrounds
   - [ ] **CRITICAL**: Check all Card components have proper padding (content NOT flush against edges)

3. **Interaction Testing**
   - [ ] Test all form inputs
   - [ ] Test all dropdowns/selects
   - [ ] Test all buttons
   - [ ] Generate output if applicable
   - [ ] Verify output display is readable
   - [ ] Test copy buttons (if present)

4. **Spacing Check**
   - [ ] Labels have adequate spacing from form controls
   - [ ] Sections have proper spacing between them
   - [ ] Form elements aren't cramped together

5. **Semantic Headings Check**
   - [ ] All result sections have proper h2 or h3 headings
   - [ ] Recommendations section has a heading
   - [ ] Status/Results sections have headings
   - [ ] Generated output sections have headings
   - [ ] No reliance on Card `title` prop for semantic headings

6. **Related Tools Section**
   - [ ] Uses Domain Checker pattern (border-border/40 bg-card)
   - [ ] NO custom colored backgrounds (green-50, purple-50, etc.)
   - [ ] Icons are h-4 w-4 in rounded-md containers (NOT h-6 w-6 in rounded-full)
   - [ ] Grid uses gap-3 sm:grid-cols-3 (NOT gap-4 md:grid-cols-3)
   - [ ] Cards use p-4 padding (NOT p-5)
   - [ ] Title is text-sm (NOT text-lg)
   - [ ] Description is text-xs (NOT text-sm)
   - [ ] NO bottom border animation
   - [ ] Hover states work correctly (hover:border-primary/30 hover:shadow-lg)

7. **Sidebar (if present)**
   - [ ] Tabs use theme colors
   - [ ] Content areas use theme colors
   - [ ] Text is readable in both modes

## Code Review Checklist

Before committing changes:

```bash
# 1. Search for any remaining hardcoded colors
grep -rn "text-gray-\|bg-gray-\|border-gray-\|text-indigo-\|bg-indigo-\|bg-white[^-]" src/app/tools/[tool-name]/page.tsx

# 2. Check Accordion component if modified
grep -rn "text-gray-\|bg-gray-\|bg-white[^-]" src/components/ui/Accordion.tsx

# 3. Verify no hardcoded colors in related components
grep -rn "text-gray-\|bg-gray-\|bg-white[^-]" src/components/ui/[component-name].tsx
```

## File-by-File Fix Process

### Step 1: Read the entire tool page

```bash
Read /src/app/tools/[tool-name]/page.tsx
```

### Step 2: Search for hardcoded colors

```bash
Grep (text-gray-|text-indigo-|bg-gray-|bg-white|border-gray-) in the file
```

### Step 3: Fix systematically

- Start from top to bottom
- Fix all hardcoded colors in one section before moving to next
- Use Edit tool for each fix

### Step 4: Check components

- If accordion issues exist, check `/src/components/ui/Accordion.tsx`
- If slider issues exist, check slider implementation
- Fix component files if needed

### Step 5: Test thoroughly

- Open page in browser
- Test dark mode completely
- Test light mode completely
- Test all interactions

## Common Mistakes to Avoid

1. **Don't assume components are correct** - Always verify Accordion and custom components
2. **Don't skip testing** - Always test both light and dark modes
3. **Don't use relative color names** - Use theme variables consistently
4. **Don't forget spacing** - Labels need `mb-2 block` or similar
5. **Don't batch fixes blindly** - Test as you go
6. **Don't forget context lines** - Include enough context in Edit operations
7. **Don't use opacity on colored backgrounds** - Using `opacity-80` or similar on text with colored backgrounds causes poor contrast
8. **Beware of dark: variants in complex themes** - In some theme setups, `dark:` variants may not work as expected; test thoroughly or use solid color values

## Quick Reference - Most Common Fixes

```jsx
// Labels
- className="mb-2 block"

// Card backgrounds
- bg-card

// Muted backgrounds
- bg-muted

// Borders
- border-border

// Primary text
- text-foreground

// Secondary/muted text
- text-muted-foreground

// Accent/primary color
- text-primary

// Slider
- className="h-3 w-full cursor-pointer appearance-none rounded-lg border border-border"

// Accordion trigger
- className="... bg-card text-foreground ..." (when closed)
- className="... bg-muted text-foreground ..." (when open)
```

## Success Criteria

A tool page is 100% fixed when:

1. ✅ Zero hardcoded gray/indigo/white colors remain
2. ✅ All text is readable in both light and dark modes
3. ✅ No white boxes appear in dark mode
4. ✅ No overly dark boxes appear in light mode
5. ✅ All interactive elements are visible and accessible
6. ✅ Proper spacing between labels and form controls
7. ✅ Sliders (if present) are clearly visible with borders
8. ✅ Generated output sections display correctly
9. ✅ All accordions work properly in both themes
10. ✅ **CRITICAL**: All Card components have proper padding (p-6 wrapper or CardContent)
11. ✅ **CRITICAL**: Related Tools section uses Domain Checker pattern (NO custom colored backgrounds)
12. ✅ All result sections have proper semantic headings (h2/h3)

## Examples from DMARC Policy Generator Fix

### Accordion Fix

**File:** `/src/components/ui/Accordion.tsx:73`

```jsx
// BEFORE
className={`flex w-full items-center justify-between px-2 py-3 text-left font-medium text-gray-900 transition-colors focus:outline-none ${isOpen ? "bg-secondary" : "bg-white"} ${className || ""}`}

// AFTER
className={`flex w-full items-center justify-between px-2 py-3 text-left font-medium text-foreground transition-colors focus:outline-none ${isOpen ? "bg-muted" : "bg-card"} ${className || ""}`}
```

### Label Spacing Fix

```jsx
// BEFORE
<Label>Policy (p)</Label>
<Select>...</Select>

// AFTER
<Label className="mb-2 block">Policy (p)</Label>
<Select>...</Select>
```

### Slider Fix

```jsx
// BEFORE
className = "h-2 w-full cursor-pointer appearance-none rounded-lg";

// AFTER
className =
  "h-3 w-full cursor-pointer appearance-none rounded-lg border border-border";
```

### Generated Output Fix

```jsx
// BEFORE
<div className="rounded border border-gray-100 bg-gray-50 px-3 py-2">
  <span className="text-gray-500">No record generated yet</span>
</div>

// AFTER
<div className="rounded border border-border bg-muted px-3 py-2">
  <span className="text-muted-foreground">No record generated yet</span>
</div>
```

### Sidebar Tabs Fix

```jsx
// BEFORE
<div className="border border-gray-200 bg-white p-0">
  <TabsList className="flex border-b border-gray-200 bg-gray-50">

// AFTER
<div className="border border-border bg-card p-0">
  <TabsList className="flex border-b border-border bg-muted">
```

---

**Last Updated:** January 2025

**Pages Fixed Using This Guide:**

- ✅ DMARC Policy Generator (/tools/dmarc-policy-generator) - Full fix with accordion, slider, spacing, and color fixes
- ✅ DMARC Analyzer (/tools/dmarc-analyzer) - Updated button to homepage style (size="lg", to-accent-hover gradient)
- ✅ DMARC Domain Checker (/tools/dmarc-domain-checker) - Updated button to homepage style + label spacing and semantic heading fix
- ✅ DMARC Subdomain Policy Checker (/tools/dmarc-subdomain-policy-checker) - Updated button to homepage style
- ✅ SPF Surveyor (/tools/spf-surveyor) - Updated button from solid bg-primary to homepage gradient style
- ✅ DKIM Validator (/tools/dkim-validator) - Comprehensive fix: replaced 32+ hardcoded colors with theme variables, fixed broken score card layout, added p-6 padding to all result cards, replaced Related Tools with Domain Checker pattern, reduced alert padding, added semantic headings
- ✅ DKIM Inspector (/tools/dkim-inspector) - Updated button from solid bg-primary to homepage gradient style
- ✅ Domain Security Checker (/tools/domain-security-checker) - Updated button from solid bg-primary to homepage gradient style
- ✅ DMARC Policy Impact Simulator (/tools/dmarc-policy-impact-simulator) - Fixed 19 hardcoded colors + standardized status colors + fixed critical DMARC logic bug
- ✅ Features Page (/features) - Fixed 30+ hardcoded colors, standardized semantic colors, updated CTA buttons to homepage style, fixed border radius consistency (removed rounded-full from buttons, updated analytics card to rounded-2xl), fixed 7 ghost "Learn more" buttons (removed p-0/h-auto, added proper hover states with background highlights)

## DMARC Analyzer Notes

The DMARC Analyzer page was already well-implemented with proper theme colors throughout. The only fix needed was:

- Added `mb-2 block` to the DMARC Record label for proper spacing (line 239)

**Findings:**

- Zero hardcoded colors found (no `text-gray-`, `text-indigo-`, `bg-gray-`, `bg-white`, or `border-gray-`)
- All components properly use theme variables
- Results display correctly in both light and dark modes
- Related Tools section properly themed
- This page can serve as a reference for properly themed tool pages

## DMARC Domain Checker Notes

The DMARC Domain Checker page was already well-implemented with proper theme colors throughout. Two fixes were needed:

1. **Label Spacing Fix (line 439)**:
   - Added `mb-2 block` to the Domain label for proper spacing between label and input

2. **Semantic Heading Fix (lines 527-541)**:
   - Replaced Card `title` prop with explicit `<h3>` element for the Recommendations section
   - This improves accessibility and document structure

**Before:**

```jsx
<Card className="mt-6" title="Recommendations">
  <div className="p-6">
    <ul className="space-y-2">
```

**After:**

```jsx
<Card className="mt-6">
  <div className="p-6">
    <h3 className="mb-4 text-lg font-semibold text-foreground">
      Recommendations
    </h3>
    <ul className="space-y-2">
```

**Findings:**

- Zero hardcoded colors found (properly themed throughout)
- All components use theme variables correctly
- Results display correctly in both light and dark modes
- Tested with agari.com domain - all sections render properly
- This fix highlighted the importance of checking for semantic headings in result sections

## DMARCStatus Component Contrast Fix

**Component:** `/src/components/ui/DMARCStatus.tsx`

**Issue:** Text in status alerts had poor contrast - appeared gray/washed out on colored backgrounds in both light and dark modes.

**Root Causes:**

1. `opacity-80` applied to description text (line 92)
2. Complex `dark:` variant behavior with `text-red-950 dark:text-red-50` causing light colors to apply in light mode
3. Color inheritance issues

**Solution:**

Added separate `textColor` property to each status and removed opacity:

```jsx
// BEFORE (lines 60, 92)
color: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-950 dark:text-red-50",
// ...
<p className="mt-1 text-sm opacity-80">{details.description}</p>

// AFTER (lines 63, 95)
color: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
textColor: "text-red-800",
// ...
<p className={`mt-1 text-sm ${details.textColor || ''}`}>{details.description}</p>
```

**Changes Applied:**

- Line 25: `reject` status - `textColor: "text-emerald-800"`
- Line 50: `none` status - `textColor: "text-amber-800"`
- Line 63: `no-policy` status - `textColor: "text-red-800"`
- Line 86 & 95: Applied `textColor` to both `<h3>` title and `<p>` description

**Results:**

- ✅ Light mode: Dark text (`-800` shades) on light backgrounds = excellent contrast
- ✅ Dark mode: Bright vivid text on dark backgrounds = excellent contrast
- ✅ Removed opacity modifier that was washing out the text
- ✅ Used solid colors that work reliably in both themes without dark: variants

**Key Learnings:**

- Never use `opacity-` modifiers on text within colored backgrounds
- `-800` color shades work well for both light and dark modes
- When `dark:` variants behave unexpectedly, use solid colors instead
- Always test actual computed color in DevTools, not just visual appearance

## DMARC Policy Impact Simulator Notes

**Fixed:** January 2025

The DMARC Policy Impact Simulator page required comprehensive theme fixes including both standard color replacements and status color standardization.

### Fixes Applied:

**1. Standard Theme Color Fixes (19 instances):**

All hardcoded gray/white colors replaced with theme variables:

- Sidebar descriptions and headings
- Upload area hints and privacy notices
- Impact card labels
- Chart headings
- Table headers
- Recommendations text
- File loaded notification (critical fix - was showing white box in dark mode)
- Remove button hover states

**2. Status Color Standardization (3 instances):**

Replaced hardcoded status colors with semantic theme variables for consistency across all tools:

Lines 488-505:

```jsx
// BEFORE - Hardcoded colors
<div className="rounded-lg bg-green-50 p-4">
  <div className="text-2xl font-bold text-green-800">370</div>
  <div className="text-xs">Allowed</div>
</div>

// AFTER - Theme semantic colors
<div className="bg-success/10 rounded-lg p-4">
  <div className="text-success text-2xl font-bold">370</div>
  <div className="text-muted-foreground text-xs">Allowed</div>
</div>
```

**Changes:**

- Line 488: `bg-green-50` → `bg-success/10`, `text-green-800` → `text-success` (Allowed)
- Line 494: `bg-yellow-50` → `bg-warning/10`, `text-yellow-800` → `text-warning` (Quarantined)
- Line 500: `bg-red-50` → `bg-destructive/10`, `text-red-800` → `text-destructive` (Rejected)

### Results:

- ✅ All 19 hardcoded colors eliminated
- ✅ Status colors now match Subdomain Policy Checker standard
- ✅ Perfect visibility in both light and dark modes
- ✅ Semantic color names make intent clear
- ✅ Future-proof - theme changes only need CSS variable updates

### Key Learnings:

- Status colors must use semantic theme variables (`success`, `warning`, `destructive`) not hardcoded colors
- Consistency across tools improves user experience and maintainability
- The `/10` opacity modifier on backgrounds provides subtle differentiation while maintaining theme compatibility

### Critical Logic Bug Fixed:

While fixing theme issues, discovered the simulator had **fundamentally broken DMARC logic**:

**Problem:**

- Simulator was using fake 70/30 percentage splits
- Would reject/quarantine ALL mail regardless of DMARC alignment
- Completely ignored whether DKIM or SPF passed
- Example: `p=reject` would reject all 370 messages instead of just 40

**Root Cause:**

```jsx
// WRONG - Treats all mail the same way
rejected: policy === "reject"
  ? parsed.reduce((a, b) => a + b.count, 0) // Rejects EVERYTHING
  : policy === "quarantine"
    ? Math.round(parsed.reduce((a, b) => a + b.count, 0) * 0.7) // Fake 70%
    : 0;
```

**Correct DMARC Logic:**

```jsx
// RIGHT - Only applies policy to messages that FAIL DMARC
parsed.forEach((rec) => {
  // DMARC alignment: pass if DKIM OR SPF passes
  const dmarcAligned = rec.dkim === "pass" || rec.spf === "pass";

  if (dmarcAligned) {
    // Messages that pass DMARC are ALWAYS allowed
    allowed += rec.count;
  } else {
    // Only messages that fail BOTH checks are subject to policy
    if (policy === "reject") rejected += rec.count;
    else if (policy === "quarantine") quarantined += rec.count;
    else allowed += rec.count; // p=none still allows, just monitors
  }
});
```

**Lesson:** Always verify simulator logic is correct, not just the UI theme. A beautifully themed but logically broken tool is worse than a working tool with theme issues.

### UX Flow Improvements:

Beyond theme fixes, improved the user experience significantly:

**Before:**

1. Upload file → See "File Loaded"
2. User confused - no clear next step
3. Must manually click hidden "Simulate Impact" button
4. Results finally appear

**After:**

1. Upload file → Results appear **instantly**
2. Policy buttons integrated into results section
3. Switch policies → Charts update in real-time
4. No manual "simulate" button needed

**Implementation:**

```jsx
// Auto-parse on upload
reader.onload = (ev) => {
  const xmlText = new TextDecoder().decode(decompressed);
  setXml(xmlText);
  setParsed(parseXml(xmlText)); // ← Auto-parse immediately
  setError(null);
};

// Move policy selector into results
{
  impact && (
    <Card>
      <h2>Impact Visualization</h2>
      <p>Select a policy to see how it would affect your email traffic</p>
      {/* Policy buttons here - instantly reactive */}
      <Button onClick={() => setPolicy("none")}>p=none</Button>
      {/* Charts update automatically via React state */}
    </Card>
  );
}
```

**Updated Sidebar Instructions:**

- "Upload a DMARC XML report or use sample data"
- "View instant analysis with default p=none policy" ← Changed from "Select policy to simulate"
- "Switch between policies to see impact changes" ← Changed from "View impact on disposition"
- "Get actionable recommendations"

**Lessons:**

- Auto-parsing eliminates user confusion ("What do I do now?")
- Putting controls in context (policy buttons IN results) is more intuitive
- Clear helper text ("Select a policy to...") guides users
- Real-time updates feel more responsive than click-to-submit flows
- Remove unnecessary manual steps - if we can auto-parse safely, do it!

## DKIM Validator Notes

**Fixed:** January 2025

The DKIM Validator page required comprehensive theme and layout fixes that uncovered critical issues with Card padding and Related Tools consistency.

### Fixes Applied:

**1. Theme Color Replacements (32+ instances):**

All hardcoded colors replaced with semantic theme variables:

**Sidebar (lines 295-314):**

```jsx
// BEFORE
<h3 className="text-sm font-medium text-gray-900">About DKIM</h3>
<p className="mt-2 text-sm text-gray-500">DKIM adds...</p>
<code className="text-primary rounded bg-gray-100 px-1.5 py-0.5">v=</code>

// AFTER
<h3 className="text-sm font-medium text-foreground">About DKIM</h3>
<p className="mt-2 text-sm text-muted-foreground">DKIM adds...</p>
<code className="text-primary rounded bg-muted px-1.5 py-0.5">v=</code>
```

**Status Colors in Data Structures (lines 75-106):**

```jsx
// BEFORE - Hardcoded green/red/yellow
dots.push({ color: "bg-green-500", label: "Valid DKIM version" });
dots.push({ color: "bg-red-500", label: "Invalid DKIM version" });
dots.push({ color: "bg-yellow-500", label: "Testing mode enabled" });

// AFTER - Semantic theme colors
dots.push({ color: "bg-success", label: "Valid DKIM version" });
dots.push({ color: "bg-destructive", label: "Invalid DKIM version" });
dots.push({ color: "bg-warning", label: "Testing mode enabled" });
```

**Warning/Alert Boxes (lines 127-148):**

```jsx
// BEFORE
icon: <FaTimesCircle className="h-4 w-4 text-red-500" />,
color: "text-red-700 bg-red-50 border-red-200",

// AFTER
icon: <FaTimesCircle className="h-4 w-4 text-destructive" />,
color: "text-destructive bg-destructive/10 border-destructive/20",
```

**Input Fields (lines 345, 351):**

```jsx
// BEFORE
<FaFileAlt className="h-5 w-5 text-gray-400" />
className="... border-gray-200 ..."

// AFTER
<FaFileAlt className="h-5 w-5 text-muted-foreground" />
className="... border-border ..."
```

**2. CRITICAL: Score Card Layout Fix (lines 405-431):**

**Problem:** Rating dots were positioned to the LEFT of the heading due to nested flex structure, creating a confusing visual hierarchy.

```jsx
// BEFORE - BROKEN LAYOUT
<Card>
  <div className="mb-6 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">{/* dots on left */}</div>
      <div><h3>Score</h3></div>
    </div>
    <div className="text-3xl">70%</div>
  </div>
</Card>

// AFTER - FIXED LAYOUT
<Card>
  <div className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium text-foreground">Score</h3>
        <p className="text-sm text-muted-foreground mt-1">Based on...</p>
        <div className="flex items-center gap-1 mt-2">{/* dots below */}</div>
      </div>
      <div className="text-primary text-3xl font-bold">70%</div>
    </div>
  </div>
</Card>
```

**3. CRITICAL: Card Padding Fix (lines 405, 437, 459):**

**Problem:** All three result cards (Score, Warnings, Recommendations) had NO padding - content was flush against card edges.

**Root Cause:** The Card component (`/src/components/ui/Card.tsx`) only provides `rounded-lg border bg-card text-card-foreground shadow-sm` - NO padding is included.

**Solution:** Wrapped all card content in `<div className="p-6">`:

```jsx
// Score Card
<Card>
  <div className="p-6">  {/* ← ADDED */}
    <div className="flex items-center justify-between">...</div>
  </div>
</Card>

// Warnings Card
<Card>
  <div className="p-6">  {/* ← ADDED */}
    <h3 className="text-foreground mb-4 text-lg font-semibold">Warnings</h3>
    <div className="space-y-3">...</div>
  </div>
</Card>

// Recommendations Card
<Card>
  <div className="p-6">  {/* ← ADDED */}
    <h3 className="text-foreground mb-4 text-lg font-semibold">Recommendations</h3>
    <div className="space-y-4">...</div>
  </div>
</Card>
```

**4. Alert Box Padding Reduction (line 441):**

**Problem:** Alert boxes had excessive padding, looking bloated compared to other tools.

```jsx
// BEFORE - Too much padding
<div className="space-y-4">
  <div className="flex items-start gap-3 rounded-lg p-3 ...">

// AFTER - Tighter, cleaner
<div className="space-y-3">
  <div className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 ...">
```

**5. CRITICAL: Related Tools Pattern Replacement (lines 479-541):**

**Problem:** Page used custom colored card backgrounds (green-50, purple-50) with large icons and bottom border animations - inconsistent with other tools.

**Solution:** Replaced with exact Domain Checker pattern:

```jsx
// BEFORE - Custom colored backgrounds
<Link className="group border border-green-200 bg-green-50 p-5 ...">
  <div className="flex items-start gap-4">
    <div className="rounded-full bg-green-100 p-2">
      <Mail className="text-primary h-6 w-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold">SPF Surveyor</h3>
      <p className="mt-1 text-sm">Validate SPF records</p>
    </div>
  </div>
  <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 ..."></div>
</Link>

// AFTER - Domain Checker pattern
<Link className="group border-border/40 bg-card hover:border-primary/30 p-4 ...">
  <div className="flex items-start gap-3">
    <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
      <Mail className="text-primary h-4 w-4" />
    </div>
    <div className="min-w-0 flex-1">
      <h3 className="text-foreground group-hover:text-primary text-sm font-semibold">
        SPF Surveyor
      </h3>
      <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
        Validate and troubleshoot SPF records
      </p>
    </div>
  </div>
</Link>
```

**Key changes:**

- `border-border/40 bg-card` instead of `border-green-200 bg-green-50`
- `p-4` instead of `p-5`
- `gap-3` instead of `gap-4`
- `rounded-md` icon containers instead of `rounded-full`
- `h-4 w-4` icons instead of `h-6 w-6`
- `text-sm` titles instead of `text-lg`
- `text-xs` descriptions instead of `text-sm`
- Removed bottom border animation
- Added `hover:border-primary/30 hover:shadow-lg`

**6. Semantic Headings (lines 438, 460):**

Added proper `<h3>` elements to Warnings and Recommendations sections for accessibility.

**7. Code Cleanup:**

Removed unused `getStatusColor` function (was 15 lines of dead code).

**8. Label Spacing (line 340):**

Added `mb-2 block` to DKIM Record label for proper spacing.

### Results:

- ✅ All 32+ hardcoded colors eliminated
- ✅ Score card layout fixed - dots now below heading
- ✅ All result cards have proper p-6 padding
- ✅ Alert boxes have cleaner, tighter padding
- ✅ Related Tools matches Domain Checker pattern exactly
- ✅ Semantic headings added for accessibility
- ✅ Perfect visibility in both light and dark modes
- ✅ Tested with sample DKIM record - all sections render properly

### Key Learnings:

**1. Card Padding is NOT Optional:**

- The base Card component has ZERO padding
- ALWAYS wrap content in `<div className="p-6">` or use CardContent
- This is a common mistake that makes cards look broken

**2. Related Tools Must Be Consistent:**

- Do NOT create custom colored backgrounds per tool
- ALWAYS use the Domain Checker pattern exactly
- Consistency across tools is critical for professional appearance

**3. Layout Issues are Easy to Miss:**

- Score card dots were on the wrong side for multiple commits
- Always test the actual visual output, not just color themes
- Chrome DevTools screenshots are essential for catching layout bugs

**4. Status Colors in Data Structures:**

- Don't just fix colors in JSX - check data arrays too
- Rating dots, status indicators, etc. may use hardcoded colors in data
- Search for `bg-green-`, `bg-red-`, `bg-yellow-` patterns in ALL code
