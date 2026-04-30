import type { CSSProperties, HTMLAttributes } from 'react';

import styles from './ShapeDivider.module.scss';

type ShapeDividerProps = HTMLAttributes<HTMLDivElement> & {
  position?: 'bottom' | 'top' | 'topOverlay';
  /** Заливка волны, напр. `var(--color-paper)` если над слайдером идёт секция с таким фоном */
  fill?: string;
};

export function ShapeDivider({
  className = '',
  position = 'bottom',
  fill,
  style,
  ...props
}: ShapeDividerProps) {
  const mergedStyle: CSSProperties & { '--shape-divider-fill'?: string } = fill
    ? { ...style, '--shape-divider-fill': fill }
    : { ...style };

  return (
    <div
      className={`${styles.divider} ${styles[position]} ${className}`}
      style={mergedStyle}
      aria-hidden="true"
      {...props}
    />
  );
}
