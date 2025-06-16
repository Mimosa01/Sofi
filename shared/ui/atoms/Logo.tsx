type Props = {
  isMain?: boolean;
  isFooter?: boolean;
}

export default function Logo ({ isMain, isFooter }: Props) {
  return (
    <span 
      className={`font-wix-display text-xl
        ${isMain && 'font-semibold bg-gradient-to-r from-[rgba(32,147,254,1)] to-[rgba(194,23,254,0.9)] bg-clip-text text-transparent'}
        ${isFooter && 'text-neutral-500 md:text-3xl -tracking-[0.5px] md:tracking-normal leading-5 md:leading-7.5'}
        ${(!isMain && !isFooter) && 'text-neutral-600'}
      `}
    >
      &lt;
      <span className={`${!isFooter ? 'hidden md:inline font-semibold' : 'font-medium'}`}>
        <span className={`${ !isFooter && 'font-extralight'}`}>
          code
        </span>
        review
      </span>
      /&gt;
    </span>
  )
}