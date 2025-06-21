import { useSearchParams } from "next/navigation";

export function usePagination(totalPages: number) {
  const searchParams = useSearchParams();
  const raw = searchParams.get('page');
  const currentPage = raw ? parseInt(raw, 10) : 1;

  const createLink = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', page.toString());
    }
    return `?${newParams.toString()}`;
  };

  const pagesToShow = (): (number | '...')[] => {
    const pages: (number | '...')[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(currentPage - 2);
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push(currentPage + 2);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return {
    currentPage,
    createLink,
    pagesToShow: pagesToShow(),
  };
}
