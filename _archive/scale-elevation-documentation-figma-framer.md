# Elevation System for Figma & Framer

A practical guide to implementing elevation, surface levels, and shadows in Figma and Framer, addressing platform-specific limitations and workarounds.

---

## 🎯 Platform Overview

### What This Guide Covers
This documentation adapts the Scale Design System's elevation principles for **Figma** and **Framer** users, acknowledging the unique constraints and capabilities of each platform.

### Key Platform Differences

| Feature | Figma | Framer |
|---------|-------|--------|
| **Global Variables** | ✅ Available (with limitations) | ❌ Not available |
| **Design Tokens** | ✅ Via plugins (Tokens Studio, etc.) | ❌ Not available |
| **Component Variants** | ✅ Full support | ✅ Full support |
| **Style References** | ✅ Semantic styles | ✅ Style presets |
| **Theme Switching** | ✅ Via variables/plugins | ❌ Manual implementation |
| **System-wide Updates** | ✅ Possible with tokens | ❌ Component-by-component |

---

## 🏗️ **Framer Implementation**

### Framer's Foundation Limitations

Based on Framer's architecture, here's how elevation works:

#### **The Core Problem: No Global Variables**
Framer **does not support global variables** that span across components or entire projects. This means:

- ❌ No single source of truth for elevation values
- ❌ Cannot define "Shadow/L3" once and reuse everywhere
- ❌ Updating elevation system-wide requires manual component updates
- ❌ No automatic pairing of surface colors with shadows

#### **How Framer Handles Foundations**
From the Framer context:
> *"Framer does not have a traditional 'foundations layer' like you'd find in Figma Tokens, CSS variables, or a coded design system. Instead, foundations are handled in a **distributed, property-based way** across styles, components, and layouts."*

---

### Framer Workarounds for Elevation

#### **Method 1: Component Variants (Recommended)**

Create a base component with elevation variants:

```plaintext
Component: "Elevated Card"
├─ Master Component
│  ├─ Variant: Level="L1" → Surface/L1 + Shadow/L1
│  ├─ Variant: Level="L2" → Surface/L2 + Shadow/L2
│  ├─ Variant: Level="L3" → Surface/L3 + Shadow/L3
│  └─ Variant: Level="L4" → Surface/L4 + Shadow/L4
```

**Implementation Steps:**
1. Create a rectangle or frame for the surface
2. Apply the base surface color (white for light mode)
3. Add the shadow effect using Framer's shadow properties
4. Create variants for each elevation level (L1-L6)
5. Expose elevation level as a property control

**Pros:**
- ✅ Reusable across projects
- ✅ Consistent application
- ✅ Easy to update (update master, instances follow)

**Cons:**
- ❌ Still requires manual updates if shadow values change
- ❌ No automatic dark mode adaptation

#### **Method 2: Style Presets**

Save elevation combinations as reusable styles:

```plaintext
Styles:
├─ Elevation/L1 (White + Shadow L1)
├─ Elevation/L2 (White + Shadow L2)
├─ Elevation/L3 (White + Shadow L3)
└─ Elevation/L4 (White + Shadow L4)
```

**Implementation Steps:**
1. Style a frame with surface color + shadow
2. Save as "Elevation/L1" in Framer's style manager
3. Apply to other frames as needed

**Pros:**
- ✅ Quick application
- ✅ Visual consistency

**Cons:**
- ❌ Styles are static references (not dynamic)
- ❌ No semantic meaning
- ❌ Manual updates required

#### **Method 3: Local Variables Within Components**

Use Framer's **local variables** for component-specific elevation:

```plaintext
Component: "Card"
├─ Local Variable: "elevation" = "L2"
├─ Surface: Uses local variable to determine color
└─ Shadow: Uses local variable to determine shadow value
```

**Implementation Steps:**
1. Create component with local variables
2. Define elevation level as a variable
3. Use variable to set surface color and shadow
4. Expose as property control for instances

**Pros:**
- ✅ Flexible within component context
- ✅ Can create interactive elevation changes

**Cons:**
- ❌ Variables are local only (not system-wide)
- ❌ Cannot enforce consistency across components

