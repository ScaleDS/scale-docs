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
})
