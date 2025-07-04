import { IconProps } from "@/types/icons"
import { memo } from "react"

function ProfileOutlineIconComponent ({ width, height }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_117_1920)">
      <path d="M6.66699 5.83333C6.66699 6.71739 7.01818 7.56523 7.6433 8.19036C8.26842 8.81548 9.11627 9.16667 10.0003 9.16667C10.8844 9.16667 11.7322 8.81548 12.3573 8.19036C12.9825 7.56523 13.3337 6.71739 13.3337 5.83333C13.3337 4.94928 12.9825 4.10143 12.3573 3.47631C11.7322 2.85119 10.8844 2.5 10.0003 2.5C9.11627 2.5 8.26842 2.85119 7.6433 3.47631C7.01818 4.10143 6.66699 4.94928 6.66699 5.83333Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_117_1920">
      <rect width="20" height="20" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

const ProfileOutlineIcon = memo(ProfileOutlineIconComponent);
export default ProfileOutlineIcon;