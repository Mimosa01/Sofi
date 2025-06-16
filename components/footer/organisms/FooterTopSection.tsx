import TestSalaryCard from "../molecules/TestSalaryCard";
import Logo from "../../../shared/ui/atoms/Logo";
import ContactInfo from "../atoms/ContactInfo";
import { EMAIL_LINK, FOOTER_LINKS, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants/contants";
import FooterLinks from "../molecules/FooterLinks";

export default function FooterTopSection() {
  return (
    <div className="flex flex-col md:flex-wrap md:flex-row gap-7.5 md:gap-12.5 mb-5 md:mb-14 text-neutral-100">
      <div className="flex gap-7.5 md:gap-12.5 order-2 md:order-1">
        <FooterLinks data={FOOTER_LINKS.slice(0, 5)}/>
        <FooterLinks data={FOOTER_LINKS.slice(5)}/>
      </div>
      <TestSalaryCard className="order-3 md:order-2" />
      <div className="flex flex-col gap-5 md:gap-14.5 md:items-end order-1 md:order-3 md:ml-auto">
        <Logo isFooter />
        <ContactInfo 
          phone={PHONE_NUMBER}
          phoneHref={PHONE_LINK}
          email={EMAIL_LINK}
        />
      </div>
    </div>
  );
}