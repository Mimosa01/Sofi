import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function SofiAvatar ({ src, alt, width, height }: Props) {
  return (
    <Image priority src={src} alt={alt} width={width} height={height} className="rounded-full" />
  );
}
