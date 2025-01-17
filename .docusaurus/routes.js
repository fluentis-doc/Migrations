import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Migration/__docusaurus/debug',
    component: ComponentCreator('/Migration/__docusaurus/debug', 'da2'),
    exact: true
  },
  {
    path: '/Migration/__docusaurus/debug/config',
    component: ComponentCreator('/Migration/__docusaurus/debug/config', '27f'),
    exact: true
  },
  {
    path: '/Migration/__docusaurus/debug/content',
    component: ComponentCreator('/Migration/__docusaurus/debug/content', 'cfa'),
    exact: true
  },
  {
    path: '/Migration/__docusaurus/debug/globalData',
    component: ComponentCreator('/Migration/__docusaurus/debug/globalData', '8ab'),
    exact: true
  },
  {
    path: '/Migration/__docusaurus/debug/metadata',
    component: ComponentCreator('/Migration/__docusaurus/debug/metadata', 'c53'),
    exact: true
  },
  {
    path: '/Migration/__docusaurus/debug/registry',
    component: ComponentCreator('/Migration/__docusaurus/debug/registry', 'b9f'),
    exact: true
  },
  {
    path: '/Migration/__docusaurus/debug/routes',
    component: ComponentCreator('/Migration/__docusaurus/debug/routes', '960'),
    exact: true
  },
  {
    path: '/Migration/blog',
    component: ComponentCreator('/Migration/blog', 'aea'),
    exact: true
  },
  {
    path: '/Migration/blog/2019/05/28/hola',
    component: ComponentCreator('/Migration/blog/2019/05/28/hola', '8c7'),
    exact: true
  },
  {
    path: '/Migration/blog/archive',
    component: ComponentCreator('/Migration/blog/archive', '7f3'),
    exact: true
  },
  {
    path: '/Migration/markdown-page',
    component: ComponentCreator('/Migration/markdown-page', 'cfa'),
    exact: true
  },
  {
    path: '/Migration/docs',
    component: ComponentCreator('/Migration/docs', '29d'),
    routes: [
      {
        path: '/Migration/docs',
        component: ComponentCreator('/Migration/docs', '183'),
        routes: [
          {
            path: '/Migration/docs',
            component: ComponentCreator('/Migration/docs', 'ff5'),
            routes: [
              {
                path: '/Migration/docs/2021/home/Custom2021',
                component: ComponentCreator('/Migration/docs/2021/home/Custom2021', '2be'),
                exact: true
              },
              {
                path: '/Migration/docs/2021/home/Customizations2021',
                component: ComponentCreator('/Migration/docs/2021/home/Customizations2021', 'dfd'),
                exact: true
              },
              {
                path: '/Migration/docs/2021/home/CustomOneByOne',
                component: ComponentCreator('/Migration/docs/2021/home/CustomOneByOne', 'd50'),
                exact: true
              },
              {
                path: '/Migration/docs/2021/home/Standard2021',
                component: ComponentCreator('/Migration/docs/2021/home/Standard2021', 'ae1'),
                exact: true
              },
              {
                path: '/Migration/docs/intro',
                component: ComponentCreator('/Migration/docs/intro', '608'),
                exact: true
              },
              {
                path: '/Migration/docs/release-notes/intro',
                component: ComponentCreator('/Migration/docs/release-notes/intro', 'a85'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Migration/',
    component: ComponentCreator('/Migration/', '8eb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
