import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Arm/__docusaurus/debug',
    component: ComponentCreator('/Arm/__docusaurus/debug', '3c7'),
    exact: true
  },
  {
    path: '/Arm/__docusaurus/debug/config',
    component: ComponentCreator('/Arm/__docusaurus/debug/config', 'fae'),
    exact: true
  },
  {
    path: '/Arm/__docusaurus/debug/content',
    component: ComponentCreator('/Arm/__docusaurus/debug/content', 'cef'),
    exact: true
  },
  {
    path: '/Arm/__docusaurus/debug/globalData',
    component: ComponentCreator('/Arm/__docusaurus/debug/globalData', '0d8'),
    exact: true
  },
  {
    path: '/Arm/__docusaurus/debug/metadata',
    component: ComponentCreator('/Arm/__docusaurus/debug/metadata', 'd7d'),
    exact: true
  },
  {
    path: '/Arm/__docusaurus/debug/registry',
    component: ComponentCreator('/Arm/__docusaurus/debug/registry', '61b'),
    exact: true
  },
  {
    path: '/Arm/__docusaurus/debug/routes',
    component: ComponentCreator('/Arm/__docusaurus/debug/routes', '1f7'),
    exact: true
  },
  {
    path: '/Arm/blog',
    component: ComponentCreator('/Arm/blog', '5fd'),
    exact: true
  },
  {
    path: '/Arm/blog/2019/05/28/hola',
    component: ComponentCreator('/Arm/blog/2019/05/28/hola', 'ba1'),
    exact: true
  },
  {
    path: '/Arm/blog/archive',
    component: ComponentCreator('/Arm/blog/archive', 'df6'),
    exact: true
  },
  {
    path: '/Arm/markdown-page',
    component: ComponentCreator('/Arm/markdown-page', '04b'),
    exact: true
  },
  {
    path: '/Arm/docs',
    component: ComponentCreator('/Arm/docs', '00b'),
    routes: [
      {
        path: '/Arm/docs',
        component: ComponentCreator('/Arm/docs', 'e3f'),
        routes: [
          {
            path: '/Arm/docs',
            component: ComponentCreator('/Arm/docs', 'ae4'),
            routes: [
              {
                path: '/Arm/docs/arm/home/',
                component: ComponentCreator('/Arm/docs/arm/home/', 'f46'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/Applications/accelerators',
                component: ComponentCreator('/Arm/docs/arm/home/Applications/accelerators', '30a'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/Applications/dictionary/',
                component: ComponentCreator('/Arm/docs/arm/home/Applications/dictionary/', '77c'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/Applications/images',
                component: ComponentCreator('/Arm/docs/arm/home/Applications/images', '5b3'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/company',
                component: ComponentCreator('/Arm/docs/arm/home/company', '300'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/connections/',
                component: ComponentCreator('/Arm/docs/arm/home/connections/', '730'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/connections/connections-details/arm-users',
                component: ComponentCreator('/Arm/docs/arm/home/connections/connections-details/arm-users', '90b'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/connections/connections-details/bizlink-users',
                component: ComponentCreator('/Arm/docs/arm/home/connections/connections-details/bizlink-users', 'fc7'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/connections/connections-details/supervisor-users',
                component: ComponentCreator('/Arm/docs/arm/home/connections/connections-details/supervisor-users', '2f9'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/context',
                component: ComponentCreator('/Arm/docs/arm/home/context', '053'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/custom/browser',
                component: ComponentCreator('/Arm/docs/arm/home/custom/browser', '29a'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/custom/merge',
                component: ComponentCreator('/Arm/docs/arm/home/custom/merge', '9a5'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/custom/snapshots',
                component: ComponentCreator('/Arm/docs/arm/home/custom/snapshots', '5ea'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/Database Management/database',
                component: ComponentCreator('/Arm/docs/arm/home/Database Management/database', 'fc8'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/Database Management/database-schemas',
                component: ComponentCreator('/Arm/docs/arm/home/Database Management/database-schemas', 'e1a'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/license1',
                component: ComponentCreator('/Arm/docs/arm/home/license1', '926'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/home/Themes/',
                component: ComponentCreator('/Arm/docs/arm/home/Themes/', '4c6'),
                exact: true,
                sidebar: "flu"
              },
              {
                path: '/Arm/docs/arm/platform/',
                component: ComponentCreator('/Arm/docs/arm/platform/', '053'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/forms/forms/',
                component: ComponentCreator('/Arm/docs/arm/platform/forms/forms/', 'e05'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/forms/forms/entrypoint-commands',
                component: ComponentCreator('/Arm/docs/arm/platform/forms/forms/entrypoint-commands', '6db'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/objects-navigator/',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/objects-navigator/', '80f'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/', '896'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/business-property',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/business-property', 'a1c'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/load-request',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/load-request', 'ed1'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/subclasses',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/subclasses', '11b'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/workflow',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/objects-navigator/business-object/workflow', '53e'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/restrictions',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/restrictions', '2ac'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/objects-repository/working-units',
                component: ComponentCreator('/Arm/docs/arm/platform/objects-repository/working-units', 'f6e'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/ribbon/',
                component: ComponentCreator('/Arm/docs/arm/platform/ribbon/', '1ac'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/rights/rights-details/operations',
                component: ComponentCreator('/Arm/docs/arm/platform/rights/rights-details/operations', '49d'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/rights/roles',
                component: ComponentCreator('/Arm/docs/arm/platform/rights/roles', 'aa7'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/rights/Stampe/Diritti Stampe/',
                component: ComponentCreator('/Arm/docs/arm/platform/rights/Stampe/Diritti Stampe/', '22f'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/rights/Stampe/Server Stampa/',
                component: ComponentCreator('/Arm/docs/arm/platform/rights/Stampe/Server Stampa/', 'bff'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/users/',
                component: ComponentCreator('/Arm/docs/arm/platform/users/', '7fa'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/users/email-dir-scheme',
                component: ComponentCreator('/Arm/docs/arm/platform/users/email-dir-scheme', 'd7d'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/users/email-dir-type',
                component: ComponentCreator('/Arm/docs/arm/platform/users/email-dir-type', 'bc2'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/users/import-ad',
                component: ComponentCreator('/Arm/docs/arm/platform/users/import-ad', '716'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/users/LDAP-config',
                component: ComponentCreator('/Arm/docs/arm/platform/users/LDAP-config', 'eeb'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/users/restriction-type',
                component: ComponentCreator('/Arm/docs/arm/platform/users/restriction-type', '6f3'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/platform/users/user-print',
                component: ComponentCreator('/Arm/docs/arm/platform/users/user-print', '1e0'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/intro',
                component: ComponentCreator('/Arm/docs/intro', '17f'),
                exact: true
              },
              {
                path: '/Arm/docs/release-notes/intro',
                component: ComponentCreator('/Arm/docs/release-notes/intro', '323'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Arm/',
    component: ComponentCreator('/Arm/', '3fc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
