import Heading from "@/shared/ui/atoms/Heading";
import SimilarInfo from "../molecules/SimilarInfo";
import SidebarCardWrapper from "@/shared/ui/atoms/SidebarCardWrapper.tsx";
import { Suspense } from "react";

type Props = {
  ids: number[];
}

export default function Similar ({ ids }: Props) {
  return (
    <SidebarCardWrapper>
      <Heading level={3} className="mb-[5px] text-neutral-800 text-lg font-semibold leading-5">
        Похожие вакансии
      </Heading>
      <div className="flex flex-col divide-y divide-neutral-200">
        {ids.map((item) => (
          <Suspense key={item}>
            <SimilarInfo id={item}/>
          </Suspense>
        ))}
      </div>
    </SidebarCardWrapper>
  )
}