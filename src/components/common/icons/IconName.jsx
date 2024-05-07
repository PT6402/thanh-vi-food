/* eslint-disable react/prop-types */

function IconName({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`h-${size} w-${size}`}
    >
      <g stroke="#6366F1" strokeWidth="2">
        <circle cx="9" cy="9" r="2"></circle>
        <path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2z"></path>
        <path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12z"></path>
        <path strokeLinecap="round" d="M19 12h-4M19 9h-5M19 15h-3"></path>
      </g>
    </svg>
  );
}

export default IconName;
