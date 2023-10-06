'use client';

import { clsx } from 'clsx';
import { FC, forwardRef } from 'react';
import styles from './RadioCard.module.css';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'children'> & {
  /**
   * グループ化（排他制御）したい要素には同じ名前をつける
   */
  name: string;
  /**
   * 選択時のコールバックで渡される値
   */
  value: string | number;
  /**
   * * ラベルに表示されるテキストまたは要素
   */
  children: React.InputHTMLAttributes<HTMLInputElement>['children'];
  /**
   * 横幅を100%占有するかどうか
   */
  block?: boolean;
};

/**
 * アクセシビリティに配慮したラジオボタン。
 * TimeQuestionContentのような、選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用する。
 */
const RadioCard: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ name, value, checked, children, className, block = false, ...otherProps }, ref) => {
    return (
      <label className={clsx(styles.label, block && styles.block, checked && styles.checked)}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          className={clsx(className, styles.radio)}
          {...otherProps}
          ref={ref}
        />
        {children}
      </label>
    );
  },
);

RadioCard.displayName = 'RadioCard';

export { RadioCard };
