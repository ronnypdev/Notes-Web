import React from "react";

const LockIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13.0741 7.59809V5.45109C13.0741 2.93809 11.0361 0.900046 8.52312 0.900046C6.01012 0.88909 3.96412 2.91709 3.95312 5.43109V5.45109V7.59809"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3334 19.3999H4.69239C2.59839 19.3999 0.900391 17.7029 0.900391 15.6079V11.3189C0.900391 9.22389 2.59839 7.52689 4.69239 7.52689H12.3334C14.4274 7.52689 16.1254 9.22389 16.1254 11.3189V15.6079C16.1254 17.7029 14.4274 19.3999 12.3334 19.3999Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5127 12.353V14.574"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LockIcon;
