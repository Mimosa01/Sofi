import { memo } from "react"

function CheckMarkIconComponent () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_6439_1081)">
      <path d="M3.75 9L7.5 12.75L15 5.25" stroke="#232325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_6439_1081">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

const CheckMarkIcon = memo(CheckMarkIconComponent);
export default CheckMarkIcon;