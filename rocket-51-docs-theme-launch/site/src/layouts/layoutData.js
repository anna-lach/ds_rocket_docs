import { html } from 'lit';

import { PageTree } from '@rocket/engine';

export const pageTree = new PageTree();
await pageTree.restore(new URL('../../pages/pageTreeData.rocketGenerated.json', import.meta.url));

const search = html`
  <rocket-search
    loading="hydrate:onFocus"
    class="search"
    json-url="/rocket-search-index.json"
    slot="search"
  ></rocket-search>
`;

export const layoutData = {
  siteName: 'SL Design System',
  pageTree,
  // head__42: html` <link rel="stylesheet" href="resolve:root/src/assets/styles.css" /> `,
  head__100: html`
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/themes/light.css"/>
    <link rel="stylesheet" href="../styles/global.css"/>
    <link rel="stylesheet" href="resolve:#src/styles/global.css"/>
  `,
  header__40: search,
  drawer__30: search,
/*  footerMenu: [
    {
      name: 'Discover',
      children: [
        {
          text: 'Blog',
          href: '/blog/',
        },
        {
          text: 'Help and Feedback',
          href: 'https://github.com/modernweb-dev/rocket/issues',
        },
      ],
    },
    {
      name: 'Follow',
      children: [
        {
          text: 'GitHub',
          href: 'https://github.com/modernweb-dev/rocket',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/modern_web_dev',
        },
        {
          text: 'Slack',
          href: 'https://join.slack.com/t/lit-and-friends/shared_invite/zt-llwznvsy-LZwT13R66gOgnrg12PUGqw',
        },
        {
          text: 'Discord',
          href: 'https://discord.gg/sTdpM2rkKJ',
        },
      ],
    },
    {
      name: 'Support',
      children: [
        {
          text: 'Sponsor',
          href: 'https://opencollective.com/modern-web',
        },
        {
          text: 'Contribute',
          href: 'https://github.com/modernweb-dev/rocket/blob/main/CONTRIBUTING.md',
        },
      ],
    },
  ],*/
};
