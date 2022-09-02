```js server
/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'blog/hello-world.rocket.md';
import { html, components } from '../recursive.data.js';
import { layout } from './local.data.js';
export { html, layout, components };
export async function registerCustomElements() {
  // server-only components
  // prettier-ignore
  customElements.define('blog-author', await import('rocket-blog-starter/components/BlogAuthor').then(m => m.BlogAuthor));
  // prettier-ignore
  customElements.define('blog-author2', await import('rocket-blog-starter/components/BlogAuthor2').then(m => m.BlogAuthor2));
  // prettier-ignore
  customElements.define('blog-post', await import('rocket-blog-starter/components/BlogPost').then(m => m.BlogPost));
}
/* END - Rocket auto generated - do not touch */

export const menuExclude = true;

export const title = 'Hello world!';
export const publishDate = '12 Sep 2021';
export const author = 'Thomas Allmer (@daKmoR)';
export const authorHref = 'https://twitter.com/daKmoR';
export const value = 128;
export const description = 'Just a Hello World Post!';
```

hey

This is so cool!

Do variables work ${value \* 2}?

<br>

---

<br>

There are multiple Co-Authors:

- <blog-author name="Another Author" href="https://twitter.com/daKmoR"></blog-author>
- <blog-author2 name="Another Author" href="https://twitter.com/daKmoR"><blog-author2>
