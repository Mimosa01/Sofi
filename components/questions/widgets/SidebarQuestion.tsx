import AdvertisingCard from "@/components/advertisingCard/widgets/AdvertisingCard";
import NextQuestion from "../organisms/NextQuestion";

type Props = {
  nextId: number;
  className?: string;
}

export default function SidebarQuestion ({ className, nextId }: Props) {
  return (
    <aside className={`flex flex-col gap-2.5 ${className}`}>
      <AdvertisingCard type="sidebarGradient" />
      <NextQuestion id={nextId} />
    </aside>
  )
}