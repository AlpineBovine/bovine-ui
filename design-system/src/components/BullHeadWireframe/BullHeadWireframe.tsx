import type { ImgHTMLAttributes } from 'react';

import bullHeadWireframe from '../../assets/bull-head-wireframe.svg';
import './BullHeadWireframe.css';

export interface BullHeadWireframeProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  title?: string;
}

export function BullHeadWireframe({
  alt,
  className = '',
  title = 'Wireframe bull head',
  ...props
}: BullHeadWireframeProps) {
  const classNames = ['bull-head-wireframe', className].filter(Boolean).join(' ');

  return <img alt={alt ?? title} className={classNames} src={bullHeadWireframe} {...props} />;
}
