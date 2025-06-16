import FooterLink from "../atoms/FooterLink";

export default function FooterPolicyLinks() {
  return (
    <div className="order-2 md:order-1 text-sm md:text-lg text-neutral-100 font-normal">
      <FooterLink href="/" withSeparator>
        Политика конфиденциальности
      </FooterLink>
      <FooterLink href="/">Оферта</FooterLink>
    </div>
  );
}
