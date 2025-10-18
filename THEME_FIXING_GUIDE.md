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

### 4. Buttons and Links

```jsx
// WRONG
<button className="bg-white border-gray-200 text-indigo-600">

// CORRECT
<button className="bg-card border-border text-primary">
```

### 5. Input Fields - Usually Already Correct

Input, Select, and Textarea components from `/src/components/ui` are typically already theme-aware. Only check if you see visual issues.

### 6. Semantic Headings for Result Sections

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

### 7. Text Contrast on Colored Backgrounds

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

2. **Visual Inspection - Light Mode**
   - [ ] Toggle to light mode
   - [ ] Check main form/tool card - proper light theme
   - [ ] Check all accordion sections when collapsed
   - [ ] Expand all accordions and check contents
   - [ ] Check slider visibility (if present)
   - [ ] Check generated output sections
   - [ ] Verify all text is readable
   - [ ] **CRITICAL**: Check alert/status boxes - text should NOT appear gray/washed out on colored backgrounds

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
   - [ ] Links are properly themed
   - [ ] Hover states work correctly
   - [ ] Cards/boxes use theme colors

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
10. ✅ Related tools section is properly themed
11. ✅ All result sections have proper semantic headings (h2/h3)

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

**Tools Fixed Using This Guide:**

- ✅ DMARC Policy Generator (/tools/dmarc-policy-generator) - Full fix with accordion, slider, spacing, and color fixes
- ✅ DMARC Analyzer (/tools/dmarc-analyzer) - Already properly themed, only needed label spacing fix
- ✅ DMARC Domain Checker (/tools/dmarc-domain-checker) - Already properly themed, needed label spacing and semantic heading fix
- ✅ DMARC Policy Impact Simulator (/tools/dmarc-policy-impact-simulator) - Fixed 19 hardcoded colors + standardized status colors + fixed critical DMARC logic bug

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
