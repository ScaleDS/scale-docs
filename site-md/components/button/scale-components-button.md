# Scale Design System
## Button Component Documentation

**Version:** 3.0.0  
**Last Updated:** January 2026

---

## Table of Contents

1. [Overview](#overview)
2. [When to Use](#when-to-use)
3. [Anatomy](#anatomy)
4. [Variants](#variants)
5. [Sizes](#sizes)
6. [States](#states)
7. [Properties](#properties)
8. [Best Practices](#best-practices)
9. [Content Guidelines](#content-guidelines)
10. [Accessibility](#accessibility)
11. [Figma Implementation](#figma-implementation)
12. [Framer Implementation](#framer-implementation)
13. [Related Components](#related-components)

---

## Overview

Buttons are clickable elements that trigger actions. They communicate calls to action and allow users to interact with the interface in a variety of ways. Buttons are one of the most important interactive components in any interface, serving as the primary mechanism for user actions.

### Principles

**Clear Hierarchy**  
Each button variant has a specific purpose in the visual hierarchy. Primary buttons command attention, while text buttons provide subtle secondary actions.

**Immediate Feedback**  
Button states (hover, pressed, loading) provide immediate visual feedback, helping users understand the result of their interactions.

**Purposeful Design**  
Every element of a button—from its color to its label—should clearly communicate its purpose and the action it will perform.

---

## When to Use

### Use Buttons For:

- **Form submission** - Submitting data, saving changes, or creating records
- **Confirmation actions** - Confirming choices, accepting terms, or approving requests
- **Starting processes** - Beginning workflows, launching features, or initializing actions
- **Destructive actions** - Deleting content, canceling operations, or removing items
- **Primary CTAs** - Main calls to action on marketing pages or in applications

### Don't Use Buttons For:

- **Navigation** - Use links instead for moving between pages or sections
- **Opening modals with information only** - Consider using text links
- **Switching views or tabs** - Use tab components or segmented controls
- **Inline text references** - Use text links for inline citations or references

### Variant Selection Guide

**Primary Buttons:**
- Main action on a page or in a dialog
- Only one per screen or section
- High-impact, high-frequency actions
- Example: "Save changes", "Create account", "Purchase"

**Secondary Buttons:**
- Supporting actions alongside a primary button
- Less prominent but still important actions
- Multiple per screen are acceptable
- Example: "Cancel", "Go back", "Learn more"

**Tertiary Buttons:**
- Least prominent actions in a hierarchy
- Optional or supplementary actions
- Can appear multiple times
- Example: "Skip", "Remind me later", "View details"

**Negative Buttons:**
- Destructive or irreversible actions
- Deletion, removal, or permanent changes
- Should be paired with confirmation dialogs
- Example: "Delete account", "Remove file", "Cancel subscription"

**Outline/Text Buttons:**
- Subtle actions in dense interfaces
- Secondary navigation within a feature
- Alternative options in button groups
- Example: "View all", "Collapse", "Advanced options"

---

## Anatomy

Understanding button anatomy helps maintain consistency and communicate with developers effectively.

```
┌───────────────────────────────────────────┐
│  [B] Button Container                     │
│  ┌─────────────────────────────────────┐  │
│  │ [C] Icon [A] Button [D] Icon        │  │
│  │          Label                      │  │
│  └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
```

### Button Elements

**A. Label** (Required)  
The text that describes the action the button will perform. Should be clear, concise, and action-oriented.
- Uses Label/[Size]/Semi Bold typography token
- Text color adapts to button variant and theme
- Minimum padding: 4px horizontal (Space/XS)

**B. Container** (Required)  
The button background and touch target that defines the clickable area.
- Background color varies by variant and state
- Border radius: 8px (Border Radius/S)
- Padding varies by size (see Sizes section)
- Minimum height: 32px (Size S), 40px (Size M), 48px (Size L)

**C. Leading Icon** (Optional)  
Icon placed before the label to enhance meaning or recognition.
- Size: 24px × 24px
- Spacing from label: Defined by label padding
- Color matches label text color
- Should clearly relate to button action

**D. Trailing Icon** (Optional)  
Icon placed after the label, typically for indicating direction or expansion.
- Size: 24px × 24px
- Spacing from label: Defined by label padding
- Color matches label text color
- Common uses: arrows, expand indicators, external link icons

**E. Loading Indicator** (State-dependent)  
Animated spinner shown during asynchronous operations.
- Size: 24px × 24px
- Replaces label and icons during loading
- Centered in button container
- Color matches button's text color

---

## Variants

The Button component offers 13 visual variants to support different levels of hierarchy and use cases. Each variant uses semantic color tokens that automatically adapt to light and dark themes.

### Primary Buttons

**Visual Style:**
- Background: `Background/Brand`
- Text: `Text/Primary Inverse`
- Border: None
- Highest visual weight

**When to Use:**
- Main action on a page or screen
- Primary call-to-action
- Confirmation in dialogs
- Form submission

**States:**
- Default: `Background/Brand`
- Hover: `Background/Brand Hover`
- Pressed: `Background/Brand Pressed`

**Example Uses:**
- "Save changes"
- "Create account"
- "Continue to checkout"
- "Confirm purchase"

### Secondary Buttons

**Visual Style:**
- Background: `Background/Neutral`
- Text: `Text/Primary`
- Border: None (or subtle border in some themes)
- Medium visual weight

**When to Use:**
- Supporting actions alongside primary button
- Secondary options in dialogs
- Multiple actions of similar importance
- Less emphatic confirmations

**States:**
- Default: `Background/Neutral`
- Hover: `Background/Neutral Hover`
- Pressed: `Background/Neutral Pressed`

**Example Uses:**
- "Cancel"
- "Go back"
- "Save as draft"
- "Skip for now"

### Tertiary Buttons

**Visual Style:**
- Background: Transparent
- Text: `Text/Primary`
- Border: None
- Lower visual weight

**When to Use:**
- Least prominent actions
- Supplementary options
- Dense interfaces
- Optional actions

**States:**
- Default: Transparent background
- Hover: `Background/Hover`
- Pressed: `Background/Pressed`

**Example Uses:**
- "Learn more"
- "View details"
- "Edit"
- "Expand"

### Tertiary Mono Buttons

**Visual Style:**
- Background: Transparent
- Text: Monochrome
- Border: None
- Neutral appearance

**When to Use:**
- UI controls in neutral contexts
- Actions that shouldn't compete with color
- Minimalist interfaces
- System-level controls

### Inverse Buttons

**Visual Style:**
- Background: Light (on dark backgrounds)
- Text: Dark text
- Border: None
- High contrast on colored backgrounds

**When to Use:**
- Actions on dark or colored backgrounds
- Hero sections with background images
- Overlays and modals with dark backgrounds
- Marketing landing pages

### Mono Buttons

**Visual Style:**
- Background: `Background/Mono`
- Text: High-contrast monochrome
- Border: Optional
- Monochrome aesthetic

**When to Use:**
- Professional/serious contexts
- Print-style interfaces
- When color shouldn't influence decision
- Accessibility-focused designs

### Outline Buttons

**Visual Style:**
- Background: Transparent
- Text: `Text/Primary`
- Border: `Border/Primary` (1px)
- Medium emphasis with border

**When to Use:**
- Secondary actions with more emphasis than tertiary
- Button groups where distinction is needed
- Actions on busy backgrounds
- Alternative to filled secondary buttons

**States:**
- Default: 1px border
- Hover: Background fill + border color change
- Pressed: Darker background

### Outline Mono Buttons

**Visual Style:**
- Background: Transparent
- Text: Monochrome
- Border: Monochrome (1px)
- Neutral outlined style

**When to Use:**
- Monochrome interfaces
- When color should be avoided
- Professional documentation
- Print-optimized UIs

### Text Buttons

**Visual Style:**
- Background: Transparent
- Text: `Text/Link`
- Border: None
- Minimal visual weight, link-like

**When to Use:**
- Least prominent actions
- Inline actions within text
- Dense data tables
- Navigation-like actions

**States:**
- Default: Link color
- Hover: `Text/Link Hover` + underline (optional)
- Pressed: `Text/Link Pressed`

### Text Mono Buttons

**Visual Style:**
- Background: Transparent
- Text: Monochrome
- Border: None
- Minimal neutral style

**When to Use:**
- Subtle actions in monochrome contexts
- Secondary navigation
- Minimal interfaces
- System controls

### Negative Primary Buttons

**Visual Style:**
- Background: `Background/Negative`
- Text: `Text/Primary Inverse`
- Border: None
- Red/destructive appearance

**When to Use:**
- **Destructive actions only**
- Permanent deletions
- Account termination
- Irreversible operations
- Always pair with confirmation dialog

**States:**
- Default: `Background/Negative`
- Hover: `Background/Negative Hover`
- Pressed: `Background/Negative Pressed`

**Example Uses:**
- "Delete account"
- "Remove permanently"
- "Cancel subscription"
- "Discard changes"

**⚠ï¸ Critical Usage Note:**
Never use negative buttons for reversible actions. They should only be used when the action is destructive and difficult or impossible to undo.

### Negative Outline Buttons

**Visual Style:**
- Background: Transparent
- Text: `Text/Negative`
- Border: `Border/Negative` (1px)
- Outlined destructive style

**When to Use:**
- Secondary destructive actions
- Less emphatic deletions
- Removals that can be undone
- Warnings before destructive actions

**Example Uses:**
- "Remove item"
- "Delete file"
- "Clear cart"
- "Reset form"

### Negative Text Buttons

**Visual Style:**
- Background: Transparent
- Text: `Text/Negative`
- Border: None
- Minimal destructive style

**When to Use:**
- Subtle destructive actions
- Inline deletion options
- Less critical removals
- Dense interfaces

**Example Uses:**
- "Remove" (in lists)
- "Delete" (in tables)
- "Unsubscribe"
- "Dismiss"

---

## Sizes

Buttons come in three sizes to accommodate different layouts and hierarchy needs.

### Large (L) - Default

**Dimensions:**
- Height: 48px
- Padding: 12px horizontal (Space/M), 12px vertical (Space/M)
- Label: Label/L/Semi Bold (16px)
- Icon: 24px × 24px

**When to Use:**
- Primary actions on spacious pages
- Hero CTAs on landing pages
- Form submissions
- High-impact action buttons
- Touch-optimized mobile interfaces

**Touch Target:**
- Meets 44px × 44px minimum (48px exceeds requirement)
- Ideal for mobile and tablet interfaces
- Comfortable for desktop use

**Example Contexts:**
- Marketing landing pages
- Authentication forms
- Checkout flows
- Empty states
- Modal primary actions

### Medium (M) - Standard

**Dimensions:**
- Height: 40px
- Padding: 12px horizontal (Space/M), 8px vertical (Space/S)
- Label: Label/M/Semi Bold (14px)
- Icon: 24px × 24px

**When to Use:**
- Standard application interfaces
- Balanced visual weight
- Most common use case
- Forms with multiple fields
- Toolbar actions

**Touch Target:**
- Meets 44px width with typical label length
- Works well for desktop primary use
- Acceptable for mobile with adequate spacing

**Example Contexts:**
- Application toolbars
- Data tables
- Settings pages
- Content management systems
- Dialog actions

### Small (S) - Compact

**Dimensions:**
- Height: 32px
- Padding: 12px horizontal (Space/M), 4px vertical (Space/XS)
- Label: Label/S/Semi Bold (12px)
- Icon: 24px × 24px (consider 16px for better proportion)

**When to Use:**
- Dense interfaces
- Table row actions
- Compact toolbars
- Multiple buttons in constrained space
- Tag management interfaces

**Touch Target Consideration:**
- 32px height is below 44px recommendation
- Compensate with adequate spacing between buttons
- Best suited for desktop and precise input devices
- Consider increasing padding if used on mobile

**Example Contexts:**
- Data grid actions
- Chip/tag removal
- Inline editing controls
- Dense dashboards
- Admin interfaces

### Size Selection Guidelines

**Mobile-First:**
- Default to Large (L) for touch interfaces
- Use Medium (M) only when space is genuinely constrained
- Avoid Small (S) on mobile unless in desktop-optimized views

**Desktop:**
- Medium (M) is the standard for most interfaces
- Large (L) for primary marketing CTAs
- Small (S) acceptable for dense data interfaces

**Consistency:**
- Don't mix sizes in the same button group
- Maintain size consistency across similar actions
- Size should reflect importance, not just fit

---

## States

Buttons have five distinct states that provide visual feedback to users.

### Default State

**Appearance:**
- Base colors from variant definition
- Normal cursor
- No interaction indicators

**When Shown:**
- Button is interactive and ready
- No user interaction occurring
- Default state for all idle buttons

**Implementation:**
```
Background: Variant-specific
Text: Variant-specific
Cursor: pointer
Transition: 200ms ease for smooth state changes
```

### Hover State

**Appearance:**
- Slightly darker/lighter background (theme-dependent)
- Cursor changes to pointer
- Smooth transition from default

**When Shown:**
- Mouse cursor is over the button
- Touch devices: May not show hover
- Focus-visible may show similar appearance

**Color Tokens:**
- Primary: `Background/Brand Hover`
- Secondary: `Background/Neutral Hover`
- Negative: `Background/Negative Hover`

**Transition:**
- Duration: 200ms
- Easing: ease
- Properties: background-color, border-color

**Accessibility:**
- Don't rely solely on hover for critical feedback
- Ensure hover is distinguishable (3:1 contrast from default)
- Touch devices should show pressed state instead

### Pressed State

**Appearance:**
- Darkest/lightest version of button (theme-dependent)
- May show slight scale reduction (optional)
- Active visual feedback

**When Shown:**
- Mouse button is down on button
- Touch contact with button
- Space/Enter key pressed while focused

**Color Tokens:**
- Primary: `Background/Brand Pressed`
- Secondary: `Background/Neutral Pressed`
- Negative: `Background/Negative Pressed`

**Duration:**
- Visible while pressed
- Immediate return to hover on release
- Short but noticeable feedback

**Implementation Note:**
- Use `:active` pseudo-class
- Combine with `:focus-visible` for keyboard
- Ensure touch devices show this state

### Loading State

**Appearance:**
- Spinner/indicator replaces content
- Button remains at full size
- Disabled interaction during loading
- Smooth transition to loading indicator

**When Shown:**
- Async operation in progress
- Form submission processing
- API calls pending
- Data fetching operations

**Loading Indicator:**
- Size: 24px × 24px
- Color: Matches button text color
- Animation: Rotating spinner (1s duration)
- Centered in button container

**Behavior:**
- Button disabled during loading
- Cursor: not-allowed or wait
- No hover/pressed states while loading
- Label and icons hidden

**Accessibility:**
- Announce loading state to screen readers
- Use `aria-busy="true"`
- Provide status updates for long operations
- Consider timeout and error states

**Best Practices:**
- Show loading for operations > 200ms
- Don't show for instant operations
- Provide feedback when loading completes
- Consider inline success/error messages

### Disabled State

**Appearance:**
- Reduced opacity (typically 40-50%)
- Desaturated colors
- Cursor: not-allowed
- No hover or pressed states

**When Shown:**
- Action not currently available
- Prerequisites not met
- Permissions insufficient
- Temporary unavailability

**Color Tokens:**
- Background: `Background/Disabled`
- Text: `Text/Disabled`
- Border: `Border/Disabled`

**Accessibility:**
- Set `aria-disabled="true"`
- Optionally use `disabled` attribute
- Provide context why button is disabled
- Consider showing tooltip on hover
- Ensure 3:1 contrast for perceivability

**Best Practices:**
- Prefer hiding over disabling when possible
- Provide clear reason why disabled
- Enable as soon as conditions are met
- Don't disable without explanation
- Consider showing helper text

**Common Disable Reasons:**
- Form validation errors
- Missing required fields
- Insufficient permissions
- Network connectivity issues
- Rate limiting

---

## Properties

Button properties define customization options available when using the component.

### Component Properties

**Size** (Required)
- Type: Options
- Values: `L`, `M`, `S`
- Default: `L`
- Controls button dimensions and typography

**Type** (Required)
- Type: Options
- Values: `Primary`, `Secondary`, `Tertiary`, `Tertiary Mono`, `Inverse`, `Mono`, `Outline`, `Outline Mono`, `Text`, `Text Mono`, `Negative Primary`, `Negative Outline`, `Negative Text`
- Default: `Primary`
- Controls visual style and hierarchy

**State** (Internal)
- Type: Options
- Values: `Default`, `Hover`, `Pressed`, `Loading`, `Disabled`
- Default: `Default`
- Managed by component logic, not typically exposed as prop

**Label** (Required)
- Type: Text
- Default: "Button"
- Character limit: 25 recommended
- Format: Sentence case

**Show Leading Icon** (Optional)
- Type: Boolean
- Default: `false`
- Displays icon before label

**Leading Icon** (Optional)
- Type: Instance
- Default: Icon/24/Placeholder
- Accepts any 24px icon component

**Show Trailing Icon** (Optional)
- Type: Boolean
- Default: `false`
- Displays icon after label

**Trailing Icon** (Optional)
- Type: Instance
- Default: Icon/24/Placeholder
- Accepts any 24px icon component

**Loading** (Optional)
- Type: Boolean
- Default: `false`
- Shows loading indicator when true

### Property Combinations

**Icon-Only Buttons:**
- Set `Label` to empty or space
- Enable either leading or trailing icon
- Ensure icon clearly communicates action
- Must provide `aria-label` for accessibility

**Loading Buttons:**
- Set `Loading` to `true`
- Hides label and icons
- Shows centered spinner
- Automatically disables interaction

**Icon + Label:**
- Most common configuration
- Icon reinforces label meaning
- Use leading icon for action type
- Use trailing icon for direction/expansion

---

## Best Practices

### Do's

**✓ Use clear, actionable button labels**  
Start with a strong verb that clearly describes the action: "Save changes", "Delete account", "Create project".

**✓ Keep button text concise**  
Aim for 1-3 words when possible. Users should understand the action at a glance.

**✓ Prioritize one primary action per page**  
Multiple primary buttons compete for attention and confuse users about the main action.

**✓ Position buttons consistently**  
Place primary actions in the same location across similar interfaces (e.g., bottom-right in dialogs).

**✓ Use appropriate variants for visual hierarchy**  
Primary for main action, secondary for alternatives, tertiary for optional actions.

**✓ Provide visual feedback during loading states**  
Replace button content with a spinner for operations that take more than 200ms.

**✓ Ensure adequate touch target size**  
Minimum 44px × 44px for mobile interfaces. Large size meets this by default.

**✓ Use established button colors appropriately**  
Respect semantic meanings: red for destructive, blue/brand for primary actions.

**✓ Group related buttons logically**  
Place confirmation buttons together, with destructive actions separated or requiring confirmation.

**✓ Provide disabled state context**  
If a button must be disabled, explain why through nearby text or a tooltip.

**✓ Test button labels in context**  
Ensure labels make sense when read aloud or by screen readers.

**✓ Use icons to enhance meaning**  
Add icons when they reinforce the button's purpose (e.g., trash icon for delete).

### Don'ts

**✗ Don't use multiple primary buttons on the same page**  
This creates decision paralysis. Use one primary and secondary buttons for alternatives.

**✗ Don't truncate button labels**  
If text doesn't fit, rewrite for brevity or expand the button width. Never use ellipsis.

**✗ Don't use vague labels**  
Avoid "Click here", "Submit", or "OK" without context. Be specific about the action.

**✗ Don't use buttons for navigation**  
Links are for navigation between pages. Buttons are for actions within a page.

**✗ Don't mix multiple button sizes in the same group**  
Inconsistent sizes create visual discord and unclear hierarchy.

**✗ Don't use negative/destructive styles for reversible actions**  
Red/negative buttons should only be used for truly destructive actions.

**✗ Don't overwhelm users with too many CTAs**  
More buttons = more decisions = slower action. Prioritize ruthlessly.

**✗ Don't disable buttons without explanation**  
Users get frustrated when buttons are disabled without knowing why or how to enable them.

**✗ Don't rely on color alone to convey meaning**  
Combine color with text, icons, and position to ensure accessibility.

**✗ Don't use ALL CAPS in button text**  
ALL CAPS is harder to read and feels like shouting. Use sentence case.

**✗ Don't make buttons too small for the context**  
On mobile, prefer large buttons. On desktop, medium is usually appropriate.

**✗ Don't forget keyboard accessibility**  
Ensure buttons can be focused with Tab and activated with Enter/Space.

### Common Button Patterns

**Form Actions:**
```
[Secondary: Cancel]  [Primary: Save Changes]
```
- Primary action on right (Western reading direction)
- Destructive "Cancel" is secondary to "Save"

**Destructive Confirmation:**
```
                    [Negative: Delete Account]
Are you sure you want to delete your account?
This action cannot be undone.

[Secondary: Cancel]  [Negative Primary: Yes, Delete]
```
- Clear warning message
- Negative button labeled with specific action
- Secondary "Cancel" provides safe exit

**Progressive Disclosure:**
```
[Primary: Continue]
[Text: Advanced Options]
```
- Primary action drives main flow
- Text button for optional advanced features

**Wizard/Multi-Step:**
```
[Text: Back]  [Secondary: Save & Exit]  [Primary: Continue]
```
- Back for navigation
- Secondary for alternate exit
- Primary for main progression

---

## Content Guidelines

### Writing Button Labels

**Sentence Case**  
Always use sentence case (first word capitalized, rest lowercase):
- ✓ "Save changes"
- ✗ "Save Changes"
- ✗ "SAVE CHANGES"

**Action Verbs**  
Lead with strong, specific verbs:
- ✓ "Create account" (not "Sign up")
- ✓ "Download report" (not "Get report")
- ✓ "Delete file" (not "Remove")

**Be Specific**  
Clarify what will happen:
- ✓ "Save changes" (better than "Save")
- ✓ "Send invitation" (better than "Send")
- ✓ "Start free trial" (better than "Continue")

**Keep It Short**  
Aim for 25 characters or fewer:
- ✓ "Save" (4 characters)
- ✓ "Create project" (14 characters)
- ✗ "Create a new project from template" (36 characters - too long)

**Avoid Filler Words**  
Remove unnecessary words:
- ✓ "Save changes" (not "Please save your changes")
- ✓ "Continue" (not "Click to continue")
- ✓ "Delete" (not "Click here to delete")

**Match Tone to Context**  
Adjust formality based on product:
- Professional: "Submit application"
- Casual: "Sign me up"
- Playful: "Let's go!"

### Icon-Only Button Labels

When using icon-only buttons (no visible text label):

**Provide Accessible Name:**
- Always include `aria-label`
- Label should describe the action, not the icon
- ✓ aria-label="Close dialog"
- ✗ aria-label="X icon"

**Ensure Icon Clarity:**
- Use universally recognized icons
- Test with users if unsure
- Provide tooltip on hover

**Common Icon-Only Patterns:**
- Close: ✕ (X icon)
- Menu: ☰ (Hamburger)
- Search: 🔍 (Magnifying glass)
- Edit: ✏️ (Pencil)
- Delete: 🗑️ (Trash can)

### Confirmation Dialog Content

When buttons appear in confirmation dialogs:

**Dialog Title:**
- Clearly state what's being confirmed
- Example: "Delete account?"

**Dialog Body:**
- Explain consequences
- Be honest about irreversibility
- Example: "This action cannot be undone. All your data will be permanently deleted."

**Button Labels:**
- Mirror the action in the title
- Be explicit about the result
- ✓ "Yes, delete account" (not "Yes" or "OK")
- ✓ "Cancel" (not "No" or "Go back")

---

## Accessibility

### WCAG 2.1 AA Requirements

**Color Contrast:**
- Button text must have 4.5:1 contrast ratio minimum
- Focus indicators must have 3:1 contrast ratio
- Disabled buttons need 3:1 contrast to be perceivable

**Scale's Button Contrast:**
- Primary buttons: ✓ 7.2:1 (exceeds requirement)
- Secondary buttons: ✓ 9.1:1 (exceeds requirement)
- Text buttons: ✓ 4.8:1 (meets requirement)
- Negative buttons: ✓ 6.4:1 (exceeds requirement)

All button variants meet or exceed WCAG AA standards.

### Keyboard Accessibility

**Focus Management:**
- Buttons must be focusable with Tab key
- Focus order should be logical (typically left-to-right, top-to-bottom)
- Focused buttons must have visible focus indicator

**Activation:**
- Enter key activates focused button
- Space key activates focused button
- Activation behavior should match mouse click

**Focus Indicator:**
- Use `:focus-visible` for keyboard-only focus
- Minimum 2px outline with 3:1 contrast
- Don't remove focus indicators
- Scale uses: `Border/Focus` color, 2px outline, 2px offset

### Screen Reader Support

**Button Role:**
- Use semantic `<button>` element (not `<div>` with click handler)
- Ensures proper role announcement
- Provides built-in keyboard support

**Accessible Name:**
- Button label serves as accessible name
- For icon-only buttons, provide `aria-label`
- Example: `<button aria-label="Close dialog">×</button>`

**State Announcement:**
- Disabled: `aria-disabled="true"` or `disabled` attribute
- Loading: `aria-busy="true"` or `aria-live` region
- Pressed toggle: `aria-pressed="true"` (for toggle buttons)

**Context:**
- If button action isn't obvious from label, add `aria-describedby`
- Example: Button says "Delete" but needs context about what

### Touch Target Size

**Minimum Requirements:**
- iOS: 44px × 44px
- Android: 48dp × 48dp (roughly 48px)
- WCAG: 44px × 44px (Success Criterion 2.5.8)

**Scale Button Sizes:**
- Large: 48px height ✓ (meets all standards)
- Medium: 40px height ⚠ (needs adequate spacing)
- Small: 32px height ✗ (desktop only, avoid on mobile)

**Spacing Compensation:**
When using Medium or Small buttons on touch devices:
- Add minimum 12px spacing between buttons
- Increase padding to expand touch target
- Consider stacking buttons vertically

### Visual Indicators Beyond Color

**Don't Rely on Color Alone:**
- Use text labels to describe actions
- Include icons to reinforce meaning
- Position destructive buttons separately
- Use border or fill patterns

**Destructive Action Indicators:**
- ✓ Red color + "Delete" label + trash icon
- ✗ Red color only

**Loading Indicators:**
- ✓ Spinner + text announcement
- ✗ Color change only

### Cognitive Accessibility

**Clear Labels:**
- Use simple, common words
- Avoid jargon and abbreviations
- Be consistent across similar actions

**Predictable Behavior:**
- Similar buttons should behave similarly
- Don't surprise users with unexpected outcomes
- Maintain consistency in button position

**Error Prevention:**
- Confirm destructive actions
- Provide undo functionality when possible
- Use clear, specific button labels

**Focus on Task:**
- One primary action per view
- Remove unnecessary buttons
- Prioritize clearly

---

## Figma Implementation

### Component Structure

The Button component in Figma is built using variables, component properties, and variants to create a flexible, theme-aware system.

**Main Component:**
- Name: Button
- Path: Components → Button
- Variants: 195 combinations (13 types × 3 sizes × 5 states)

### Using the Button Component

**To Insert a Button:**
1. Assets panel → Search "Button"
2. Drag onto canvas
3. Customize via properties panel

**Component Properties:**

**Size Property:**
- Options: L, M, S
- Controls height, padding, typography
- Default: L

**Type Property:**
- Options: 13 variants (Primary, Secondary, Tertiary, etc.)
- Controls colors, borders, emphasis
- Default: Primary

**Label Property:**
- Text input
- Default: "Button"
- Edit directly or via properties panel

**Show Leading Icon:**
- Boolean toggle
- Default: False
- Shows/hides leading icon slot

**Leading Icon:**
- Instance swap property
- Default: Icon/24/Placeholder
- Swap with any 24px icon

**Show Trailing Icon:**
- Boolean toggle
- Default: False
- Shows/hides trailing icon slot

**Trailing Icon:**
- Instance swap property
- Default: Icon/24/Placeholder
- Swap with any 24px icon

**State Property:**
- Options: Default, Hover, Pressed, Loading, Disabled
- Usually left as Default (states shown in interactive prototype)
- Can manually set to showcase different states

**Loading Property:**
- Boolean toggle
- Shows loading spinner
- Hides label and icons

### Working with Variants

**To Switch Variants:**
1. Select button instance
2. Properties panel → Type dropdown
3. Choose desired variant

**Interactive States:**
- Default state for design mockups
- Hover/Pressed for prototyping
- Set interactions in prototype mode
- States automatically change colors via variables

### Colors and Theming

**Variable Mode:**
Button colors automatically adapt between Light and Dark modes using Figma variables.

**To Switch Theme:**
1. Select button or containing frame
2. Right panel → Applied variables section
3. Mode dropdown → Select "Light" or "Dark"

**Color Tokens Used:**
- Primary buttons: `Background/Brand`, `Text/Primary Inverse`
- Secondary buttons: `Background/Neutral`, `Text/Primary`
- Negative buttons: `Background/Negative`, `Text/Primary Inverse`
- Text buttons: `Text/Link`

All color tokens reference the Semantic Colors collection and automatically adapt to the selected mode.

### Customization

**Changing Colors:**
- Don't detach from component
- Modify semantic color variables instead
- Changes propagate to all buttons

**Adjusting Padding:**
- Don't manually adjust
- Use Size property (L, M, S)
- Maintains consistency with design system

**Swapping Icons:**
1. Select button instance
2. Properties panel → Leading/Trailing Icon
3. Click swap icon
4. Choose from icon library

**Text Overrides:**
- Edit label directly by clicking
- Or use properties panel → Label field
- Text automatically reflows

### Prototyping Interactions

**To Add Hover State:**
1. Prototype mode
2. Select button instance
3. Add interaction: "While hovering"
4. Action: "Change to" → Select Hover variant
5. Animation: Instant or 200ms ease

**To Add Pressed State:**
1. Add interaction: "While pressing"
2. Action: "Change to" → Select Pressed variant
3. Animation: Instant

**To Simulate Loading:**
1. Set initial state to Default
2. On Click interaction: "Change to" → Loading variant
3. After delay (2000ms): "Change to" → Next screen

### Best Practices in Figma

**✓ DO:**
- Use component instances, never detach
- Leverage properties panel for customization
- Test in both Light and Dark modes
- Use Auto Layout for button groups
- Keep labels concise
- Maintain size consistency in groups

**✗ DON'T:**
- Don't detach from component
- Don't manually resize buttons
- Don't use hard-coded colors
- Don't create custom button variants
- Don't mix sizes in same group
- Don't forget to test accessibility

---

## Framer Implementation

### Component Setup

The Button component in Framer is available as a published component from the Scale Design System library.

**To Add Scale Buttons:**
1. Assets panel → Insert from library
2. Search "Scale Design System"
3. Find Button component
4. Drag onto canvas

**Component Properties:**

All properties from Figma are available in Framer:
- Size: L, M, S
- Type: All 13 variants
- Label: Text input
- Show Leading Icon: Boolean
- Leading Icon: Component instance
- Show Trailing Icon: Boolean
- Trailing Icon: Component instance
- Loading: Boolean

### Theming in Framer

**Automatic Theme Detection:**
Framer buttons automatically adapt to the user's system color scheme preference:
- Light mode: Shows light theme colors
- Dark mode: Shows dark theme colors
- No code required

**To Preview Themes:**
1. Toolbar → Theme toggle (☀/🌙)
2. Keyboard shortcut: ⌘⇧N
3. Switches canvas between light and dark

**Theme Override:**
Create a custom theme switcher using Framer's theme context (advanced).

### Adding Interactivity

**Click Actions:**
1. Select button on canvas
2. Add interaction: "On Click"
3. Choose action:
   - Navigate to page
   - Scroll to section
   - Open overlay
   - Toggle state
   - Run code (advanced)

**Hover Effects:**
Built-in hover states work automatically:
- Hover state applied on mouse over
- Smooth 200ms transition
- Respects current theme

**Loading State:**
1. Connect button to state variable
2. On click: Set `isLoading = true`
3. After async operation: Set `isLoading = false`
4. Button shows spinner during loading

### Code Components (Advanced)

For custom implementations, use Framer's code components:

```jsx
import { Button } from "./canvas"

export default function CustomButton() {
  const [loading, setLoading] = React.useState(false)
  
  const handleClick = async () => {
    setLoading(true)
    // Perform async operation
    await submitForm()
    setLoading(false)
  }
  
  return (
    <Button
      label="Submit"
      size="L"
      type="Primary"
      loading={loading}
      onClick={handleClick}
    />
  )
}
```

### Responsive Behavior

**Mobile Optimization:**
- Default to Large (L) size on mobile
- Buttons stack vertically in mobile layouts
- Touch targets automatically meet 44px minimum

**Breakpoint Behavior:**
- Maintain same variant across breakpoints
- Can change size per breakpoint if needed
- Keep spacing consistent with Scale spacing tokens

### Best Practices in Framer

**✓ DO:**
- Use published Scale components
- Test in both light and dark themes
- Connect buttons to real interactions
- Implement loading states for async actions
- Test on actual mobile devices
- Use Scale spacing tokens for button groups

**✗ DON'T:**
- Don't recreate buttons from scratch
- Don't hard-code colors
- Don't ignore theme switching
- Don't forget loading states
- Don't use Small size on mobile
- Don't skip accessibility testing

### Publishing and Handoff

**For Developers:**
1. Framer generates production-ready code
2. Buttons use semantic class names
3. Styles reference CSS custom properties
4. Developer can inspect generated code

**Handoff Notes:**
- Button tokens documented in CSS variables
- All states defined in component
- Spacing uses Scale spacing system
- Colors reference Scale color tokens

---

## Related Components

### Button Pill

**Description:**
Fully rounded button variant with `Border Radius/Pill` (999px). Creates a distinctive capsule shape.

**When to Use:**
- Marketing CTAs
- Tags with actions
- Toggle buttons
- Distinctive primary actions

**Differences from Standard Button:**
- Border radius: 999px vs 8px
- Often used with icons only
- More playful aesthetic

### Button Icon

**Description:**
Icon-only button without text label. Typically square or circular.

**When to Use:**
- Toolbars with space constraints
- Action menus
- Inline editing controls
- Icon-only interfaces

**Accessibility Requirements:**
- Must have `aria-label`
- Icon must be universally recognized
- Tooltip recommended on hover

### Link

**Description:**
Text-based navigation element, not a button. Uses anchor tag semantics.

**When to Use:**
- Navigation between pages
- External resources
- Document downloads
- Inline text references

**Don't Confuse With:**
- Text buttons (which trigger actions)
- Links navigate, buttons perform actions

### Button Group

**Description:**
Container component for arranging multiple related buttons.

**When to Use:**
- Multiple actions in dialog
- Wizard step navigation
- Toolbar button collections
- Segmented controls

**Spacing:**
- Internal gap: `Space/M` (12px) or `Space/S` (8px)
- Maintains button sizing consistency
- Can be horizontal or vertical

### Toggle Button

**Description:**
Button that maintains an on/off state (pressed state persists).

**When to Use:**
- View switching (grid/list)
- Text formatting (bold, italic)
- Filter activation
- Settings toggles

**Differences:**
- Uses `aria-pressed` attribute
- State persists after click
- Visual indicator for pressed state

---

## Resources

- **Figma Component:** Scale Design System 3.0.0 → Components → Button
- **Framer Component:** Scale Design System Library → Button
- **Color Tokens:** [Scale Color Documentation](scale-colors-v3.md)
- **Typography Tokens:** [Scale Typography Documentation](scale-typography.md)
- **Spacing Tokens:** [Scale Spacing Documentation](scale-spacing.md)
- **Border Radius:** [Scale Borders Documentation](scale-borders.md)
- **Accessibility Guidelines:** [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/)
- **Touch Target Guidelines:** [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/)

---

## Support

For questions about button usage, implementation, or customization:
- Create an issue in the Scale Design System repository
- Contact the design system team
- Review component-specific Figma documentation
- Consult the Scale Design System website

---

## Changelog

### Version 3.0.0 (Current)
- Complete button component system with 13 variants
- Three size options (L, M, S)
- Five interactive states
- Theme-aware colors (light/dark modes)
- Optional leading and trailing icons
- Loading state support
- WCAG AA compliant contrast ratios
- Comprehensive Figma and Framer implementation
- Full accessibility documentation

---

*Built with care by the Scale Design System team*