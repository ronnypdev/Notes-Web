import React from 'react';

const TargetIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
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
    <circle cx="10" cy="10" r="8" />
    <circle cx="10" cy="10" r="4" />
  </svg>
);

export default TargetIcon;
