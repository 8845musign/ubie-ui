'use client';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styles from './RadioCard.module.css';
import type { FC, ReactNode } from 'react';

type Props = Required<Pick<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'value' | 'children'>> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    /**
     * 必ずページ内でユニークな名前をつける
     */
    id: string;
    /**
     * グループ化（排他制御）したい要素には同じ名前をつける
     */
    name: string;
    /**
     * onChangeに渡す関数内で取得したい値
     */
    value: string | number | readonly string[];
    /**
     * 表示するラベル。テキストまたは要素を渡すことができる
     */
    children: ReactNode;
    /**
     * marginBottomを持つか否か
     */
    hasMarginBottom?: boolean;
    /**
     * ブロックレイアウトとして表示するかどうか。ブロックレイアウトの場合、横幅100%を占有
     */
    block?: boolean;
  };

/**
 * Accessibilityに配慮したカード状のラジオボタン
 */
const RadioCard: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ id, name, value, children, className, hasMarginBottom = true, block = false, ...otherProps }, ref) => {
    return (
      <div className={clsx(hasMarginBottom && styles.marginBottom, styles.wrap, block && styles.block)}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className={clsx(className, styles.radio)}
          {...otherProps}
          ref={ref}
        />
        <label htmlFor={id} className={styles.label}>
          {children}
        </label>
      </div>
    );
  },
);

RadioCard.displayName = 'RadioCard';

export { RadioCard };
