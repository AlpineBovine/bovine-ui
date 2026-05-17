import { useId, type SVGProps } from 'react';

import './BullHeadWireframe.css';

export interface BullHeadWireframeProps extends SVGProps<SVGSVGElement> {
  description?: string;
  title?: string;
}

export function BullHeadWireframe({
  className = '',
  description = 'A geometric Highland bull head made from thin connecting lines, sweeping horns, shaggy forehead lines, and a broad muzzle.',
  title = 'Wireframe bull head',
  ...props
}: BullHeadWireframeProps) {
  const titleId = useId();
  const descriptionId = useId();
  const classNames = ['bull-head-wireframe', className].filter(Boolean).join(' ');

  return (
    <svg
      className={classNames}
      viewBox="0 0 720 560"
      role="img"
      aria-labelledby={`${titleId} ${descriptionId}`}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <desc id={descriptionId}>{description}</desc>

      <g className="bull-head-wireframe__grid" aria-hidden="true">
        <path d="M230 214 L300 150 L420 150 L490 214 L468 372 L410 462 L310 462 L252 372 Z" />
        <path d="M306 166 L204 126 L112 110 L42 92" />
        <path d="M306 166 L218 178 L156 214 L238 212" />
        <path d="M42 92 L78 78 L112 110 L78 120 Z" />
        <path d="M78 78 L78 120" />
        <path d="M78 78 L204 126" />
        <path d="M78 120 L156 214" />
        <path d="M204 126 L156 214" />
        <path d="M112 110 L218 178" />
        <path d="M42 92 L112 110 L156 214" />
        <path d="M112 110 L204 126 L218 178" />
        <path d="M306 166 L238 212" />
        <path d="M204 126 L218 178" />
        <path d="M238 212 L150 246 L236 284 Z" />
        <path d="M238 212 L196 264" />
        <path d="M150 246 L196 264 L236 284" />
        <path d="M414 166 L516 126 L608 110 L678 92" />
        <path d="M414 166 L502 178 L564 214 L482 212" />
        <path d="M678 92 L642 78 L608 110 L642 120 Z" />
        <path d="M642 78 L642 120" />
        <path d="M642 78 L516 126" />
        <path d="M642 120 L564 214" />
        <path d="M516 126 L564 214" />
        <path d="M608 110 L502 178" />
        <path d="M678 92 L608 110 L564 214" />
        <path d="M608 110 L516 126 L502 178" />
        <path d="M414 166 L482 212" />
        <path d="M516 126 L502 178" />
        <path d="M482 212 L570 246 L484 284 Z" />
        <path d="M482 212 L524 264" />
        <path d="M570 246 L524 264 L484 284" />
        <path d="M300 150 L258 272 L310 462" />
        <path d="M420 150 L462 272 L410 462" />
        <path d="M230 214 L360 250 L490 214" />
        <path d="M252 372 L360 318 L468 372" />
        <path d="M300 150 L360 318 L420 150" />
        <path d="M278 356 L360 406 L442 356" />
        <path d="M310 462 L360 430 L410 462" />
      </g>

      <g className="bull-head-wireframe__features">
        <path d="M292 356 L332 344" />
        <path d="M428 356 L388 344" />
        <path d="M340 418 L340 430" />
        <path d="M380 418 L380 430" />
      </g>

    </svg>
  );
}
