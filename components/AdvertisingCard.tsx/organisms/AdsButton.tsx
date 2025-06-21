'use client';

import { ALL_PATHS } from "@/lib/constants/contants";
import { usePathname } from "next/navigation";

export default function AdsButton () {
  const pathname = usePathname();
  let text: string = '';

  switch (pathname) {
    case ALL_PATHS.VACANCIES:
      text = 'Автоотклики'
      break;
    
    case ALL_PATHS.QUESTIONS:
      text = 'Тренажер вопросов';
      break;
  }

  return (
    pathname !== '/' 
    && <a 
          href={process.env.NEXT_PUBLIC_ADS_URL} 
          className="
            hidden md:block px-5 py-5 text-white text-lg leading-5 text-nowrap rounded-[18px] gradient-primary-100 hover:opacity-85 
            transition-all duration-300
          "
        >
          {text}
        </a>
  )
}