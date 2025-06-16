type Props = {
  message: string;
  className?: string;
}

export default function ErrorMessage ({ message, className }: Props) {
  return (
    <p className={`
      text-base text-quaternary-400 font-medium leading-5
      ${className}
    `}>
      { message }
    </p>
  )
}