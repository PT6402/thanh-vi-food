/* eslint-disable react/prop-types */
function IconNote({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`h-${size} w-${size}`}
    >
      <g>
        <g>
          <path
            stroke="#6366F1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 4H7.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 00-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V14m-4-9l-6 6v3h3l6-6m-3-3l3-3 3 3-3 3m-3-3l3 3"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default IconNote;
