'use client';

import styles from './CheckboxGroup.module.css';
import { RequiredLabel } from '../../sharedComponents/RequiredLabel/RequiredLabel';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import { Checkbox } from '../Checkbox/Checkbox';
import { Flex } from '../Flex/Flex';
import type { FC, ReactElement } from 'react';

export type Props = {
  children: ReactElement<typeof Checkbox>[];
  /**
   * チェックボックスグループの見出し（legend要素）
   */
  label: string;
  /**
   * 必須マークを表示するか
   * 注意: trueとしてもinput要素のrequired属性は付与されません
   */
  showRequiredLabel?: boolean;
  /**
   * チェックボックスの配置方向
   * @default column
   */
  direction?: 'column' | 'row';
} & CustomDataAttributeProps;

export const CheckboxGroup: FC<Props> = ({ children, label, showRequiredLabel, direction = 'column', ...otherProps }) => {
  return (
    <fieldset className={styles.wrapper} {...otherProps}>
      <legend className={styles.legend}>
        {label}
        {showRequiredLabel && <RequiredLabel />}
      </legend>
      <Flex spacing="md" direction={direction}>
        {children}
      </Flex>
    </fieldset>
  );
};
