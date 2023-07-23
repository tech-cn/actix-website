const path = require('path');

module.exports = {
  title: 'Actix',
  tagline: 'Actix Web 是一个功能强大、实用、极速的 Rust Web 框架',
  url: 'https://actix.rs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'actix', // Usually your GitHub org/user name.
  projectName: 'actix-web', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Actix',
      logo: {
        alt: 'Actix Logo',
        src: 'img/logo-icon.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {
          to: 'community',
          activeBasePath: 'community',
          label: '社区',
          position: 'left',
        },
        {
          to: 'code',
          activeBasePath: 'code',
          label: '代码',
          position: 'left',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} The Actix Team`,
    },
    prism: {
      // dracula is closest to docs.rs, where keywords are highlighted
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['rust', 'toml'],
      defaultLanguage: 'rust'
    },
    colorMode: {
      respectPrefersColorScheme: true,
    }
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/actix/actix-website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
