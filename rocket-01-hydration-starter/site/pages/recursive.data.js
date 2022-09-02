import { html } from 'lit';
import { LayoutSidebar } from '@rocket/launch';
import {layoutData} from "../src/layouts/layoutData.js";

export { html };

export const components = {
  'hello-wave': '#components/HelloWave.js::HelloWave',
  'hello-typer': '#components/HelloTyper.js::HelloTyper',
  'my-counter': '#components/MyCounter.js::MyCounter',
  //             👆 we are using a private import defined in the package json that maps
  //             "#components/*": "./site/src/components/*"
  //             (see https://nodejs.org/api/packages.html#packages_imports)
};

// export const layout = new LayoutSidebar();

export const layout = new LayoutSidebar({
    ...layoutData,
    description:
        'Rocket enables everyone to code a website. Use an existing theme or create your own. Be fast by server rendering web components with little to no JavaScript.',
});

export const layout2 = data => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
    </head>
    <body>
      ${data.content()}
    </body>
  </html>
`;
