import {html, css, LitElement, nothing} from 'lit';
import { shared } from '../styles/shared.js';
import { PageTree } from '@rocket/engine';

export const pageTree = new PageTree();
await pageTree.restore(new URL('./pageTreeData.rocketGenerated.json', import.meta.url));

export class BlogMenu extends LitElement {
  /**
   * @param {NodeOfPage} tree
   * @returns {TemplateResult | nothing}
   */
  static properties = {
    name: { type: String },
    href: { type: String },
  };

  render() {
    /*if (!this.currentNode || !this.currentNode.children) {
      return nothing;
    }*/
    return html`
      ${pageTree.all}
      <div>${pageTree.tree}</div>
      <div>
        ${this.currentNode?.children.map(
        /** @param {NodeOfPage} child */ child => html`
            <blog-post-preview .post=${child.model}></blog-post-preview>
          `,
    )}
      </div>
    `;
  }

/*  render() {
    return html`
      <div class="wrapper">
        <article>
          aaa
          <h1>
            <a href="/">
              <img src="resolve:@rocket/engine/assets/logo.svg" class="logo" />
              <span>My Blog</span>
              <span>test</span>
            </a>
          </h1>
        </article>
      </div>
    `;
  }*/

  static styles = [
    shared,
    css`
      header {
        padding-top: 1rem;
        padding-bottom: 1rem;
        height: 5rem;
      }
      article {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .header-subitem {
        display: flex;
        flex-grow: 0;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
        color: var(--theme-text-lighter);
        font-size: initial;
        padding: 0.5rem;
      }
      .header-subitem:hover {
        color: var(--theme-accent);
      }
      .header-subitem svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      @media (max-width: 32em) {
        .header-subitem {
          display: none;
        }
      }

      h1 {
        margin: 0;
        font-size: 1.5rem;
        max-width: 100%;
        display: flex;
        flex-grow: 1;
      }

      img {
        width: 2.5rem;
        height: 2.5rem;
      }

      span {
        margin-left: 0.5rem;
      }

      h1 a {
        text-decoration: none;
        display: inline-flex;
      }
    `,
  ];
}

customElements.define('blog-menu', BlogMenu);
