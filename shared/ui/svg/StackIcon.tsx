import { IconProps } from "@/types/icons"

export default function StackIcon ({ width, height }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path d="M9.99967 3.33325L3.33301 6.66659L9.99967 9.99992L16.6663 6.66659L9.99967 3.33325Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33301 10L9.99967 13.3333L16.6663 10" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33301 13.3333L9.99967 16.6666L16.6663 13.3333" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}