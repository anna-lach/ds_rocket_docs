import {ChildListMenu, Menu, PageTree, SiteMenu} from '@rocket/engine';
import {html, nothing} from "lit";

export const pageTree = new PageTree();
await pageTree.restore(new URL('../../pages/pageTreeData.rocketGenerated.json', import.meta.url));

export class DSMenu extends Menu {
    /**
     * @param {NodeOfPage} tree
     * @returns {TemplateResult | nothing}
     */
    /*render(tree) {
        if (!pageTree.tree.children) {
            return nothing;
        }
        return html`
      <div>
        ${pageTree.tree.children.map(
            /!** @param {NodeOfPage} child *!/ child => html`
            <blog-post-preview .post=${child.model}></blog-post-preview>
          `,
        )}
      </div>
      <div>2222
          ${pageTree.tree.children.map(
                  /!** @param {NodeOfPage} child *!/ child => html`
            <div>${child[0]}></div>
          `,
          )}
      </div>
    `;
    }*/

    render(node) {
        if (!node.children) {
            return nothing;
        }
        return html`
      ${node.children
            .filter(/** @param {NodeOfPage} child */ child => !child.model.menuNoLink)
            .map(/** @param {NodeOfPage} child */ child => this.link(child))}
    `;
    }
}
