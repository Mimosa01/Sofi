import Link from "next/link";
import RadialGradientOverlay from "../atoms/RadialGradientOverlay";
import Heading from "@/shared/ui/atoms/Heading";

type Props = {
  text: string;
  href: string;
}

export default function CategoryCardLong({ text, href }: Props) {
  return (
    <Link
      href={href}
      className={`
        relative flex flex-col gap-3.5 p-4.5 md:p-5 rounded-md 
        bg-neutral-100 overflow-hidden col-span-2 md:col-span-3
        group
        h-28 md:h-39
      `}
    >
      <RadialGradientOverlay
        gradients={[
          {
            color: "238,185,2",
            alpha: 0.3,
            size: 800,
            position: { top: "-200px", left: "-75%" },
          },
          {
            color: "242,143,210",
            alpha: 0.3,
            size: 800,
            position: { top: "-250%", left: "50%", translateX: "-50%" },
          },
          {
            color: "98,180,255",
            alpha: 0.3,
            size: 800,
            position: { top: "-200px", right: "-50%" },
          },
        ]}
      />


      <div className="relative z-20 flex flex-col flex-grow">
        <Heading level={3} className="font-medium text-base md:text-2xl leading-4.5 md:leading-6.5">{ text }</Heading>
      </div>
    </Link>
  )
}
