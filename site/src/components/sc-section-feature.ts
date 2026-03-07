import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('sc-section-feature')
export class ScSectionFeature extends LitElement {
  @property({ attribute: 'image-src' }) imageSrc = ''
  @property({ attribute: 'image-src-dark' }) imageSrcDark = ''
  @property({ attribute: 'image-alt' }) imageAlt = ''
  @property({ type: Boolean, reflect: true }) reverse = false

  @state() private _theme: 'light' | 'dark' = 'light'

  private _onThemeChange = (e: Event) => {
    this._theme = (e as CustomEvent).detail.theme
  }

  connectedCallback() {
    super.connectedCallback()
    this._theme = (document.documentElement.dataset.theme as 'light' | 'dark') ?? 'light'
    window.addEventListener('theme-change', this._onThemeChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('theme-change', this._onThemeChange)
  }

  static styles = css`
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .container {
      width: 100%;
      max-width: 1440px;
      padding: var(--sc-space-2xl) var(--sc-space-l);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--sc-space-2xl);
    }

    :host([reverse]) .container {
      flex-direction: row-reverse;
    }

    /* ---- Content column ---- */

    .content {
      flex: 1;
      min-width: 370px;
      display: flex;
      flex-direction: column;
      gap: var(--sc-space-2xl);
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: var(--sc-space-l);
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sc-space-m);
    }

    /* ---- Image column ---- */

    .image-wrap {
      flex: 1;
      min-width: 370px;
      position: relative;
      aspect-ratio: 1;
      border-radius: 16px;
      overflow: hidden;
      background: var(--sc-color-background-neutral);
    }

    .image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .image-dark {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 250ms ease;
    }

    .image-dark.active {
      opacity: 1;
    }

    /* ---- Responsive ---- */

    @media (max-width: 810px) {
      .content {
        min-width: 0;
        width: 100%;
      }

      .image-wrap {
        min-width: 0;
        width: 100%;
      }
    }

    @media (max-width: 402px) {
      .container {
        flex-direction: column;
        gap: var(--sc-space-2xl);
      }

      .content {
        flex: none;
        width: 100%;
        gap: 0;
      }

      .image-wrap {
        width: 100%;
      }
    }
  `

  render() {
    const imageCol = html`
      <div class="image-wrap">
        ${this.imageSrc ? html`<img src=${this.imageSrc} alt=${this.imageAlt} />` : null}
        ${this.imageSrcDark ? html`
          <img class="image-dark ${this._theme === 'dark' ? 'active' : ''}" src=${this.imageSrcDark} alt=${this.imageAlt} />
        ` : null}
      </div>
    `

    const contentCol = html`
      <div class="content">
        <div class="text">
          <slot name="heading"></slot>
          <slot name="subtext"></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `

    return html`
      <div class="container">
        ${contentCol}
        ${imageCol}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-section-feature': ScSectionFeature
  }
}
