import React from 'react';

export const InfoIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle cx="9" cy="9" r="8" />
    <line x1="9" y1="5" x2="9" y2="9" />
    <circle cx="9" cy="12" r="1" />
  </svg>
);

export default InfoIcon;
