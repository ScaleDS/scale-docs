import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { icons } from 'feather-icons'
import { linkM } from '../styles/typography'
import './sc-logo'
import './sc-button'
import './sc-button-icon'

export interface NavLink {
  label: string
  href: string
}

type NavAlign = 'leading' | 'center' | 'trailing'

@customElement('sc-header')
export class ScHeader extends LitElement {
  @property({ type: Array, attribute: 'nav-links' }) navLinks: NavLink[] = []
  @property({ reflect: true, attribute: 'nav-align' }) navAlign: NavAlign = 'center'
  @property({ attribute: 'primary-label' }) primaryLabel = 'Buy now'
  @property({ attribute: 'primary-href' }) primaryHref = ''
  @property({ attribute: 'secondary-label' }) secondaryLabel = ''
  @property({ attribute: 'secondary-href' }) secondaryHref = ''
  @property({ type: Boolean, reflect: true, attribute: 'show-search' }) showSearch = false

  @state() private _theme: 'light' | 'dark' = 'light'
  @state() private _mobileOpen = false
  @state() private _scrolled = false

  private _onScroll = () => {
    this._scrolled = window.scrollY >= 120
  }

  connectedCallback() {
    super.connectedCallback()
    this._theme = (document.documentElement.dataset.theme as 'light' | 'dark') ?? 'light'
    window.addEventListener('scroll', this._onScroll, { passive: true })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('scroll', this._onScroll)
  }

  private _setTheme(theme: 'light' | 'dark') {
    this._theme = theme
    document.documentElement.dataset.theme = theme
    this.dispatchEvent(new CustomEvent('theme-change', { detail: { theme }, bubbles: true, composed: true }))
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      z-index: 100;
      width: 100%;
    }

    /* ---- Shell ---- */

    .header {
      display: flex;
      align-items: center;
      height: 96px;
      padding: 0 var(--sc-space-2xl);
    }

    .header-bg {
      position: absolute;
      inset: 0;
      z-index: -1;
      background: color-mix(in srgb, var(--sc-color-surface-l3) 80%, transparent);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      opacity: 0;
      transition: opacity 250ms ease;
      pointer-events: none;
    }

    .header-bg.scrolled {
      opacity: 1;
    }

    /* ---- Three-column grid for leading / nav / trailing ---- */

    .leading {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: var(--sc-space-xs);
    }

    /* nav-align variants */
    :host([nav-align='leading']) .header {
      justify-content: flex-start;
      gap: var(--sc-space-xl);
    }
    :host([nav-align='leading']) .leading { flex: 0 0 auto; }

    :host([nav-align='center']) .nav {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    :host([nav-align='trailing']) .nav {
      margin-left: auto;
      margin-right: var(--sc-space-l);
    }

    /* ---- Nav links ---- */

    .nav-link {
      ${linkM}
      display: flex;
      align-items: center;
      padding: var(--sc-space-m) var(--sc-space-l);
      border-radius: var(--sc-border-radius-s);
      color: var(--sc-color-text-secondary);
      text-decoration: none;
      transition: background 150ms ease, color 150ms ease;
    }

    .nav-link:hover {
      background: var(--sc-color-background-hover);
      color: var(--sc-color-text-primary);
    }

    .nav-link:active {
      background: var(--sc-color-background-pressed);
    }

    .nav-link[aria-current='page'] {
      color: var(--sc-color-text-primary);
      background: var(--sc-color-background-subtle);
    }

    /* ---- Trailing ---- */

    .trailing {
      display: flex;
      align-items: center;
      gap: var(--sc-space-l);
      margin-left: auto;
    }

    /* ---- Theme toggle ---- */

    .theme-toggle {
      position: relative;
      display: flex;
      align-items: center;
      background: var(--sc-color-background-subtle);
      border-radius: 999px;
      padding: 3px;
    }

    .theme-toggle-thumb {
      position: absolute;
      left: 3px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--sc-color-surface-l1);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: transform 250ms ease;
      pointer-events: none;
    }

    .theme-toggle-thumb.dark {
      transform: translateX(28px);
    }

    .theme-toggle button {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
      color: var(--sc-color-icon-subtle);
      transition: color 150ms ease;
    }

    .theme-toggle button svg {
      display: block;
      width: 14px;
      height: 14px;
    }

    .theme-toggle button.active {
      color: var(--sc-color-icon-primary);
    }

    /* ---- Actions ---- */

    .actions {
      display: flex;
      align-items: center;
      gap: var(--sc-space-s);
    }

    /* ---- Mobile toggle ---- */

    .mobile-toggle {
      display: none;
    }

    /* ---- Mobile drawer ---- */

