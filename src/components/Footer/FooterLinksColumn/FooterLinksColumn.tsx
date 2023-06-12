import React from 'react';

import { Button } from '../../Button/Button';

import styles from './FooterLinksColumn.module.scss';

interface FooterLinksColumnProps {
  heading: string;
  links: Array<{
    id?: string;
    title: string;
    href: string;
    rel?: string;
  }>;
  onClick?: (id: string, event: React.MouseEvent) => void;
}

export function FooterLinksColumn({ heading, links, onClick }: FooterLinksColumnProps): JSX.Element {
  const handleClick = (id?: string) => (event: React.MouseEvent) => {
    if (id) {
      onClick?.(id, event);
    }
  };
  return (
    <div className={styles.root}>
      <h3 className={styles.root__heading}> {heading} </h3>
      <ul className={styles.root__links}>
        {links.map(({ id, title, href, rel }, index) => (
          <li className={styles.root__item} key={index}>
            <Button
              variant="linkGray"
              size="lg"
              href={href}
              className={styles.root__link}
              rel={rel}
              onClick={handleClick(id)}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
