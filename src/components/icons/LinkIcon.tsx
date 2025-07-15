import React from 'react';

const LinkIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M17 7a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7 0 5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 0z" />
    <path d="M8 16l8-8" />
  </svg>
);

export default LinkIcon;
