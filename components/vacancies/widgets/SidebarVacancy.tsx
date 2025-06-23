import { VacancyType } from "@/types/constants";
import Offer from "../organisms/Offer";
import Similar from "../organisms/Similar";
import AdvertisingCard from "@/components/advertisingCard/widgets/AdvertisingCard";

type Props = {
  item: VacancyType;
  className?: string;
}

export default function SidebarVacancy ({ item, className }: Props) {
  return (
    <aside className={`flex flex-col gap-2.5 ${className}`}>
      <Offer item={item}/>
      <AdvertisingCard type="sidebarYellow"/>
      <Similar ids={[1,2]}/>
    </aside>
  )
}