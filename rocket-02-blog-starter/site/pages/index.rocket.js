/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'index.rocket.js';
import { html, components } from './recursive.data.js';
export { html, components };
export async function registerCustomElements() {
  // server-only components
  // prettier-ignore
  customElements.define('blog-post-preview', await import('rocket-blog-starter/components/BlogPostPreview').then(m => m.BlogPostPreview));
}
/* END - Rocket auto generated - do not touch */

export const layout = false;

import {ChildListMenu, PageTree, SiteMenu} from '@rocket/engine';
import { nothing } from 'lit';
import { baseHead } from '../src/parts/baseHead.js';
import {DSMenu} from "../src/layouts/DSMenu.js";

export const title = 'SL Design System';
export const description = 'Welcome to Sanoma Learning Design System.';
export const permalink = 'https://example.com/';

export const pageTree = new PageTree();
await pageTree.restore(new URL('./pageTreeData.rocketGenerated.json', import.meta.url));

export const dsMenu = new DSMenu();

class BlogMenu {
  /**
   * @returns {TemplateResult | nothing}
   */
  render() {
    if (!this.currentNode || !this.currentNode.children) {
      return nothing;
    }
    return html`
      <div>
        ${this.currentNode.children.map(
          /** @param {NodeOfPage} child */ child => html`
            <blog-post-preview .post=${child.model}></blog-post-preview>
          `,
        )}
      </div>
      ${pageTree.renderMenu(new SiteMenu(), sourceRelativeFilePath)}
      <div>${pageTree.renderMenu(new ChildListMenu(), sourceRelativeFilePath)}</div>
    `;
  }
}

export default () => html`
  <html lang="en">
    <head>
      ${baseHead({ title, description, permalink })}
      <style>
        header {
          width: 100%;
          height: 100%;
          background-color: var(--theme-bg-offset);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu {
            /*display: flex;*/
            /*flex-direction: column;*/
            height: 100vh;
            width: 260px;
            position: fixed;
            inset: 0;
            background: #041c52;
        }
        
        .menu-nav {
            display: flex;
            flex-direction: column;
        }
        
        .main-menu {
            color: red;
        }

        .lvl-2 {
            margin-left: 20px;
        }

        .content {
          margin-top: 4rem;
          margin-bottom: 8rem;
        }

        .content :global(main > * + *) {
          margin-top: 1rem;
        }

        .intro {
          padding-bottom: 4rem;
          margin-bottom: 2rem;
          border-bottom: 4px solid var(--theme-divider);
        }

        .intro > * {
          margin: 0;
        }

        .latest {
          font-size: 2.5rem;
          font-weight: 700;
        }
      </style>
    </head>

    <body>
      <!--<blog-header></blog-header>
      <blog-menu></blog-menu>
      <div class="menu">Place for the menu</div>-->
      <web-menu name="site" class="menu">
          <nav aria-label="site" class="menu-nav">
              <a href="/about/">About</a>
              <a href="/blog/" aria-current="page">Blog</a>
              <a href="/getting-started/" aria-current="page">Getting started</a>
              <a href="/what-is-new/" aria-current="page">What's new</a>
          </nav>
      </web-menu>
      <div class="wrapper">
        <main class="content">
            <div class="main-menu">${pageTree.renderMenu(new ChildListMenu(), sourceRelativeFilePath)}</div>
            <div>test1 ${dsMenu.render(pageTree.tree)}</div>
          <section class="intro">
            <h1 class="latest">${title}</h1>
            <p>${description}</p>
          </section>
          <section aria-label="Blog post list">
            ${pageTree.renderMenu(new BlogMenu(), 'blog/index.rocket.js')}
              <div>
                  ${pageTree.tree.children.map(
                          /** @param {NodeOfPage} child */ child => html`
                <div>${child.model.title}</div>
                `,
                  )}
              </div>
          </section>
        </main>
      </div>
      <!--<site-footer></site-footer>-->
    </body>
  </html>
`;
