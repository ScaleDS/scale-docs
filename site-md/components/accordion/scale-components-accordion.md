# Scale Design System
## Accordion Component Documentation

**Version:** 3.0.0
**Last Updated:** January 2026

---

## Table of Contents

1. [Overview](#overview)
2. [When to Use](#when-to-use)
3. [Anatomy](#anatomy)
4. [Variants](#variants)
5. [States](#states)
6. [Properties](#properties)
7. [Best Practices](#best-practices)
8. [Content Guidelines](#content-guidelines)
9. [Accessibility](#accessibility)
10. [Figma Implementation](#figma-implementation)
11. [Framer Implementation](#framer-implementation)
12. [Related Components](#related-components)

---

## Overview

Accordions are vertically stacked interactive headings that reveal or hide associated content sections. They allow users to toggle the visibility of content, helping to organize information and reduce visual complexity on a page.

### Key Features

- **2 states** (Open and Closed) for content visibility control
- **Customizable heading** text for section titles
- **Customizable body text** for expanded content
- **Chevron indicator** that rotates based on state
- **Built-in divider** for visual separation
- **Theme-aware colors** that adapt to light and dark modes
- **WCAG AA compliant** with proper contrast ratios

### Design Principles

**Progressive Disclosure**
Accordions reveal information progressively, allowing users to focus on what's relevant to them without being overwhelmed by all content at once.

**Scannable Structure**
The heading-based structure allows users to quickly scan available topics and choose what to explore, improving information architecture.

**Space Efficiency**
By collapsing content that isn't immediately needed, accordions help maintain clean layouts and reduce page length, especially on mobile devices.

---

## When to Use

### Use Accordions For:

- **FAQ sections** - Displaying questions with expandable answers
- **Settings panels** - Grouping related configuration options
- **Navigation menus** - Mobile navigation with nested items
- **Product details** - Specifications, shipping info, reviews
- **Form sections** - Breaking long forms into manageable groups
- **Documentation** - Organizing help content by topic

### Don't Use Accordions For:

- **Critical information** - Content users must see should be visible by default
- **Very short content** - If content is brief, just display it inline
- **Single items** - One accordion item defeats the purpose; use a different pattern
- **Primary navigation** - Main navigation should be immediately visible
- **Sequential content** - If users need to read in order, use tabs or steps instead

### Accordion vs. Other Patterns

**Accordions vs. Tabs:**
- Use accordions when users may need multiple sections open simultaneously
- Use accordions for mobile-friendly vertical layouts
- Use tabs when content sections are mutually exclusive
- Use tabs when horizontal space is available and categories are clear

**Accordions vs. Disclosure:**
- Accordions are part of a group with related sections
- Disclosure is a standalone expand/collapse pattern
- Use accordions when sections have equal importance
- Use disclosure for supplementary or optional content

**Accordions vs. Cards:**
- Use accordions when space is limited and content should be hidden by default
- Use cards when content summaries should be visible at all times
- Use accordions for text-heavy content
- Use cards for visual content or quick actions

---

## Anatomy

Understanding accordion anatomy helps maintain consistency and communicate with developers effectively.

```
┌─────────────────────────────────────────────────────┐
│  [A] Accordion Container                            │
│  ┌───────────────────────────────────────────────┐  │
│  │ [B] Content Area                              │  │
│  │  ┌──────────────────────────────────┐  [D]   │  │
│  │  │ [C] Heading                      │   ▼    │  │
│  │  │     Text Area                    │        │  │
│  │  │ [E] Body Text (when open)        │        │  │
│  │  └──────────────────────────────────┘        │  │
│  └───────────────────────────────────────────────┘  │
│  ─────────────────────────────────────────────────  │
│  [F] Divider                                        │
└─────────────────────────────────────────────────────┘
```

### Accordion Elements

**A. Accordion Container** (Required)
The outer wrapper that contains all accordion elements and defines the component boundaries.
- Layout: Vertical (VERTICAL)
- Width: Flexible (361px default)
- Padding: 0px all sides
- Item spacing: 0px

**B. Content Area** (Required)
The main interactive area containing the text and chevron icon.
- Layout: Horizontal (HORIZONTAL)
- Padding: 12px top, 12px bottom, 0px left, 0px right
- Item spacing: 8px between text and icon
- Height: 52px (closed), 84px (open)

**C. Heading** (Required)
The clickable title text that describes the section content.
- Typography: 20px, Semi Bold (600 weight)
- Color: Adapts to theme (Text/Primary)
- Width: Fills available space (329px in default layout)

**D. Chevron Icon** (Required)
Visual indicator showing the accordion's open/closed state.
- Size: 24px × 24px
- Icon: Chevron Down (closed) / Chevron Up (open)
- Color: Matches text color
- Position: Right-aligned in content area

**E. Body Text** (Visible when open)
The expandable content that appears when the accordion is opened.
- Typography: 16px, Regular (400 weight)
- Color: Adapts to theme (Text/Primary or Text/Secondary)
- Spacing: 8px below heading
- Width: Fills available space

**F. Divider** (Required)
A horizontal line that separates accordion items or marks the bottom boundary.
- Height: 1px
- Width: Full width (matches container)
- Color: Border/Primary or Border/Secondary
- Uses Divider component instance

---

## Variants

The Accordion component has two state-based variants that control content visibility.

### Closed State (Open=False)

**Visual Style:**
- Height: 53px (compact)
- Shows heading text only
- Chevron points downward
- Body text hidden

**When Shown:**
- Default state for all accordions
- User has not interacted with the accordion
- User has closed a previously open accordion

**Behavior:**
- Clicking expands to show body text
- Chevron rotates from down to up
- Height animates smoothly (in interactive implementations)

### Open State (Open=True)

**Visual Style:**
- Height: 85px (expanded)
- Shows heading and body text
- Chevron points upward
- Full content visible

**When Shown:**
- User has clicked to expand the accordion
- Can be set as default open in certain contexts

**Behavior:**
- Clicking collapses to hide body text
- Chevron rotates from up to down
- Height animates smoothly (in interactive implementations)

### State Dimensions Summary

| State | Height | Content Visible |
|-------|--------|-----------------|
| Closed | 53px | Heading only |
| Open | 85px | Heading + Body text |

---

## States

Accordions have interactive states beyond their open/closed variants.

### Default State

**Appearance:**
- Base colors from theme
- Normal cursor (pointer on hover area)
- Chevron in resting position

**When Shown:**
- Accordion is interactive and ready
- No user interaction occurring

### Hover State

**Appearance:**
- Background may show subtle highlight
- Cursor changes to pointer
- Indicates interactive element

**When Shown:**
- Mouse cursor is over the clickable area
- Provides feedback that accordion is interactive

**Implementation:**
- Apply hover background to Content Area
- Use `Background/Hover` token
- Transition: 200ms ease

### Focus State

**Appearance:**
- Visible focus ring around clickable area
- High contrast outline for keyboard users

**When Shown:**
- Accordion header receives keyboard focus
- User navigating via Tab key

**Implementation:**
- Focus indicator: 2px outline
- Color: `Border/Focus`
- Offset: 2px from content edge

### Disabled State

**Appearance:**
- Reduced opacity (40-50%)
- Cursor: not-allowed
- No hover or focus states

**When Shown:**
- Accordion interaction is temporarily unavailable
- Content is not accessible in current context

**Implementation:**
- Set `opacity: 0.5`
- Remove pointer events
- Add `aria-disabled="true"`

---

## Properties

Accordion properties define customization options available when using the component.

### Component Properties

**Open** (Variant Property)
- Type: Variant
- Values: `True`, `False`
- Default: `False`
- Controls whether content is expanded or collapsed

**Heading** (Text Property)
- Type: Text
- Default: "Heading"
- The title text displayed in the accordion header
- Should be concise and descriptive

**Text** (Text Property)
- Type: Text
- Default: "Text"
- The body content displayed when accordion is open
- Can contain longer descriptive content

### Property Combinations

**Default Accordion:**
- Open: False
- Heading: Custom title
- Text: Custom body content

**Pre-expanded Accordion:**
- Open: True
- Heading: Custom title
- Text: Custom body content

**Accordion Group:**
Multiple accordion instances stacked vertically, typically with only one open at a time (exclusive mode) or allowing multiple open (independent mode).

---

## Best Practices

### Do's

**✓ Use clear, descriptive headings**
Headings should accurately summarize the content within. Users should know what to expect before expanding.

**✓ Keep headings concise**
Aim for 3-8 words. Long headings are harder to scan and may wrap awkwardly on mobile.

**✓ Order sections logically**
Arrange accordion items in a meaningful sequence—by importance, alphabetically, or by user workflow.

**✓ Consider mobile-first**
Accordions excel on mobile where vertical space is premium. Ensure touch targets are adequate (44px minimum).

**✓ Provide visual feedback**
Use hover states and smooth animations to indicate interactivity and state changes.

**✓ Allow multiple open (when appropriate)**
If users may need to reference multiple sections, allow independent open/close behavior.

**✓ Keep the most common item open by default**
If one section is accessed more frequently, consider starting it expanded.

**✓ Use consistent styling**
All accordions in a group should have the same visual treatment—same padding, typography, and icon style.

### Don'ts

**✗ Don't hide critical information**
Important content that users must see should not require interaction to reveal.

**✗ Don't nest accordions**
Accordions within accordions create confusing navigation and poor accessibility.

**✗ Don't use for very short content**
If the body text is shorter than the heading, the expand/collapse pattern adds unnecessary friction.

**✗ Don't force sequential access**
If content must be read in order, use a wizard or stepped flow instead.

**✗ Don't overuse accordions**
Too many collapsed sections make content feel hidden and increases cognitive load.

**✗ Don't disable animations without reason**
Smooth transitions help users understand the state change; only disable for performance reasons.

**✗ Don't use inconsistent icons**
Always use chevron up/down or plus/minus consistently—don't mix patterns.

**✗ Don't forget the closed state**
Design for both states; ensure the closed state provides enough context about the content.

### Common Accordion Patterns

**FAQ Section:**
```
[▼] What is your return policy?
────────────────────────────────
[▼] How long does shipping take?
────────────────────────────────
[▲] Do you offer international shipping?
    Yes, we ship to over 50 countries...
────────────────────────────────
```
- Independent mode (multiple can be open)
- All start closed

**Product Details:**
```
[▲] Description
    This premium product features...
────────────────────────────────
[▼] Specifications
────────────────────────────────
[▼] Reviews (24)
────────────────────────────────
```
- First item open by default
- Independent or exclusive mode

**Settings Panel:**
```
[▼] Account Settings
────────────────────────────────
[▼] Privacy & Security
────────────────────────────────
[▼] Notifications
────────────────────────────────
```
- Exclusive mode (one at a time)
- All start closed

---

## Content Guidelines

### Writing Accordion Headings

**Be Specific**
Use headings that clearly describe the content:
- ✓ "What payment methods do you accept?"
- ✗ "Payments"

**Use Sentence Case**
Capitalize only the first word and proper nouns:
- ✓ "How do I reset my password?"
- ✗ "How Do I Reset My Password?"

**Keep It Scannable**
Users should understand the content topic at a glance:
- ✓ "Shipping and delivery times"
- ✗ "Information about how long it takes for your order to arrive"

**Be Consistent**
Use parallel structure across accordion items:
- ✓ "Creating an account" / "Managing your profile" / "Deleting your account"
- ✗ "How to create an account" / "Profile management" / "Delete account"

### Writing Body Content

**Front-load Key Information**
Put the most important information first:
- ✓ "Returns are accepted within 30 days. Items must be unused and in original packaging..."
- ✗ "Please note that in order to return an item, which is possible within 30 days..."

**Keep It Concise**
Accordion content should be scannable, not exhaustive:
- Aim for 2-4 sentences or a short list
- Link to detailed pages for more information
- Use bullet points for multiple items

**Match the Heading Promise**
The content must directly answer or expand on the heading:
- If heading is a question, answer it immediately
- If heading is a topic, provide relevant details only

### Handling Long Content

When accordion content is lengthy:
- Break into sub-sections with bold text or lists
- Consider splitting into multiple accordion items
- Provide a "Read more" link to full documentation
- Use progressive disclosure within the content

---

## Accessibility

### WCAG 2.1 AA Requirements

**Color Contrast:**
- Heading text must have 4.5:1 contrast ratio minimum
- Body text must have 4.5:1 contrast ratio minimum
- Chevron icon must have 3:1 contrast ratio
- Focus indicators must have 3:1 contrast ratio

**Scale's Accordion Contrast:**
- Heading text: ✓ Meets requirements via Text/Primary token
- Body text: ✓ Meets requirements via Text/Primary or Text/Secondary token
- Icons: ✓ Meets requirements via Icon/Primary token

### Keyboard Accessibility

**Focus Management:**
- Accordion headers must be focusable with Tab key
- Focus order should be logical (top to bottom)
- Focused headers must have visible focus indicator

**Activation:**
- Enter key toggles accordion open/closed
- Space key toggles accordion open/closed
- Arrow keys can navigate between accordion headers (optional enhancement)

**Focus After Toggle:**
- Focus remains on the header after toggling
- Content should not receive focus automatically
- Users can Tab into content when open

### Screen Reader Support

**ARIA Attributes:**

For accordion header (button):
```html
<button
  aria-expanded="false"
  aria-controls="accordion-content-1"
  id="accordion-header-1">
  Heading text
</button>
```

For accordion content:
```html
<div
  id="accordion-content-1"
  role="region"
  aria-labelledby="accordion-header-1"
  hidden>
  Body content...
</div>
```

**State Announcements:**
- Screen readers announce "expanded" or "collapsed" state
- Content region is announced when expanded
- Hidden content is not announced when collapsed

**Accordion Group (optional):**
```html
<div role="group" aria-label="Frequently Asked Questions">
  <!-- Accordion items -->
</div>
```

### Touch Target Size

**Minimum Requirements:**
- iOS: 44px × 44px
- Android: 48dp × 48dp
- WCAG: 44px × 44px

**Scale Accordion Touch Target:**
- Content area height: 52px (closed), 84px (open) ✓
- Full width clickable area ✓
- Meets all platform requirements

### Reduced Motion

**Respecting User Preferences:**
- Check `prefers-reduced-motion` media query
- Disable expand/collapse animations when requested
- State changes should still be instant and clear

```css
@media (prefers-reduced-motion: reduce) {
  .accordion {
    transition: none;
  }
}
```

---

## Figma Implementation

### Component Structure

The Accordion component in Figma is built using variables, component properties, and variants.

**Main Component:**
- Name: Accordion
- Path: Components → Accordion
- Variants: 2 (Open=True, Open=False)

### Using the Accordion Component

**To Insert an Accordion:**
1. Assets panel → Search "Accordion"
2. Drag onto canvas
3. Customize via properties panel

**Component Properties:**

**Open Property:**
- Type: Variant
- Options: True, False
- Default: False
- Controls expanded/collapsed state

**Heading Property:**
- Type: Text
- Default: "Heading"
- Edit to customize section title

**Text Property:**
- Type: Text
- Default: "Text"
- Edit to customize body content
- Only visible when Open=True

### Working with Variants

**To Switch States:**
1. Select accordion instance
2. Properties panel → Open dropdown
3. Choose True or False

**Interactive States:**
- Default (closed) for initial designs
- Open for showing expanded content
- Set interactions in prototype mode for toggle behavior

### Colors and Theming

**Variable Mode:**
Accordion colors automatically adapt between Light and Dark modes using Figma variables.

**To Switch Theme:**
1. Select accordion or containing frame
2. Right panel → Applied variables section
3. Mode dropdown → Select "Light" or "Dark"

**Color Tokens Used:**
- Heading: `Text/Primary`
- Body text: `Text/Primary` or `Text/Secondary`
- Chevron: `Icon/Primary`
- Divider: `Border/Primary`

### Creating Accordion Groups

**To Create a Group:**
1. Insert multiple Accordion instances
2. Select all accordions
3. Right-click → Add Auto Layout (or Shift+A)
4. Set spacing to 0 (accordions have built-in dividers)
5. Adjust frame width as needed

**Alignment:**
- Use vertical Auto Layout
- Set horizontal resizing to "Fill container"
- Accordions will stack naturally

### Prototyping Interactions

**To Add Toggle Behavior:**
1. Prototype mode
2. Select accordion instance (Open=False)
3. Add interaction: "On click"
4. Action: "Change to" → Select Open=True variant
5. Animation: Smart animate, 200ms ease

**To Add Close Behavior:**
1. Select accordion instance (Open=True)
2. Add interaction: "On click"
3. Action: "Change to" → Select Open=False variant
4. Animation: Smart animate, 200ms ease

**Exclusive Mode (one at a time):**
- Use component variables or frames with conditional states
- More complex setup requiring multiple frames

### Best Practices in Figma

**✓ DO:**
- Use component instances, never detach
- Leverage properties panel for customization
- Test in both Light and Dark modes
- Use Auto Layout for accordion groups
- Keep heading text concise
- Prototype both open and close interactions

**✗ DON'T:**
- Don't detach from component
- Don't manually resize accordions
- Don't use hard-coded colors
- Don't skip prototyping interactions
- Don't forget to design both states
- Don't nest accordions

---

## Framer Implementation

### Component Setup

The Accordion component in Framer is available as a published component from the Scale Design System library.

**To Add Scale Accordions:**
1. Assets panel → Insert from library
2. Search "Scale Design System"
3. Find Accordion component
4. Drag onto canvas

**Component Properties:**

All properties from Figma are available in Framer:
- Open: True, False
- Heading: Text input
- Text: Text input

### Theming in Framer

**Automatic Theme Detection:**
Framer accordions automatically adapt to the user's system color scheme:
- Light mode: Shows light theme colors
- Dark mode: Shows dark theme colors

**To Preview Themes:**
1. Toolbar → Theme toggle
2. Keyboard shortcut: ⌘⇧N
3. Switches canvas between light and dark

### Adding Interactivity

**Click Actions (Built-in):**
Framer accordions have built-in toggle behavior:
- Click to expand from closed state
- Click to collapse from open state
- Smooth animations included

**Custom Click Actions:**
1. Select accordion on canvas
2. Add interaction: "On Click"
3. Choose action:
   - Navigate to page
   - Open overlay
   - Set variable (for exclusive mode)

**Exclusive Mode:**
1. Create state variable: `openAccordionId`
2. On accordion click: Set `openAccordionId = thisAccordionId`
3. Accordion open state: `openAccordionId === thisAccordionId`

### Code Components (Advanced)

For custom implementations, use Framer's code components:

```jsx
import { Accordion } from "./canvas"

export default function FAQSection() {
  const [openId, setOpenId] = React.useState(null)

  const faqs = [
    { id: 1, heading: "What is your return policy?", text: "..." },
    { id: 2, heading: "How long does shipping take?", text: "..." },
  ]

  return (
    <div>
      {faqs.map(faq => (
        <Accordion
          key={faq.id}
          heading={faq.heading}
          text={faq.text}
          open={openId === faq.id}
          onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
        />
      ))}
    </div>
  )
}
```

### Responsive Behavior

**Mobile Optimization:**
- Accordions work naturally in vertical mobile layouts
- Full-width touch targets meet accessibility requirements
- Content reflows within accordion body

**Breakpoint Behavior:**
- Maintain same styling across breakpoints
- Consider default open state on desktop for key content
- Ensure text remains readable at all widths

### Best Practices in Framer

**✓ DO:**
- Use published Scale components
- Test in both light and dark themes
- Implement exclusive mode when appropriate
- Test on actual mobile devices
- Use Scale spacing tokens for accordion groups

**✗ DON'T:**
- Don't recreate accordions from scratch
- Don't hard-code colors
- Don't ignore theme switching
- Don't skip accessibility testing
- Don't nest accordions

### Publishing and Handoff

**For Developers:**
1. Framer generates production-ready code
2. Accordions use semantic HTML structure
3. ARIA attributes included automatically
4. Developer can inspect generated code

**Handoff Notes:**
- Accordion tokens documented in CSS variables
- States defined in component
- Spacing uses Scale spacing system
- Colors reference Scale color tokens

---

## Related Components

### Disclosure

**Description:**
A standalone expand/collapse pattern for supplementary content, not part of a group.

**When to Use:**
- Single expandable section
- "Show more" / "Show less" patterns
- Optional additional details

**Differences from Accordion:**
- Not part of a group
- Typically simpler styling
- Often inline with other content

### Tabs

**Description:**
Horizontal navigation pattern for switching between mutually exclusive content panels.

**When to Use:**
- Content sections are mutually exclusive
- Horizontal space is available
- Categories are clearly defined

**Differences from Accordion:**
- Horizontal layout
- Only one panel visible at a time
- Better for desktop interfaces

### Collapsible Card

**Description:**
A card component with expandable content area.

**When to Use:**
- Content has visual preview (image, icon)
- Expand/collapse is secondary to card content
- Mixed content types

**Differences from Accordion:**
- Has card styling (shadow, border-radius)
- May include images or icons
- Often used in isolation

### Navigation Menu (Collapsible)

**Description:**
Navigation pattern with expandable sub-menu sections.

**When to Use:**
- Mobile navigation with nested items
- Sidebar navigation
- Category-based site structure

**Differences from Accordion:**
- Contains links, not content
- Often multi-level
- Navigation-specific interactions

### Expandable List

**Description:**
A list where individual items can expand to show more details.

**When to Use:**
- Data lists with expandable rows
- Notifications with details
- Activity feeds with context

**Differences from Accordion:**
- List-item based structure
- May include actions
- Often data-driven

---

## Resources

- **Figma Component:** Scale Design System 3.0.0 → Components → Accordion
- **Framer Component:** Scale Design System Library → Accordion
- **Color Tokens:** [Scale Color Documentation](../foundations/scale-colors-v3.md)
- **Typography Tokens:** [Scale Typography Documentation](../foundations/scale-typography.md)
- **Spacing Tokens:** [Scale Spacing Documentation](../foundations/scale-spacing.md)
- **Icon System:** [Scale Icons Documentation](../foundations/scale-icons.md)
- **Accessibility Guidelines:** [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/)
- **WAI-ARIA Accordion Pattern:** [W3C Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

---

## Support

For questions about accordion usage, implementation, or customization:
- Create an issue in the Scale Design System repository
- Contact the design system team
- Review component-specific Figma documentation
- Consult the Scale Design System website

---

## Changelog

### Version 3.0.0 (Current)
- Accordion component with 2 state variants (Open/Closed)
- Customizable heading and body text properties
- Chevron icon indicator with state-based rotation
- Built-in divider component
- Theme-aware colors (light/dark modes)
- WCAG AA compliant contrast ratios
- Comprehensive Figma and Framer implementation
- Full accessibility documentation

---

*Built with care by the Scale Design System team*
