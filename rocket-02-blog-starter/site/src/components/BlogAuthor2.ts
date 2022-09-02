import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('blog-author2')
export class BlogAuthor2 extends LitElement {
  @property({ type: String }) name = '';

  @property({ type: String }) href = '';

  static styles = [
    css`
      .author {
        margin-bottom: 0.75rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="author">
        <p><a href=${this.href}>${this.name}</a></p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'blog-author2': BlogAuthor2;
  }
}

// customElements.define('blog-author2', BlogAuthor2);
