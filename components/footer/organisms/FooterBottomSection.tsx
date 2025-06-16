import LegalInfo from "../atoms/LegalInfo";
import FooterBranding from "../molecules/FooterBranding";
import FooterPolicyLinks from "../molecules/FooterPolicyLinks";
import SocialLinks from "../molecules/SocialLinks";

export default function FooterBottomSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <FooterPolicyLinks />
        <SocialLinks />
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start justify-between pt-[15px] border-t-1 border-neutral-700">
        <LegalInfo />
        <FooterBranding />
      </div>
    </div>
  );
}
