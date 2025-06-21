'use client';

import ButtonSwitch from "@/shared/ui/molecules/ButtonSwitch";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  text: string;
  paramKey: string;
  defaultLabel: string;
  label: string;
}

export default function FilterSwitch({ text, paramKey, label }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentValue = searchParams.get(paramKey);
  const [enabled, setEnabled] = useState(currentValue === "true");

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);

    const params = new URLSearchParams(searchParams.toString());

    if (newValue) {
      params.set(paramKey, "true");
    } else {
      params.delete(paramKey);
    }

    const newQuery = params.toString();
    const url = newQuery ? `?${newQuery}` : window.location.pathname;

    router.replace(url, { scroll: false });
  };

  useEffect(() => {
    const current = searchParams.get(paramKey);
    setEnabled(current === "true");
  }, [searchParams, paramKey]);

  return (
    <ButtonSwitch text={text} enabled={enabled} toggle={toggle} label={label} />
  );
}
