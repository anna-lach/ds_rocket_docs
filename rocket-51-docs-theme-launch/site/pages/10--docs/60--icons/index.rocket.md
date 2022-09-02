```js server
/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = '10--docs/60--icons/index.rocket.md';
import { html, dsMenu, layout, setupUnifiedPlugins, components, openGraphLayout } from '../../recursive.data.js';
export { html, dsMenu, layout, setupUnifiedPlugins, components, openGraphLayout };
export async function registerCustomElements() {
  // server-only components
  customElements.define('rocket-social-link', await import('@rocket/components/social-link.js').then(m => m.RocketSocialLink));
  customElements.define('rocket-header', await import('@rocket/components/header.js').then(m => m.RocketHeader));
  customElements.define('rocket-card', await import('@rocket/components/card.js').then(m => m.RocketCard));
  customElements.define('rocket-main-docs', await import('@rocket/components/main-docs.js').then(m => m.RocketMainDocs));
  customElements.define('rocket-content-area', await import('@rocket/components/content-area.js').then(m => m.RocketContentArea));
  // hydrate-able components
  customElements.define('rocket-search', await import('@rocket/search/search.js').then(m => m.RocketSearch));
  customElements.define('rocket-drawer', await import('@rocket/components/drawer.js').then(m => m.RocketDrawer));
}
export const needsLoader = true;
/* END - Rocket auto generated - do not touch */

// import { SlButton } from '@shoelace-style/shoelace/dist/components/button/button.js';

export const menuLinkText = 'Icons';
export const subTitle = 'Welcome to the SL Design System...';
```

```js client
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import SlCard from '@shoelace-style/shoelace/dist/components/card/card.js';
```

# SL DS Icons

Welcome to the SL Design System.

## Icons list

## Icon component

<sl-button size="small">Click me</sl-button>

<sl-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

<strong>Mittens</strong><br />
This kitten is as cute as he is playful. Bring him home today!<br />
<small>6 weeks old</small>

  <div slot="footer">
    <sl-button variant="primary" pill>More Info</sl-button>
    <sl-rating></sl-rating>
  </div>
</sl-card>

## Figma usage

<rocket-card>
**test**
      <h4 slot="title">Life</h4>
      <p>
        As a scientist, I want to go to Mars and back to asteroids and the Moon because I'm a
        scientist. **But** I can tell you, I'm not so naive a scientist to think that the nation might
        not have geopolitical reasons for going into space.
      </p>
      <a slot="cta" class="cta" href="./life.rocket.md">Details</a>
    </rocket-card>
