import React from 'react';

const TagIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M20.59 13.41a2 2 0 0 1 0 2.83l-4.17 4.17a2 2 0 0 1-2.83 0l-7.17-7.17a2 2 0 0 1 0-2.83l4.17-4.17a2 2 0 0 1 2.83 0z" />
    <circle cx="7.5" cy="7.5" r="1.5" />
  </svg>
);

export default TagIcon;
