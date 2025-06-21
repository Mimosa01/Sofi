'use client';

import { usePagination } from "@/shared/hooks/usePaginated";
import Link from "next/link";

type Props = {
  totalPages: number;
};

export default function Pagination({ totalPages }: Props) {
  const { currentPage, createLink, pagesToShow } = usePagination(totalPages);

  return (
    <div className="flex gap-[3px] mx-auto mb-15 w-fit">
      {pagesToShow.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`dots-${index}`}
              className="px-[10px] py-[9px] text-lg text-neutral-400 select-none"
            >
              ...
            </span>
          );
        }

        const isActive = currentPage === page;
        return (
          <Link
            key={page}
            href={createLink(page)}
            className={`
              flex items-center justify-center
              py-[9px] px-[15px]
              w-10 h-10
              text-lg leading-5.5 rounded-[10px]
              ${isActive ? 'gradient-secondary' : 'hover:bg-neutral-200'}
              transition-all duration-300
            `}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
