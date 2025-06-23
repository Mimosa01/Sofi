import { memo } from "react"

type Props = {
  className?: string;
}

function TickIconComponent ({ className }: Props) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M11.7212 0.778745C11.3499 0.406968 10.747 0.407202 10.3752 0.778745L4.31744 6.83674L1.62503 4.14435C1.25325 3.77257 0.650609 3.77257 0.278832 4.14435C-0.0929441 4.51613 -0.0929441 5.11877 0.278832 5.49055L3.6442 8.85592C3.82998 9.04169 4.07357 9.13481 4.31718 9.13481C4.5608 9.13481 4.80463 9.04192 4.9904 8.85592L11.7212 2.12492C12.0929 1.7534 12.0929 1.1505 11.7212 0.778745Z" fill="white"/>
    </svg>
  )
}

const TickIcon = memo(TickIconComponent);
export default TickIcon;