import { IconProps } from "@/types/icons"
import { memo } from "react"

function CalendarIconComponent ({ width, height }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path d="M3.33301 5.83341C3.33301 5.39139 3.5086 4.96746 3.82116 4.6549C4.13372 4.34234 4.55765 4.16675 4.99967 4.16675H14.9997C15.4417 4.16675 15.8656 4.34234 16.1782 4.6549C16.4907 4.96746 16.6663 5.39139 16.6663 5.83341V15.8334C16.6663 16.2754 16.4907 16.6994 16.1782 17.0119C15.8656 17.3245 15.4417 17.5001 14.9997 17.5001H4.99967C4.55765 17.5001 4.13372 17.3245 3.82116 17.0119C3.5086 16.6994 3.33301 16.2754 3.33301 15.8334V5.83341Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.333 2.5V5.83333" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66699 2.5V5.83333" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33301 9.16675H16.6663" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83301 11.6667H5.84384" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.3418 11.6667H8.34564" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8418 11.6667H10.8456" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3457 11.6667H13.3496" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8457 14.1667H10.8495" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.8418 14.1667H5.84564" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.3418 14.1667H8.34564" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const CalendarIcon = memo(CalendarIconComponent);
export default CalendarIcon;