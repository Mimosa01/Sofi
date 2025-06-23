import { wixMadeforDisplay } from "@/app/fonts";
import MainSectionQuestion from "@/components/questions/widgets/MainSectionQuestion";
import SidebarQuestion from "@/components/questions/widgets/SidebarQuestion";
import MainSectionSkeleton from "@/components/skeleton/widgets/MainSectionSkeleton";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";
import TagList from "@/shared/ui/molecules/TagList";
import { Suspense } from "react";

type Props = {
  id: number;
}

export default async function QuestionPage ({ id }: Props) {
  return (
    <div className="relative pb-5 pt-[176px]">
      <BackgroundGradient 
        className="absolute -top-1/4 left-0" 
      />
      <section className={`flex flex-col md:flex-row px-[15px] md:px-0 gap-7.5 md:gap-15 mb-5 mx-auto max-w-[1020px] ${wixMadeforDisplay.className}`}>
        <Suspense fallback={<MainSectionSkeleton />}>
          <MainSectionQuestion id={id} className="max-w-[660px]"/>
        </Suspense>
        <SidebarQuestion nextId={id+1} className="max-w-full md:max-w-[320px] pb-5 md:pb-0"/>
      </section>
      <TagList tags={['tag_1', 'tag_2']}/>
    </div>
  )
}