---

### Framer Best Practices for Elevation

#### **1. Create an Elevation Component Library**

Create a dedicated component file with all elevation levels:

```plaintext
File: "Elevation System"
├─ Component: "Surface/L1" (with Shadow/L1)
├─ Component: "Surface/L2" (with Shadow/L2)
├─ Component: "Surface/L3" (with Shadow/L3)
└─ Component: "Surface/L4" (with Shadow/L4)
```

**Usage:**
- Import this file into your main project
- Use "Insert from Library" to add elevation components
- Update the library file to update all instances

#### **2. Document Elevation in Component Descriptions**

Add clear documentation to each component:

```plaintext
Component: "Card / L2"
Description: "Use for cards on page. 
Surface: White (light) / #1a1a1a (dark)
Shadow: 0px 4px 8px rgba(0,0,0,0.1)
Use Case: Product cards, info boxes"
```

#### **3. Use Property Controls for Elevation**

Expose elevation as a property control:

```plaintext
Property: "Elevation Level"
Type: Dropdown
Options: L1, L2, L3, L4, L5, L6
Default: L1
```

This allows users to switch elevation levels without breaking the system.

#### **4. Create Theme Variants**

Since Framer doesn't support automatic theme switching:

```plaintext
Component: "Card"
├─ Variant: Theme="Light" → White surface
├─ Variant: Theme="Dark" → #1a1a1a surface
└─ Both variants have corresponding shadow levels
```

---

### Framer Elevation Patterns

#### **Pattern 1: Card on Page**
```plaintext
Component: "Card"
├─ Frame: 400x200
├─ Background: White (or #1a1a1a for dark)
├─ Shadow: 0px 4px 8px rgba(0,0,0,0.1)
└─ Border Radius: 8px
```

#### **Pattern 2: Modal Dialog**
```plaintext
Component: "Modal"
├─ Overlay: Semi-transparent black
├─ Content Frame: White (or #262626 for dark)
├─ Shadow: 0px 8px 16px rgba(0,0,0,0.1)
└─ Border Radius: 12px
```

#### **Pattern 3: Dropdown Menu**
```plaintext
Component: "Dropdown"
├─ Frame: Auto width/height
├─ Background: White (or #1a1a1a for dark)
├─ Shadow: 0px 4px 8px rgba(0,0,0,0.1)
└─ Border Radius: 6px
```

---

### Framer Limitations & Solutions

#### **Problem: No Automatic Dark Mode**
**Solution:** Create separate component variants for light and dark themes.

#### **Problem: Shadow Values Not Centralized**
**Solution:** Create a "Shadow Reference" component with all shadow values documented.

#### **Problem: Cannot Enforce Elevation Hierarchy**
**Solution:** Use component descriptions and naming conventions to guide users.

#### **Problem: Manual Updates Required**
**Solution:** Use component libraries and document update procedures.

---

## 🎨 **Figma Implementation**

### Figma's Foundation Advantages

Figma has better support for design tokens and global variables:

#### **Method 1: Local Variables (Figma Variables)**

Figma's Variables feature allows global elevation tokens:

```plaintext
Variables:
├─ Surface/L0: #ffffff (Light) / #000000 (Dark)
├─ Surface/L1: #ffffff (Light) / #0d0d0d (Dark)
├─ Surface/L2: #ffffff (Light) / #1a1a1a (Dark)
├─ Shadow/L1: 0px 2px 4px rgba(0,0,0,0.1)
├─ Shadow/L2: 0px 4px 8px rgba(0,0,0,0.1)
└─ Elevation/L1: [Surface/L1, Shadow/L1]
```

**Implementation Steps:**
1. Create variables for each surface level
2. Create variables for each shadow value
3. Create compound variables for elevation combinations
4. Apply variables to frames and components

**Pros:**
- ✅ Global updates possible
- ✅ Theme switching support
- ✅ Semantic naming
- ✅ Can be exported to code

#### **Method 2: Styles with Variable References**

Figma Styles can reference variables:

