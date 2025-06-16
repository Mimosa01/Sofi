import Link from "next/link";
import RadialGradientOverlay from "../atoms/RadialGradientOverlay";
import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";

export default function PostVacancyCard() {
  return (
    <Link href="/" className="
      relative col-span-2 md:col-auto flex flex-row md:flex-col items-center md:items-start justify-between p-5 
      rounded-md bg-neutral-700 text-white overflow-hidden group
    ">
      <RadialGradientOverlay
        gradients={[
          {
            color: "238, 255, 2",
            alpha: 0.3,
            size: 300,
            position: { top: "-100%", left: "-50%" },
          },
          {
            color: "255, 13, 177",
            alpha: 0.3,
            size: 300,
            position: { bottom: "-50%", left: "50%", translateX: "-50%" },
          },
          {
            color: "10, 75, 255",
            alpha: 0.3,
            size: 300,
            position: { top: "-100%", right: "-50%" },
          },
        ]}
      />

      <Text className="order-2 md:order-1 px-2.5 py-1 border border-white w-fit rounded-2xl text-neutral-100 text-xs md:text-sm leading-4">Бесплатно</Text>
      <Heading level={3} className="order-1 md:order-2 font-semibold tracking-[0.05px] text-base md:text-xl leading-5.5">Разместить вакансию</Heading>
    </Link>
  );
}
 