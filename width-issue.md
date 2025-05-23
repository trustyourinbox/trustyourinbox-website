# Width Consistency Issues

## Overview
The website currently has inconsistent width settings across different pages. This document outlines the issues and tasks needed to standardize the layout.

## Current Issues
1. Inconsistent container widths across pages
2. Varying padding and margin settings
3. Different max-width values being used

## Tasks

### 1. Standardize Container Classes ✅
- [x] Implement consistent container class in `globals.css`
- [x] Update DMARC domain checker page to use container class
- [x] Update XML converter tool page to use container class
- [x] Update DMARC policy impact simulator page to use container class
- [x] Update careers page to use container class
- [x] Update forensic report viewer to use container class
- [x] Update DKIM validator to use container class
- [x] Update DMARC policy generator to use container class
- [x] Update company page to use container class

### 2. Review and Update Individual Pages
- [x] Review all remaining pages for width consistency
- [x] Update any pages still using custom width settings
- [x] Ensure consistent padding across all pages
- [x] Verify responsive behavior on all pages

### 3. Testing and Validation
- [ ] Test all pages across different screen sizes
- [ ] Verify consistent layout on mobile devices
- [ ] Check for any overflow issues
- [ ] Validate against design specifications

### 4. Recommended Tools Section (New)
- [ ] Check all tools pages to ensure there is a 'Recommended Tools' section or button.
- [ ] Document and implement logic to display 3 tools that are similar to the current tool page.
    - Similarity can be based on tool category, function, or user journey.
    - Example: On a DMARC-related tool, recommend other DMARC or email security tools.
    - The logic for similarity should be defined and documented before implementation.

## Implementation Details
The standardized container class in `globals.css` includes:
```css
.container {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
```

This provides:
- Maximum width of 1280px (`max-w-7xl`)
- Consistent padding across breakpoints
- Proper centering with `mx-auto`

## Next Steps
1. Complete testing across different screen sizes
2. Verify mobile responsiveness
3. Document any additional issues found
4. Create a style guide for future development
5. Define and implement logic for recommended tools on each tools page 