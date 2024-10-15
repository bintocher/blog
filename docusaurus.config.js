// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chernov blog - HOME',
  tagline: 'Qlik - Develop, Deploy, Discover',
  favicon: 'img/favicon.ico',
  url: 'https://github.com/',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // onUntruncatedBlogPosts: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ['docusaurus-plugin-yandex-metrica', { counterID: '98633687' }],
    'docusaurus-plugin-image-zoom',
    [ require.resolve('docusaurus-lunr-search'), {
      languages: ['en'], // language codes
      indexBaseUrl: true,
      highlightResult: true,
      maxHits: 10
    }],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          // sidebarPath: './sidebars.js',
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          postsPerPage: 10,
          blogTitle: 'Chernov blog',
          blogDescription: 'Qlik ambassador',
          blogSidebarCount: 10,
          // blogSidebarCount: 'ALL',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          // ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Chernov blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/', label: 'Home', position: 'left' },
          { to: '/tags', label: 'Tags', position: 'left' },
          { to: '/qlik-download', label: 'Download Qlik', position: 'left' },
          { type: 'dropdown', label: 'Telegram', position: 'left',
            items: [
              { to: 'https://t.me/qlikchat', label: '@qlikchat'},
              { to: 'https://t.me/chernovqlik', label: '@chernovqlik' },
              { to: 'https://t.me/qliknews', label: '@qliknews' },
            ]
          },
          { type: 'dropdown', label: 'Qlik links', position: 'right',
            items: [
              { to: 'https://qlik.com', label: 'Qlik.com' },
              { to: 'https://community.qlik.com', label: 'Community' },
              { to: 'https://qlik.dev', label: 'Qlik Developer portal' },
              { to: 'https://github.com/qlik-download/', label: 'Github releases' },
            ]
          },
          // {
          //   type: 'localeDropdown',position: 'right',
          // },
          {
            href: 'https://github.com/bintocher/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Main',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'Telegram',
                to: 'https://t.me/chernovdev',
              },
            ],
          },
        ],
        copyright: `Copyright © 2018 - ${new Date().getFullYear()} Chernov Stanislav`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),
};

export default config;
