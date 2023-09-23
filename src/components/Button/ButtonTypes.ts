import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes, ReactElement } from 'react';

export type BaseProps = {
  /**
   * 種類
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
   * サイズ
   * @default large
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * ブロックレイアウトとして表示するかどうか。ブロックレイアウトの場合、横幅100%を占有
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
};

export type OnlyLinkButtonProps = {
  /**
   * ルートの要素を別のコンポーネントに
   */
  render?: ReactElement;
};

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & BaseProps;
export type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> &
  BaseProps &
  OnlyLinkButtonProps;
