import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Topic.module.scss';

interface ITopicProps {
  title: string;
  content: string;
  className?: string;
}

export function Topic({ title, content, className }: ITopicProps) {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const handleOnClick = () => {
    setIsOpened(isOpened => !isOpened);
  };

  return (
    <article className={clsx(styles.topic, isOpened && styles.topic_opened, className)}>
      <h3 className={styles.topic__title} onClick={handleOnClick}>
        {title}
      </h3>
      <div className={styles.topic__content} dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