```plaintext
Styles:
├─ Surface/L1 (Variable: Surface/L1)
├─ Shadow/L1 (Variable: Shadow/L1)
└─ Elevation/L1 (Combines both)
```

**Pros:**
- ✅ Visual style management
- ✅ Easy application via style picker

#### **Method 3: Tokens Studio Plugin**

For advanced token management:

```plaintext
Tokens Studio:
├─ elevation.l1.surface: {value: #ffffff, type: color}
├─ elevation.l1.shadow: {value: 0px 2px 4px, type: shadow}
└─ elevation.l1: {value: {surface: elevation.l1.surface, shadow: elevation.l1.shadow}}
```

**Pros:**
- ✅ Industry standard token format
- ✅ Can sync with code repositories
- ✅ Supports complex token relationships

---

### Figma Best Practices for Elevation

#### **1. Use Variables for Global Control**

Create a comprehensive variable system:

```plaintext
Collection: "Elevation System"
├─ Surface/L0 → Light: #ffffff, Dark: #000000
├─ Surface/L1 → Light: #ffffff, Dark: #0d0d0d
├─ Surface/L2 → Light: #ffffff, Dark: #1a1a1a
├─ Shadow/L1 → 0px 2px 4px rgba(0,0,0,0.1)
├─ Shadow/L2 → 0px 4px 8px rgba(0,0,0,0.1)
└─ Elevation/L1 → [Surface/L1, Shadow/L1]
```

#### **2. Create Component Libraries**

Build reusable components with property controls:

```plaintext
Component: "Card"
├─ Property: "Elevation" (L1, L2, L3, L4)
├─ Property: "Theme" (Light, Dark)
└─ Property: "Border Radius" (Small, Medium, Large)
```

#### **3. Document with Component Descriptions**

Add detailed descriptions:

```plaintext
Component: "Card / L2 / Light"
Description: "Elevation Level 2 for light theme.
Use: Product cards, info boxes
Surface: #ffffff
Shadow: 0px 4px 8px rgba(0,0,0,0.1)
Accessibility: Ensure sufficient contrast with content"
```

#### **4. Use Auto Layout with Constraints**

Ensure responsive behavior:

```plaintext
Frame: "Card Container"
├─ Auto Layout: Vertical
├─ Padding: 16px
├─ Spacing: 8px between children
└─ Constraints: Center + Scale
```

---

### Figma Elevation Patterns

#### **Pattern 1: Variable-Based Elevation**
```plaintext
Frame: "Card"
├─ Fill: Variable → Surface/L2
├─ Effects: Variable → Shadow/L2
└─ Corner Radius: 8px
```

#### **Pattern 2: Style-Based Elevation**
```plaintext
Frame: "Card"
├─ Fill Style: "Surface/L2"
├─ Effect Style: "Shadow/L2"
└─ Corner Radius: 8px
```

#### **Pattern 3: Component with Variants**
```plaintext
Component Set: "Card"
├─ Variant: Elevation=L1, Theme=Light
├─ Variant: Elevation=L2, Theme=Light
├─ Variant: Elevation=L1, Theme=Dark
└─ Variant: Elevation=L2, Theme=Dark
```

---

## 🔄 **Cross-Platform Workflow**

### From Figma to Framer

#### **Step 1: Export Tokens from Figma**
- Use Tokens Studio to export JSON
- Extract surface colors and shadow values
- Document in a shared format

#### **Step 2: Create Framer Components**
- Recreate elevation levels as component variants
- Use exported values for shadows
- Create theme variants manually

#### **Step 3: Document the Gap**
- Acknowledge Framer's limitations
- Provide clear usage guidelines
- Create component libraries for consistency

### Maintaining Consistency

#### **Shared Documentation**
Create a master reference document:

```plaintext
Elevation Reference:
├─ Level 1: Surface #ffffff, Shadow "0px 2px 4px..."
├─ Level 2: Surface #ffffff, Shadow "0px 4px 8px..."
└─ Level 3: Surface #ffffff, Shadow "0px 8px 16px..."
```

#### **Naming Conventions**
Use consistent naming across platforms:

