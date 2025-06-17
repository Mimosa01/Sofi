import { IconProps } from "@/types/icons"
import { memo } from "react"

function MessageIconComponent ({ width, height }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path d="M6.66699 7.5H13.3337" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66699 10.8333H11.667" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 14.9999H5C4.33696 14.9999 3.70107 14.7365 3.23223 14.2677C2.76339 13.7988 2.5 13.163 2.5 12.4999V5.83325C2.5 5.17021 2.76339 4.53433 3.23223 4.06549C3.70107 3.59664 4.33696 3.33325 5 3.33325H15C15.663 3.33325 16.2989 3.59664 16.7678 4.06549C17.2366 4.53433 17.5 5.17021 17.5 5.83325V12.4999C17.5 13.163 17.2366 13.7988 16.7678 14.2677C16.2989 14.7365 15.663 14.9999 15 14.9999H12.5L10 17.4999L7.5 14.9999Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const MessageIcon = memo(MessageIconComponent);
export default MessageIcon;