// @ts-check
const config = {
  title: 'Personal Motorcycle Mechanic',
  tagline: 'Learn by comparing three classic V-twin motorcycles',
  favicon: 'img/favicon.svg',

  url: 'https://weichtg3.github.io',
  baseUrl: '/motorcycle-mechanic-course/',

  organizationName: 'weichtg3',
  projectName: 'motorcycle-mechanic-course',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  
  presets: [[
    'classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: '/',
      },
      blog: false,
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ]],

  themeConfig: {
    navbar: {
      title: 'Motorcycle Mechanic',
      items: [
        {
          to: '/course-table-of-contents',
          label: 'Course TOC',
          position: 'left',
        },
        {
          to: '/reference/training-motorcycles',
          label: 'Training Bikes',
          position: 'left',
        },
        {
          href: 'https://github.com/weichtg3/motorcycle-mechanic-course',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Personal Motorcycle Mechanic. Educational use; verify factory specifications before service.`,
    },

    docs: {
      sidebar: {
        hideable: true,
      },
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
