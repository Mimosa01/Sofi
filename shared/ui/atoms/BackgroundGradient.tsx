type Props = {
  className?: string;
}

export default function BackgroundGradient ({ className }: Props) {
  return (
    <div className={`absolute w-full h-94 bg-radial-gradient ${className}`} />
  )
}