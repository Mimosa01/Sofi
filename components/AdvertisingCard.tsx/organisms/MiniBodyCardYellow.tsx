import Heading from "@/shared/ui/atoms/Heading";
import LinkAds from "../atoms/LinkAds";
import ArrowAdsIcon from "@/shared/ui/svg/ArrowAdsIcon";

export default function MiniBodyCardYellow () {
  return (
    <div className="flex items-end md:items-center justify-between p-[15px] bg-[#FDF6E2] bg-[url(/images/gridYellow.png)] rounded-lg">
      <div>
        <Heading level={3} className="font-semibold text-base">
          Софи собрала все вопросы — тренируйся и получай офферы быстрее!
        </Heading>
        <LinkAds className="text-[#8E521E] text-base font-semibold" />
      </div>
      <div className="min-w-[16px]"> 
        <ArrowAdsIcon />
      </div>
    </div>
  )
}