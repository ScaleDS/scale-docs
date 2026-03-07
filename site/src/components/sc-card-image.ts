import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

type CardImageVariant = 'default' | 'fill'

@customElement('sc-card-image')
export class ScCardImage extends LitElement {
  @property({ reflect: true }) variant: CardImageVariant = 'default'
  @property({ attribute: 'image-src' }) imageSrc = ''
  @property({ attribute: 'image-src-dark' }) imageSrcDark = ''
  @property({ attribute: 'image-alt' }) imageAlt = ''

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
    :host {
      display: block;
      height: 100%;
    }

    .card {
      background: var(--sc-color-surface-l1);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: var(--sc-shadow-l1);
    }

    /* ---- Default variant ---- */

    :host([variant='default']) .image-wrap {
      width: 100%;
      aspect-ratio: 16 / 9;
      flex-shrink: 0;
      position: relative;
      background: var(--sc-color-background-neutral);
    }

    :host([variant='default']) .image-wrap img {
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

    :host([variant='default']) .content {
      padding: var(--sc-space-xl);
      display: flex;
      flex-direction: column;
      gap: var(--sc-space-s);
    }

    /* ---- Fill variant ---- */

    /*
     * Fill: content (heading + description) sits at the top;
     * image fills the remaining vertical space below.
     */

    :host([variant='fill']) .content {
      padding: var(--sc-space-xl);
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: var(--sc-space-s);
    }

    :host([variant='fill']) .image-wrap {
      flex: 1;
      min-height: 0;
      position: relative;
      background: var(--sc-color-background-neutral);
    }

    :host([variant='fill']) .image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

  `

  render() {
    const imageWrap = html`
      <div class="image-wrap">
        <img src=${this.imageSrc} alt=${this.imageAlt} />
        ${this.imageSrcDark ? html`
          <img class="image-dark ${this._theme === 'dark' ? 'active' : ''}" src=${this.imageSrcDark} alt=${this.imageAlt} />
        ` : null}
      </div>
    `

    const content = html`
      <div class="content">
        <slot name="heading"></slot>
        <slot name="description"></slot>
        <slot></slot>
      </div>
    `

    return html`
      <div class="card">
        ${this.variant === 'fill' ? html`${content}${imageWrap}` : html`${imageWrap}${content}`}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-card-image': ScCardImage
  }
}
