import DuckGradientIcon from "@/shared/ui/svg/DuckGradientIcon";

export default function FooterBranding() {
  return (
    <div className="flex order-1 md:order-2 gap-5 text-neutral-100 items-center">
      <DuckGradientIcon />
      <span>junior for juniors</span>
    </div>
  );
}
