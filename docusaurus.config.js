// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Public Chernov blog',
  tagline: 'Qlik - Develop, Deploy, Discover',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bintocher', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            // createFeedItems: async (params) => {
            //   const {blogPosts, defaultCreateFeedItems, ...rest} = params;
            //   return defaultCreateFeedItems({
            //     // keep only the 10 most recent blog posts in the feed
            //     blogPosts: blogPosts.filter((item, index) => index < 10),
            //     ...rest,
            //   });
            // },
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          postsPerPage: 2,
          blogTitle: 'Chernov blog',
          blogDescription: 'Blog',
          blogSidebarCount: 5,
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
        title: 'Public Chernov blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        // items: [
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'tutorialSidebar',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   // {to: '/blog', label: 'Blog', position: 'left'},
        //   // {
        //   //   href: 'https://github.com/facebook/docusaurus',
        //   //   label: 'GitHub',
        //   //   position: 'right',
        //   // },
        // ],
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
        //   // {
        //   //   title: 'Community',
        //   //   items: [
        //   //     {
        //   //       label: 'Stack Overflow',
        //   //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //   //     },
        //   //     {
        //   //       label: 'Discord',
        //   //       href: 'https://discordapp.com/invite/docusaurus',
        //   //     },
        //   //     {
        //   //       label: 'Twitter',
        //   //       href: 'https://twitter.com/docusaurus',
        //   //     },
        //   //   ],
        //   // },
        //   // {
        //   //   title: 'More',
        //   //   items: [
        //   //     {
        //   //       label: 'Blog',
        //   //       to: '/blog',
        //   //     },
        //   //     {
        //   //       label: 'GitHub',
        //   //       href: 'https://github.com/facebook/docusaurus',
        //   //     },
        //   //   ],
        //   // },
        // ],
        copyright: `Copyright © 2018 - ${new Date().getFullYear()} Chernov Stanislav`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
