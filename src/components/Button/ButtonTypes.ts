import { CustomDataAttributeProps } from '../../types/attributes';
import type { MarginProps } from '../../types/style';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

export type BaseProps = {
  /**
   * ボタンのラベルとして表示する内容
   */
  children: ReactNode;
  /**
   * ボタンの種類
   * @default primary
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'alert'
    | 'text'
    | 'textAlert'
    | 'authGoogle'
    | 'authLINE'
    | 'authApple';
  /**
   * 種類
   * @default large
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * 横幅を100%占有するかどうか
   * @default false
   */
  block?: boolean;
  /**
   * アイコン
   */
  icon?: 'default' | ReactNode;
  /**
   * Fixedアイコン
   */
  fixedIcon?: 'default' | ReactNode;
  /**
   * 後方配置のアイコン
   */
  suffixIcon?: 'default' | ReactNode;
  /**
   * ラベルの折り返しを指定
   */
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
} & MarginProps &
  CustomDataAttributeProps;

export type OnlyButtonProps = {
  /**
   * ネイティブのbutton要素のtype属性
   * @default button
   */
  type?: HTMLButtonElement['type'];
  /**
   * ボタンを無効化するかどうか
   * @default false
   */
  disabled?: boolean;
  /**
   * ローディング状態を示す
   */
  loading?: boolean;
  /**
   * ローディング中に表示する文言
   */
  loadingLabel?: string;
};

export type OnlyLinkButtonProps = {
  /**
   * レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定
   */
  render?: ReactElement;
};

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'className' | keyof BaseProps | keyof OnlyButtonProps
> &
  BaseProps &
  OnlyButtonProps;
export type LinkButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'className' | keyof BaseProps
> &
  BaseProps &
  OnlyLinkButtonProps;
