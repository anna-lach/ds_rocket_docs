import {ChildListMenu, Menu, PageTree, SiteMenu} from '@rocket/engine';
import {html, nothing} from "lit";

export const pageTree = new PageTree();
await pageTree.restore(new URL('../../pages/pageTreeData.rocketGenerated.json', import.meta.url));

export class DSMenu {
    /**
     * @param {NodeOfPage} tree
     * @returns {TemplateResult | nothing}
     */
    render(tree) {
        if (!pageTree.tree.children) {
            return nothing;
        }
        return html`
      <div>
        ${pageTree.tree.children.map(
            /** @param {NodeOfPage} child */ child => html`
            <blog-post-preview .post=${child.model}></blog-post-preview>
          `,
        )}
      </div>
    `;
    }
}
