import { ButtonHTMLAttributes, memo, ReactNode } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string; 
};

function ButtonComponent ({ children, className, ...props }: Props) {
  return (
    <button 
      { ...props }
      className={`flex gap-1.5 items-center cursor-pointer ${className}`}
    >
      { children }
    </button>
  )
}

const Button = memo(ButtonComponent);
export default Button;