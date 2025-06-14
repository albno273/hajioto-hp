'use client';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import s from '@/styles/views/modal.module.scss';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ open, onClose, children }) => {
  // Escape キーで閉じる
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  // Next.js 14 でもブラウザ側のみ実行される
  return ReactDOM.createPortal(
    <div
      className={s.backdrop}
      role='dialog'
      aria-modal='true'
      onClick={onClose} // ← backdrop クリックで閉じる
    >
      {/* e.stopPropagation() で内側クリックを除外 */}
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
