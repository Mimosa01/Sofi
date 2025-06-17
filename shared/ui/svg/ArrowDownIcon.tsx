import { memo } from "react"

type Props = {
  className?: string;
}

function ArrowDownIconComponent ({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none" className={className}>
      <path d="M1 1L6 5L11 1" stroke="#86888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const ArrowDownIcon = memo(ArrowDownIconComponent);
export default ArrowDownIcon;