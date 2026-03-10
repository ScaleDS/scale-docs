import { setupSignup } from './signup.js'

// Platform switch
const platformBtns = document.querySelectorAll('.platform-switch sc-button')
const framerContent = document.getElementById('content-framer')
const figmaContent = document.getElementById('content-figma')

platformBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const incoming = btn.dataset.platform === 'framer' ? framerContent : figmaContent
    const outgoing = btn.dataset.platform === 'framer' ? figmaContent : framerContent
    if (incoming.classList.contains('active')) return

    platformBtns.forEach(b => b.setAttribute('type', 'tertiary'))
    btn.setAttribute('type', 'secondary')

    outgoing.classList.add('fade-out')
    outgoing.classList.remove('active')
    setTimeout(() => {
      outgoing.classList.remove('fade-out')
      incoming.classList.add('active')
      requestAnimationFrame(() => {
        incoming.classList.add('fade-in')
        incoming.addEventListener('animationend', () => incoming.classList.remove('fade-in'), { once: true })
      })
    }, 100)
  })
})

// Hide help text on signup input
customElements.whenDefined('sc-input').then(() => {
  document.querySelectorAll('sc-section-signup sc-input').forEach(el => {
    el.showHelpText = false
    el.showLabel = false
  })
})

// Signup form
customElements.whenDefined('sc-button').then(() => setupSignup())

// Reveal page once all components are defined
Promise.all([
  'sc-header', 'sc-hero', 'sc-section-content', 'sc-section-bento',
  'sc-section-feature', 'sc-section-pricing', 'sc-section-faq',
  'sc-section-signup', 'sc-card-image', 'sc-card-pricing',
  'sc-badge', 'sc-row', 'sc-button', 'sc-accordion',
  'sc-input', 'sc-footer',
].map(n => customElements.whenDefined(n))).then(() => {
  document.body.style.opacity = '1'

  // Preload off-screen images (opposite theme variants + Figma section)
  const isDark = document.documentElement.dataset.theme === 'dark'
  const alt = isDark ? 'light' : 'dark'
  const preload = [
    `images/hero/Scale - Framer - Hero - ${isDark ? 'Light' : 'Dark'}.jpg`,
    `images/framer/sc-image-framer-bento-components-${alt}.png`,
    `images/framer/sc-image-framer-bento-variables-${alt}.png`,
    `images/framer/sc-image-framer-bento-icons-${alt}.png`,
    `images/framer/sc-image-framer-bento-sections-${alt}.png`,
    `images/framer/sc-image-framer-feature-variables-${alt}.png`,
    `images/framer/sc-image-framer-feature-typography-${alt}.png`,
    `images/framer/sc-image-framer-feature-components-${alt}.png`,
    `images/framer/sc-image-framer-feature-sections-${alt}.png`,
    `images/framer/sc-image-framer-feature-templates-${alt}.png`,
    'images/figma/sc-image-figma-bento-components-light.png',
    'images/figma/sc-image-figma-bento-components-dark.png',
    'images/figma/sc-image-figma-bento-variables-light.png',
    'images/figma/sc-image-figma-bento-variables-dark.png',
    'images/figma/sc-image-figma-bento-icons-light.png',
    'images/figma/sc-image-figma-bento-icons-dark.png',
    'images/figma/sc-image-figma-bento-modules-light.png',
    'images/figma/sc-image-figma-bento-modules-dark.png',
    'images/figma/sc-image-figma-feature-liquid-glass-light.png',
    'images/figma/sc-image-figma-feature-liquid-glass-dark.png',
    'images/figma/sc-image-figma-feature-scp-plugin.png',
    'images/figma/sc-image-figma-feature-color-variables.png',
    'images/figma/sc-image-figma-feature-type-variables.png',
    'images/figma/sc-image-figma-feature-components-light.png',
    'images/figma/sc-image-figma-feature-components-dark.png',
    'images/figma/sc-image-figma-feature-modules-light.png',
    'images/figma/sc-image-figma-feature-modules-dark.png',
  ]
  preload.forEach(src => { new Image().src = src })
})
