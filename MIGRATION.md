# Migration Roadmap: Removing @radix-ui/themes Dependency

This document outlines the plan to remove the dependency on @radix-ui/themes and replace components with native implementations.

## Progress Summary

- ✅ Simple Components: 8/8 completed (100%)
- ✅ Medium Complexity Components: 6/6 completed (100%)
- ✅ Complex Components: 6/6 completed (100%)
- 📊 Overall Progress: 20/20 components (100%)

## Completed Components

- ✅ TextArea: Replaced with native textarea
- ✅ TextInput: Replaced with native input
- ✅ DateInput: Replaced with custom implementation using @radix-ui/react-popover
- ✅ Separator: Replaced with simple div
- ✅ Skeleton: Replaced with custom animation
- ✅ SmallText: Replaced with styled span
- ✅ Link: Replaced with styled a tag
- ✅ Box: Replaced with styled div
- ✅ Callout: Created custom component
- ✅ IconButton: Replaced with button + styling
- ✅ InfoCard: Replaced with custom component
- ✅ SuccessCard: Replaced with custom component
- ✅ PostItem: Replaced with custom component
- ✅ ProductItem: Replaced with custom component
- ✅ DataTable: Replaced with native HTML table implementation
- ✅ MultiSelect: Already using @radix-ui/react-popover and @radix-ui/react-checkbox
- ✅ Popover: Already replaced with @radix-ui/react-popover
- ✅ Dialog: Already replaced with @radix-ui/react-dialog
- ✅ Switch: Already replaced with @radix-ui/react-switch
- ✅ MobileNavigationMenuItem: Already using custom component implementation

## ✅ Migration Complete!

All components have been successfully migrated away from @radix-ui/themes dependency. The library now uses:

- Native HTML elements where appropriate (table, input, textarea, etc.)
- Direct @radix-ui primitive components (dialog, popover, switch, checkbox)
- Custom implementations with Tailwind CSS styling
- Consistent theming through the custom theme system

### Key Changes Made:

1. **DataTable**: Replaced Radix Table components with native HTML table elements while maintaining all functionality
2. **RichTextEditor (FigureBubbleMenu)**: Updated to use @radix-ui/react-dialog primitives instead of themes Dialog
3. **All components**: Successfully tested to ensure they work in both light and dark themes
4. **API compatibility**: Maintained existing component APIs to minimize breaking changes

### Testing Completed:

✅ All TypeScript errors resolved  
✅ Component functionality preserved  
✅ Theme switching works correctly  
✅ Accessibility features maintained  
✅ Storybook stories remain functional

## Implementation Guidelines

1. Use only native HTML elements and Radix UI primitives
2. Maintain same API surface where possible
3. Keep accessibility features intact
4. Ensure consistent styling with existing components
5. Add proper TypeScript types and documentation

## Required Dependencies

- @radix-ui/react-popover
- @radix-ui/react-dialog
- @radix-ui/react-checkbox
- @radix-ui/react-switch

## Testing Plan

1. Update Storybook stories for each component
2. Test in light and dark mode
3. Test accessibility
4. Test keyboard navigation
