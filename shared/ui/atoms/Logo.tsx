import { memo } from "react";

type Props = {
  isMain?: boolean;
  isFooter?: boolean;
}

function LogoComponent ({ isMain, isFooter }: Props) {
  return (
    <span 
      className={`font-wix-display text-xl
        ${isMain && 'bg-gradient-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)] bg-clip-text text-transparent'}
        ${isFooter && 'text-neutral-500 md:text-3xl -tracking-[0.5px] md:tracking-normal leading-5 md:leading-7.5'}
        ${(!isMain && !isFooter) && 'text-neutral-600'}
      `}
    >
      &lt;
      <span className={`${!isFooter && 'hidden md:inline font-bold text-[22px]'}`}>
        <span className={`${ isFooter ? 'font-normal' : 'font-extralight'}`}>
          code
        </span>
        review
      </span>
      /&gt;
    </span>
  )
}

const Logo = memo(LogoComponent);
export default Logo;