    .mobile-drawer {
      display: none;
      flex-direction: column;
      gap: var(--sc-space-xs);
      padding: var(--sc-space-s) var(--sc-space-m) var(--sc-space-l);
      background: color-mix(in srgb, var(--sc-color-surface-l3) 80%, transparent);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .mobile-drawer.open {
      display: flex;
    }

    .mobile-drawer .nav-link {
      padding: var(--sc-space-m) var(--sc-space-l);
    }

    .mobile-actions {
      display: flex;
      flex-direction: column;
      gap: var(--sc-space-s);
      padding-top: var(--sc-space-m);
      margin-top: var(--sc-space-xs);
      border-top: 1px solid var(--sc-color-border-subtle);
    }

    /* ---- Responsive ---- */

    @media (max-width: 810px) {
      .header {
        height: 64px;
        padding: 0 20px;
      }

      .nav {
        display: none;
      }

      :host([nav-align='center']) .nav {
        position: static;
        transform: none;
      }

      .theme-toggle {
        display: none;
      }

      .actions {
        display: none;
      }

      .mobile-toggle {
        display: inline-flex;
      }
    }
  `

  private _toggleMobile() {
    this._mobileOpen = !this._mobileOpen
  }

  private _closeMobile() {
    this._mobileOpen = false
  }

  private _sunIcon() {
    return unsafeHTML(icons['sun'].toSvg({ width: 14, height: 14 }))
  }

  private _moonIcon() {
    return unsafeHTML(icons['moon'].toSvg({ width: 14, height: 14 }))
  }

  render() {
    return html`
      <header class="header">
        <div class="header-bg ${this._scrolled ? 'scrolled' : ''}"></div>

        <div class="leading">
          <sc-logo size="m"></sc-logo>
        </div>

        <nav class="nav" aria-label="Main">
          ${this.navLinks.map(link => html`
            <a class="nav-link" href=${link.href}>${link.label}</a>
          `)}
        </nav>

        <div class="trailing">

          <div class="theme-toggle" role="group" aria-label="Theme">
            <span class="theme-toggle-thumb ${this._theme}"></span>
            <button
              class=${this._theme === 'light' ? 'active' : ''}
              @click=${() => this._setTheme('light')}
              aria-pressed=${this._theme === 'light'}
              title="Light mode"
            >${this._sunIcon()}</button>
            <button
              class=${this._theme === 'dark' ? 'active' : ''}
              @click=${() => this._setTheme('dark')}
              aria-pressed=${this._theme === 'dark'}
              title="Dark mode"
            >${this._moonIcon()}</button>
          </div>

          ${this.showSearch ? html`
            <sc-button-icon type="tertiary" size="l" icon="search" label="Search"></sc-button-icon>
          ` : null}

          <div class="actions">
            ${this.secondaryLabel ? html`
              <sc-button type="secondary" size="m"
                @click=${() => this.secondaryHref && (window.location.href = this.secondaryHref)}>
                ${this.secondaryLabel}
              </sc-button>
            ` : null}
            ${this.primaryLabel ? html`
              <sc-button type="primary" size="m"
                @click=${() => this.primaryHref && (window.location.href = this.primaryHref)}>
                ${this.primaryLabel}
              </sc-button>
            ` : null}
          </div>

          <sc-button-icon
            class="mobile-toggle"
            type="tertiary-mono"
            size="s"
            icon=${this._mobileOpen ? 'x' : 'menu'}
            label=${this._mobileOpen ? 'Close menu' : 'Open menu'}
            @click=${this._toggleMobile}
          ></sc-button-icon>

        </div>
      </header>

      <div class="mobile-drawer ${this._mobileOpen ? 'open' : ''}" aria-hidden=${!this._mobileOpen}>
        <nav aria-label="Mobile navigation">
          ${this.navLinks.map(link => html`
            <a class="nav-link" href=${link.href} @click=${this._closeMobile}>${link.label}</a>
          `)}
        </nav>
        ${(this.primaryLabel || this.secondaryLabel) ? html`
          <div class="mobile-actions">
            ${this.secondaryLabel ? html`
              <sc-button type="secondary" size="m"
                @click=${() => { this.secondaryHref && (window.location.href = this.secondaryHref); this._closeMobile() }}>
                ${this.secondaryLabel}
              </sc-button>
            ` : null}
            ${this.primaryLabel ? html`
              <sc-button type="primary" size="m"
                @click=${() => { this.primaryHref && (window.location.href = this.primaryHref); this._closeMobile() }}>
                ${this.primaryLabel}
              </sc-button>
            ` : null}
          </div>
        ` : null}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-header': ScHeader
  }
}
