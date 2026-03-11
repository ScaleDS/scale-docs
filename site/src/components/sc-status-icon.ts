import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import info16 from '../assets/icons/status-info-16.svg?raw'
import info24 from '../assets/icons/status-info-24.svg?raw'
import info32 from '../assets/icons/status-info-32.svg?raw'
import warning16 from '../assets/icons/status-warning-16.svg?raw'
import warning24 from '../assets/icons/status-warning-24.svg?raw'
import warning32 from '../assets/icons/status-warning-32.svg?raw'
import error16 from '../assets/icons/status-error-16.svg?raw'
import error24 from '../assets/icons/status-error-24.svg?raw'
import error32 from '../assets/icons/status-error-32.svg?raw'
import success16 from '../assets/icons/status-success-16.svg?raw'
import success24 from '../assets/icons/status-success-24.svg?raw'
import success32 from '../assets/icons/status-success-32.svg?raw'

type Status = 'info' | 'warning' | 'error' | 'success'
type IconSize = 16 | 24 | 32

const icons: Record<Status, Record<IconSize, string>> = {
  info:    { 16: info16,    24: info24,    32: info32 },
  warning: { 16: warning16, 24: warning24, 32: warning32 },
  error:   { 16: error16,   24: error24,   32: error32 },
  success: { 16: success16, 24: success24, 32: success32 },
}

@customElement('sc-status-icon')
export class ScStatusIcon extends LitElement {
  @property({ reflect: true }) status: Status = 'info'
  @property({ type: Number, reflect: true }) size: IconSize = 24

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    svg { display: block; }
  `

  render() {
    const svg = icons[this.status]?.[this.size] ?? icons.info[24]
    return html`${unsafeHTML(svg)}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-status-icon': ScStatusIcon
  }
}
