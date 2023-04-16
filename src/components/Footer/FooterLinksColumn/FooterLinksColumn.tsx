import React from 'react';

import { Button } from '../../Button/Button';

import styles from './FooterLinksColumn.module.scss';

interface FooterLinksColumnProps {
  heading: string;
  links: Array<{
    title: string;
    href: string;
    rel?: string;
  }>;
}

export function FooterLinksColumn({ heading, links }: FooterLinksColumnProps): JSX.Element {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__heading}> {heading} </h3>
      <ul className={styles.root__links}>
        {links.map(({ title, href, rel }, index) => (
          <li className={styles.root__item} key={index}>
            <Button variant="linkGray" size="lg" href={href} className={styles.root__link} rel={rel}>
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
