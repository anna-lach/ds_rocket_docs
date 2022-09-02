```js server
/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = '10--docs/50--components/10--button.rocket.md';
import { html, dsMenu, layout, setupUnifiedPlugins, components, openGraphLayout } from '../../recursive.data.js';
export { html, dsMenu, layout, setupUnifiedPlugins, components, openGraphLayout };
export async function registerCustomElements() {
  // server-only components
  customElements.define('rocket-social-link', await import('@rocket/components/social-link.js').then(m => m.RocketSocialLink));
  customElements.define('rocket-header', await import('@rocket/components/header.js').then(m => m.RocketHeader));
  customElements.define('rocket-main-docs', await import('@rocket/components/main-docs.js').then(m => m.RocketMainDocs));
  customElements.define('rocket-content-area', await import('@rocket/components/content-area.js').then(m => m.RocketContentArea));
  // hydrate-able components
  customElements.define('rocket-search', await import('@rocket/search/search.js').then(m => m.RocketSearch));
  customElements.define('rocket-drawer', await import('@rocket/components/drawer.js').then(m => m.RocketDrawer));
}
export const needsLoader = true;
/* END - Rocket auto generated - do not touch */

export const menuLinkText = 'Button';
export const subTitle = 'Button component';
```

```js client
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
```

# Button

Button component examples.

## Buttons list

## Default

```
<sl-button variant="default">More Info</sl-button>
```

<sl-button variant="default">More Info</sl-button>

## Primary

```
<sl-button variant="primary">More Info</sl-button>
```

<sl-button variant="primary">More Info</sl-button>
