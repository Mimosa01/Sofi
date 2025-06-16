import { ButtonHTMLAttributes, ReactNode } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button ({ children, ...props }: Props) {
  return (
    <button 
      { ...props }
      className='flex gap-1.5 items-center'
    >
      { children }
    </button>
  )
}