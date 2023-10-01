'use client';

import { clsx } from 'clsx';
import { FC, forwardRef } from 'react';
import styles from './RadioCard.module.css';

type Props = Required<Pick<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'value' | 'children'>> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    block?: boolean;
  };

/**
 * アクセシビリティに配慮したラジオボタン。
 * TimeQuestionContentのような、選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用する。
 *
 * @param id 必ずページ内でユニークな名前をつける。
 * @param name グループ化（排他制御）したい要素には同じ名前をつける。
 * @param value onChangeに渡す関数内で取得したい値
 * @param children 表示するラベルテキスト
 * @param block 幅100%
 * @param otherProps onFocusなど、inputタグに渡せるpropsはなんでも。
 */
const RadioCard: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ id, name, value, checked, children, className, block = false, ...otherProps }, ref) => {
    return (
      <label className={clsx(styles.label, block && styles.block, checked && styles.checked)}>
        <input
          type="radio"
          id={id}
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
