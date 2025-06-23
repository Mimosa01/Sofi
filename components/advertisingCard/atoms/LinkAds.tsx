type Props = {
  className: string;
}

export default function LinkAds ({ className }: Props) {
  return (
    <a href={process.env.NEXT_PUBLIC_ADS_URL} className={className}>
      Попробовать бесплатно
    </a>
  )
}