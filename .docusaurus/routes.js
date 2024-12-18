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
    component: ComponentCreator('/Arm/docs', '817'),
    routes: [
      {
        path: '/Arm/docs',
        component: ComponentCreator('/Arm/docs', '872'),
        routes: [
          {
            path: '/Arm/docs',
            component: ComponentCreator('/Arm/docs', 'e37'),
            routes: [
              {
                path: '/Arm/docs/arm/fluentis/',
                component: ComponentCreator('/Arm/docs/arm/fluentis/', 'a60'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/forms/forms/',
                component: ComponentCreator('/Arm/docs/arm/fluentis/forms/forms/', '892'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/forms/forms/entrypoint-commands',
                component: ComponentCreator('/Arm/docs/arm/fluentis/forms/forms/entrypoint-commands', '66c'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/menu-area/ribbon-menu/',
                component: ComponentCreator('/Arm/docs/arm/fluentis/menu-area/ribbon-menu/', '69c'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/menu-area/ribbon-menu/ribbon',
                component: ComponentCreator('/Arm/docs/arm/fluentis/menu-area/ribbon-menu/ribbon', 'cc7'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/objects-navigator/',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/objects-navigator/', '017'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/', '0e1'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/business-property',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/business-property', 'b3d'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/load-request',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/load-request', 'e11'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/subclasses',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/subclasses', 'dbc'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/workflow',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/objects-navigator/business-object/workflow', '0bb'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/restrictions',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/restrictions', 'db8'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/objects-repository/working-units',
                component: ComponentCreator('/Arm/docs/arm/fluentis/objects-repository/working-units', '98b'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/rights/rights-details/operations',
                component: ComponentCreator('/Arm/docs/arm/fluentis/rights/rights-details/operations', '148'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/rights/roles',
                component: ComponentCreator('/Arm/docs/arm/fluentis/rights/roles', '958'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/rights/Stampe/Diritti Stampe/',
                component: ComponentCreator('/Arm/docs/arm/fluentis/rights/Stampe/Diritti Stampe/', '1d6'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/rights/Stampe/Server Stampa/',
                component: ComponentCreator('/Arm/docs/arm/fluentis/rights/Stampe/Server Stampa/', '5f2'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/users/restriction-type',
                component: ComponentCreator('/Arm/docs/arm/fluentis/users/restriction-type', '798'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/users/users-details/email-dir-scheme',
                component: ComponentCreator('/Arm/docs/arm/fluentis/users/users-details/email-dir-scheme', '1ef'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/users/users-details/email-dir-type',
                component: ComponentCreator('/Arm/docs/arm/fluentis/users/users-details/email-dir-type', '06b'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/users/users-details/import-ad',
                component: ComponentCreator('/Arm/docs/arm/fluentis/users/users-details/import-ad', 'ca3'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/users/users-details/LDAP-config',
                component: ComponentCreator('/Arm/docs/arm/fluentis/users/users-details/LDAP-config', '2df'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/users/users-details/user-print',
                component: ComponentCreator('/Arm/docs/arm/fluentis/users/users-details/user-print', '3fc'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/fluentis/users/users-details/users',
                component: ComponentCreator('/Arm/docs/arm/fluentis/users/users-details/users', 'e25'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/',
                component: ComponentCreator('/Arm/docs/arm/home/', '328'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/Applications/dictionary/',
                component: ComponentCreator('/Arm/docs/arm/home/Applications/dictionary/', 'e13'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/Applications/images',
                component: ComponentCreator('/Arm/docs/arm/home/Applications/images', 'cde'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/company',
                component: ComponentCreator('/Arm/docs/arm/home/company', '424'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/connections/',
                component: ComponentCreator('/Arm/docs/arm/home/connections/', '145'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/connections/connections-details/arm-users',
                component: ComponentCreator('/Arm/docs/arm/home/connections/connections-details/arm-users', 'da6'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/connections/connections-details/bizlink-users',
                component: ComponentCreator('/Arm/docs/arm/home/connections/connections-details/bizlink-users', '2ea'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/connections/connections-details/supervisor-users',
                component: ComponentCreator('/Arm/docs/arm/home/connections/connections-details/supervisor-users', '8b2'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/context',
                component: ComponentCreator('/Arm/docs/arm/home/context', '162'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/custom/browser',
                component: ComponentCreator('/Arm/docs/arm/home/custom/browser', '408'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/custom/merge',
                component: ComponentCreator('/Arm/docs/arm/home/custom/merge', 'a7b'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/custom/snapshots',
                component: ComponentCreator('/Arm/docs/arm/home/custom/snapshots', '0ce'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/Database Management/database',
                component: ComponentCreator('/Arm/docs/arm/home/Database Management/database', 'f11'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/Database Management/database-schemas',
                component: ComponentCreator('/Arm/docs/arm/home/Database Management/database-schemas', 'cc2'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/license1',
                component: ComponentCreator('/Arm/docs/arm/home/license1', '9df'),
                exact: true,
                sidebar: "arm"
              },
              {
                path: '/Arm/docs/arm/home/Themes/',
                component: ComponentCreator('/Arm/docs/arm/home/Themes/', '444'),
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
