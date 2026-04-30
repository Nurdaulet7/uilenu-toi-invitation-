import type { HTMLAttributes } from 'react';

import styles from './ShapeDivider.module.scss';

type ShapeDividerProps = HTMLAttributes<HTMLDivElement> & {
  position?: 'top' | 'bottom';
};

export function ShapeDivider({ className = '', position = 'bottom', ...props }: ShapeDividerProps) {
  return (
    <div
      className={`${styles.divider} ${styles[position]} ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}
