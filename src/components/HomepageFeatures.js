import React from 'react';
import clsx from 'clsx';
import '/src/css/custom.css';

const NavbarLinks = [
  {
    title: 'Migration from 2021 to 2023',
    items: [
      { label: 'Standard Environment Migration from 2021 to 2023', to: 'docs/2021/home/Standard2021' },
      { label: 'Custom Environment Migration from 2021 to 2023', to: 'docs/2021/home/Custom2021' },
      { label: 'Test Migrated Custom from 2021 to 2023​', to: 'docs/2021/home/CustomOneByOne' },
      { label: 'Personalizzazioni​', to: 'docs/2021/home/Customizations2021' },

    ],
  },
  {
    title: 'Migration from 2015 to 2023',
    items: [
      { label: 'Standard Environment Migration from 2015 to 2023', to: 'docs/arm/platform/users/' },
      { label: 'Custom Environment Migration from 2015 to 2023', to: 'docs/arm/platform/ribbon' },
      { label: 'Report', to: 'docs/specifications/server/windows-specifications' },
 
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
