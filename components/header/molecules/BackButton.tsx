'use client'

import { ALL_PATHS } from "@/lib/constants/contants";
import Button from "@/shared/ui/atoms/Button";
import ArrowAdsIcon from "@/shared/ui/svg/ArrowAdsIcon";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton () {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname.includes(`${ALL_PATHS.VACANCIES}/`) || pathname.includes(`${ALL_PATHS.QUESTIONS}/`)) {
    return (
      <Button onClick={() => router.back()} className={`hidden md:block px-6 py-5 text-neutral-600 bg-white rounded-[18px] shadow-header backdrop-blur-sm`}>
        <ArrowAdsIcon className="-rotate-135"/>
      </Button>
    )
  } else {
    return null;
  }
}