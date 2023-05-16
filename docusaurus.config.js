// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Document - FluxBuilder - An Ultimate Approach For Flutter Mobile Apps",
  tagline: "",
  url: "https://docs.fluxbuilder.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "fluxbuilder-docs", // Usually your GitHub org/user name.
  projectName: "fluxbuilder-docs-customer", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'), //  `undefined` to create a fully autogenerated 
        }, 
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve(
              "./src/css/gifplayer.css"
              //"./node_modules/react-gif-player/dist/gifplayer.css" // this gave a big red compile warning which is seaming unrelated "  Replace Autoprefixer browsers option to Browserslist config..."
            ),
          ],
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
      },
    },
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // language: ["en", "fr"],
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "Document - FluxBuilder - An Ultimate Approach For Flutter Mobile Apps",
        },
      ],
//       gtag: {
//         trackingID: 'G-QKWPZEM3TZ',
//         anonymizeIP: true,
//       },
      sitemap: {
        // https://www.sitemaps.org/protocol.html#xmlTagDefinitions
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: [],
      },
      navbar: {
        title: "",
        hideOnScroll: true,
        logo: {
          alt: "Logo",
          src: "img/logo.png",
          srcDark: 'img/logo_dark.png',
          href: 'https://fluxbuilder.com',
          target: '_self',
        },

        items: [
          {
            href: 'https://fluxbuilder.com',
            position: 'right',
            className: 'header-link',
            label: 'Home',
          },
          {
            href: 'https://fluxbuilder.com/feature',
            position: 'right',
            className: 'header-link',
            label: 'Feature',
          },
          {
            href: 'https://fluxbuilder.com/agency',
            position: 'right',
            className: 'header-link',
            label: 'Agency',
          },
          {
            href: 'https://fluxbuilder.com/pricing',
            position: 'right',
            className: 'header-link',
            label: 'Pricing',
          },
          {
            href: 'https://docs.fluxbuilder.com',
            position: 'right',
            className: 'header-link active',
            label: 'Docs',
          },
          {
            href: 'https://fluxbuilder.com/pricing',
            position: 'right',
            className: 'header-link',
            label: 'Profile',
          },
          {
            type: 'search',
            position: 'left',
          },
        ],
      }, 
      
      footer: {
        style: 'light',
        logo: {
          alt: 'InspireUI',
          src: '/img/logo.png',
          href: 'https://www.fluxbuilder.com',
          width: 160,
          height: 36,
        },
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://inspireui.com">InspireUI Ltd.</a>`, // You can also put own HTML here
      }, 

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
