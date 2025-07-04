import { IconProps } from "@/types/icons"
import { memo } from "react"

function BriefcaseIconComponent ({ width, height }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path d="M2.5 7.49992C2.5 7.05789 2.67559 6.63397 2.98816 6.32141C3.30072 6.00885 3.72464 5.83325 4.16667 5.83325H15.8333C16.2754 5.83325 16.6993 6.00885 17.0118 6.32141C17.3244 6.63397 17.5 7.05789 17.5 7.49992V14.9999C17.5 15.4419 17.3244 15.8659 17.0118 16.1784C16.6993 16.491 16.2754 16.6666 15.8333 16.6666H4.16667C3.72464 16.6666 3.30072 16.491 2.98816 16.1784C2.67559 15.8659 2.5 15.4419 2.5 14.9999V7.49992Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66699 5.83333V4.16667C6.66699 3.72464 6.84259 3.30072 7.15515 2.98816C7.46771 2.67559 7.89163 2.5 8.33366 2.5H11.667C12.109 2.5 12.5329 2.67559 12.8455 2.98816C13.1581 3.30072 13.3337 3.72464 13.3337 4.16667V5.83333" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 10V10.0077" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 10.8333C4.82632 12.0055 7.39502 12.6161 10 12.6161C12.605 12.6161 15.1737 12.0055 17.5 10.8333" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const BriefcaseIcon = memo(BriefcaseIconComponent);
export default BriefcaseIcon;