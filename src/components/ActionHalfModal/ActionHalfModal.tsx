'use client';

import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { FC, Fragment, PropsWithChildren } from 'react';
import styles from './ActionHalfModal.module.css';
import { opacityToClassName } from '../../utils/style';
import { AllOrNone } from '../../utils/types';
import { Button } from '../Button/Button';

type Opacity = 'normal' | 'darker';

type BaseProps = {
  /**
   * モーダルを閉じた場合のイベント
   * @returns void
   */
  onClose: () => void;
  /**
   * ヘッダーに表示する見出しテキスト
   */
  header?: string;
  /**
   * プライマリーアクションボタンの色
   */
  primaryActionColor?: 'primary' | 'alert';
  /**
   * 閉じるボタンのテキスト
   */
  closeLabel?: string;
  /**
   * オーバーレイの透過度
   */
  overlayOpacity?: Opacity;
  /**
   * 閉じるボタンを表示するかどうか
   */
  showClose?: boolean;
  /**
   * モーダルを開くかどうか
   */
  open?: boolean;
  /**
   * openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
   */
  isStatic?: boolean;
  /**
   * モーダルをフルスクリーンで表示するかどうか
   */
  fullscreen?: boolean;
};

type Props = BaseProps &
  AllOrNone<{ onPrimaryAction: () => void; primaryActionLabel: string }> &
  AllOrNone<{ onSecondaryAction: () => void; secondaryActionLabel: string }>;

/**
 * 画面の下部を占有する、アクションを実行するためのモーダルダイアログ
 */
export const ActionHalfModal: FC<PropsWithChildren<Props>> = ({
  children,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  header,
  primaryActionLabel,
  secondaryActionLabel,
  primaryActionColor,
  closeLabel = '閉じる',
  overlayOpacity = 'normal',
  showClose = true,
  open = true,
  isStatic = false,
  fullscreen = false,
}) => {
  const opacityClassName = opacityToClassName(overlayOpacity);

  return (
    <Transition show={open}>
      <Dialog static={isStatic} onClose={onClose} className={clsx(styles.modal, fullscreen && styles.fullscreen)}>
        <Transition.Child
          as={Fragment}
          enter={styles.overlayEnter}
          enterFrom={styles.overlayEnterFrom}
          enterTo={styles.overlayEnterTo}
          leave={styles.overlayLeave}
          leaveFrom={styles.overlayLeaveFrom}
          leaveTo={styles.overlayLeaveTo}
        >
          <Dialog.Overlay className={clsx(styles.overlay, styles[opacityClassName])} />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter={styles.panelEnter}
          enterFrom={styles.panelEnterFrom}
          enterTo={styles.panelEnterTo}
          leave={styles.panelLeave}
          leaveFrom={styles.panelLeaveFrom}
          leaveTo={styles.panelLeaveTo}
        >
          <div className={clsx(styles.modalBody, !header && styles.headerLess, fullscreen && styles.fullscreen)}>
            {header && <Dialog.Title className={styles.header}>{header}</Dialog.Title>}
            <div className={styles.contents}>{children}</div>
            <div className={styles.buttonContainer}>
              {onPrimaryAction && primaryActionLabel && (
                <Button block onClick={onPrimaryAction} aria-label={primaryActionLabel} variant={primaryActionColor}>
                  {primaryActionLabel}
                </Button>
              )}
              {onSecondaryAction && secondaryActionLabel && (
                <Button block variant="secondary" onClick={onSecondaryAction} aria-label={secondaryActionLabel}>
                  {secondaryActionLabel}
                </Button>
              )}
              {showClose && (
                <Button variant="text" onClick={onClose} aria-label={closeLabel}>
                  {closeLabel}
                </Button>
              )}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
