import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Simon's Lament",
    img: require('@site/static/img/lament.png').default,
    description: (
      <>
        See if you can outrun the world's collapse as you collect artifacts to pull it back together.
      </>
    ),
    link: "https://wanderingroad.itch.io/simons-lament"
  },
  {
    title: 'Châteauxuaetâhc',
    img: require('@site/static/img/chateauxuaetahc.png').default,
    description: (
      <>
        An exploration of procedural symmetry and modularity in your browser.
      </>
    ),
    link: "https://wanderingroad.itch.io/chteauxuaethc"
  },
  {
    title: 'Into the Valley',
    img: require('@site/static/img/valley.png').default,
    description: (
      <>
        Explore a quiet, procedurally generated valley, and enjoy the sights.
      </>
    ),
    link: "https://wanderingroad.itch.io/into-the-valley"
  },
];

function Feature({img, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
        <img src={img} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
