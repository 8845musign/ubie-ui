'use client';

import { UrlObject } from 'url';
import clsx from 'clsx';
import { ComponentType, ElementType, FC, ReactNode } from 'react';
import styles from './LinkCard.module.css';

type Props = {
  /**
   * リンク先
   */
  href: string;
  /**
   * 見出し
   */
  title: string;
  /**
   * 説明文
   */
  description: string;
  /**
   * CSSのクラス
   */
  className?: string;
  /**
   * リンクとして機能させるコンポーネント、または要素
   * @default a
   */
  linkComponent?: ElementType<{ href: string | UrlObject; className?: string; children: ReactNode }>;
  /**
   * アイコン
   */
  icon?: ComponentType<{ className?: string }>;
};

/**
 * 表現力豊かで、遷移先の内容を把握可能なリンクを提供
 */
export const LinkCard: FC<Props> = ({
  href,
  title,
  className,
  icon: IconComponent,
  description,
  linkComponent: LinkComponent = 'a',
}) => {
  return (
    <LinkComponent href={href} className={clsx(styles.card, className)}>
      {IconComponent && <IconComponent className={styles.icon} />}
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </LinkComponent>
  );
};

LinkCard.displayName = 'LinkCard';
