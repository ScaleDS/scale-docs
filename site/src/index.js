import { setupSignup } from './signup.js'

// Extend header gradient when platform switch becomes sticky
const header = document.querySelector('sc-header')
const sentinel = document.getElementById('platform-switch-sentinel')
const stickyObserver = new IntersectionObserver(
  ([entry]) => { header.toggleAttribute('bg-extended', !entry.isIntersecting) },
  { threshold: 0, rootMargin: '0px' }
)
stickyObserver.observe(sentinel)

// Platform switch
const platformBtns = document.querySelectorAll('.platform-switch sc-button')
const framerContent = document.getElementById('content-framer')
const figmaContent = document.getElementById('content-figma')

platformBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    platformBtns.forEach(b => b.setAttribute('type', 'tertiary'))
    btn.setAttribute('type', 'secondary')
    if (btn.dataset.platform === 'framer') {
      framerContent.classList.add('active')
      figmaContent.classList.remove('active')
    } else {
      figmaContent.classList.add('active')
      framerContent.classList.remove('active')
    }
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
