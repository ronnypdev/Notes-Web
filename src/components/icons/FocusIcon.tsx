import React from 'react';

export const FocusIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle cx="10" cy="10" r="2" />
    <circle cx="10" cy="10" r="6" />
  </svg>
);

export default FocusIcon;
