'use client';

import { CheckAIcon } from '@ubie/ubie-icons';
import { FC, ReactNode } from 'react';
import styles from './Checkbox.module.css';

type Props = {
  /**
   * 子要素
   */
  children: ReactNode;
};

/**
 * 複数選択、または選択/未選択の切り替え
 */
export const Checkbox: FC<Props> = ({ children }) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.checkIconContainer}>
        <CheckAIcon className={styles.checkIcon} />
      </span>
      {children}
    </label>
  );
};
