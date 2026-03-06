import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { heading4xl, textXl } from '../styles/typography'
import './sc-badge'
import './sc-button'
import './sc-input'

@customElement('sc-hero')
export class ScHero extends LitElement {
  @property() badge = ''
  @property() heading = ''
  @property() subtext = ''
  @property({ attribute: 'primary-label' }) primaryLabel = ''
  @property({ attribute: 'primary-href' }) primaryHref = ''
  @property({ attribute: 'secondary-label' }) secondaryLabel = ''
  @property({ attribute: 'secondary-href' }) secondaryHref = ''
  @property({ attribute: 'image-src' }) imageSrc = ''
  @property({ attribute: 'image-src-dark' }) imageSrcDark = ''
  @property({ attribute: 'image-alt' }) imageAlt = ''
  @property({ type: Boolean, attribute: 'show-form' }) showForm = false
  @property({ attribute: 'form-placeholder' }) formPlaceholder = 'Enter your email'
  @property({ attribute: 'form-button-label' }) formButtonLabel = 'Subscribe'

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
      display: block;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 90vh;
    }

    /* ---- Background image ---- */

    .image {
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
      transition: opacity 250ms ease;
    }

    .image-dark {
      opacity: 0;
    }

    .image-dark.active {
      opacity: 1;
    }

    /* ---- Bottom gradient overlay ---- */

    .gradient {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 160px;
      background: linear-gradient(to top, var(--sc-color-surface-l0) 0%, rgb(from var(--sc-color-surface-l0) r g b / 0) 100%);
      z-index: 0;
      pointer-events: none;
    }

    /* ---- Layout ---- */

    .container {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      height: 100%;
      max-width: 1440px;
      margin: 0 auto;
      padding: var(--sc-space-2xl) var(--sc-space-l);
    }

    /* ---- Content column ---- */

    .content {
      display: flex;
      flex-direction: column;
      min-width: 320px;
      max-width: 688px;
      width: 100%;
    }

    /* ---- Typography ---- */

    .heading {
      ${heading4xl}
      color: var(--sc-color-text-primary);
      margin-top: var(--sc-space-l);
    }

    .subtext {
      ${textXl}
      color: var(--sc-color-text-secondary);
      margin-top: var(--sc-space-xl);
    }

    /* ---- Actions ---- */

    .actions {
      display: flex;
      gap: var(--sc-space-m);
      flex-wrap: wrap;
      margin-top: var(--sc-space-2xl);
    }

    /* ---- Email form ---- */

    .form {
      display: flex;
      gap: var(--sc-space-m);
      flex-wrap: wrap;
      align-items: flex-end;
      width: 370px;
      max-width: 100%;
      margin-top: var(--sc-space-2xl);
    }

    .form sc-input {
      flex: 1;
      min-width: 200px;
    }

    /* ---- Responsive ---- */

    @media (max-width: 810px) {
      .container {
        padding: var(--sc-space-4xl) 20px;
        align-items: flex-end;
      }

      .content {
        min-width: 0;
        max-width: 100%;
      }

      .content {
        min-width: 0;
        max-width: 100%;
      }
    }
  `

  render() {
    return html`
      ${this.imageSrc ? html`
        <img class="image" src=${this.imageSrc} alt=${this.imageAlt} />
        ${this.imageSrcDark ? html`
          <img class="image image-dark ${this._theme === 'dark' ? 'active' : ''}" src=${this.imageSrcDark} alt=${this.imageAlt} />
        ` : null}
        <div class="gradient"></div>
      ` : null}

      <div class="container">
        <div class="content">

          ${this.badge ? html`
            <sc-badge>${this.badge}</sc-badge>
          ` : null}

          ${this.heading ? html`
            <h1 class="heading">${this.heading}</h1>
          ` : null}

          ${this.subtext ? html`
            <p class="subtext">${this.subtext}</p>
          ` : null}

          ${(this.primaryLabel || this.secondaryLabel) ? html`
            <div class="actions">
              ${this.primaryLabel ? html`
                <sc-button type="primary" size="l"
                  @click=${() => this.primaryHref && (window.location.href = this.primaryHref)}>
                  ${this.primaryLabel}
                </sc-button>
              ` : null}
              ${this.secondaryLabel ? html`
                <sc-button type="secondary" size="l"
                  @click=${() => this.secondaryHref && (window.location.href = this.secondaryHref)}>
                  ${this.secondaryLabel}
                </sc-button>
              ` : null}
            </div>
          ` : null}

          ${this.showForm ? html`
            <div class="form">
              <sc-input
                type="email"
                label="Email address"
                placeholder=${this.formPlaceholder}
              ></sc-input>
              <sc-button type="primary">${this.formButtonLabel}</sc-button>
            </div>
          ` : null}

          <slot></slot>

        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-hero': ScHero
  }
}
