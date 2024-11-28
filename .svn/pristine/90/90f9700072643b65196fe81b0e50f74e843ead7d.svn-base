import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';



import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: <Translate>{''}</Translate>,
    description: (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Translate>Fluentis ARM svolge un ruolo fondamentale nella gestione e ottimizzazione delle risorse applicative all’interno di un’organizzazione. Permette di configurare le applicazioni e i parametri di accesso a livello di database e utente, garantendo così un’efficace gestione delle applicazioni e un utilizzo ottimale delle risorse. Questo contribuisce in modo significativo al successo complessivo dell’organizzazione.</Translate></li> 
      </ul>
     ),    
    },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--12 margin-bottom--lg')}>
      <h4 className="description margin-bottom--md">{title}</h4>
      <div className="margin-bottom--md">
        <strong className="hr-line"></strong>
      </div>
      <div className='description'>{description}</div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a className="button button--primary bottoneCustom bi bi-arrow-up-right-circle-fill" href="docs/arm/intro"> Introduzione
            </a>

          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container padding-top--lg">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
