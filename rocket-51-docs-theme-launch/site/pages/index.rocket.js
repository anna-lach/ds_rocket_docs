/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'index.rocket.js';
import { html, setupUnifiedPlugins, components, openGraphLayout } from './recursive.data.js';
export { html, setupUnifiedPlugins, components, openGraphLayout };
export async function registerCustomElements() {
  // server-only components
  customElements.define('rocket-social-link', await import('@rocket/components/social-link.js').then(m => m.RocketSocialLink));
  customElements.define('rocket-header', await import('@rocket/components/header.js').then(m => m.RocketHeader));
  customElements.define('launch-home', await import('@rocket/launch/home.js').then(m => m.LaunchHome));
  customElements.define('rocket-content-area', await import('@rocket/components/content-area.js').then(m => m.RocketContentArea));
  // hydrate-able components
  customElements.define('rocket-search', await import('@rocket/search/search.js').then(m => m.RocketSearch));
  customElements.define('rocket-drawer', await import('@rocket/components/drawer.js').then(m => m.RocketDrawer));
}
export const needsLoader = true;
/* END - Rocket auto generated - do not touch */

import { LayoutHome } from '@rocket/launch';
import { layoutData } from '#src/layouts/layoutData.js';
import { DSMenu } from '#src/layouts/DSMenu.js';

export const description =
  'Rocket enables everyone to code a website. Use an existing theme or create your own. Be fast by server rendering web components with little to no JavaScript.';
export const subTitle = 'Everyone can code a website';

export const dsMenu = new DSMenu();

export const layout = new LayoutHome({
  ...dsMenu,
  ...layoutData,
  titleWrapperFn: () => 'Welcome to SL Design System',
  background: '/home-background.svg',
});

export default () => html`
  <rocket-content-area>
    <launch-home background-image>
      <h1 slot="title">
        <picture>
          <!-- <source srcset="../src/assets/rocket-logo-dark-with-text-below.svg" media="(prefers-color-scheme: dark)"> -->
          <!-- <source srcset="../src/assets/rocket-logo-dark-with-text.svg" media="(prefers-color-scheme: dark) and (min-width: 1024px)"> -->
          <source
            srcset="../src/assets/rocket-logo-light-with-text.svg"
            media="(min-width: 1024px)"
            width="250"
            height="67.87"
          />
<!--          <img
            src="../src/assets/rocket-logo-light-with-text-below.svg"
            alt="Rocket"
            width="250"
            height="257.92"
          />-->
        </picture>
      </h1>
      <p slot="slogan">Everyone can code a website.</p>
      <a slot="cta" role="listitem" href="/docs/">Getting Started</a>
      <!--<a slot="cta" role="listitem" href="/docs/setup/getting-started/">Getting Started_old</a>
      <a slot="cta" role="listitem" href="/presets/">Browse Themes</a>-->
      <h2 slot="reason-header">SL Design System</h2>

      <img src="../src/assets/home-background.svg" slot="background" role="presentation" />

      <style type="text/css">
        /* workaround until Firefox supports width/height on source tags https://bugzilla.mozilla.org/show_bug.cgi?id=1694741 */
        @media (min-width: 1024px) {
          h1 img {
            height: 67.87px;
          }
        }
      </style>
    </launch-home>
  </rocket-content-area>
`;
