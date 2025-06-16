import { FooterLinkType } from "@/types/constants";
import FooterLink from "../atoms/FooterLink";

type Props = {
  data: FooterLinkType[];
  className?: string;
}

export default function FooterLinks ({ data, className }: Props) {
  return (
    <ul className={`flex flex-col md:h-39 gap-y-2.5 font-wix-text -tracking-[0.5px] ${className}`}>
      {data.map((item) => (
        <li key={item.id} className="w-[165px] md:w-fit">
          <FooterLink href={item.href} className="text-base md:text-lg font-normal leading-0">
            {item.name}
          </FooterLink>
        </li>
      ))}
    </ul>
  )
}