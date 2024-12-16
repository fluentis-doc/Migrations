import React from 'react';
import clsx from 'clsx';
import '/src/css/custom.css';

const NavbarLinks = [
  {
    title: 'Home',
    items: [
      { label: 'License', to: 'docs/arm/home/license1' },
      { label: 'Company', to: 'docs/arm/home/company' },
      { label: 'Connections', to: 'docs/arm/home/connections' },
      { label: 'Applications', to: 'docs/arm/home/Applications/dictionary' },
      { label: 'Database Management', to: 'docs/arm/home/Database Management/database' },
      { label: 'Custom Data Management', to: 'docs/arm/home/custom/snapshots' },
      { label: 'Context', to: 'docs/arm/home/context' },
      { label: 'Themes', to: 'docs/arm/home/Themes/Themes' },
    ],
  },
  {
    title: 'Platform',
    items: [
      { label: 'Users', to: 'docs/specifications/getting-started' },
      { label: 'Ribbon Menu', to: 'docs/specifications/server/linux-specifications' },
      { label: 'Forms', to: 'docs/specifications/server/windows-specifications' },
      { label: 'Wizards', to: 'docs/specifications/Fluentis%20Web/specifications' },
      { label: 'WebApi', to: 'docs/specifications/FluentisMobile/specification' },
      { label: 'Objects Repository', to: 'docs/specifications/FluentisMobile/specification' },
      { label: 'Business Processes', to: 'docs/specifications/FluentisMobile/specification' },
      { label: 'Audit Trail', to: 'docs/specifications/FluentisMobile/specification' },
      { label: 'Chat Bot Options', to: 'docs/specifications/FluentisMobile/specification' },
    ],
  },
]


function Feature({ title, items }) {
  return (
    <div className={clsx('col col--6 margin-bottom--lg')}>
      <h4 className="description margin-bottom--md">{title}</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.to}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container margin-top--lg padding-top--lg">
      <div className="row">
        {NavbarLinks.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
