import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Migrations/__docusaurus/debug',
    component: ComponentCreator('/Migrations/__docusaurus/debug', 'de2'),
    exact: true
  },
  {
    path: '/Migrations/__docusaurus/debug/config',
    component: ComponentCreator('/Migrations/__docusaurus/debug/config', 'ab3'),
    exact: true
  },
  {
    path: '/Migrations/__docusaurus/debug/content',
    component: ComponentCreator('/Migrations/__docusaurus/debug/content', '359'),
    exact: true
  },
  {
    path: '/Migrations/__docusaurus/debug/globalData',
    component: ComponentCreator('/Migrations/__docusaurus/debug/globalData', '709'),
    exact: true
  },
  {
    path: '/Migrations/__docusaurus/debug/metadata',
    component: ComponentCreator('/Migrations/__docusaurus/debug/metadata', '9ef'),
    exact: true
  },
  {
    path: '/Migrations/__docusaurus/debug/registry',
    component: ComponentCreator('/Migrations/__docusaurus/debug/registry', 'eeb'),
    exact: true
  },
  {
    path: '/Migrations/__docusaurus/debug/routes',
    component: ComponentCreator('/Migrations/__docusaurus/debug/routes', 'dc7'),
    exact: true
  },
  {
    path: '/Migrations/blog',
    component: ComponentCreator('/Migrations/blog', '72d'),
    exact: true
  },
  {
    path: '/Migrations/blog/2019/05/28/hola',
    component: ComponentCreator('/Migrations/blog/2019/05/28/hola', 'ce4'),
    exact: true
  },
  {
    path: '/Migrations/blog/archive',
    component: ComponentCreator('/Migrations/blog/archive', '164'),
    exact: true
  },
  {
    path: '/Migrations/markdown-page',
    component: ComponentCreator('/Migrations/markdown-page', '937'),
    exact: true
  },
  {
    path: '/Migrations/docs',
    component: ComponentCreator('/Migrations/docs', 'f87'),
    routes: [
      {
        path: '/Migrations/docs',
        component: ComponentCreator('/Migrations/docs', '77f'),
        routes: [
          {
            path: '/Migrations/docs',
            component: ComponentCreator('/Migrations/docs', 'f01'),
            routes: [
              {
                path: '/Migrations/docs/2021/home/CustomEnvironmentMigrationFrom2021To2023',
                component: ComponentCreator('/Migrations/docs/2021/home/CustomEnvironmentMigrationFrom2021To2023', '72f'),
                exact: true
              },
              {
                path: '/Migrations/docs/2021/home/Personalizzazioni',
                component: ComponentCreator('/Migrations/docs/2021/home/Personalizzazioni', 'f95'),
                exact: true
              },
              {
                path: '/Migrations/docs/2021/home/Standard2021',
                component: ComponentCreator('/Migrations/docs/2021/home/Standard2021', '161'),
                exact: true
              },
              {
                path: '/Migrations/docs/intro',
                component: ComponentCreator('/Migrations/docs/intro', '4fa'),
                exact: true
              },
              {
                path: '/Migrations/docs/release-notes/intro',
                component: ComponentCreator('/Migrations/docs/release-notes/intro', 'c78'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Migrations/',
    component: ComponentCreator('/Migrations/', '2a0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
