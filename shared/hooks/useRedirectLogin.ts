import useModalStore from "@/components/modal/store/modalStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useRedirectLogin () {
  const searchParams = useSearchParams();
  const { setType, toggleShow } = useModalStore((state) => state);
  useEffect(() => {
    const login = searchParams.get('login');
    searchParams.get('from');

    if (login === 'true') {
      setType('auth');
      toggleShow();

      const cleanedUrl = new URL(window.location.href);
      cleanedUrl.searchParams.delete('login');
      cleanedUrl.searchParams.delete('from');

      window.history.replaceState({}, '', cleanedUrl.toString());
    }
  }, [searchParams, setType]);
}