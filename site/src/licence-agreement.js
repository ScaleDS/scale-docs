import { setupSignup } from './signup.js'

// Signup form
customElements.whenDefined('sc-button').then(() => setupSignup())

// Reveal page once all components are defined
Promise.all([
  'sc-header', 'sc-section-signup', 'sc-footer', 'sc-input', 'sc-button',
].map(n => customElements.whenDefined(n))).then(() => {
  document.body.style.opacity = '1'
})

// Hide help text on signup input
customElements.whenDefined('sc-input').then(() => {
  document.querySelectorAll('sc-section-signup sc-input').forEach(el => {
    el.showHelpText = false
    el.showLabel = false
  })
})