- **Figma:** `Surface/L1`, `Shadow/L1`, `Elevation/L1`
- **Framer:** `Surface L1`, `Shadow L1`, `Elevation L1`

#### **Component Mapping**
Document which Figma components map to Framer components:

```plaintext
Figma: "Card / L2 / Light" → Framer: "Card / L2"
Figma: "Modal / L3 / Dark" → Framer: "Modal / L3 (Dark)"
```

---

## 📋 **Quick Reference by Platform**

### Framer Quick Guide

| Use Case | Component | Variant | Properties |
|----------|-----------|---------|------------|
| **Card** | Card | Level=L2 | Theme=Light/Dark |
| **Modal** | Modal | Level=L3 | Overlay=Yes/No |
| **Dropdown** | Dropdown | Level=L2 | Direction=Down/Up |
| **Tooltip** | Tooltip | Level=L4 | Position=Top/Bottom |

**Key Limitations to Remember:**
- ❌ No global variables
- ❌ Manual theme switching
- ❌ Component-by-component updates
- ✅ Use component libraries for consistency

### Figma Quick Guide

| Use Case | Method | Tokens/Styles | Variables |
|----------|--------|---------------|-----------|
| **Card** | Variables | Surface/L1 + Shadow/L1 | Yes |
| **Modal** | Styles | Elevation/L3 | Yes |
| **Dropdown** | Tokens | elevation.l2 | Yes |
| **Tooltip** | Variables | Surface/L4 + Shadow/L4 | Yes |

**Key Advantages:**
- ✅ Global variables available
- ✅ Theme switching support
- ✅ Token export capabilities
- ✅ Style reference system

---

## 🎯 **Platform-Specific Recommendations**

### For Framer Users

**When to Use:**
- Building marketing sites and landing pages
- Small to medium design systems
- Projects where visual iteration matters more than strict governance

**Workarounds:**
1. **Create component libraries** for all elevation levels
2. **Use property controls** to expose elevation options
3. **Document everything** in component descriptions
4. **Create theme variants** manually
5. **Accept the limitations** and work within them

**Avoid:**
- ❌ Trying to replicate token systems
- ❌ Expecting automatic theme updates
- ❌ Large-scale design systems requiring strict governance

### For Figma Users

**When to Use:**
- Large design systems
- Multi-theme products
- Teams requiring strict design governance
- Handoff to development teams

**Best Practices:**
1. **Use Variables** for global elevation tokens
2. **Create component sets** with property controls
3. **Use Tokens Studio** for advanced token management
4. **Document token relationships** for developers
5. **Export tokens** for code implementation

**Advantages:**
- ✅ Can create true design token system
- ✅ Supports complex theming
- ✅ Better for large-scale systems
- ✅ Easier developer handoff

---

## 📚 **Additional Resources**

### Framer-Specific
- **Framer Components Guide:** Use variants for elevation states
- **Stack Variables:** For spacing within elevated components
- **Property Controls:** Expose elevation as editable properties

### Figma-Specific
- **Figma Variables:** Create global elevation tokens
- **Tokens Studio Plugin:** Advanced token management
- **Component Properties:** Create flexible elevation components

### Cross-Platform
- **Shared Documentation:** Maintain reference between platforms
- **Naming Conventions:** Use consistent naming across tools
- **Component Libraries:** Build reusable libraries in both platforms

---

## ✅ **Summary**

### Framer
- **Approach:** Component-first, distributed foundations
- **Limitations:** No global variables, manual updates
- **Solution:** Component variants, style presets, local variables
- **Best For:** Marketing sites, small systems, visual iteration

### Figma
- **Approach:** Token-first, global variables
- **Advantages:** Full token support, theme switching, export capabilities
- **Solution:** Variables, styles, Tokens Studio
- **Best For:** Large systems, multi-theme products, strict governance

### Key Takeaway
**Framer** requires working within its limitations by baking foundations into components. **Figma** allows true token-based systems with global control. Choose your approach based on project needs and platform constraints.

---

**Last Updated:** January 2026  
**Design System:** Scale v1.0  
**Platforms:** Figma, Framer