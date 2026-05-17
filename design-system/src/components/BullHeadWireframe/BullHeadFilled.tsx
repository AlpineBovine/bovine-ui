import type { ImgHTMLAttributes } from 'react';

import bullHeadFilled from '../../assets/bull-head-filled.svg';
import './BullHeadWireframe.css';

export interface BullHeadFilledProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  title?: string;
}

export function BullHeadFilled({ alt, className = '', title = 'Bold wireframe bull head', ...props }: BullHeadFilledProps) {
  const classNames = ['bull-head-wireframe', className].filter(Boolean).join(' ');

  return <img alt={alt ?? title} className={classNames} src={bullHeadFilled} {...props} />;
}
