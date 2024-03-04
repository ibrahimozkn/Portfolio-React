import React from "react";

function DownArrow(props: { color: string }) {
  let { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      className=""
    >
      <g>
        <path
          d="M29.604 10.528 17.531 23.356a2.102 2.102 0 0 1-3.062 0L2.396 10.528c-.907-.964-.224-2.546 1.1-2.546h25.008c1.324 0 2.007 1.582 1.1 2.546z"
          fill={color}
          opacity="1"
          data-original="#000000"
          className=""
        ></path>
      </g>
    </svg>
  );
}

export default DownArrow;
