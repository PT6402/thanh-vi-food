/* eslint-disable react/prop-types */
function IconPhone({ size = 4 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`h-${size} w-${size}`}
    >
      <path
        stroke="#6366F1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 13h-2m2-5h-8m8 8h-2m-5.8 4h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 18.48 21 17.92 21 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.48 4 18.92 4 17.8 4h-7.6c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C7 5.52 7 6.08 7 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C8.52 20 9.08 20 10.2 20zm2.8-5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 20a2 2 0 01-2-2V6a2 2 0 114 0v12a2 2 0 01-2 2z"
      ></path>
    </svg>
  );
}

export default IconPhone;
